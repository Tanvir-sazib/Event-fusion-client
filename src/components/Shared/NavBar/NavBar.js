import React, { useContext, useEffect, useState } from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext, UserToken } from '../../../App';
import logo from '../../../image/Event Fusion logo.png'
import './NavBar.css'
import 'firebase/auth'
import firebase from 'firebase/app'




const NavBar = () => {

    const [userToken, setuserToken] = useContext(UserToken);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(userToken);
    const handleLogOut = () => {
        firebase.auth().signOut().then(() => {
            setLoggedInUser([]);
        }).catch((error) => {
            // An error happened.
        });
        sessionStorage.removeItem('token');
        setuserToken({});
    }




    return (
        <div className='px-lg-5'>
            <Navbar className="w-100 nav-holder " expand="lg">
                <Navbar.Brand> <Link to='/'> <div className="logo d-flex justify-content-start"><img className='p-2 w-75' src={logo} alt="" /></div> </Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav " className='bg-light' />
                <Navbar.Collapse id="basic-navbar-nav " className=''>
                    <Nav className="ml-auto link-item bg-brand d-flex align-items-center">
                        <Link className="link mx-lg-4" to="/">Home</Link>
                        <Link className="link mx-lg-4" to="/dashboard/bookNow">Booking</Link>
                        <Link className="link mx-lg-4" to="/dashboard">Dashboard</Link>

                        <Link className="link mx-lg-4" to="#"> Contact Us</Link>
                        {/* <button className='login-btn'>{loggedInUser.name ? loggedInUser.name : <Link to="/login">Login</Link>}</button> */}

                        {
                            (loggedInUser.name || userToken.name) ? <button onClick={handleLogOut} className='login-btn'>Log Out ( {userToken.name || loggedInUser.name} )</button> : <button className='login-btn'><Link to="/login">Login</Link></button>
                        }


                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;

