import { React, useState } from 'react';
import './Contact.css'
import contact from '../../images/contact1.png'
import { useForm } from 'react-hook-form';
import { FaFacebookSquare, FaFacebookMessenger, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';



const Contact = () => {

    const [information, setInformation] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        alert("Message Sent Succesfully")
        setInformation(data)

    }

    return (
        <div className='container' id='contact'>
            <div className="about-me">
                <div className="about-me-container">
                    <div className=''>
                        <h1>Contact Me</h1>
                    </div>
                    <div className=''>
                        <p>Lets Keep In Touche</p>
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
            </div>
            <div className="d-flex mt-5 mb-5">
                <div className="row ">
                    <div className="col-md-6 ">
                        <div className="d-flex flex-column align-items-center">
                            <div className=''>
                                <h3 className="mb-3">Contact me</h3>
                            </div>
                            <div className='cols-3 mb-3'>
                                <img className='c-img' src={contact} alt="" />
                            </div>
                            <div className="text-center">
                                <h5>Name: Abu Khair Anis</h5>
                                <span>Address: Trishal, Mymensingh</span> <br/>
                                <span>Email: abukhairanis123@gmail.com</span>  <br/>
                                <span>Phone: +8801937925006, <br /> +8801684741665</span>
                            </div>
                            <div className='icon-container'>
                                <a href="https://www.facebook.com/abukhair.anis.5" target="_blank"><FaFacebookSquare /></a>
                                <a href="https://m.me/abukhair.anis.5"  ><FaFacebookMessenger /></a>
                                <a href="https://www.youtube.com/channel/UC2trE4xqJOkZCYeETtZdBlA" target="_blank"><FaYoutube /></a>
                                <a href="https://www.instagram.com/abukhairanis/?hl=en" target="_blank" ><FaInstagram /></a>
                                <a href="https://twitter.com/AbuKhairAnis" target="_blank"><FaTwitter /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className='contact-from'>
                            <h3 className='text-center' >Sent A Short Message</h3 >
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input className='input-area' type="text" placeholder="Name" {...register("Name", {})} />
                                    <input className='input-area' type="email" placeholder="Email Address" {...register("Email", {})} />
                                    <input className='input-area' type="number" placeholder="Phone Number" {...register("phoneNumber", {})} />
                                    <input className='input-area' type="text" placeholder="Address" {...register("Address", {})} />
                                    <textarea className='text-area' {...register("Short Message", {})} />
                                    <input className='btn-brand btn' type="submit" />
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>





    );
};

export default Contact;