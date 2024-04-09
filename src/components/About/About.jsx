import React from 'react'
import './index.css';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import ImageHeading from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/image_group.jpg';
import ImageHeading2 from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/Screenshot 2024-04-09 at 2.09.56 AM.png';
import ImageHeading3 from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/racing-helmet.png';
import ImageHeading4 from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/credit-card.png';
import imageSource2 from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/route.png';
import imageSource3 from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/motor-helmet.png';
import imageSource4 from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/upi.png';
import imageSource5 from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/customer-service.png';
import imageSource6 from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/high-quality.png';
import imageSource7 from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/visa.png';
import imageSource8 from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/mastercard.png';
import imageSource9 from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/pngwing.png';
import img from '../../images/logo.png';
import SubHeader from '../Shared/SubHeader';
import { useGetAllBlogsQuery } from '../../redux/api/blogApi';
import { Empty, message } from 'antd';
import { Link } from 'react-router-dom';
import { truncate } from '../../utils/truncate';
import { useGetDoctorsQuery } from '../../redux/api/doctorApi';

const About = () => {
    const { data, isError, isLoading } = useGetAllBlogsQuery({ limit: 4 });
    const { data: doctorData, isLoading: DoctorIsLoading, isError: doctorIsError } = useGetDoctorsQuery({ limit: 4 });

    const blogData = data?.blogs;
    const doctors = doctorData?.doctors;

    let doctorContent = null;
    if (!DoctorIsLoading && doctorIsError) doctorContent = <div>Something Went Wrong !</div>
    if (!DoctorIsLoading && !doctorIsError && doctors?.length === 0) doctorContent = <div><Empty /></div>
    if (!DoctorIsLoading && !doctorIsError && doctors?.length > 0) doctorContent =
        <>
            {doctors && doctors.map((item, id) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={id + item.id}>
                    <div className="card shadow border-0 mb-5 mb-lg-0">
                        {item.img && <img src={item.img} class="img-fluid w-100" alt="" />}
                        <div className="p-2">
                            <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}><a>{item?.firstName + ' ' + item?.lastName}</a></h4>
                            <p>{item?.designation}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>

    let content = null;
    if (!isLoading && isError) content = <div>{message.error('Something went Wrong!')}</div>
    if (!isLoading && !isError && blogData?.length === 0) content = <Empty />
    if (!isLoading && !isError && blogData?.length > 0) content =
        <>
            {
                blogData && blogData?.map((item, id) => (
                    <div className="col-lg-3 col-md-6" key={id + item.id}>
                        <div className="card shadow border-0 mb-5 mb-lg-0">
                            <img src={item?.img} alt="blog Image" width={300} height={200} className="w-100  rounded-top image-hover" style={{ objectFit: 'contain' }} />

                            <div className='p-2'>
                                <Link to={`/blog/${item?.id}`}>
                                    <h6 className="text-start mb-1 text-capitalize" style={{ color: '#223a66' }}>{truncate(item?.title, 40)}</h6>
                                </Link>
                                <div className="px-2">
                                    <p className="form-text text-start text-capitalize">{truncate(item?.description, 80)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    return (
        <>
            <Header />
            <SubHeader title="About Us" />
            <div className="container" style={{ marginBottom: 20, marginTop: 50 }}>
                <div className="row p-5">
                    <div className="col-lg-4">
                        <div className='section-title text-center'>
                            <h2 className='text-uppercase'>Want to Rent a Scooter?</h2>
                            <p className='form-text m-4'>About Us</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={ImageHeading3} alt="" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                            </div>
                        </div>
                        <p className='mt-3'>Embark on a thrilling adventure with us as we explore the vibrant streets of Ahmedabad and beyond. From cruising through historic neighborhoods to savoring local delicacies, our journeys are packed with excitement and discovery. Whether it's a leisurely stroll through bustling markets or an adrenaline-fueled ride along scenic routes, we invite you to experience the essence of Ahmedabad in every moment. Join us as we uncover hidden gems, create cherished memories, and embrace the spirit of adventure together.</p>
                    </div>
                    <div className="col-lg-8">
                        <img src={ImageHeading} alt="" className="img-fluid rounded shadow" />
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginBottom: 20, marginTop: 50 }}>
                <div className="row p-5">
                    <div className="col-lg-4">
                        <div className='section-title text-center'>
                            <p className='form-text m-4'>Best Price And Good Service</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={ImageHeading4} alt="" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                            </div>
                        </div>
                        <p className='mt-3'>Experience unmatched affordability and exceptional service! When it comes to renting a brand-new, meticulously maintained scooty in Ahmedabad, look no further. We offer the best prices in town and ensure a seamless documentation process for your convenience.</p>
                    </div>
                    <div className="col-lg-8">
                        <img src={ImageHeading2} alt="" className="img-fluid rounded shadow" style={{ maxWidth: '500px', maxHeight: '500px' }} />
                    </div>
                </div>
            </div>

            <section className="container py-5">
  <div className="row justify-content-center mb-4">
    <div className="col-md-8 text-center">
      <h2 >Why GoRentals?</h2>
      <h3 style={{  fontSize: '24px' }}>Flexibility</h3>
      <p style={{ color: '#333333', textTransform: 'none', fontSize: '14px' }}>Flexibility, agility & freedom to go anywhere, anytime</p>
    </div>
  </div>
  <div className="row">
 
    <div className="col-md-4">
      {/* Set a class for small images */}
      <img src={imageSource2} alt="Travel like local" className="small-image" />
      <h3>Travel like local</h3>
      <p> Full Routes</p>
    </div>
    <div className="col-md-4">
      {/* Set a class for small images */}
      <img src={imageSource3} alt="Get Free Helmets" className="small-image" />
      <h3>Freebies</h3>
      <p> Get Free Helmets</p>
    </div>
  </div>
  <div className="row mt-4">
    <div className="col-md-4">
      {/* Set a class for small images */}
      <div className="image-container">
  <img src={imageSource4} alt="Secure Payments" className="small-image" />
  <img src={imageSource7} alt="Another Image" className="small-image" />
  <img src={imageSource8} alt="Another Image" className="small-image" />
  <img src={imageSource9} alt="Another Image" className="small-image" />
</div>
<h3>Secure Payments</h3>
      <p>Our Payment Partners are Industry Leaders.</p>
    </div>
    <div className="col-md-4">
      {/* Set a class for small images */}
      <img src={imageSource5} alt="24/7 Road Rental Assistance" className="small-image" />
      <h3>Assistance</h3>
      <p>We offer 24/7 road rental assistance</p>
    </div>
    <div className="col-md-4">
      {/* Set a class for small images */}
      <img src={imageSource6} alt="Highly Rated Services" className="small-image" />
      <h3>High Rating</h3>
      <p>Highly rated Services</p>
    </div>
  </div>
</section>

<section className="container py-5">
  <div className="row justify-content-center mb-4">
    <div className="col-md-8 text-center">
      <h2>Terms & Conditions</h2>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <h3>Eligibility Criteria:</h3>
      <ul>
        <li>Rider needs to be 21 years of age or older and possess a valid two-wheeler license.</li>
      </ul>

      <h3>Required Documents:</h3>
      <ul>
        <li>Rider needs to present a valid Original Driving License at the time of picking up the vehicle and submit the copy of the same.</li>
        <li>Original ID proof (Passport, Voters ID or Aadhaar Card) needs to be submitted at the time of picking up the vehicle.</li>
      </ul>

      <h3>Security Deposit:</h3>
      <ul>
        <li>There is a refundable security deposit of Rs.3000 for regular vehicles and Rs.5000 for high-end bikes.</li>
      </ul>

      

      <h3>Speed Limit:</h3>
      <ul>
        <li>Speed limit is 70 KMPH for this vehicle. The Hirer shall Strictly adhere to local rules on SPEED LIMITS. Penalty for over speeding would be double the day's rent Plus Driver will be banned from future rentals.</li>
      </ul>

      <h3>Late Penalty:</h3>
      <ul>
        <li>Late Return fee would be Rs 300/hour.</li>
      </ul>

      <h3>Helmets:</h3>
      <ul>
        <li>One helmet is complimentary. Second helmet is charged @Rs.50/helmet.</li>
      </ul>

      <h3>Fuel:</h3>
      <ul>
        <li>Fuel charges are not included. Vehicle will be given in reserve condition and has to be returned in the same condition.</li>
      </ul>

      <h3>Accident Policy:</h3>
      <ul>
        <li>In case of an accident, the user is liable for 100% damage amount.</li>
      </ul>

    

      <h3>Cancellation Policy:</h3>
      <p>Our commitment remains firm to ensure that our customers end their travel with a wow factor, there are occasions where in you may not be able to meet your commitment to travel and would like to cancel your booking.</p>
      <p>For last-minute bookings, a minimum time of 2 hours would be required for scheduling a vehicle within operational hours from 9:00am to 9:00pm and sending the details across as per your defined location and subject to availability.</p>
      <p>We have a very simple policy for any cancellations.</p>
    </div>
  </div>
</section>


            <Footer />
        </>
    );
}

export default About;