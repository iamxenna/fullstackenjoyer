import React, {FC, useContext} from 'react';
import {Button, Form} from "react-bootstrap";
import {IProps} from "../../../interfaces/Components.interfaces";
import {Context} from "../../../Context/ContextWrapper";
import Web3Service from "../../../Services/Web3Service";

interface PurchaseTokens extends IProps {
    tokenPrice: number;
}
export const PurchaseTokenForm: FC<PurchaseTokens> = ({address, tokenPrice}) => {

    const { purchaseTokens, allowance, userData, setUserAllowance } = useContext(Context);
    const purchaseTokenHandler = async (e: any) => {
        e.preventDefault();
        const { target } = e;
        await purchaseTokens(target[0].value, address, tokenPrice);
    }
    const approveUserHandler = async () => {
        const data = await Web3Service.approveUser(address, userData.role);
        if (data){
            const allow = await Web3Service.getAllowance(address, userData.role);
            setUserAllowance(allow);
        }
    }

    return (
        <Form onSubmit={purchaseTokenHandler} style={{maxWidth: '15rem', margin: '10px'}}>
            <h3 className={'text-center'}>Purchase tokens</h3>

            <Form.Group className="mb-3">
                <Form.Label>Enter token amounts</Form.Label>
                <Form.Control type="text"  />
            </Form.Group>

            {
                allowance === "0" ? (
                    <>
                        <Button onClick={approveUserHandler}>
                            Approve
                        </Button>
                    </>
                ) : (
                    <>
                        <Button type={'submit'}>
                            Submit
                        </Button>
                    </>
                )
            }
        </Form>
    );
};

export default PurchaseTokenForm;