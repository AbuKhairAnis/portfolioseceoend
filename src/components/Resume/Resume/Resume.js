import { React, useState } from 'react';
import ResumeDetails from '../ResumeDetails/ResumeDetails';
import ResumeNav from '../ResumeNav/ResumeNav';
import './Resume.css'


const Resume = () => {

    const [element, setElement] = useState('education');
    

    return (
        <div className='container' id='resume'>
            <div className="about-me">
                <div className="about-me-container">
                    <div className=''>
                        <h1>Resume</h1>
                    </div>
                    <div className=''>
                        <p>My formal Bio Details</p>
                    </div>
                    <div className='heading-saparator'>
                        <div className="saparator-line">
                        </div>
                        <div className='saparator-bulb'>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='mt-5'>
                    <div className="d-flex">
                           <div className="col-md-4  p-0">
                                <div className='resume-navber mt-3'>
                                    <ResumeNav setElement={setElement}></ResumeNav>
                                </div>
                            </div>
                            <div className="col-md-8  p-0">
                                <div className='resume-component'>
                                    <ResumeDetails element ={element}></ResumeDetails>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





  
    );
};

export default Resume;