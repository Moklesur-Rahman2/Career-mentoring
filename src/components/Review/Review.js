import React from 'react';

const Review = (props) => {
    const { name, photo, text } = props.review
    return (
        <div className='review bg-custom p-3 text-center'>
            <img src={photo} alt={name} className=' rounded-circle' />
            <h3 className='mt-3'>{name}</h3>
            <p>{text}</p>
        </div>
    );
};

export default Review;