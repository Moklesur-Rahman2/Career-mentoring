import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    // Handle user Sign Out
    const handleUserSignout = () => {
        signOut(auth)
    }
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container">
                    <Link className="navbar-brand text-uppercase fw-bold" to='/'>Career Mentoring</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item fs-5">
                                <Link className="nav-link" to='/about'>About</Link>
                            </li>
                            <li className="nav-item fs-5">
                                <Link className="nav-link" to='/blog'>Blog</Link>
                            </li>
                            <li className="nav-item fs-5">
                                <Link to='/services' className="nav-link" href="#">Services</Link>
                            </li>
                            <li className="nav-item fs-5">
                                <Link to='/checkout' className="nav-link">Checkout</Link>
                            </li>
                            {
                                user ?
                                    <button className='nav-item bg-warning px-4 fw-bold ms-5 fs-5 rounded-pill' onClick={handleUserSignout}>Sign Out</button>
                                    :
                                    <li className="nav-item bg-warning px-4 fw-bold ms-5 fs-5 rounded-pill">
                                        <Link to='/login' className="nav-link">Login</Link>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav> */}


            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="navbar-brand text-uppercase fw-bold">Career Mentoring</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className=' justify-content-end'>
                        <Nav>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>

                            {
                                user ?
                                    <button className='nav-item bg-warning px-4 fw-bold ms-lg-5 fs-5 rounded-pill' onClick={handleUserSignout}>Sign Out</button>
                                    :
                                    <li className="nav-item bg-warning px-4 fw-bold ms-lg-5 fs-5 rounded-pill">
                                        <Link to='/login' className="nav-link">Sign In</Link>
                                    </li>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;