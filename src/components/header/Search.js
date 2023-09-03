import React from 'react';
import {FaSearch} from 'react-icons/fa'


const Search = ({ searchText, setSearchText, fetchWeather }) => {

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && searchText) {
      fetchWeather()
    }
    if (e.key === 'Enter' && !searchText) {
      alert("Please type city name to search the weather")
    }
  }

  return (
    <div className='flex gap-2 items-center bg-[#6d6b6b] py-2 px-4 rounded-sm w-full sm:w-1/2 lg:w-1/3 text-gray-900'>
      <FaSearch/>
      <input
        placeholder='Enter the city to search weather'
        type='search'
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        className='bg-transparent outline-none w-full placeholder-gray-900'
        onKeyDown={handleSubmit}
      />
    </div>
  );
};

export default Search;