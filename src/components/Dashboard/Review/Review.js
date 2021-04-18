import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Shared/SideBar/Sidebar';

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {

        axios.post("https://event-fusion.herokuapp.com/addReview", data)
            .then(response => {
                if (response) {
                    e.target.reset();
                }
            })
    }
    return (
        <div className='row mr-0'>
            <div className="col-lg-3 col-md-12 col-sm-12">
                <Sidebar />
            </div>

            <div className="col-lg-9 col-md-12 col-sm-12">
                <div className="head-text mt-5">
                    <h4 className='mb-4 mt-5 text-left text-sub rounded bg-light p-3'>We Care for you, <span className='text-brand'>Write something for us</span></h4>

                </div>
                <div className="review-form text-left">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name" >Your Name:
                        <input type="text" className='form-control' name='name' ref={register} /></label> <br />

                        <label htmlFor="company">Company/ Designation:
                            <input type="text" className='form-control' name='company' ref={register} /></label> <br />
                        <label htmlFor="description">Description:
                            <textarea className='form-control' rows="4" cols="50" type="text" name='description' ref={register} /></label> <br />

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Review;