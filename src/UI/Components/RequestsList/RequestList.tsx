import React, {FC, useContext, useEffect, useState} from 'react';
import {Context} from "../../../Context/ContextWrapper";
import {Button, ListGroup} from "react-bootstrap";
import Web3Service from "../../../Services/Web3Service";
import {IProps} from "../../../interfaces/Components.interfaces";
import {RequestsListComponent} from "../RequestsListComponent/RequestsListComponent";

interface ApproveRequest extends IProps {
    tokenPrice: number;
}
export const RequestList: FC<ApproveRequest> = ({address, tokenPrice}) => {

    const [localAllowance, setLocalAllowance] = useState<string>('');

    const {
        requestData,
        userData,
    } = useContext(Context);

    const [localRequest, setLocalRequest] = useState<[]>([]);

    useEffect(() => {
        setLocalRequest(requestData);
    },[requestData])

    const approveRequestHandler = async (amount: number, userAddress: string, id: number) => {
        const data = await Web3Service.approveRequest(amount, userAddress, tokenPrice, address, id);
        console.log(data)
    }

    const approveUserHandler = async (userAddress: string) => {
        const data = await Web3Service.approveUser(userAddress, userData.role);
        console.log(data)
        if (data){
            const allow = await Web3Service.getAllowance(userAddress, userData.role);
            setLocalAllowance(allow);
        }
    }

    const cancelRequestHandler = async (userAddress: string, id: number) => {
        const data = await Web3Service.cancelRequest(userAddress, id, address);
        console.log(data);
    }

    return (
        <ListGroup as="ol" numbered style={{width: '33rem', margin: '10px'}}>
            {localRequest.map(({tokensAmount, userAddress, status}, idx) => (
                <div key={idx} className={'mb-3'}>
                    <RequestsListComponent
                        id={idx}
                        tokensAmount={tokensAmount}
                        userAddress={userAddress}
                        address={address}
                        status={status}
                    />
                    {
                        status !== "1" ? (
                            <>
                                {
                                    localAllowance === "0" ? (
                                        <>
                                            <Button
                                                disabled={true}
                                                onClick={() => approveUserHandler(address)}
                                            >
                                                Approve
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button
                                                disabled={true}
                                                onClick={() => approveRequestHandler(tokensAmount, userAddress, idx)}
                                            >
                                                Submit
                                            </Button>
                                        </>
                                    )
                                }
                                <Button
                                    className={'m-2'}
                                    disabled={true}
                                    onClick={() => cancelRequestHandler(userAddress, idx)}
                                >
                                    Cancel
                                </Button>
                            </>
                        ) : (
                            <>
                                {
                                    localAllowance === "0" ? (
                                        <>
                                            <Button
                                                disabled={false}
                                                onClick={() => approveUserHandler(userAddress)}
                                            >
                                                Approve
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button
                                                disabled={false}
                                                onClick={() => approveRequestHandler(tokensAmount, userAddress, idx)}
                                            >
                                                Submit
                                            </Button>
                                        </>
                                    )
                                }
                                <Button
                                    className={'m-2'}
                                    disabled={false}
                                    onClick={() => cancelRequestHandler(userAddress, idx)}
                                >
                                    Cancel
                                </Button>
                            </>
                        )
                    }
                </div>
            ))}
        </ListGroup>
    );
};
