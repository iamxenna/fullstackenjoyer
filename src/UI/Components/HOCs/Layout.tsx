import React, {FC, useEffect, useState} from 'react';
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import styles from './style.module.css';
import Web3Service from "../../../Services/Web3Service";

interface ILayout {
    children: React.ReactNode;
}
export const Layout: FC<ILayout> = ({children}) => {

    let [time, setTime] = useState<number>(0);
    const [phase, setPhase] = useState<number>(0);

    useEffect(() => {
        (async () => {
            await Web3Service.contractTime();
            let data = (await Web3Service.getContractTime());

            setInterval( async () => {
                setTime(data++)
                if (time >= 680 && time <= 1050 && phase !== 4){
                    setPhase(4);
                    const p = await Web3Service.setPhase(4);
                    console.log(p);
                }
            }, 1000)
            console.log(phase, time)
        })()
    }, [phase])

    return (
        <>
            <Header/>
                <div className={styles.wrapper}>
                    {time}
                    {children}
                </div>
            <Footer/>
        </>
    );
};