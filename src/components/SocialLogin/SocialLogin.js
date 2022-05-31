import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleImg from '../../images/google.png'


const SocialLogin = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    // Sign in with google hook
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    if (user) {
        // navigate('/')
        navigate(from, { replace: true });
    }

    return (
        <div className='social-login'>
            <button className='bg-dark border-0 px-4 py-2 text-light' onClick={() => signInWithGoogle()}>
                <img className='google-icon' src={googleImg} alt="google" /> Google</button>
        </div>
    );
};

export default SocialLogin;