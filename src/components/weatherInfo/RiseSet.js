import React from 'react';
import {BsFillSunriseFill, BsFillSunsetFill} from 'react-icons/bs'

const RiseSet = ({weatherData}) => {
  return (
    <div className='cursor-pointer'>
      <span className='font-bold text-gray-500'>Sunrise/Sunset</span>

      <div>
        {typeof weatherData.city != 'undefined' ? (
          <section className='flex gap-y-3 py-6 sm:py-10 flex-col'>

            <div>
              <div className='flex items-center gap-x-2 text-gray-500'>
                <BsFillSunriseFill className=''/> Sunrise
              </div>
              <div className='text-[10px] sm:text-xs py-1'>
                {new Date (`${weatherData.city.sunrise}` * 1000).toUTCString()}
              </div>
            </div>

            <div>
              <div className='flex items-center gap-x-2 text-gray-500 '>
                <BsFillSunsetFill />
                Sunset
              </div>
              <div className='text-[10px] sm:text-xs py-1'>
                {new Date (`${weatherData.city.sunset}` * 1000).toUTCString()}
              </div>
            </div>
          </section>
        ) : (<></>)}
      </div>
    </div>
  );
};

export default RiseSet;