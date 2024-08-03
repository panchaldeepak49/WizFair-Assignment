import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import RadioImage from '../assets/Images/Ellipse 2.png';
import IconImage from '../assets/Images/Frame 3.png';
import IconImage1 from '../assets/Images/Frame 4.png';
import { FaChevronDown } from "react-icons/fa";
import ArrowImage from "../assets/Images/Group 182.png";


const Comp1 = () => {
  return (
    <>
    <div className='fixed w-[58%] lg:w-[60%]  h-40 top-[65%] left-[8%] bg-gray-200 rounded-md'>
        <div className='flex gap-8 mt-4 ml-2'> 
    <p className='flex gap-2 text-sm lg:text-base font-semibold'><input type='radio' defaultChecked={true} className='lg:size-5' />Round Trip</p>
    <p className='flex gap-2 text-sm lg:text-base text-[#929292]'><input type='radio' checked={false} onChange={(e)=>e.preventDefault()} className='lg:size-5' />Round Trip</p>
    <p className='flex gap-2 text-sm lg:text-base items-center font-semibold'><img src={IconImage} className='w-6' />1 Traveller <FaChevronDown /></p>
    <p className='flex gap-2 text-sm lg:text-base items-center font-semibold'><img src={IconImage1} className='w-6' />Economy <FaChevronDown /></p>
    </div>

    <div className='mt-5 flex gap-8 pl-4'> 
        <div>
    <p className='font-semibold flex gap-2 items-center'>< FaMapMarkerAlt className='text-orange-500'/><span className='text-base lg:text-lg'>Living From</span></p>
    <p className='text-[#5E5E5E] text-xs lg:text-sm'>Indira Gandhi International</p>
    </div>

    <div>
      <img src={ArrowImage} className='w-16' />
    </div>

    <div>
    <p className='font-semibold flex gap-2 items-center'>< FaMapMarkerAlt className='text-orange-500'/><span className='text-base lg:text-lg'>Going To</span></p> 
    <p className='text-[#5E5E5E] text-xs lg:text-sm'>Chhatarpati Shivaji</p>
    </div>
    
    <div>
    <p className='font-semibold text-base lg:text-lg'>Departure</p>
    <p className='text-[#5E5E5E] text-xs lg:text-sm'>27 Aug 2024</p>
    </div>

    <div>
    <p className='font-semibold text-base lg:text-lg'>Return</p>
    <p className='text-[#5E5E5E] text-xs lg:text-sm'>Book round trip <br></br> to save extra</p>
    </div>

    <button className='bg-[#024B90] px-4 lg:px-6 py-1 lg:py-3 rounded-md text-white font-semibold'>Search</button>
    </div>




    </div>
    </>
  )
}

export default Comp1