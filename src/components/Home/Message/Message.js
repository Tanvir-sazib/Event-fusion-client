import React from 'react';
import { useForm } from 'react-hook-form';
import './Message.css'
const Message = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <section className='d-flex message-box justify-content-center flex-column align-items-center'>
            <h2 className='text-sub'>Let us handle your project, <span className='text-brand'>professionally</span></h2>
            <div className="form-body mt-5 w-75 d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row '>

                        <div className="col-lg-6">
                            <input placeholder='First Name' className='py-4 form-control' type="text" name='firstName' ref={register} /> <br />
                            <input placeholder='Email' className='py-4 form-control' type="text" name='email' ref={register} />
                        </div>
                        <div className="col-lg-6">
                            <input placeholder='Last Name' className='py-4 form-control' type="text" name='lastName' ref={register} /> <br />
                            <input placeholder='Phone Number' className=' py-4 form-control' type="text" name='phoneNumber' ref={register} />
                        </div>

                    </div>
                    <textarea placeholder='Your message...' className='py-4 form-control mt-4' type="text" name='message' ref={register} /> <br />
                    <button className='btn-brand py-2 px-4' type="submit">
                        Send Message
                                 </button>
                </form>
            </div>
        </section>
    );
};

export default Message;