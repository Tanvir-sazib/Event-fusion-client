import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import HomeMain from '../HomeMain/HomeMain';
import Message from '../Message/Message';
import MidBanner from '../MidBanner/MidBanner';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import { UserToken } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import OurWork from '../OurWork/OurWork';

const Home = () => {
    const [services, setServices] = useState([])
    const [userToken, setuserToken] = useContext(UserToken);


    useEffect(() => {
        axios.get('https://event-fusion.herokuapp.com/services')
            .then(response => {
                setServices(response.data);
            })

    }, [])
    return (
        <div>
            <HomeMain />
            <Services services={services} />
            <MidBanner />
            <OurWork />
            <Testimonials />
            <Message />
            <Footer />
        </div>
    );
};

export default Home;