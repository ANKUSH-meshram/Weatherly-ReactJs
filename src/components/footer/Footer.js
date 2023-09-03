import React from 'react';
import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-[#1c1c1c] flex flex-col items-center text-sm py-2 cursor-pointer'>
      <span className='flex items-center gap-x-2'>
        Made by
        <BsFillSuitHeartFill 
          color='red'
          className='hover:animate-bounce'
        />
      </span>
      <span>
        by <span className='text-rose-500 px-1 hover:text-rose-700'>ANKUSH MESHRAM</span>
      </span>
    </div>
  );
};

export default Footer;