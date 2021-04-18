import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { OrderContext } from '../../../App';
import ServiceCard from '../ServiceCard/ServiceCard';



const Services = ({ services }) => {
    const history = useHistory();
    const [orderItems, setOrderItems] = useContext(OrderContext);
    const handleBooking = id => {
        const [orderedItem] = services.filter(service => service._id === id)
        const newOrders = [orderedItem, ...orderItems]
        setOrderItems(newOrders)
        console.log(orderedItem);
        history.push('/dashboard/bookNow')

    }
    return (
        <section>
            <div className="service-container mt-5">
                <h2 className='text-brand'>Our Pakages</h2 >
            </div>

            <div className="card-holder mt-5 d-flex justify-content-center">
                <div className="row" style={{ width: '90rem' }} >
                    {
                        services.map(service => <ServiceCard handleBooking={handleBooking} service={service} />)
                    }
                </div>
            </div>

        </section>
    );
};

export default Services;