import React from 'react';

const TimeandLocation = ({ weather }) => {
  const getFormattedDateTime = () => {
    const options = { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' };
    const localTime = new Date().toLocaleString('en-US', options);
    const [, day, month, , year, time] = localTime.split(' ');

    return `${day} ${month} ${year} | Local time: ${time}`;
  };

  // Function to add ordinal suffix to the day
  // const ordinalSuffix = (day) => {
  //   if (day > 10 && day < 20) {
  //     return 'th';
  //   }
  //   switch (day % 10) {
  //     case 1:
  //       return 'st';
  //     case 2:
  //       return 'nd';
  //     case 3:
  //       return 'rd';
  //     default:
  //       return 'th';
  //   }
  // };

  return (
    <div>
      <div className='flex flex-row justify-center items-center my-6'>
        <p className='text-white text-xl font-extralight'>{getFormattedDateTime()}</p>
      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>
          {weather.name}, {weather.country}
        </p>
      </div>
    </div>
  );
};

export default TimeandLocation;
