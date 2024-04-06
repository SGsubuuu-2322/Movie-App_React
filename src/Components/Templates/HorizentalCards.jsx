// import React from 'react'

import Dropdown from "./Dropdown";

const HorizentalCards = ({ data }) => {
  //   console.log(data);
  return (
    <div className="w-full  p-5">
      <div className="mb-5">
        <h1 className="text-3xl text-zinc-400 font-bold">Trending</h1>
        <Dropdown />
      </div>

      <div className="w-[100%] flex overflow-y-hidden">
        {data.map((d, i) => (
          <div
            key={i}
            className="min-w-[15%] mr-5 mb-2 bg-zinc-900 pb-2 overflow-hidden"
          >
            <img
              className="w-full h-[55%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />

            <div className="text-white p-1 h-[30%]">
              <h1 className=" mt-3 text-xl font-semibold ">
                {" "}
                {d.name || d.original_name || d.title || d.original_title}
              </h1>
              <p>
                {d.overview.slice(0, 50)}...
                <span className="text-zinc-500">more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizentalCards;
