import React, {useContext, useState} from 'react';
import Web3Service from "../../Services/Web3Service";
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {Context} from "../../Context/ContextWrapper";

const Login = () => {

    const [address, setAddress] = useState<string>('');
    const navigation = useHistory();

    const { getUser } = useContext(Context);
    const loginHandler = async (e: any) => {
        e.preventDefault();
        const { target } = e;
        const data = await Web3Service.loginUser(target[0].value, target[1].value, target[2].value);
        console.log(data);
        if (data){
            navigation.push('/');
            getUser({address, ...data});
        }
    }

    return (
        <Form onSubmit={loginHandler} className={'m-auto mt-5'} style={{maxWidth: '15rem'}}>
            <h3 className={'text-center'}>Sign in</h3>
            <Form.Group className="mb-3">
                <Form.Label>Enter address</Form.Label>
                <Form.Control type="text" onChange={({target}) => setAddress(target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Enter login</Form.Label>
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
    )
};

export default Login;