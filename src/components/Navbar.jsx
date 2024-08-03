import React from 'react'
import Image from '../assets/Images/x logo.jpg'
import logo from '../assets/Images/logo 1.png'
import logo1 from '../assets/Images/newLogo.png'
import Group from '../assets/Images/Group 217.png'
import { FaChevronDown } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdFlagCircle } from "react-icons/md";
import Tricolor from "../assets/Images/tricolor.png";
import Question from "../assets/Images/question.png";
import Icon from "../assets/Images/Icon.png";
import LineBars from '../assets/Images/Frame 216.png';
import Line from '../assets/Images/Line 4.png';

const Navbar = () => {
  return (
    <>
    <div className=' bg-gradient-to-r  from-[#f0e1b6] to-[#d7ebc7] via-[#e5f0d1] flex justify-between items-center px-8'>
        <div className='mt-7 flex gap-2 lg:gap-4'>
        <img src={logo1} className='w-28 lg:w-36 size-9' alt='missing' />
        <ul className='flex gap-4 lg:gap-8 font-semibold'>
            {/* <ul className='text-gray-300 '>|</ul> */}
            <img src={Line} className='w-1 size-7' alt='missing' />
            <li className='text-[#5E5E5E] text-base lg:text-lg border-b-2 border-[#F06C24] '>Flights</li>
            <li className='text-[#5E5E5E] text-base lg:text-lg'>Hotels</li>
            <li className='text-[#5E5E5E] text-base lg:text-lg'>Holidays Package</li>
            <li className='text-[#5E5E5E] text-base lg:text-lg'>Cruise</li>
            <li className='text-[#5E5E5E] text-base lg:text-lg'>Insurance</li>
            <li className='text-[#5E5E5E] text-base lg:text-lg'>Visa</li>
        </ul>
        </div>

        <div className='mt-7 flex gap-4 lg:gap-8 '>
            <p className='flex gap-2 items-center text-[#000001] text-xs lg:text-base font-semibold font-poppins '><img src={Tricolor} className=' w-5' alt='missing' />INR <FaChevronDown /></p>
            <p className='flex gap-2 items-center text-[#000001] text-xs lg:text-base font-semibold font-poppins '><img src={Question} className=' w-5' alt='missing' />Help & Support</p>
            <p className='flex gap-2 items-center text-[#000001] text-xs lg:text-base font-semibold'><img src={Icon} className=' w-5' alt='missing' />Sign In</p>
            <p><img src={LineBars} className=' w-5' alt='missing' /></p>
        </div>

    </div>
    {/* <img src={Group} className='mt-10 h-10' alt='missing' /> */}
    </>
  )
}

export default Navbar