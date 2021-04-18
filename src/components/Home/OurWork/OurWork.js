import React from 'react';
import img1 from '../../../image/1.jpg'
import img2 from '../../../image/2.jpg'
import img3 from '../../../image/3.jpg'
import img4 from '../../../image/4.jpg'
import img5 from '../../../image/5.jpg'
import img6 from '../../../image/6.jpg'
import img7 from '../../../image/7.jpg'
import img8 from '../../../image/8.jpg'
import img9 from '../../../image/9.jpg'
import img10 from '../../../image/10.jpg'


const projectData = [
    {
        name: 'John and Bella',
        img: img1
    },
    {
        name: 'Paul and Jenny',
        img: img2
    },
    {
        name: 'Steve and Rachel',
        img: img3
    },
    {
        name: 'Chandler and Monica',
        img: img4
    },
    {
        name: 'Joye and Phoebe',
        img: img5
    },
    {
        name: 'Ross and Mina',
        img: img6
    },
    {
        name: 'Kamal and Aokina',
        img: img7
    },

    {
        name: 'Belal and Bella',
        img: img8
    },
    {
        name: 'Siam and Shila',
        img: img9
    },
    {
        name: 'Tausif and Kona',
        img: img10
    },
]

const OurWork = () => {
    return (
        <div>
            <h2 className="text-sub m-5">
                some of our <span className='text-brand'>projects</span>
            </h2>
            <div className="protfolio-wrapper d-flex justify-content-center align-items-center">
                <div className="row col-lg-10">
                    {
                        projectData.map(project => {
                            return (
                                <div className="col-lg-2 bg-light rounded d-flex justify-content-center m-3">
                                    <div>
                                        <div className="img-div">
                                            <img className='w-100' src={project.img} alt="" />
                                        </div>
                                        <div className="text">
                                            <h5>{project.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default OurWork;