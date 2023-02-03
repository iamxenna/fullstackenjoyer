import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../Context/ContextWrapper";
import {Badge, Button, ListGroup} from "react-bootstrap";

export const RequestList = () => {

    const { requestData } = useContext(Context);

    const [localRequest, setLocalRequest] = useState<[]>([])

    useEffect(() => {
        setLocalRequest(requestData);
    },[requestData])

    return (
        <ListGroup as="ol" numbered style={{width: '30rem', margin: '10px'}}>
            {localRequest.map(({tokensAmount, userAddress, status}) => (
                <>
                    <ListGroup.Item
                        key={userAddress}
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{userAddress}</div>
                            {status}
                        </div>
                        <Badge bg="primary" pill>
                            {tokensAmount}
                        </Badge>
                    </ListGroup.Item>
                    <Button>
                        Accept
                    </Button>
                </>
            ))}
        </ListGroup>
    );
};
