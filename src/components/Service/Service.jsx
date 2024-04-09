import React from 'react';
import { Link } from 'react-router-dom';
import SubHeader from '../Shared/SubHeader';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import activaWhiteImage from '../../images/img/activa_white.png'; // White activa image
import rentalImage from '../../images/img/rental_image.jpg'; // Image for rental services
import backgroundImage from '../../images/img/background_image.jpg'; // Background image for section
import bulletImage from '../../images/img/bullet.jpg';

import './Service.css';

const Service = () => {
  return (
    <>
      <Header />
      <SubHeader title="Welcome to Ahmedabad with Go-Rentals" subtitle="Embrace the vibrant energy of Ahmedabad, a city steeped in rich history and pulsating modernity." />

      <section className="container py-5">
        <div className="row">
          {/* Sample cards for rental services */}
          <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
            <Link to="/appointment" className="card-link">
              <div className="card border-0  activa-card">
                <div className="activa-bg"></div>
                <img src={activaWhiteImage} alt="Bike Rental" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Honda Activa Scooter</h5>
                  <p className="card-text">Explore Ahmedabad with ease on our zippy Honda Activa scooters.</p>
                </div>
              </div>
            </Link>
          </div>
          {/* Repeat for other rental options */}
          <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
            <Link to="/appointment" className="card-link">
              <div className="card border-0 bullet-card">
              <div className="bullet-bg"></div>
                <img src={bulletImage} alt="Bike Rental" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Royal Enfield Bullet</h5>
                  <p className="card-text">Feel the thrill of the road on our iconic Royal Enfield Bullet bikes.</p>
                 
                </div>
              </div>
            </Link>
          </div>
          {/* Add more cards for other rental options */}
        </div>
      </section>

      <section className="bg-light py-5" >
        <div className="container text-center text-black">
          <h2 className="mb-4">Discover Ahmedabad with Ease</h2>
          <p className="lead mb-4">Ahmedabad, fondly known as Amdavad, boasts a tapestry of architectural marvels, from ancient monuments to contemporary wonders. Navigating through its labyrinthine lanes and iconic landmarks is made effortless with our range of rental scooters and motorcycles. With GoRentals, you have the freedom to weave through traffic and explore every corner of this dynamic city at your own pace.</p>
        </div>
      </section>

      
  <section className="py-5">
    <div className="container text-center text-black">
      <h2 className="mb-4">Contact Us Today</h2>
      <p className="lead mb-4">Ready to embark on an unforgettable adventure in Ahmedabad? Contact GoRentals today to book your rental vehicle and unlock the gateway to exploration. Let's make your Ahmedabad experience truly exceptional, one ride at a time.</p>
      <Link to="/contact" className="btn btn-dark">Get Started</Link>
    </div>
  </section>
      <Footer />
    </>
  );
}

export default Service;
