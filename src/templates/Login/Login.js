import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginImg from '../../images/login.png'
import './Login.css'
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { async } from '@firebase/util';

const Login = () => {
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";


    // sign in firebase react hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // update password hook
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    // Handle reset password
    const handleResetPassword = async () => {

        if (email.indexOf('@') === -1) {
            toast('Please put your email')
            return
        } else {
            await sendPasswordResetEmail(email)
            toast('Update password Request send to you email')
        }


    }



    // Get user email
    const getUserEmail = (event) => {
        const email = event.target.value
        setEmail(email)
    }

    // Get user Passowrd
    const getUserPassword = (event) => {
        const password = event.target.value
        setPassword(password)
    }

    // Handle use login
    const handleUserLogin = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate(from, { replace: true });
    }




    return (
        <div className='login bg-custom'>
            <div className=" container-fluid">
                <div className="row">
                    <div className="image-area col-md-6 bg-white">
                        <img src={loginImg} alt="Login" className='w-100' />
                    </div>
                    <div className="login-area col-md-6 justify-content-center align-content-center d-flex flex-column bg-custom p-5">
                        <form onSubmit={handleUserLogin}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label text-dark">Email address</label>
                                <input onBlur={getUserEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                <div id="emailHelp" className="form-text text-dark">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label text-dark">Password</label>
                                <input onBlur={getUserPassword} type="password" className="form-control" id="exampleInputPassword1" required />
                                <p>{error?.message}</p>
                            </div>

                            <button type="submit" className="btn btn-warning">Login</button>
                        </form>
                        <div className="extra-info mt-5">
                            <p className='text-dark'>Forget your password? <span onClick={handleResetPassword} className='text-primary pe-auto reset-pass'>Reset Password</span></p>
                            <p className='text-dark'>Don't have any account? <Link to='/register'>Register</Link> </p>
                        </div>
                        <div className="sign-in-with mt-5">
                            <p className='text-dark'>Sign In with</p>
                            <SocialLogin />
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;