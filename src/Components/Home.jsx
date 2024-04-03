// import React from 'react'

import { useEffect, useState } from "react";
import SideNav from "./Templates/SideNav";
import TopNav from "./Templates/TopNav";
import axios from "../Utils/Axios";
import Header from "./Templates/Header";

const Home = () => {
  document.title = "React_Movie-APP | Home";

  const [wallpaper, setWallpaper] = useState(null);

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

  useEffect(() => {
    !wallpaper && getWallpaper();
  }, []);

  return wallpaper ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full">
        <TopNav />
        <Header wallpaper={wallpaper} />
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default Home;
