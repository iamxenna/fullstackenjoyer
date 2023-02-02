import React, { createContext, FC, useState } from "react";
import { ContextProps, IUserData, IValues } from "./Context.interfaces";
import Web3Service from "../Services/Web3Service";

export const Context = createContext({} as IValues);

export const ContextWrapper: FC<ContextProps> = ({children}) => {

    const initialUserData = {
        address: '',
        login: '',
        age: 0,
        role: ''
    }

    const [userData, setUserData] = useState(initialUserData);
    const [commentData, setCommentData] = useState<[]>([]);

    const getUser = (data: IUserData) => {
        setUserData(data);
    }

    const logOut = () => {
        setUserData(initialUserData);
    }

    const getComments = async (id: number, address: string) => {
        const data = await Web3Service.getComments(id, address);
        setCommentData(data);

    }

    const purchaseTokens = async (amount: number, address: string, tokenPrice: number) => {
        const data = await Web3Service.purchaseTokens(amount, address, tokenPrice);
        console.log(data);
    }

    const values = {
        getUser,
        userData,
        logOut,
        getComments,
        commentData,
        purchaseTokens
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    );
};