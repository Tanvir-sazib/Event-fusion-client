import React from 'react';
import { Card } from 'react-bootstrap';

const BookingCard = ({ item }) => {
    console.log(item);
    return (
        <div className="col-md-6 d-flex justify-content-center">
            <Card className='m-3' style={{ width: '22rem' }}>
                <Card.Img variant="top" src={item.data.imgURL} />
                <Card.Body>
                    <Card.Title>{item.data.packageName}</Card.Title>
                    <Card.Text>
                        {item.data.price}/-
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    );
};

export default BookingCard;