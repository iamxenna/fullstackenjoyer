import React, {FC, useContext, useEffect, useState} from 'react';
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import styles from './style.module.css';
import Web3Service from "../../../Services/Web3Service";
import {Context} from "../../../Context/ContextWrapper";

interface ILayout {
    children: React.ReactNode;
}
export const Layout: FC<ILayout> = ({children}) => {

    const [localTimer, setLocalTimer] = useState<number>(0);
    const [phase, setPhase] = useState<number>(2);
    const [count, setCount] = useState<number>(0);

    const { getBalance, addedTime } = useContext(Context);

    useEffect(() => {
        (async () => {

            if (count === 0) {
                await Web3Service.contractTime();
                let data = await Web3Service.getContractTime();
                setInterval( () => {
                    setLocalTimer(data++);
                }, 1000)
                setCount(1);
            }

            if (localTimer >= 180 && localTimer < 360 && phase !== 3) {
                setPhase(3);
                await Web3Service.setPhase(3);
                await getBalance();

            } else if (localTimer >= 360 && localTimer < 540 && phase !== 4) {
                setPhase(4);
                await Web3Service.setPhase(4);
                await getBalance();
            }
        })()
    }, [addedTime, localTimer, phase])

    return (
        <>
            <Header/>
                <div className={styles.wrapper}>
                    <h1 className={'text-center mt-5'}>Phase: {phase}</h1>
                    <h1 className={'text-center'}>Timer: {localTimer}</h1>
                    {children}
                </div>
            <Footer/>
        </>
    );
};