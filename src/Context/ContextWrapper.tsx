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
    const [requestData, setRequestData] = useState<[]>([]);
    const [timer, setTimer] = useState<number>(0);
    const [localUserBalance, setLocalUserBalance] = useState<number>(0);
    const [localTokenBalance, setLocalTokenBalance] = useState<number>(0);
    const [localTokenPrice, setLocalTokenPrice] = useState<number>(0);
    const [allowance, setAllowance] = useState<string>('');

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

    const getRequestData = async (data: []) => {
        setRequestData(data);
    }

    const purchaseTokens = async (amount: number, address: string, tokenPrice: number) => {
        await Web3Service.purchaseTokens(amount, address, tokenPrice);
        await getBalance();
    }

    const setTime = async () => {
        await Web3Service.getTime(userData.address);
        const data = await Web3Service.setTime();
        console.log(data);
        setTimer(data);
    }

    const getBalance = async () => {
        setLocalTokenBalance(await Web3Service.balanceOf(userData.address));
        setLocalUserBalance(await Web3Service.getUserBalance(userData.address));
        setLocalTokenPrice(await Web3Service.getTokenPrice());
    }

    const setUserAllowance = (allowance: string) => {
        setAllowance(allowance);
        console.log(allowance)
    }

    const values = {
        getUser,
        userData,
        logOut,
        getComments,
        commentData,
        purchaseTokens,
        getRequestData,
        requestData,
        timer,
        setTime,
        getBalance,
        localUserBalance,
        localTokenBalance,
        localTokenPrice,
        setUserAllowance,
        allowance
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    );
};