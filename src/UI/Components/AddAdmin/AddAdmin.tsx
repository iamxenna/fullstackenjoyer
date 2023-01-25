import React, {FC} from 'react';
import Web3Service from "../../../Services/Web3Service";
import {Button, Form} from "react-bootstrap";
import {IProps} from "../Components.interfaces";

export const AddAdmin: FC<IProps> = ({address}) => {
    const addAdminHandler = async (e: any) => {
        e.preventDefault();
        const { target } = e;
        const data = await Web3Service.addAdmin(target[0].value, address);
        console.log(data);
    }

    return (
        <Form onSubmit={addAdminHandler} style={{maxWidth: '15rem', margin: '10px'}}>
            <h3 className={'text-center'}>Add Admin</h3>
            <Form.Group className="mb-3">
                <Form.Label>Enter address</Form.Label>
                <Form.Control type="text"  />
            </Form.Group>

            <Button type={'submit'}>
                Submit
            </Button>
        </Form>
    )
};