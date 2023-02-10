import React, {FC, useContext} from 'react';
import {Button, Form} from "react-bootstrap";
import {IProps} from "../../../interfaces/Components.interfaces";
import {Context} from "../../../Context/ContextWrapper";

export const AddTimeForm: FC<IProps> = ({address}) => {

    const { addContractTime } = useContext(Context);
    const addAdminHandler = async (e: any) => {
        e.preventDefault();
        const { target } = e;
        await addContractTime(target[0].value, address)
    }

    return (
        <Form onSubmit={addAdminHandler} style={{maxWidth: '15rem', margin: '10px'}}>
            <h3 className={'text-center'}>Добавить время</h3>
            <Form.Group className="mb-3">
                <Form.Label>Количество времени</Form.Label>
                <Form.Control type="text"  />
            </Form.Group>

            <Button type={'submit'}>
                Submit
            </Button>
        </Form>
    )
};