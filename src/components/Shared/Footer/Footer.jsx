import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer position-relative">
            <div className="footer-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 col-md-6 col-lg-3">
                            <div className="footer-widget footer-about" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div className="footer-logo">
                                    <Link to={'/'}>
                                        <img src={logo} alt="logo" style={{ maxWidth: '160px' }} />
                                    </Link>
                                </div>
                                <div className="footer-about-content">
                                    <p className='form-text' style={{ maxWidth: 200, textAlign: 'center' }}>
                                        Ahmedabad, the city of vibrant colors, rich heritage, and bustling streets, awaits your exploration. Whether you're a curious traveler or a local seeking new adventures, GoRentals has your back.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6 offset-lg-3">
                            <div className="row">
							<div className="col-lg-6">
    <div className="footer-widget footer-menu">
        <h2 className="footer-title">Quick Links</h2>
        <ul style={{ width: "250px" }}> {/* Add fixed width */}
		<li><Link to={'/appointment'}><FaAngleDoubleRight className='icon' />  Booking</Link></li>
            <li><Link to={'/doctors'}><FaAngleDoubleRight className='icon' />  Search For Vehicles</Link></li>
            <li><Link to={'/login'}><FaAngleDoubleRight className='icon' />  Login</Link></li>
            <li><Link to={'/login'}><FaAngleDoubleRight className='icon' />  Register</Link></li>
            <li><Link to={'/about'}><FaAngleDoubleRight className='icon' />  About</Link></li>
            
            <li><Link to={'/blog'}><FaAngleDoubleRight className='icon' />  Blog</Link></li>
        </ul>
    </div>
</div>
<div className="col-lg-6">
    <Link to="/contact" className="footer-widget footer-contact">
        <h2 className="footer-title mt-3 mt-md-0">Contact Us</h2>
        <div className="footer-contact-info">
            <div className="footer-address">
                <span><i className="fas fa-map-marker-alt"></i></span>
                <p>C15, Yamuna Soc, Bhargav Rd, Kubernagar, Saijpur Bogha,<br />Ahmedabad, Gujarat 382340 </p>
            </div>
            <p>
                <i className="fas fa-phone-alt"></i>
                +91 9067136802
            </p>
            <p className="mb-0">
                <i className="fas fa-envelope"></i>
                ranishjamode@gmail.com
            </p>
        </div>
    </Link>
</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div className="copyright-text">
                                <p className="mb-0">
                                    <a href="templateshub.net">
                                        <div className="copyRight text-center">
                                            <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                                        </div>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="copyright-menu">
                                <ul className="policy-menu d-flex gap-2 justify-content-center">
                                    <Link to={'/about'} className='custom-link-color'>Terms and Conditions</Link>
                                    <Link to={'/about'} className='custom-link-color'>Policy</Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
