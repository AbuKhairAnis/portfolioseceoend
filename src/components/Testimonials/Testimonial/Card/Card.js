import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { FcRating, } from 'react-icons/fc';
import './Card.css'






const Card = (props) => {
    const { desc, img, name, title } = props.data


    return (
        <div>
            <div className="d-flex  ">
                <div className="row flex-md-row flex-sm-col ">
                    <div className="">
                        <div className="testimonial ms-5 mb-5 p-5 ">
                            <p className='my-3'> <FaQuoteLeft /> {desc}<FaQuoteRight /> </p>
                            <p><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /> </p>
                            <div className="d-flex align-items-center">
                                <div className='col-md-2'>
                                    <img className='w-100' src={img} alt="" />
                                </div>
                                <div className='text ms-3'>
                                    <h5>{name}</h5>
                                    <h6>{title}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;