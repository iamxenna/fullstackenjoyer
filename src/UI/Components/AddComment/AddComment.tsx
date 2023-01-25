import React, {FC} from 'react';
import Web3Service from "../../../Services/Web3Service";
import {Button, Form} from "react-bootstrap";
import {IProps} from "../Components.interfaces";

export const AddComment: FC<IProps> = ({address}) => {
    const addCommentHandler = async (e: any) => {
        e.preventDefault();
        const { target } = e;
        const data = await Web3Service.addComment(target[0].value, target[1].value, target[2].value, address);
        console.log(data);
    }

    return (
        <Form onSubmit={addCommentHandler} style={{maxWidth: '15rem', margin: "10px"}}>
            <h3 className={'text-center'}>Add Comment</h3>

            <Form.Group className="mb-3">
                <Form.Label>Enter shop id</Form.Label>
                <Form.Control type="text"  />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Enter review</Form.Label>
                <Form.Control type="text"  />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Enter mark</Form.Label>
                <Form.Control type="text"  />
            </Form.Group>

            <Button type={'submit'}>
                Submit
            </Button>
        </Form>
    );
};