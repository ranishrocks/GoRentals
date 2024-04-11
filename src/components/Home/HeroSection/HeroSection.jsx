import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section id="hero" className="d-flex align-items-start justify-content-center">
            <div className="container text-center pt-5"> {/* Added pt-5 class for top padding */}
                <div>
                    <h1>YOUR BIKE RENTAL DESTINATION</h1>
                    <small>Discover the thrill of riding with our vast selection of bikes. Whether it's for a leisurely ride through the city or an adventurous journey through scenic routes, we have the perfect bike for you.</small>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-start gap-2 align-items-md-center mt-4">
                    <Link to={'/service'} className="btn-get-started scrollto">View Available Bikes</Link>
                    <Link to={'/track-appointment'} className="btn-get-started scrollto">Track Rental</Link>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
