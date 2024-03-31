// import React from 'react'

import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="relative w-full h-[10vh] flex justify-center items-center">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        className="w-[50%] mx-10 p-2 outline-none text-xl border-none bg-transparent text-zinc-200"
        type="text"
        placeholder="Search anything..."
      />
      <i className="text-3xl text-zinc-400 ri-close-fill"></i>
      <div className="bg-zinc-200 w-[50%] h-[50vh] absolute top-[90%] overflow-auto">
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 text-zinc-600 font-semibold">
          <img src="" alt="" />
          <span>Hello Everyone....</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 text-zinc-600 font-semibold">
          <img src="" alt="" />
          <span>Hello Everyone....</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 text-zinc-600 font-semibold">
          <img src="" alt="" />
          <span>Hello Everyone....</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 text-zinc-600 font-semibold">
          <img src="" alt="" />
          <span>Hello Everyone....</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 text-zinc-600 font-semibold">
          <img src="" alt="" />
          <span>Hello Everyone....</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 text-zinc-600 font-semibold">
          <img src="" alt="" />
          <span>Hello Everyone....</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 text-zinc-600 font-semibold">
          <img src="" alt="" />
          <span>Hello Everyone....</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 text-zinc-600 font-semibold">
          <img src="" alt="" />
          <span>Hello Everyone....</span>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
