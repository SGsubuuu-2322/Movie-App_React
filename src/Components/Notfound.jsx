// import React from 'react'
import giphy from "/404.gif";

const Notfound = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <img className="object-cover h-[70%]" src={giphy} alt="loader" />
    </div>
  );
};

export default Notfound;
