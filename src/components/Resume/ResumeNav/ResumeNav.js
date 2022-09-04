import { React, useState } from 'react';
import { FaUserGraduate, FaHistory, FaLaptopCode, FaChartBar, FaCentercode } from 'react-icons/fa';
import './ResumeNav.css';


const ResumeNav = ({ setElement }) => {


    const [backgroundStyle, setBackgroundStyle] = useState(null)

    console.log(backgroundStyle)
    const myMove = () => {

        if (backgroundStyle) {
            let id = null;
            let pos = 350;
            clearInterval(id);
            id = setInterval(frame, 5);
            function frame() {
                if (pos === null) {
                    clearInterval(id);
                } else {
                    pos--;
                    const style = {
                        width: pos + 'px',
                        background: "lightblue",
                        color: "white"
                    }
                    setBackgroundStyle(style)
                }
               

            }
        }
        else {
            let id = null;
            let pos = 10;
            clearInterval(id);
            id = setInterval(frame, 5);
            function frame() {
                if (pos === 350) {
                    clearInterval(id);
                } else {
                    pos++;
                    const style = {
                        width: pos + 'px',
                        background: "lightblue",
                        color: "white"
                    }
                    setBackgroundStyle(style)
                }


            }
        }
    }
    // const style = {
    //     background : "red"
    // }
    // function myMove (val)  {


    //     let id = null;
    //     const elem = document.getElementById(val);
    //     let pos = 10;
    //     clearInterval(id);
    //     id = setInterval(frame, 5);
    //     function frame() {
    //         if (pos === 350) {
    //             clearInterval(id);
    //         } else {
    //             pos++;
    //             elem.style.width = pos + 'px';
    //             elem.style.background = "lightblue"
    //             elem.style.color = "white"
    //         }
    //     }
    //     val.preventdefault()

    // }


    return (
        <div className='container'>
            <div className='resume-navber-items'>
                <div className='navbers-item fast'>
                    <div className='link' id="eductation" style={backgroundStyle} onClick={myMove}>
                        <div onClick={() => setElement('education')}><FaUserGraduate /><span>Education</span> </div>
                    </div>
                </div>
                <div className='navbers-item  '>
                    <div className='link' id="history" style={backgroundStyle} onClick={myMove} >

                        <div onClick={() => setElement('history')} > <FaHistory /><span>Work History</span></div>

                    </div>
                </div>
                <div className='navbers-item '>
                    <div className='link ' id="programing" onClick={() => myMove('programing')}  >

                        <div onClick={() => setElement('programin')} ><FaLaptopCode /><span>Programming Skills</span></div>

                    </div>
                </div>
                <div className='navbers-item '>
                    <div className='link' id="projects" onClick={() => myMove('projects')} >

                        <div onClick={() => setElement('project')} ><FaChartBar /><span>Projects</span></div>

                    </div>
                </div>
                <div className='navbers-item '>
                    <div className='link' id="interests" onClick={() => myMove('interests')} >

                        <div onClick={() => setElement('interest')} ><FaCentercode /><span>Interests</span></div>

                    </div>
                </div>
                <div className='const'></div>
            </div>






        </div>
    );
};

export default ResumeNav;