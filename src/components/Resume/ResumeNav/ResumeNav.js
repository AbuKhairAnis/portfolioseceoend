import { React } from 'react';
import { FaUserGraduate, FaHistory, FaLaptopCode, FaChartBar, FaCentercode } from 'react-icons/fa';
import './ResumeNav.css';


const ResumeNav = ({ setElement }) => {


    return (
        <div className='container '>
                <div className='navbers-item '>
                    <button className='btn btn-success w-75 text-start text-uppercase' onClick={() => setElement('education')}><FaUserGraduate /> <span className='ms-2'>Education</span> </button>
                </div>
            <div className='navbers-item  '>
                <button className='btn btn-success w-75 text-start text-uppercase' onClick={() => setElement('history')} > <FaHistory /><span className="ms-2">Work History</span></button>
            </div>
            <div className='navbers-item '>
                <button className='btn btn-success w-75 text-start text-uppercase' onClick={() => setElement('programin')} ><FaLaptopCode /><span className="ms-2">Programming Skills</span></button>
            </div>
            <div className='navbers-item '>
                <button className='btn btn-success w-75 text-start text-uppercase' onClick={() => setElement('project')} ><FaChartBar /><span className='ms-2'>Projects</span></button>
            </div>
            <div className='navbers-item '>
                <button className='btn btn-success w-75 text-start text-uppercase' onClick={() => setElement('interest')} ><FaCentercode /><span className="ms-2">Interests</span></button>
            </div>

        </div>
    );
};

export default ResumeNav;