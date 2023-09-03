import React from 'react';
import {TbTemperatureCelsius} from 'react-icons/tb'

const DailyForecast = ({weatherData}) => {
  return (
    <div className='p-4 bg-[#1b1b1b] rounded-md cursor-pointer'>
      <h3 className='text-gray-500 font-bold'>5 Day ForeCast</h3>
      <section className='py-4'>
        {typeof weatherData.list != 'undefined' ? (
          <div className='flex flex-col lg:flex-row gap-4'>
            {weatherData.list.map((daily,i) => (
              <div 
                key={i}
                className='bg-[#0e0e0e] p-4 rounded-md lg:text-xs sm:text-lg w-full lg:w-1/5 flex lg:flex-col sm:justify-between lg:justify-start items-center lg:items-start lg:gap-y-3 '
                >
                <span className='text-gray-400' >{new Date(`${daily.dt_txt}`).toDateString()}</span>
                <div className='flex justify-between py-1'>
                  <span className='self-center'>
                  <img src={`http://openweathermap.org/img/w/${daily.weather[0].icon}.png`} alt='icon'
                  className='w-14'
                  />
                  </span>
                  <div className='flex flex-col gap-y-3 text-md lg:text-xs font-semibold'>
                    <span className='flex gap-x-1 items-center'>
                      {daily.main.temp_max}
                      <TbTemperatureCelsius />
                    </span>
                    <span className='flex gap-x-1 items-center'>
                      {daily.main.temp_min}
                      <TbTemperatureCelsius />
                    </span>
                  </div>
                </div>
              </div> 
            ))}
          </div>
        ) : (
          <></>
          )}
      </section>
    </div>
  );
};

export default DailyForecast;