import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Shared/SideBar/Sidebar';

const AddService = () => {
    const [indexes, setIndexes] = useState([]);
    const [counter, setCounter] = useState(0);
    const [imageUrl, setImageUrl] = useState(null);

    const { register, handleSubmit, watch, errors } = useForm();

    const addItem = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeItem = index => () => {
        setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
    };

    const onSubmit = (data, e) => {
        data.imgURL = imageUrl;
        data.date = new Date().toDateString();

        if (data.packageName && data.imgURL && data.price) {
            axios.post('https://event-fusion.herokuapp.com/addService', { data })
                .then(response => {
                    if (response) {
                        e.target.reset();
                        setImageUrl(null);
                    }
                })
        }


    };
    const imageUploadHandler = (e) => {
        const imageData = new FormData();
        imageData.set('key', '986f96fe4d582cd6cd92358c13d3d645');
        imageData.set('image', e.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='row  books-container d-flex mr-0 flex-wrap'>
            <div className="col-lg-3 col-md-12 col-sm-12">
                <Sidebar />
            </div>

            <div className="col-lg-9 col-md-12 col-sm-12">
                <h3 className='mb-4 mt-5 text-left text-brand rounded bg-light p-3'>Add Package</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row container from-input text-left">

                        <div className="col-6 ">

                            <span><strong>Package Name:</strong></span>
                            <input className='form-control w-75 mb-3' name="packageName" type='text' placeholder="Package Name" ref={register} />
                            <span><strong>Price:</strong></span>
                            <input className='form-control w-75 mb-3' name="price" type='text' placeholder="Price" ref={register} />

                            <div>
                                {indexes.map(index => {
                                    const fieldName = `items[${index}]`;
                                    return (
                                        <fieldset name={fieldName} key={fieldName}>
                                            <label>
                                                Item {index}:
                                                <input
                                                    type="text"
                                                    name={`${fieldName}.itemName`}
                                                    ref={register}
                                                />
                                            </label>

                                            <button type="button" onClick={removeItem(index)}>
                                                Remove
                                            </button>
                                        </fieldset>
                                    );
                                })}

                                <button type="button" onClick={addItem}>
                                    Add Event Items
                                 </button>

                            </div>

                        </div>
                        <div className="col-6">

                            <span><strong>Add Image:</strong></span>
                            <input className='form-control w-75 mb-3 p-1' onChange={imageUploadHandler} name="image" type='file' placeholder="test" ref={register} />
                            <div className=" d-flex justify-content-end">


                                <input className='submit-btn mr-5' type="submit" />
                            </div>
                        </div>
                    </div>


                </form>
            </div>

        </div>
    );
};

export default AddService;