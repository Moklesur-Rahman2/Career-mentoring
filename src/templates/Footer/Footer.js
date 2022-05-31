import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className=' bg-dark text-center'>
            <div className="container py-5">
                <h3 className='text-light'>Chreer Mentoring</h3>
                <p className='text-light'>I work with high-performers who want to break free of the mental and emotional limitations of fear, lack of confidence, emotional reactivity, and poor discipline so that they can stop surviving and start thriving.</p>
                <div className="cpoywrite-text mt-5">
                    <p className='text-light'>Copyright © 2022 | Chreer Mentoring | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;