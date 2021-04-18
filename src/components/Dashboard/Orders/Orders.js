import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { UserContext, UserToken } from '../../../App';
import Sidebar from '../../Shared/SideBar/Sidebar';

const Orders = () => {
    const [userToken, setuserToken] = useContext(UserToken);
    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        const email = userToken.email || loggedInUser.email;
        axios.post('https://event-fusion.herokuapp.com/orders', { email })
            .then(response => {
                setBookings(response.data);
                setLoading(false);
            })
    }, [])
    return (
        <div>
            <div className='row  d-flex mr-0'>
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <Sidebar />
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12">
                    <h3 className='mb-4 mt-5 text-left text-brand rounded bg-light p-3'>Orders</h3>
                    <div className="row text-center manage-list-top mt-5 mx-0">
                        <div className="col-2">
                            <strong>
                                Name
                        </strong>
                        </div>
                        <div className="col-2 sm-hide">
                            <strong>
                                email
                        </strong>
                        </div>
                        <div className="col-2">
                            <strong>
                                Package Name
                        </strong>
                        </div>
                        <div className="col-2">
                            <strong>
                                Price
                        </strong>
                        </div>
                        <div className="col-2">
                            <strong>
                                Status
                        </strong>
                        </div>
                    </div>
                    {
                        loading ? <div className='d-flex justify-content-center align-items-center m-5'><Spinner animation="border" variant="primary" /></div> : bookings.map(booking => {
                            return (
                                <div className="row text-center bg-white manage-list-top m-0">
                                    <div className="col-2">
                                        <strong>
                                            {booking.name}
                                        </strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>
                                            {booking.email}
                                        </strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>
                                            {booking.item[0].data.packageName}
                                        </strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>
                                            {booking.item[0].data.price}/-
                                        </strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>
                                            <button className='btn btn-success m-1'>{booking.workStatus}</button>

                                        </strong>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    );
};

export default Orders;