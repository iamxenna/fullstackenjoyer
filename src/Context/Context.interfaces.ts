import {ReactNode} from "react";

interface IValues {
    getUser(data: IUserData): void;
    userData: IUserData;
    logOut: () => void;
    getComments(id: number, address: string): void;
    commentData: [];
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