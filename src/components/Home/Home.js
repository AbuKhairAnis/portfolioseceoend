import React from 'react';
import { FaFacebookSquare, FaFacebookMessenger, FaYoutube, FaInstagram, FaTwitter, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap,FaWordpress } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiMongodb, SiFirebase, SiTailwindcss, SiMaterialui,SiExpress } from 'react-icons/si';
import './Home.css'
import hero from '../../images/anis 4.png';

import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className='container ' id='home'>
            <div className='parent-container '>
                <div className="details-container ">
                    <div className='icon-container'>
                        <a href="https://www.facebook.com/abukhair.anis.5" target="_blank"><FaFacebookSquare /></a>
                        <a href="https://m.me/abukhair.anis.5"  ><FaFacebookMessenger /></a>
                        <a href="https://www.youtube.com/channel/UC2trE4xqJOkZCYeETtZdBlA" target="_blank"><FaYoutube /></a>
                        <a href="https://www.instagram.com/abukhairanis/?hl=en" target="_blank" ><FaInstagram /></a>
                        <a href="https://twitter.com/AbuKhairAnis" target="_blank"><FaTwitter /></a>
                    </div>
                    <div className='text-deatils-name'>
                        <span className='primary-text'>Hello, I am <span className='heilight-text'> Abu Khair Anis</span></span>
                    </div>
                    <div className='text-deatils-row'>
                        <Typewriter
                            options={{
                                strings: ['React,Node js,Express js', 'Font-End-Development', 'WordPrees', 'UI Design'],
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
                    <div className='grid text-center'>
                        <div class="row">
                           
                            <div class="col icon html"><FaHtml5 /><p className='icon_text'>HTML5</p></div>
                            <div class="col icon css"><FaCss3Alt /><p className='icon_text'>CSS3</p></div>
                            <div class="col icon js"><TbBrandJavascript /> <p className='icon_text'>Javascript</p></div>
                            <div class="col icon react "><FaReact /><p className='icon_text'>React</p></div>
                            <div class="col icon node"><FaNodeJs /><p className='icon_text'>Ndejs</p></div>
                            <div class="col icon firebase"><SiFirebase /><p className='icon_text'>Firebase</p></div>
                            <div class="col icon mongodb"><SiMongodb /><p className='icon_text'>Mongodb</p></div>
                            <div class="col icon express"><SiExpress /><p className='icon_text'>Express</p></div>
                            <div class="col icon bootsrap"> <FaBootstrap /><p className='icon_text'>Bootstrap</p></div>
                            <div class="col icon tailwind"> <SiTailwindcss /><p className='icon_text'>Tailwind</p></div>
                            <div class="col icon meterial"> <SiMaterialui /><p className='icon_text'>Materialui</p></div>
                            <div class="col icon wordpress"> <FaWordpress /><p className='icon_text'>Wordpress</p></div>
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