import React from 'react'
import './index.css';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import ImageHeading from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/image_group.jpg';
import ImageHeading2 from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/Screenshot 2024-04-09 at 2.09.56 AM.png';
import ImageHeading3 from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/racing-helmet.png';
import ImageHeading4 from '/Users/ranish/Desktop/Doctor-Appointment/src/images/img/credit-card.png';

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

            <Footer />
        </>
    );
}

export default About;