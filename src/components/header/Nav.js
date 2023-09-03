import React from 'react';
import Search from './Search';
// import { TbCurrentLocation } from "react-icons/tb";

const Nav = ({ searchText, setSearchText, fetchWeather }) => {
  return (
    <div className='fixed z-50 w-full py-4 flex items-center justify-between bg-[#1c1c1c] right-0 top-0 px-6'>
      <div className='hidden sm:flex gap-2 items-center cursor-pointer'>
        <img src='https://www.syngenta.com.au/sites/g/files/kgtney406/files/media/image/2022/09/22/weather_0.png' alt='Logo'
          className='w-8'
        />
        <span>Weatherly</span>
      </div>
      
      <Search 
        searchText={searchText} 
        setSearchText={setSearchText}
        fetchWeather={fetchWeather}
      />

      {/* <button className='flex gap-2 items-center bg-purple-400 p-2 rounded-full'>
        <TbCurrentLocation/>
        Current Location
      </button> */}
    </div>
  );
};

export default Nav;