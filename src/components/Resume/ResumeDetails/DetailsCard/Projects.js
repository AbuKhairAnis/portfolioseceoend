import React from 'react';

const Projects = () => {
    return (
        <div className='container-part'>
            <div className='resume-heading d-flex flex-column '>
                <div className='resume-main-heading d-flex justify-content-between'>
                    <div className='heading-bulb'></div>
                    <h6>Personal Portfolio Website</h6>
                    <div className='heading-date'>2021-2022</div>
                </div>
                <div className='resume-sub-heading'>
                    <p>Technologies Used: React JS, Bootsrap</p>
                </div>
                <div className='resume-description'>
                    <p> A Personal Portfolio website to showcase all my details and projects at one place. </p>
                </div>
            </div>

            <div className='resume-heading d-flex flex-column  '>
                <div className='resume-main-heading d-flex justify-content-between'>
                    <div className='heading-bulb'></div>
                    <h6>Mobile E-shop</h6>
                    <div className='heading-date'>2021-2022</div>
                </div>
                <div className='resume-sub-heading'>
                    <p>Technologies Used: React Native, Mongo DB, Express Js, Node Js, Redux.</p>
                </div>
                <div className='resume-description'>
                    <p>An ecommerce application designed to sell products online wth payment system integration</p>
                </div>
            </div>

            <div className='resume-heading d-flex flex-column  '>
                <div className='resume-main-heading d-flex justify-content-between'>
                    <div className='heading-bulb'></div>
                    <h6>Ecommerce Website</h6>
                    <div className='heading-date'>2021-2022</div>
                </div>
                <div className='resume-sub-heading'>
                    <p>Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.</p>
                </div>
                <div className='resume-description'>
                    <p>Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe</p>
                </div>
            </div>


        </div>
    );
};

export default Projects;