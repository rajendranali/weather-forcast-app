import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const SearchbarInput = () => {
  const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true);
  };

  const handleCityClick = (city) => {
    setSearchTerm(city);
    setShowDropdown(false);
  };

  return (
    <div className="relative flex items-center justify-center my-6 space-x-4">
      <div className="flex items-center w-2/4 relative">
        <input
          type="text"
          placeholder="Search.."
          value={searchTerm}
          onChange={handleInputChange}
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize text-black"
        />
        {showDropdown && searchTerm && (
          <div className="absolute z-10 top-full bg-white border rounded-md shadow-md mt-2 w-full  text-black">
            {cities
              .filter((city) => city.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((city) => (
                <div
                  key={city}
                  className="p-2 cursor-pointer hover:bg-gray-100 text-black"
                  onClick={() => handleCityClick(city)}
                >
                  {city}
                </div>
              ))}
          </div>
        )}
      </div>
      <UilSearch size={25} className="text-white" />
      <UilLocationPoint size={25} className="text-white" />
      <div className="flex items-center">
        <button className="text-white text-xl font-light">°C</button>
        <p className="text-xl text-white mx-2">|</p>
        <button className="text-white text-xl font-light">°F</button>
      </div>
    </div>
  );
};

export default SearchbarInput;
