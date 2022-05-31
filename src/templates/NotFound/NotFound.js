import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png'

const NotFound = () => {
    return (
        <div className='notfound'>
            <div className="container text-center pb-5">
                <img src={notFound} alt="404" className='w-50' />
                <h2>Oops! Page not found</h2>
                <p>The page you are trying to access does not exist or has been moved.
                    Try going back to our homepage.
                </p>
                <Link to='/' className='btn btn-primary mt-3'>Go to HomePage</Link>
            </div>

        </div>
    );
};

export default NotFound;