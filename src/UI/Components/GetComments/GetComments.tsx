import React, {FC, useContext} from 'react';
import {Button, Form} from "react-bootstrap";
import {IProps} from "../Components.interfaces";
import {Context} from "../../../Context/ContextWrapper";

export const GetComments: FC<IProps> = ({address}) => {

    const { getComments } = useContext(Context);
    const getCommentHandler = async (e: any) => {
        e.preventDefault();
        const { target } = e;
        getComments(target[0].value, address);
    }

    return (
        <Form onSubmit={getCommentHandler} style={{maxWidth: '15rem', margin: '10px'}}>
            <h3 className={'text-center'}>Get Comments</h3>

            <Form.Group className="mb-3">
                <Form.Label>Enter shop id</Form.Label>
                <Form.Control type="text"  />
            </Form.Group>

            <Button type={'submit'}>
                Submit
            </Button>
        </Form>
    );
};