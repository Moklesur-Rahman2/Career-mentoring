import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='hero-section'>
            <div className="container">
                <div className="text-area text-center">
                    <h1 className='mb-5 text-xl-left text-light lh-base'>Master Your Mind And Emotions,<br></br>Take Your Life To The Next Level</h1>
                    <a href='#services' className='btn btn-warning py-3 px-5 rounded-pill fw-bold'>Apply for Coach</a>
                </div>
                <div className="img-area w-50"></div>
            </div>
        </div>
    );
};

export default Banner;