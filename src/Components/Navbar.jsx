import React from "react";

const Navbar = () => {
    const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"]

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city, index) => (
        <button key={index} className="text-white text-lg font-medium">
          {city}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
