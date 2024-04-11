// import React from 'react'

import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  console.log(data);
  return (
    <div className="flex flex-wrap w-full px-[5%] pt-[1%] bg-[#1f1e24]">
      {data.map((d, i) => (
        <Link className="relative w-[25vh] mr-[5%] mb-[5%]" key={i}>
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.6)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              d.poster_path || d.backdrop_path || d.profile_path
            }`}
            alt=""
          />
          <h1 className="text-2xl text-zinc-300 font-semibold mt-3">
            {d.name || d.original_name || d.title || d.original_title}
          </h1>

          {d.vote_average && (
            <div className="absolute bottom-[35%] right-[-12%] text-xl text-white font-semibold h-[6vh] w-[6vh] flex justify-center items-center bg-yellow-400 rounded-full">
              {(d.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
