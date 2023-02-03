import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../Context/ContextWrapper";
import {useHistory} from "react-router-dom";
import {AddAdmin} from "../Components/AddAdmin/AddAdmin";
import {AddComment} from "../Components/AddComment/AddComment";
import {GetComments} from "../Components/GetComments/GetComments";
import {CommentsList} from "../Components/CommentsList/CommentsList";
import Web3Service from "../../Services/Web3Service";
import PurchaseTokenForm from "../Components/PurchaseTokenForm/PurchaseTokenForm";
import {Button} from "react-bootstrap";
import {CreateRequestForm} from "../Components/CreateRequestForm/CreateRequestForm";
import {GetRequestsForm} from "../Components/GetRequestsForm/GetRequestsForm";
import {RequestList} from "../Components/RequestsList/RequestList";

const Home = () => {

    const { userData } = useContext(Context);
    const navigation = useHistory();

    const [tokenBalance, setTokenBalance] = useState<number>(0);
    const [userBalance, setUserBalance] = useState<number>(0);
    const [tokenPrice, setTokenPrice] = useState<number>(0);
    const [isShowed, setIsShowed] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            if (userData.login === '') {
                await navigation.push('/login');
            }
        })()
    }, [])

    const getBalanceHandler = async () => {
        setTokenBalance(await Web3Service.balanceOf(userData.address));
        setUserBalance(await Web3Service.getUserBalance(userData.address));
        setTokenPrice(await Web3Service.getTokenPrice());
        setIsShowed(true);
    }

    return (
        <div>
            {
                userData.role === '0' ?
                (
                    <>
                        <div className={'text-center mt-5'}>
                            <h3>
                                Login: {userData.login} |
                                Age: {userData.age} |
                                Role: User
                            </h3>
                            {
                                isShowed ? (
                                    <>
                                        <h3>Token Balance: {tokenBalance / (10 ** 18)} CMT</h3>
                                        <h3>User Balance: {userBalance / (10 ** 18)} ETH</h3>
                                        <h3>Token Price: {tokenPrice / (10 ** 18)} ETH</h3>
                                    </>
                                ) : undefined
                            }
                            <Button onClick={getBalanceHandler} className={'me-3'}>
                                Get balance
                            </Button>
                            <Button onClick={() => setIsShowed(false)}>
                                Hide balance
                            </Button>
                        </div>
                        <div className={'mt-5 d-flex justify-content-center'} style={{width: '100%'}}>
                            <div className={'d-flex flex-wrap'} style={{maxWidth: '50rem'}}>
                                <AddComment address={userData.address} />
                                <GetComments address={userData.address} />
                                <CommentsList/>
                                <PurchaseTokenForm tokenPrice={tokenPrice} address={userData.address} />
                                <CreateRequestForm address={userData.address} />
                            </div>
                        </div>
                    </>
                ): undefined
            },
            {
                userData.role === '2' ?
                (
                    <>
                        <div className={'text-center mt-5'}>
                            <h3>
                                Login: {userData.login} |
                                Age: {userData.age} |
                                Role: Admin
                            </h3>
                            <h3>Token Balance: {tokenBalance / (10 ** 18)} CMT</h3>
                            <h3>User Balance: {userBalance / (10 ** 18)} ETH</h3>
                            <h3>Token Price: {tokenPrice / (10 ** 18)} ETH</h3>
                            <Button onClick={getBalanceHandler}>
                                Get balance
                            </Button>
                        </div>
                        <div className={'mt-5 d-flex justify-content-center'} style={{width: '100%'}}>
                            <div className={'d-flex flex-wrap'} style={{maxWidth: '50rem'}}>
                                <AddAdmin address={userData.address} />
                                <AddComment address={userData.address} />
                                <GetComments address={userData.address} />
                                <CommentsList/>
                                <PurchaseTokenForm tokenPrice={tokenPrice} address={userData.address}/>
                                <GetRequestsForm address={userData.address} />
                                <RequestList />
                            </div>
                        </div>
                    </>
                ): undefined
            }
        </div>
    );
};

export default Home;