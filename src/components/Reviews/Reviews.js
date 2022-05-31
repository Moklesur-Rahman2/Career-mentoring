import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='reviews py-5'>
            <h2 className='text-center mb-5'>What do others say about me</h2>
            <div className="container">
                {
                    reviews.map(review => <Review review={review} key={review.id} />)
                }
            </div>
        </div>
    );
};

export default Reviews;