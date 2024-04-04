// import React from 'react'

import { useEffect, useState } from "react";
import SideNav from "./Templates/SideNav";
import TopNav from "./Templates/TopNav";
import axios from "../Utils/Axios";
import Header from "./Templates/Header";
import HorizentalCards from "./Templates/HorizentalCards";

const Home = () => {
  document.title = "React_Movie-APP | Home";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);

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
      const { data } = await axios.get(`/trending/all/day`);
      setTrending(data.results);
      // console.log(randomWallpaper);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  // console.log(trending);
  useEffect(() => {
    !wallpaper && getWallpaper();
    !trending && getTrending();
  }, []);

  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <TopNav />
        <Header wallpaper={wallpaper} />
        <HorizentalCards data={trending} />
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default Home;
