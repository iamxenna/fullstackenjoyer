import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../Context/ContextWrapper";

export const Timer = () => {

    const { timer, setTime } = useContext(Context);

    const [localTimer, setLocalTimer] = useState<number>(timer);

    useEffect(() => {
        setInterval(async () => {
            await setTime()
            setLocalTimer(timer);
        }, 1000)
    }, [])

    return (
        <div>
            <h1>{localTimer}</h1>
        </div>
    );
};