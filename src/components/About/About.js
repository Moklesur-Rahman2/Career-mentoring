import React from 'react';
import moklesur from '../../images/moklesur.jpeg'

const About = () => {
    return (
        <div className='about'>
            <div className="container py-5">
                <div className="row justify-content-center align-content-center d-flex flex-row">
                    <div className="col-md-6">
                        <h2>Hi I am Moklesur</h2>
                        <p>Hi, I'm Moklesur Rahman. I live in Bangladesh.I am a student of Programming Hero. I am doing their complete web development course. My first goal is to finish this course well and practice. After the course I want to sell web related products on Themeforest and Codecanone. Thanks</p>
                    </div>
                    <div className="col-md-6">
                        <img src={moklesur} alt="moklesur" className='w-75' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;