import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import logo from '../../image/Event Fusion logo.png'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './firebase.config'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserContext, UserToken } from '../../App';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userToken, setuserToken] = useContext(UserToken);
    const [error, setError] = useState('')

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const handleOnClick = () => {

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                const { photoURl, displayName, email } = user;
                const signInUser = {
                    name: displayName,
                    email: email,
                    image: photoURl
                }
                sessionStorage.removeItem('token');
                setLoggedInUser(signInUser);
                storeToken();

                history.replace(from);


            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const storeToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken);

            // ...
        }).catch(function (error) {
            // Handle error
        });
    }


    // }



    return (
        <div className='login-box'>

            <div className="login-card">
                <div className=" login-container d-flex justify-content-center flex-column align-items-center">
                    <div className="login-logo mb-5">
                        <Link to='/'><img className='login-img' src={logo} alt="logo" /></Link>
                    </div>
                    <div className="login">
                        <button onClick={handleOnClick} className='btn-brand py-3 px-5'><FontAwesomeIcon size='1x' style={{ color: 'tomato' }} icon={faGoogle} /> Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;