import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../../Context/ContextWrapper";
import {useHistory} from "react-router-dom";
import {AddAdmin} from "../Components/AddAdmin/AddAdmin";
import {AddComment} from "../Components/AddComment/AddComment";
import {GetComments} from "../Components/GetComments/GetComments";
import {CommentsList} from "../Components/CommentsList/CommentsList";
import PurchaseTokenForm from "../Components/PurchaseTokenForm/PurchaseTokenForm";
import {CreateRequestForm} from "../Components/CreateRequestForm/CreateRequestForm";
import {GetRequestsForm} from "../Components/GetRequestsForm/GetRequestsForm";
import {RequestList} from "../Components/RequestsList/RequestList";
import {Button} from "react-bootstrap";

const Home = () => {

    const {
        userData,
        localUserBalance,
        localTokenBalance,
        localTokenPrice,
        getBalance,
    } = useContext(Context);

    const navigation = useHistory();

    const [tokenBalance, setTokenBalance] = useState<number>(0);
    const [userBalance, setUserBalance] = useState<number>(0);
    const [tokenPrice, setTokenPrice] = useState<number>(0);

    useEffect(() => {
        (async () => {
            if (userData.login === '') {
                await navigation.push('/login');
            }
            setTokenBalance(localTokenBalance);
            setUserBalance(localUserBalance);
            setTokenPrice(localTokenPrice);
        })()
    }, [localTokenBalance, localTokenPrice, localUserBalance])

    const getLocalBalance = async () => {
        await getBalance();
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
                                localTokenPrice === 0 && localUserBalance === 0 && localTokenBalance === 0 ? (
                                    <>
                                        <Button onClick={getLocalBalance}>
                                            Get balance
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <>
                                            <h3>Token Balance: {tokenBalance / (10 ** 18)} CMT</h3>
                                            <h3>User Balance: {userBalance / (10 ** 18)} ETH</h3>
                                            <h3>Token Price: {tokenPrice / (10 ** 18)} ETH</h3>
                                        </>
                                    </>
                                )
                            }
                        </div>
                        <div className={'mt-5 d-flex justify-content-center'} style={{width: '100%'}}>
                            <div className={'d-flex flex-wrap'} style={{maxWidth: '70rem'}}>
                                <AddComment address={userData.address} />
                                <GetComments address={userData.address} />
                                <CommentsList/>
                                <PurchaseTokenForm tokenPrice={tokenPrice} address={userData.address} />
                                <CreateRequestForm address={userData.address} />
                            </div>
                        </div>
                    </>
                ): undefined
            }
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
                            {
                                localTokenPrice === 0 && localUserBalance === 0 && localTokenBalance === 0 ? (
                                    <>
                                        <Button onClick={getLocalBalance}>
                                            Get balance
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <>
                                            <h3>Token Balance: {tokenBalance / (10 ** 18)} CMT</h3>
                                            <h3>User Balance: {userBalance / (10 ** 18)} ETH</h3>
                                            <h3>Token Price: {tokenPrice / (10 ** 18)} ETH</h3>
                                        </>
                                    </>
                                )
                            }
                        </div>
                        <div className={'mt-5 d-flex justify-content-center'} style={{width: '100%'}}>
                            <div className={'d-flex flex-wrap'} style={{maxWidth: '75rem'}}>
                                <AddAdmin address={userData.address} />
                                <AddComment address={userData.address} />
                                <GetComments address={userData.address} />
                                <PurchaseTokenForm tokenPrice={tokenPrice} address={userData.address}/>
                                <GetRequestsForm address={userData.address} />
                                <CommentsList/>
                                <RequestList address={userData.address} tokenPrice={tokenPrice} />
                            </div>
                        </div>
                    </>
                ): undefined
            }
        </div>
    );
};

export default Home;