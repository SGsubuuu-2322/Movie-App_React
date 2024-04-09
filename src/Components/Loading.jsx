// import React from 'react'
import giphy from "/giphy.gif";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <img className="object-cover h-[70%]" src={giphy} alt="loader" />
    </div>
  );
};

export default Loading;
