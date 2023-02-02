import React, {FC, useContext} from 'react';
import {Button, Form} from "react-bootstrap";
import {IProps} from "../../../interfaces/Components.interfaces";
import {Context} from "../../../Context/ContextWrapper";

interface PurchaseTokens extends IProps {
    tokenPrice: number;
}
export const PurchaseTokenForm: FC<PurchaseTokens> = ({address, tokenPrice}) => {

    const { purchaseTokens } = useContext(Context);
    const purchaseTokenHandler = async (e: any) => {
        e.preventDefault();
        const { target } = e;
        await purchaseTokens(target[0].value, address, tokenPrice);
    }

    return (
        <Form onSubmit={purchaseTokenHandler} style={{maxWidth: '15rem', margin: '10px'}}>
            <h3 className={'text-center'}>Purchase tokens</h3>

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

export default PurchaseTokenForm;