import {ReactNode} from "react";

interface IValues {
    getUser(data: IUserData): void;
    userData: IUserData;
    logOut: () => void;
    getComments(id: number, address: string): void;
    commentData: [];
    purchaseTokens(amount: number, address: string, tokenPrice: number): Promise<void>;
    getRequestData(data: []): Promise<void>;
    requestData: [];
    timer: number;
    setTime(): Promise<void>;
    getBalance(): Promise<void>;
    localUserBalance: number;
    localTokenBalance: number;
    localTokenPrice: number;
    setUserAllowance(allowance: string): void;
    allowance: string;
    addContractTime(time: number, address: string): void;
    addedTime: number;
}

interface IUserData {
    address: string,
    login: string,
    age: number,
    role: string
}

interface ContextProps {
    children: ReactNode;
}

export type {
    IValues,
    ContextProps,
    IUserData,
}