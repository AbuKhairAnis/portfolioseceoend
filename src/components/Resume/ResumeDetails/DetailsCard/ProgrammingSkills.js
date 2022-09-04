import React from 'react';
import skills from '../PrograminSkills-api';



const ProgrammingSkills = () => {


    return (

        <div>
            <div className='container-part'>
                <div className='pogramin-heading '>
                    {
                        skills.map((value) => 
                            <div>
                                <div className='resume-main-heading '>
                                    <div className='heading-bulb'></div>
                                    <h6>{value.name}</h6>
                                </div>
                                <div className='resume-sub-heading'>
                                
                                <div className='skill' style={{background: `linear-gradient( to right , ${value.color}  ${value.value}% , #FF5823 ${100-value.value}% )` }}> </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>

    );
};

export default ProgrammingSkills;