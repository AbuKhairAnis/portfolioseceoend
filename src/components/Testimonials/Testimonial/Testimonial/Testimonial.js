import React from 'react';
import Card from '../Card/Card';
import './Testimonial.css';
import pic from '../../../../images/shape-bg.png';
import data from './Testimonial-api';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Testimonial = () => {



    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
         arrows: false,
        autoplay: true,
        initialSlide: 1,
        lazyLoad: true,
        autoplaySpeed: 1000,
        // fade: true

    };

    return (
        <div>
            <section>
                <div className='container' id='testimonial'>
                    <div className="about-me mb-5">
                        <div className="about-me-container">
                            <div className=''>
                                <h1>Testimonial</h1>
                            </div>
                            <div className=''>
                                <p>My formal Bio Details</p>
                            </div>
                            <div className='heading-saparator'>
                                <div className="saparator-line">
                                </div>
                                <div className='saparator-bulb'>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='testimonial-container'>
                <div className='container gap-2'>
                    <Slider {...settings}>
                        {
                            data.map((value, index) => <Card data={value} key={index}></Card>)
                        }
                    </Slider>
                </div>
                <img className='shape-bg-tastimonial' src={pic} alt="" />
            </section>
        </div>

    );
};

export default Testimonial;