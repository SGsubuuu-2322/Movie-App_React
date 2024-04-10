// import React from 'react'
import { useNavigate } from "react-router-dom";
import TopNav from "./Templates/TopNav";
import Dropdown from "./Templates/Dropdown";

const Trending = () => {
  const Navigate = useNavigate();
  return (
    <div className="p-[3%] h-screen w-screen">
      <div className="w-full flex items-center">
        <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => Navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <TopNav />
        <Dropdown title="category" options={["movie", "tv", "all"]} />
        <div className="w-[2%]"></div>
        <Dropdown title="duration" options={["week", "day"]} />
      </div>
    </div>
  );
};

export default Trending;
