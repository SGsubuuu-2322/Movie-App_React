// import React from 'react'
import { useNavigate } from "react-router-dom";
import TopNav from "./Templates/TopNav";
import Dropdown from "./Templates/Dropdown";
import { useEffect, useState } from "react";
import axios from "../Utils/Axios";

const Trending = () => {
  const Navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState(null);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      setTrending(data.results);
      // console.log(randomWallpaper);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  // console.log(trending);

  useEffect(() => {
    getTrending();
  }, [category, duration]);

  return (
    <div className="px-[3%] h-screen w-screen">
      <div className="w-full flex items-center justify-between">
        <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => Navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
          <Dropdown title="category" options={["movie", "tv", "all"]} />
          <div className="w-[2%]"></div>
          <Dropdown title="duration" options={["week", "day"]} />
        </div>
      </div>
    </div>
  );
};

export default Trending;
