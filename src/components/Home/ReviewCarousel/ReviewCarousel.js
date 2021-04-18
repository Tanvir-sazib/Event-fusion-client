import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import './ReviewCarousel.css'

const ReviewCarousel = ({ reviews }) => {
    return (
        <div className='d-flex justify-content-center align-items-center review-holder' >
            <Carousel className='d-flex justify-content-center align-items-center' style={{ width: '75%', minHeight: '20rem' }}>


                {
                    reviews.map(review => {
                        return (
                            <Carousel.Item  >
                                <Card className='review-card border-0'>
                                    <Card.Body>

                                        <Card.Text>
                                            "{review.description}"
                                        </Card.Text>
                                        <Card.Title>{review.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{review.company}</Card.Subtitle>

                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        )
                    })
                }



            </Carousel>
        </div>
    );
};

export default ReviewCarousel;