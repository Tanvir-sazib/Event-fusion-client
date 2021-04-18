import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Shared/SideBar/Sidebar';

const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const email = data.email;
        if (email !== '') {
            axios.post('https://event-fusion.herokuapp.com/addAdmin', { email })
                .then(response => {
                    if (response) {
                        e.target.reset();
                    }
                })
        }
    }
    return (
        <div className='row  d-flex mr-0'>
            <div className="col-lg-3 col-md-12 col-sm-12">
                <Sidebar />
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12">
                <h3 className='mb-4 mt-5 text-left text-brand rounded bg-light p-3'>Add an admin</h3>
                <div className="form-body col-lg-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Enter email' className='py-4 form-control' type="text" name='email' ref={register} /> <br />

                        <div className='d-flex justify-content-start'>
                            <button className='btn-brand py-2 px-4' type="submit">
                                Make Admin
                                 </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default AddAdmin;