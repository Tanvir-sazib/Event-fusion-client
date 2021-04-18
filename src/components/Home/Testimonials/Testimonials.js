import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewCarousel from '../ReviewCarousel/ReviewCarousel';
import './Testimonials.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get('https://event-fusion.herokuapp.com/reviews')
            .then(response => {
                setReviews(response.data);
            })
    }, [])
    return (
        <div className='testimonials-container'>
            <div>
                <h4 className="text-brand mt-5 pt-5">
                    Testimonials
            </h4>
            </div>
            <div className="testimonial-carousel-comtainer">

                <ReviewCarousel reviews={reviews} />

            </div>
        </div>
    );
};

export default Testimonials;