import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, price, des, img } = props.service
    return (
        <div className='service'>
            <img src={img} alt={name} className='w-100' />
            <h3 className='mt-3'>{name}</h3>
            <p>Price: ${price}</p>
            <p>{des}</p>
            <Link className='btn btn-warning' to='/checkout'>Apply Coaching</Link>
        </div>
    );
};

export default Service;