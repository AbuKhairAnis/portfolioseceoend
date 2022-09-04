import React from 'react';
import './About.css'
import about from '../../images/anis.png'

const About = () => {
    return (
        <div className='container' id='about'>
            <div className="about-me">
                <div className="about-me-container">
                    <div className=''>
                        <h1>About Me</h1>
                    </div>
                    <div className=''>
                        <p>Why Choosen me</p>
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

                <div className="card about-details-content mb-5 mt-5" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={about} className="img-fluid rounded-start about-img" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body ms-3">

                                <p className="card-text text-align-justify ">Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.</p>
                                <h5 className='card-title'>Here are a Few Highlights:</h5>
                                <ul>
                                    <li>Full Stack web and mobile development</li>
                                    <li>Interactive Front End as per the design</li>
                                    <li>React and React Native</li>
                                    <li>Redux for State Mnanagement</li>
                                    <li>Building REST API</li>
                                    <li>Managing database</li>
                                </ul>


                                <button type="button" className='btn-brand btn'>Hire Me</button>
                                <button type="button" className='btn-brand btn'>Resume</button>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;