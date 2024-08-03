import React from 'react';
import Comp1 from '../components/Comp1';
import Image1 from '../assets/Images/Rectangle 146.png'
import Image2 from '../assets/Images/Rectangle 147.png'
import DotImage3 from '../assets/Images/Group 195.png'
import DotImage4 from '../assets/Images/Group 196.png'
import TowerImage4 from '../assets/Images/Rectangle 148.png'
import { FaChevronDown } from "react-icons/fa";
import Aero1 from '../assets/Images/aero1.png';
import Aero1Tail from '../assets/Images/aero1tail.png';
import Aero2 from '../assets/Images/aero2.png';
import Aero2Tail from '../assets/Images/aero2tail.png';
import Aero3 from '../assets/Images/aero3.png';
import Aero3Tail from '../assets/Images/aero3tail.png';

const Home = () => {
  return (
    <>
    {/* <div className='bg-gradient-to-r  from-[#f1e1f2] to-[#e1c5e3] via-[#e5f0d1] border border-transparent'> */}
    <div className='bg-gradient-to-r  from-[#f0e1b6] to-[#d7ebc7] via-[#e5f0d1] border border-transparent flex'>
      <div className='w-[70%]'>
      <div className=' flex '>
      <div className='w-[70%] '>
        <p className='ml-24 mt-16 text-4xl lg:text-6xl font-bold'>Get a break and</p>
        <p className='ml-24 mt-3 text-4xl lg:text-6xl font-bold'>Explore the skies</p>
        <p className='ml-24 mt-2 lg:text-lg'> Book, Plan , Book Again </p>
      </div>
       
      <img src={Aero1} className='absolute top-[10%] left-[41%] mt-10 size-16' />
      <img src={Aero1Tail} className='absolute top-[16%] left-[44%] mt-10 w-28' />
      <img src={Aero3} className='absolute top-[35%] left-[44%] mt-10 size-12' />
      <img src={Aero3Tail} className='absolute top-[39%] left-[38%] mt-10 w-28' />
      <div>
      <img src={Aero2} className='absolute top-[15%] left-[74%] mt-10 size-16' />
      <img src={Aero2Tail} className='absolute top-[13%] left-[66%] mt-10 w-28' />
      </div>
      {/* <div className='absolute top-[15%] left-[74%] mt-10 size-16'>
      <img src={Aero2} className='' />
      <img src={Aero2Tail} className='w-34 -mt-15' />
      </div> */}

        <div className='w-[30%] flex justify-end'>
          <img src={Image1} className='mt-10 w-[82%] '/>
        </div>
        </div>
       {/* second row blue-400*/}
        <div className=' flex justify-end '>
          <img src={Image2} className='mt-10 w-[24%]' />
        </div>
        <img src={DotImage4} className='-mt-10 ml-[35rem] w-[24%]' />
        </div>
        
        {/* right div yellow-400 */}
        <div className='w-[30%]'>
           <img src={DotImage3} className='mt-10 ml-48 w-[35%]' />

           <img src={TowerImage4} className='-mt-2 ml-5 w-[70%]' />
        </div>

        <Comp1 />
    </div>
    
    </>
  )
}

export default Home