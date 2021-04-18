import React from 'react';
import './MidBanner.css'

import bannerImg from '../../../image/bg1.jpg'
import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import CountUp from 'react-countup';
const MidBanner = () => {

    const props = useSpring({ number: 500, from: { number: 1 } })

    return (
        <div className='mt-5 h-50 bg-light mid-banner'>

            <div className="banner-over p-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img className='w-100 banner-img' src={bannerImg} alt="" />
                    </div>
                    <div className="col-lg-5 p-5">
                        <h1 className='pb-5'> <span className='text-sub'>You Dream it,</span> <span className='text-brand'>We Take Care of it</span></h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error perspiciatis recusandae ducimus cupiditate aut rerum labore cumque repudiandae consectetur esse. Labore velit aliquam voluptas atque similique? Itaque ipsum doloribus praesentium harum aperiam nulla quisquam maxime doloremque? Aperiam rerum eos ut explicabo facilis consequatur illo exercitationem eaque nulla qui atque, facere tempora fugiat. Numquam dolorem rem perferendis laboriosam, distinctio incidunt consectetur.</p>

                        <div className="row mt-5 pt-5 happy-customers">
                            <div className="col-lg-6 ">
                                <h1 className='text-brand'> <CountUp start={0} end={500} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef}></span>

                                        </div>
                                    )}
                                </CountUp> </h1>
                                <p><b>Happy Customers</b></p>
                            </div>
                            <div className="col-lg-6">
                                <h1 className='text-brand'><CountUp start={0} end={45} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef}></span>

                                        </div>
                                    )}
                                </CountUp></h1>
                                <p><b>premium Projects</b></p>

                            </div>

                        </div>
                        <div className="explore-button d-flex justify-content-center mt-5">
                            <button className='btn-brand py-3 px-5'>EXPLORE MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidBanner;