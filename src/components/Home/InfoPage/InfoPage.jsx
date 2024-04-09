import React from 'react';
import './InfoPage.css';
import { FaClock, FaHeadset,FaHouseUser  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TbMotorbike } from "react-icons/tb";
const InfoPage = () => {
    return (
        <section className="why-us mt-5 mt-md-0">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Why Choose Us?</h3>
                            <p>
                            

Discover the joy of biking with us. Our vast selection of bikes ensures a smooth ride for every adventure. With convenient online booking, expert guidance, and competitive rates, we make exploring the outdoors easy and affordable. Plus, our commitment to sustainability means you can pedal with peace of mind. Choose us for an unforgettable biking experience.</p>
                            <div className="text-center">
                                <Link to={'/about'} className="more-btn">Learn More <i className="bx bx-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHouseUser className="icon"/>
                                        <h4>Booking</h4>
                                        <small className='text-secondary'>24 Hours Service</small>
                                        <p>

Experience hassle-free booking with our 24-hour service. Whether you're planning a spontaneous adventure or need to schedule in advance, our dedicated team is here to assist you around the clock. Enjoy peace of mind knowing that your booking needs are always met promptly and efficiently. Choose convenience, choose reliability, choose us for all your booking requirements.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <TbMotorbike className="icon"/>
                                        <h4>Exceptional Bikes, Unbeatable Prices</h4>
                                        <p>Discover the freedom of the road with our top-quality bikes and scooters, crafted for every journey. Whether you're exploring city streets or scenic routes, our vehicles promise comfort, style, and performance.

Experience the thrill without breaking the bank. With our affordable rates, your next adventure is closer than you think. Book now and ride in style!</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaClock className="icon"/>
                                        <h4>Working Hours</h4>
                                        <small className='text-secondary'>Timing schedule</small>
                                        <ul className='list-group list-group-flush'>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Sun - Wed : </p> <p>8:00 - 17: 00</p></li>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Thus - Fri : </p> <p>9:00 - 17: 00</p></li>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Sat - Sun : </p> <p>10:00 - 17: 00</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default InfoPage