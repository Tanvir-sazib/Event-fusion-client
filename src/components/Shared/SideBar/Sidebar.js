import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext, UserToken } from '../../../App';
import logo from '../../../image/Event Fusion logo.png'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faThLarge, faThList, faUserPlus, faPlus, faAlignRight } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userToken, setuserToken] = useContext(UserToken);
    const [loading, setLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState([]);
    useEffect(() => {
        axios.post('https://event-fusion.herokuapp.com/isAdmin', { email: loggedInUser.email || userToken.email })
            .then(response => {
                if (response.data) {
                    setIsAdmin(response.data);
                    setLoading(false)
                }
                else {

                }
            })
        setLoading(false);
    }, [loggedInUser.email, userToken.email])
    return (
        <div className=' d-lg-block text-left sidebar px-5 d-md-flex'>
            <div className="logo">
                <Link to='/'> <div className="logo d-flex justify-content-start"><img className='p-2 w-75' src={logo} alt="" /></div> </Link>
            </div>
            {
                loading ? <div className='d-flex justify-content-center align-items-center m-5'><Spinner animation="border" variant="primary" /></div> : <div>
                    {
                        isAdmin.length ? <div className="admin-panel">
                            <Link className="link mx-lg-4" to="/dashboard/orders"><h5><FontAwesomeIcon size='1x' icon={faThLarge} /> Order list</h5></Link>
                            <Link className="link mx-lg-4" to="/dashboard/addService"><h5><FontAwesomeIcon size='1x' icon={faPlus} /> Add Package</h5></Link>
                            <Link className="link mx-lg-4" to="/dashboard/addAdmin"><h5><FontAwesomeIcon size='1x' icon={faUserPlus} /> Make Admin</h5></Link>
                            <Link className="link mx-lg-4" to="#"><h5><FontAwesomeIcon size='1x' icon={faPlus} /> Manage Service</h5></Link>
                        </div> : <div className="user-panel">
                            <Link className="link mx-lg-4" to="/dashboard/bookNow"><h5><FontAwesomeIcon size='1x' icon={faPlus} /> Book Now</h5></Link>
                            <Link className="link mx-lg-4" to="/dashboard/orders"><h5><FontAwesomeIcon size='1x' icon={faThList} /> Booking List</h5></Link>
                            <Link className="link mx-lg-4" to="/dashboard/reviews"><h5><FontAwesomeIcon size='1x' icon={faAlignRight} /> Review</h5></Link>

                        </div>
                    }
                </div>
            }


        </div>
    );
};

export default Sidebar;