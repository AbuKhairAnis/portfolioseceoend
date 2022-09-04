import React from 'react';
import Home from '../Home/Home';
import Navber from '../Navber/Navber';
import"./Header.css"
import pic from '../../images/shape-bg.png'

const Header = () => {
    return (
        <div className='header-container'>
            <Navber></Navber>
            <Home></Home>
            <div>
                <img className='shape-bg' src={pic} alt="" />
            </div>
        </div>
    );
};

export default Header;