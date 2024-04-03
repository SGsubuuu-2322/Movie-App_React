// import React from 'react'

import { Link } from "react-router-dom";

const Header = ({ wallpaper }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${
          wallpaper.backdrop_path || wallpaper.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end p-5"
    >
      <h1 className="text-5xl font-black text-white w-[70%]">
        {" "}
        {wallpaper.name ||
          wallpaper.original_name ||
          wallpaper.title ||
          wallpaper.original_title}
      </h1>
      <p className="text-white w-[70%] mt-3">
        {wallpaper.overview.slice(0, 200)}...
        <Link className="text-blue-600">more</Link>
      </p>
    </div>
  );
};

export default Header;
