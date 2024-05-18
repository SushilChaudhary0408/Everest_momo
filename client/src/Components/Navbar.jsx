import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function NavBar() {
    return (
        <div>
            <div className='flex justify-center items-center gap-4 h-[80px] border-b border-gray-300'>
                <div style={{ color: 'rgb(107, 120, 142)' }} className='w-[20%] '>momos</div>
                <div style={{ color: 'rgb(107, 120, 142)' }} className='flex justify-start w-[40%] ps-1 gap-2'>
                    <div>

                        <div className=''>About Us</div>
                    </div>
                    <div className=''>Our Menu</div>
                    <div className=''>Our Service</div>
                    <div className=''>Allergy Advice</div>
                </div>
                <div style={{ color: 'rgb(255, 255, 255)' }} className='flex justify-end items-center gap-2 w-[20%]'>
                    <div>
                        <div className='rounded-full bg-socilaColor h-[32px] w-[32px] flex justify-center items-center'><span><FaFacebookF /></span></div>
                    </div>
                    <div>
                        <div className='rounded-full bg-socilaColor h-[32px] w-[32px] flex justify-center items-center'><span><FaTiktok /></span></div>
                    </div>
                    <div>
                        <div className='rounded-full bg-socilaColor h-[32px] w-[32px] flex justify-center items-center'><span><FaInstagram /></span></div>
                    </div>
                    <div>
                        <div className='w-24 bg-customOrange rounded-full flex justify-center'> <span>Contact Us</span></div>
                    </div>
                </div>
            </div>
            {/* <hr /> */}
        </div>
    )
}

export default NavBar;
