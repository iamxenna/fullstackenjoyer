import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../Context/ContextWrapper";
import Web3Service from "../../../Services/Web3Service";

export const Timer = () => {

    let { contractTimer } = useContext(Context);

    const [localTimer, setLocalTimer] = useState<number>(contractTimer);
    const [phase, setPhase] = useState<number>(2);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        (async () => {
            let timer: number = contractTimer;

            if (count === 0) {
                setInterval( () => {
                    setLocalTimer(timer++);
                }, 1000)
                setCount(1);
            }

            if (localTimer >= 2950 && localTimer <= 3000 && phase !== 3){
                setPhase(3);
                console.log(phase)
                const p = await Web3Service.setPhase(3);
                console.log(p);
            }
        })()
    }, [localTimer, phase])

    return (
        <>
            <h1>{count}</h1>
            <h1>{phase}</h1>
            <h1>{localTimer}</h1>
        </>
    );
};