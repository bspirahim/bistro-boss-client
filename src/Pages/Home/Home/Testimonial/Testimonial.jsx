import React, { useEffect, useState } from 'react';
import comma from '../../../../../public/icon/quote-left 1.png'
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div className='max-w-screen-lg mx-auto my-12'>
            <SectionTitle
                heading={'TESTIMONIALS'}
                subHeading={'What Our Clients Say'}
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <> 
                        <SwiperSlide
                        review={review._id}
                        >
                            <div className='mx-24 text-center'>
                                <Rating
                                    style={{ maxWidth: 180, margin:'auto' }}
                                    value={review.rating}
                                    readOnly
                                />
                                <div className='w-24 h-24 mx-auto mt-5'>
                                <img className='' src={comma} alt="" />
                                </div>
                                <p className='my-5'>{review.details}</p>
                                <p className="text-2xl text-[#CD9003] font-semibold">{review.name}</p>
                            </div>
                        </SwiperSlide>
                        </>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;