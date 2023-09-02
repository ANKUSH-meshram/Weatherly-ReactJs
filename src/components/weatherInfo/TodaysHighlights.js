import React from 'react';
import {TbTemperatureCelsius} from 'react-icons/tb'


const TodaysHighlights = ({weatherData}) => {
  return (
    <div className='w-1/2 p-4 bg-[#1b1b1b] rounded-md cursor-pointer'>
      <span className='font-bold text-gray-500'>Today's highlights</span>

      <section>
        {typeof weatherData.list != 'undefined' ? (
          <div className='flex flex-wrap justify-between gap-x-10 gap-y-3 py-4'>
            {/* feels like */}
            <div className='flex flex-col w-1/3'>
              <span className='text-gray-400'>Feels like</span>
              <span className='font-bold flex items-center gap-x-1'>{weatherData.list[0].main.feels_like}
              <TbTemperatureCelsius />
              </span>
            </div>
            {/* humidity */}
            <div className='flex flex-col w-1/3'>
              <span className='text-gray-400'>Humidity</span>
              <span className='font-bold'>{weatherData.list[0].main.humidity} %</span>
            </div>
            {/* pressure */}
            <div className='flex flex-col w-1/3'>
              <span className='text-gray-400'>Pressure</span>
              <span className='font-bold'>{weatherData.list[0].main.pressure} mb</span>
            </div>
            {/* sea level */}
            <div className='flex flex-col w-1/3'>
              <span className='text-gray-400'>Sea Level</span>
              <span className='font-bold'>{weatherData.list[0].main.sea_level} m</span>
            </div>
            {/* visibility */}
            <div className='flex flex-col w-1/3'>
              <span className='text-gray-400'>Visibility</span>
              <span className='font-bold'>{`${weatherData.list[0].visibility}`/1000} km</span>
            </div>
            {/* wind speed */}
            <div className='flex flex-col w-1/3'>
              <span>Wind</span>
              <span className='font-bold'>{weatherData.list[0].wind.speed} km/h</span>
            </div>

          </div>
        ) : (
          <></>
        )}
          
      </section>
    </div>
  );
};

export default TodaysHighlights;