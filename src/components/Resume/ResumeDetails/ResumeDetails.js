import React from 'react';
import Education from './DetailsCard/Education';
import Projects from './DetailsCard/Projects';
import WorkingHistori from './DetailsCard/WorkingHistori';
import './ResumeDetails.css'
import Interest from './DetailsCard/Interest';
import ProgrammingSkills from './DetailsCard/ProgrammingSkills';


const ResumeDetails = ({element}) => {

    return (
        <div className='container'>
            <div className='resume-details'>
                <div className='container-part'>
                    <div className='d-flex flex-column mb-5'>
                        {
                            element === 'education'  &&  <Education></Education>
                         }
                         {
                            element === 'history' && <WorkingHistori></WorkingHistori>
                         }
                         {
                            element === 'programin' && <ProgrammingSkills></ProgrammingSkills>
                         }
                        {
                            element === 'project' && <Projects></Projects>
                        }
                        {
                            element === "interest" && <Interest></Interest>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeDetails;