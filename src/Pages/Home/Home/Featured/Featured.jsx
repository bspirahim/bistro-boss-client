import React from 'react';
import './Featured.css';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const Featured = () => {
    return (
       <div className='max-w-screen-lg mx-auto bg-fixed pt-8 my-20 featured-item '>
         <SectionTitle
          heading={"from our menu"}
          subHeading={'check it out'}
         ></SectionTitle>
         <div className='md:flex justify-center items-center pb-20 pt-12 px-36 text-white'>
            <div>
            <img className='' src="/home/featured.jpg" alt="" />
            </div>
            <div className=' md:ml-6'>
                <h3>January 16 2024</h3>
                <h3>Where can i get some</h3>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, consectetur nulla earum assumenda quaerat, libero porro quidem consequuntur at voluptatibus corrupti, incidunt sed eum dolor! Minus, libero. .</p>
                <button className="rounded-lg border-t-0 border-l-0 border-r-0 border-b-2 py-3 px-5 bg-[#E8E8E8]  border-[#BB8506] text-[#BB8506] mt-4">Add to Cart</button>

            </div>

        </div>
       </div>
    );
};

export default Featured;