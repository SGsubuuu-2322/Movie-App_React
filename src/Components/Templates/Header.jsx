// import React from 'react'

import { Link } from "react-router-dom";

const Header = ({ wallpaper }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${
          wallpaper.backdrop_path || wallpaper.poster_path
        })`,
        backgroundPosition: "top 1%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-5"
    >
      <h1 className="text-5xl font-black text-white w-[70%]">
        {" "}
        {wallpaper.name ||
          wallpaper.original_name ||
          wallpaper.title ||
          wallpaper.original_title}
      </h1>
      <p className="text-white w-[70%] mt-3 mb-3">
        {wallpaper.overview.slice(0, 200)}...
        <Link
          to={`/${wallpaper.media_type}/details/${wallpaper.id}`}
          className="text-blue-600"
        >
          more
        </Link>
      </p>
      <p className="text-white">
        <i className="text-yellow-500 ri-megaphone-fill"></i>
        {wallpaper.release_date || "No Information"}
        <i className="text-yellow-500 ml-5 ri-album-fill"></i>
        {wallpaper.media_type.toUpperCase()}
      </p>
      <Link
        to={`/${wallpaper.media_type}/details/${wallpaper.id}/trailer`}
        className="bg-[#6556cd] mt-5 text-white rounded-lg p-2"
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
