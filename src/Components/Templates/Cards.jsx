// import React from 'react'

import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="flex flex-wrap w-full">
      {data.map((d, i) => (
        <Link className="w-[25vh] mr-[5%] mb-[5%]" key={i}>
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.6)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              d.profile_path || d.backdrop_path
            }`}
            alt=""
          />
          <h1 className="text-2xl text-zinc-300 font-semibold mt-3">
            {d.name || d.original_name || d.title || d.original_title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;