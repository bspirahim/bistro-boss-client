
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-10'>
            <SectionTitle 
             subHeading = {"From 11.00am to 10.00Pm"}
             heading={"order online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/home/slide1.jpg" alt="" />
                    <p className='text-center -mt-12 text-2xl uppercase text-zinc-100'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/home/slide2.jpg" alt="" />
                    <p className='text-center -mt-12 text-2xl uppercase text-zinc-100'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/home/slide3.jpg" alt="" />
                    <p className='text-center -mt-12 text-2xl uppercase text-zinc-100'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/home/slide4.jpg" alt="" />
                    <p className='text-center -mt-12 text-2xl uppercase text-zinc-100'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/home/slide5.jpg" alt="" />
                    <p className='text-center -mt-12 text-2xl uppercase text-zinc-100'>Salads</p>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;