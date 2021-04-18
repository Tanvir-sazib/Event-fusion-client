import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeMain.css'
import image1 from '../../../image/pexels-edward-eyer-679568 (1).jpg'
import image2 from '../../../image/pexels-jonathan-borba-3397026 (1).jpg'
import image3 from '../../../image/pexels-viresh-studio-1444442 (1).jpg'
import NavBar from '../../Shared/NavBar/NavBar';
import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
const HomeMain = () => {
    const fade = useSpring({
        opacity: 1,
        transition: '1s',
        from: { opacity: 0 },
    })
    return (
        <div className="home-container">
            <div className="nav-bar-home">
                <div>
                    <NavBar />
                </div>
            </div>
            <Carousel>

                <Carousel.Item interval={3000}>
                    <div className='home-text d-flex  text-white align-items-center justify-content-center w-100 h-100'>
                        <animated.div className='p-3 pt-5' style={fade}>
                            <h1>Get Married in style</h1>
                            <p> Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <button className='btn btn-lg btn-outline-secondary px-5 m-5'>Plan your Wedding</button>
                        </animated.div>
                    </div>
                    <div className="">
                        <img
                            className="d-block image"
                            src={image1}
                            alt="First slide"
                        />
                    </div>

                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <div className='home-text d-flex  text-white align-items-center justify-content-center w-100 h-100'>
                        <animated.div className='p-3 pt-5' style={fade}>
                            <h1>First slide label</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <button className='btn btn-lg btn-outline-secondary px-5 m-5'>Plan your Wedding</button>
                        </animated.div>
                    </div>
                    <div className="">
                        <img
                            className="d-block image"
                            src={image2}
                            alt="First slide"
                        />
                    </div>

                </Carousel.Item>
                <Carousel.Item >
                    <div className='home-text d-flex  text-white align-items-center justify-content-center w-100 h-100'>
                        <animated.div className='p-3 pt-5' style={fade}>
                            <h1>First slide label</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <button className='btn btn-lg btn-outline-secondary px-5 m-5'>Plan your Wedding</button>
                        </animated.div>
                    </div>
                    <div className="">
                        <img
                            className="d-block image"
                            src={image3}
                            alt="First slide"
                        />
                    </div>

                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default HomeMain;