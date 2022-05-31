import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../../images/register.png'
import './Register.css'
import SocialLogin from '../../components/SocialLogin/SocialLogin';


const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    console.log(user)
    const navigate = useNavigate()
    const [updateProfile, updating,] = useUpdateProfile(auth);


    const [userName, setUserName] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    // Get user name
    const getUserName = (event) => {
        const userName = event.target.value
        setUserName(userName)
    }
    // get user email
    const getUserEmail = (event) => {
        const email = event.target.value;
        setEmail(email)
    }

    // Get user password
    const getUserPassword = (event) => {
        const password = event.target.value
        setPassword(password)
    }

    // Handle register form submit
    const handleSubitRegister = async (event) => {
        event.preventDefault()
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: userName });
        console.log('Updated profile');
        navigate('/')
    }

    return (
        <div className='register bg-custom'>
            <div className=" container-fluid">
                <div className="row">
                    <div className="image-area col-md-6 bg-white">
                        <img src={registerImg} alt="Register" className='w-100' />
                    </div>
                    <div className="register-area col-md-6 bg-custom p-5 d-flex justify-content-center align-content-center flex-column">
                        <form onSubmit={handleSubitRegister}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label text-dark">Your Name</label>
                                <input onBlur={getUserName} type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label text-dark">Email address</label>
                                <input onBlur={getUserEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                <div id="emailHelp" className="form-text text-dark">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label text-dark">Password</label>
                                <input onBlur={getUserPassword} type="password" className="form-control" id="exampleInputPassword1" required />
                            </div>
                            <button type="submit" className="btn btn-warning">Register</button>
                            <p className='mt-4'>Already have an account? <Link to='/login'>Sign In</Link></p>
                        </form>
                        <div className="signup-with my-5">
                            <p className='text-dark'>Register with....</p>
                            <SocialLogin />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Register;