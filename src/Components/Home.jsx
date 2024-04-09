// import React from 'react'

import { useEffect, useState } from "react";
import SideNav from "./Templates/SideNav";
import TopNav from "./Templates/TopNav";
import axios from "../Utils/Axios";
import Header from "./Templates/Header";
import HorizentalCards from "./Templates/HorizentalCards";
import Dropdown from "./Templates/Dropdown";
import Loading from "./Loading";

const Home = () => {
  document.title = "React_Movie-APP | Home";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setcategory] = useState("all");

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const randomWallpaper =
        data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomWallpaper);
      // console.log(randomWallpaper);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
      // console.log(randomWallpaper);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  // console.log(trending);
  useEffect(() => {
    getTrending();
    !wallpaper && getWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <TopNav />
        <Header wallpaper={wallpaper} />
        <div className="p-5 flex justify-between">
          <h1 className="text-3xl text-zinc-400 font-bold">Trending</h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <HorizentalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
