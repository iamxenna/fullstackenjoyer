import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Container, Navbar, NavbarBrand} from "react-bootstrap";
import {Context} from "../../../Context/ContextWrapper";

export const Header = () => {

    const { userData, logOut } = useContext(Context);

    return (
        <Navbar className={'bg-dark'}>
            <Container>
                <NavbarBrand className={'text-light'}>Contract</NavbarBrand>
                <div>
                    <Link to={'/'}>Home</Link>
                    {
                        userData.login && userData.age && userData.role ?
                            (
                                <>
                                    <Link to={'/login'} onClick={logOut}>Logout</Link>
                                </>
                            ): (<>
                                    <Link to={'/registration'}>Sign up</Link>
                                    <Link to={'/login'}>Sign in</Link>
                                </>
                            )
                    }
                </div>
            </Container>
        </Navbar>
    );
};