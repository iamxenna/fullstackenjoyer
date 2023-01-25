import React from 'react';
import {Button, Form} from "react-bootstrap";
import Web3Service from "../../Services/Web3Service";

const Registration = () => {

    const registerHandler = async (e: any) => {
        e.preventDefault();
        const { target } = e;
        const data = await Web3Service.registerUser(target[0].value, target[1].value, target[3].value, target[2].value);
        console.log(data);
    }

    return (
        <Form onSubmit={registerHandler} className={'m-auto mt-5'} style={{maxWidth: '15rem'}}>
            <h3 className={'text-center'}>Sign up</h3>
            <Form.Group className="mb-3">
                <Form.Label>Enter address</Form.Label>
                <Form.Control type="text"  />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Enter login</Form.Label>
                <Form.Control type="text"  />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Enter your age</Form.Label>
                <Form.Control type="text"  />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Enter password</Form.Label>
                <Form.Control type="password"  />
            </Form.Group>

            <Button type={'submit'}>
                Submit
            </Button>
        </Form>
    );
};

export default Registration;