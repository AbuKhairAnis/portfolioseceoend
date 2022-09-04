import React from 'react';
import "./Footer.css"

const Footer = () => {
    const date = new Date().getFullYear()

    return (
        <div className='footer_container'>
            <div className="footer-text">
                <h5>&copy; {date}  All Right Resarve || Abu Khair Anis</h5>
                <p><small>Contact: abukhairanis123@gmail.com || 01684741665</small></p>
            </div>
        </div>
    );
};

export default Footer;