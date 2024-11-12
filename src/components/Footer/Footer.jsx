import React from 'react';
import './Footer.css'
import footer_logo from '../../assets/Logo.png'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                </div>
                </div>
                <div className="footer-bootom">
                    <p className="footer-bottom-left">@2024 Kamal. All rights reserved</p>
                    
                </div>
            </div>
    );
};

export default Footer;