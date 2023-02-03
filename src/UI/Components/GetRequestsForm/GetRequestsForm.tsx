import React, {FC, useContext} from 'react';
import Web3Service from "../../../Services/Web3Service";
import {Button, Form} from "react-bootstrap";
import {IProps} from "../../../interfaces/Components.interfaces";
import {Context} from "../../../Context/ContextWrapper";

export const GetRequestsForm: FC<IProps> = ({address}) => {

    const { getRequestData } = useContext(Context);
    const getRequestsHandler = async (e: any) => {
        e.preventDefault();
        const { target } = e;
        const data = await Web3Service.getRequests(target[0].value, address);
        await getRequestData(data);
    }

    return (
        <Form onSubmit={getRequestsHandler} style={{maxWidth: '15rem', margin: '10px'}}>
            <h3 className={'text-center'}>Get Requests</h3>

            <Form.Group className="mb-3">
                <Form.Label>Enter user address</Form.Label>
                <Form.Control type="text" />
            </Form.Group>

            <Button type={'submit'}>
                Submit
            </Button>
        </Form>
    );
};