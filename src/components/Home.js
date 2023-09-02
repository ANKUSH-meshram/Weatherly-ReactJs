import React, { useEffect, useState } from 'react';
import CurrentWeatherCard from './weatherInfo/CurrentWeatherCard';
import Nav from './header/Nav';
import axios from 'axios';
import { Api_Key, BaseURL } from '../api/Api';
import TodaysHighlights from './weatherInfo/TodaysHighlights';
import {FaHome} from 'react-icons/fa'
import { TailSpin } from "react-loader-spinner";
import DailyForecast from './weatherInfo/DailyForecast';

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [url, setUrl] = useState(``);


  const fetchWeather = async (e) => {
    setLoading(true);
    try {
      const {data} = await axios.get(`${BaseURL}?q=${searchText}&appid=${Api_Key}&units=metric&cnt=6`)
      setWeatherData(data);
      // console.log(data)
    } catch (error) {
      // console.log(error)
    }
    setLoading(false);
    setSearchText("")
  }

  const getLocation = () => {
    if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((position) =>{
                let la = position.coords.latitude;
                let lon = position.coords.longitude;
                setLat(la)
                setLong(lon)
                setUrl(`${BaseURL}?lat=${lat}&lon=${long}&appid=${Api_Key}&units=metric&cnt=5`)
          }) 
    }
  }

  const getWeather = async () =>{
    setLoading(true);
    try {
      const {data} = await axios.get(`${url}`)
      setWeatherData(data)
      // console.log(data)
    } catch (error) {
      // console.log(error);
    }
    setLoading(false);
  }

  useEffect(() =>{
    getLocation();
    if(url){ 
      getWeather();
    }
    },[url])
  
  return (
    <div className=' flex flex-col gap-4'>
      <Nav 
        searchText={searchText}
        setSearchText={setSearchText}
        fetchWeather={fetchWeather}
      />
      {/* Weather Data */}
      <main className='px-28 py-20 flex flex-col items-center'>


          {loading ? (
            <TailSpin width={50} radius={1} color="pink" />
            ) : (
            <>
              {/* {city and time} */}
              <div className='py-2 text-xl flex flex-col self-start'>
                <div className='flex items-center gap-2'>
                  <FaHome />
                  {typeof weatherData.city != 'undefined' ? (
                    <span>{weatherData.city.name}, {weatherData.city.country}</span>
                    ) : (
                    <></>)
                  }
                </div>

                {/* date and time */}
                  {typeof weatherData.list != 'undefined' ? (
                    <span
                      className='text-sm text-gray-500'
                    >{new Date(`${weatherData.list[0].dt_txt}`).toDateString()}</span>
                  ) : <></>}

              </div>

              <section className='flex w-full justify-between gap-4'>
                  <CurrentWeatherCard 
                    weatherData={weatherData}
                  />
                  <TodaysHighlights 
                    weatherData={weatherData}
                  />
              </section>

              <div className='w-full py-4'>
                <DailyForecast 
                  weatherData={weatherData}
                />
              </div>
            </>        
          )}

      </main>  
    </div>
  );
};


export default Home;