import React, {FC} from 'react';
import {Button, Form} from "react-bootstrap";
import Web3Service from "../../../Services/Web3Service";
import {IProps} from "../../../interfaces/Components.interfaces";

export const CreateRequestForm: FC<IProps> = ({address}) => {

    const purchaseTokenHandler = async (e: any) => {
        e.preventDefault();
        const { target } = e;
        await Web3Service.createRequest(target[0].value, address);
    }

    return (
        <Form onSubmit={purchaseTokenHandler} style={{maxWidth: '15rem', margin: '10px'}}>
            <h3 className={'text-center'}>Create request</h3>

            <Form.Group className="mb-3">
                <Form.Label>Enter token amounts</Form.Label>
                <Form.Control type="text"  />
            </Form.Group>

            <Button type={'submit'}>
                Submit
            </Button>
        </Form>
    );
};
