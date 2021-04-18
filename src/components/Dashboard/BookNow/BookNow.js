import React from 'react';
import { useContext } from 'react';
import { OrderContext } from '../../../App';
import PaymentIntregation from '../../PaymentIntregation/PaymentIntregation';
import Sidebar from '../../Shared/SideBar/Sidebar';
import BookingCard from '../BookingCard/BookingCard';


const BookNow = () => {
    const [orderItems, setOrderItems] = useContext(OrderContext);
    return (
        <div className='row  mr-0'>
            <div className="col-lg-3 col-md-12 col-sm-12">
                <Sidebar />
            </div>
            <div className="col-lg-9 mt-5">
                <h4 className='mb-4 mt-5 text-left text-brand rounded bg-light p-3'>Your selected Package</h4>
                <div className="d-flex justify-content-center">
                    {
                        orderItems.length ? <div className='row '>
                            {
                                orderItems.map(item => <BookingCard item={item} />)
                            }
                        </div> : <p className='text-secondary'>No package added yet</p>
                    }


                </div>
                <div className="payment-info">
                    <h4 className='mb-4 mt-5 text-left text-brand rounded bg-light p-3'>
                        Make Payment
                    </h4>
                    <PaymentIntregation />
                </div>
            </div>

        </div>
    );
};

export default BookNow;