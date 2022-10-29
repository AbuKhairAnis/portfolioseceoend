import React from 'react';
import { FaFacebookSquare, FaFacebookMessenger, FaYoutube, FaInstagram, FaTwitter, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiMongodb, SiFirebase, SiTailwindcss, SiExpress } from 'react-icons/si';
import './Home.css'
import hero from '../../images/anis 4.png';

import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className='container ' id='home'>
            <div className='parent-container '>
                <div className="details-container ">
                    <div className='icon-container'>
                        <a href="https://www.facebook.com/abukhair.anis.5" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
                        <a href="https://m.me/abukhair.anis.5"  ><FaFacebookMessenger /></a>
                        <a href="https://www.youtube.com/channel/UC2trE4xqJOkZCYeETtZdBlA" target="_blank" rel="noreferrer"><FaYoutube /></a>
                        <a href="https://www.instagram.com/abukhairanis/?hl=en" target="_blank" rel="noreferrer" ><FaInstagram /></a>
                        <a href="https://twitter.com/AbuKhairAnis" target="_blank" rel="noreferrer"><FaTwitter /></a>
                    </div>
                    <div className='text-deatils-name'>
                        <span className='primary-text'>Hello, I am <span className='heilight-text'> Abu Khair Anis</span></span>
                    </div>
                    <div className='text-deatils-row'>
                        <Typewriter
                            options={{
                                strings: ['React,Node js,Express js', 'Font-End-Development', 'UI Design'],
                                autoStart: true,
                                loop: true,
                                delay: "175",
                            }}
                        />
                    </div>
                    <div className='btn-style-block '>
                        <button type="button" className='btn-brand btn'>Hire Me</button>
                        <button type="button" className='btn-brand btn'>Resume</button>
                    </div>
                    <div className='profile-tagline'>
                        <span className='text-brand'>Knock of building applications with <br /> front and back end operations.</span>
                    </div>
                    <div className=' '>
                        <div className="d-flex flex-wrap  ">
                            <div className=" icon html"><FaHtml5 /><p className='icon_text'>HTML5</p></div>
                            <div className=" icon css"><FaCss3Alt /><p className='icon_text'>CSS3</p></div>
                            <div className=" icon js"><TbBrandJavascript /> <p className='icon_text'>Javascript</p></div>
                            <div className=" icon react "><FaReact /><p className='icon_text'>React</p></div>
                            <div className=" icon node"><FaNodeJs /><p className='icon_text'>Ndejs</p></div>
                            <div className=" icon firebase"><SiFirebase /><p className='icon_text'>Firebase</p></div>
                            <div className=" icon mongodb"><SiMongodb /><p className='icon_text'>Mongodb</p></div>
                            <div className=" icon express"><SiExpress /><p className='icon_text'>Express</p></div>
                            <div className=" icon bootsrap"> <FaBootstrap /><p className='icon_text'>Bootstrap</p></div>
                            <div className=" icon tailwind"> <SiTailwindcss /><p className='icon_text'>Tailwind</p></div>
                        </div>
                    </div>
                </div>
                <div className="piture-container">
                    <img className='hero-img' src={hero} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Home;