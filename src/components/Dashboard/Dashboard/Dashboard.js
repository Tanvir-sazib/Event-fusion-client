import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext, UserToken } from '../../../App';
import Sidebar from '../../Shared/SideBar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userToken, setuserToken] = useContext(UserToken);
    const [isAdmin, setIsAdmin] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:5000/isAdmin', { email: loggedInUser.email || userToken.email })
            .then(response => {
                if (response) {
                    setIsAdmin(response.data);

                }
                else {

                }
            })

    }, [loggedInUser.email, userToken.email])
    return (
        <section>
            <div className="row">
                <div className="col-lg-3">
                    <Sidebar isAdmin={isAdmin} />
                </div>
                <div className="col-lg-9">
                    <h1>Welcome to Dashboard</h1>
                </div>
            </div>

        </section>
    );
};

export default Dashboard;