import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='grid md:grid-cols-2 text-white'>
            <div className='bg-[#1F2937] text-center py-10'>
                <div className=' w-2/4 mx-auto space-y-1'>
                    <h3>CONTACT US</h3>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>
            <div className='bg-[#111827] text-center py-10'>
                <div className='w-2/4 mx-auto space-y-1'>
                    <h3>Follow US</h3>
                    <p className=''>Join us on social media</p>
                    <div className='flex justify-center items-center space-x-2'>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;