import React, {FC} from 'react';
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import styles from './style.module.css';

interface ILayout {
    children: React.ReactNode;
}
export const Layout: FC<ILayout> = ({children}) => {
    return (
        <>
            <Header/>
                <div className={styles.wrapper}>
                    {children}
                </div>
            <Footer/>
        </>
    );
};