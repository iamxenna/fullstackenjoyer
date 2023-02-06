import React, {FC} from 'react';
import {Badge, ListGroup} from "react-bootstrap";
import {IProps} from "../../../interfaces/Components.interfaces";

interface RequestsListProps extends IProps{
    id: number;
    tokensAmount: number;
    userAddress: string;
    status: string;
}

export const RequestsListComponent: FC<RequestsListProps> = (
    {
        tokensAmount,
        userAddress,
        status,
        id
    }) => {

    return (
        <ListGroup as="ol" numbered style={{width: '33rem'}}>
            <div>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start mb-1"
                >
                    <div className="ms-2 me-auto">
                        <h5>id: {id}</h5>
                        <div className="fw-bold">
                            {userAddress}
                            {
                                status === '1' ? (
                                    <h5>Waiting for approve</h5>
                                ) : undefined
                            }
                            {
                                status === '2' ? (
                                    <h5>Approved!</h5>
                                ) : undefined
                            }
                            {
                                status === '3' ? (
                                    <h5>Canceled</h5>
                                ) : undefined
                            }
                        </div>
                    </div>
                    <div className={'d-flex flex-column align-items-center justify-content-between'} style={{height: '100px'}}>
                        <Badge bg="primary" pill>
                            {tokensAmount}
                        </Badge>
                    </div>
                </ListGroup.Item>
            </div>
        </ListGroup>
    );
};
