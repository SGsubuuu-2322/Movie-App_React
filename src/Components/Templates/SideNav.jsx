// import React from 'react'

// importing the Link properties from react-router-dom
import { Link } from "react-router-dom";


// This is the sidenav functional component...
const SideNav = () => {
  return (

    // This is the parent container....
    <div className="w-[20%] h-full border-zinc-400 border-r-2 p-10">
      <h1 className="text-2xl font-bold text-white">
        <i className="text-[#6556cd] ri-tv-fill mr-2"></i>
        <span className="text-2xl"> MovieApp.</span>
      </h1>

{/* These are the navbar links... */}
      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-xl font-semibold text-white mt-10 mb-5">
          New Feeds
        </h1>

{/* These are the links... */}
        <Link
          to="/trending"
          className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="ri-fire-fill"></i>
          Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link
          to="/movies"
          className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link
          to="/tv"
          className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="mr-2 ri-tv-2-fill"></i>
          TV Shows
        </Link>
        <Link
          to="/person"
          className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="mr-2 ri-team-fill"></i>
          People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400" />

      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-xl font-semibold text-white mt-10 mb-5">
          Website Information
        </h1>

        <Link className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-2">
          <i className="mr-2 ri-information-2-fill"></i>
          About Movie_App
        </Link>
        <Link className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-2">
          <i className="mr-2 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

// Exporting it for using it elsewhere...
export default SideNav;
