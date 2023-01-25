import React, {useContext, useEffect} from 'react';
import {Context} from "../../Context/ContextWrapper";
import {useHistory} from "react-router-dom";
import {AddAdmin} from "../Components/AddAdmin/AddAdmin";
import {AddComment} from "../Components/AddComment/AddComment";
import {GetComments} from "../Components/GetComments/GetComments";
import {CommentsList} from "../Components/CommentsList/CommentsList";

const Home = () => {

    const { userData } = useContext(Context);
    const navigation = useHistory();

    useEffect(() => {
        (async () => {
            if (userData.login === '') {
                await navigation.push('/login');
            }
        })()
    }, [navigation, userData.login])

    return (
        <div>
            {
                userData.role === '0' ?
                (
                    <>
                        <h3 className={'text-center mt-5'}>Login: {userData.login} Age: {userData.age} Role: User</h3>
                        <div className={'mt-5 d-flex justify-content-center'} style={{width: '100%'}}>
                            <div className={'d-flex flex-wrap'} style={{maxWidth: '50rem'}}>
                                <AddComment address={userData.address} />
                                <GetComments address={userData.address} />
                                <CommentsList/>
                            </div>
                        </div>
                    </>
                ): undefined
            }
            {
                userData.role === '1' ?
                (
                    <>
                        <h3 className={'text-center mt-5'}>Login: {userData.login} Age: {userData.age} Role: Vendor</h3>
                        <div className={'mt-5 d-flex justify-content-center'} style={{width: '100%'}}>
                            <div className={'d-flex flex-wrap'} style={{maxWidth: '50rem'}}>
                                <AddComment address={userData.address} />
                                <GetComments address={userData.address} />
                                <CommentsList/>
                            </div>
                        </div>
                    </>
                ): undefined
            }
            {
                userData.role === '2' ?
                (
                    <>
                        <h3 className={'text-center mt-5'}>Login: {userData.login} Age: {userData.age} Role: Admin</h3>
                        <div className={'mt-5 d-flex justify-content-center'} style={{width: '100%'}}>
                            <div className={'d-flex flex-wrap'} style={{maxWidth: '50rem'}}>
                                <AddAdmin address={userData.address} />
                                <AddComment address={userData.address} />
                                <GetComments address={userData.address} />
                                <CommentsList/>
                            </div>
                        </div>
                    </>
                ): undefined
            }
        </div>
    );
};

export default Home;