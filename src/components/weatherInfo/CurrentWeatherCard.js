import React from 'react';
import {TbTemperatureCelsius} from 'react-icons/tb'
import RiseSet from './RiseSet';

const CurrentWeatherCard = ({weatherData}) => {
  return (
    <div className='flex justify-between bg-[#1b1b1b] p-4 rounded-md w-1/2 cursor-pointer'>
      <div>
        <span className='font-bold text-gray-500 '>Current Weather</span>

        {/* temp and icon */}
        <div className='py-2'>
          {typeof weatherData.list != 'undefined' ? (
            <div className='flex flex-col justify-center'>
              <span>
                <img src={`http://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`} alt='icon'
                  width={96}
                  // className='w-24'
                />
              </span>
              <span>
                <div className='flex items-center text-7xl font-bold'>
                  {weatherData.list[0].main.temp}
                  <TbTemperatureCelsius 
                    className='w-6'
                  />
                </div>
                <div className='text-gray-500'>{weatherData.list[0].weather[0].description}</div>
              </span>
            </div>
          ) : (<></>)}
        </div>
      </div>

      <RiseSet weatherData={weatherData}/>

    </div>
  );
};

export default CurrentWeatherCard;