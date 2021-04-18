import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='mt-5 d-flex flex-column align-items-center justify-content-center'>
            <div className="row wrapper container">
                <div className="col-lg-6 text-left">
                    <h4 className="text-sub">
                        <FontAwesomeIcon size='3x' style={{ color: '#5c302f' }} icon={faMapMarkedAlt} /> address

                </h4>
                    <p>Shop no:- 17/A-4,</p>
                    <p>BRTC Shopping Complex (1st floor)</p>
                    <p>Station Road , Shathmatha,Bogura 5800,</p>
                    <p>Rajshahi Division</p>

                </div>
                <div className="col-lg-6">

                    <h4 className="text-brand">
                        connect with us
            </h4>
                    <div className="icons d-flex justify-content-center mt-4">
                        <div className="row col-lg-8">
                            <div className="col-md-4">
                                <Link to='#'><FontAwesomeIcon size='4x' style={{ color: '#518ded' }} icon={faFacebook} /></Link>
                            </div>
                            <div className="col-md-4">
                                <Link to='#'> <FontAwesomeIcon size='4x' style={{ color: 'tomato' }} icon={faInstagram} /></Link>
                            </div>
                            <div className="col-md-4">
                                <Link to='#'><FontAwesomeIcon size='4x' style={{ color: 'red' }} icon={faYoutube} /></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <p className='mt-5 text-muted'>copyright &copy; Event Fusion {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;