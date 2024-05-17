// import React from 'react'

// These are relevant imports for the home page component 
import { useEffect, useState } from "react";
import SideNav from "./Templates/SideNav";
import TopNav from "./Templates/TopNav";
import axios from "../Utils/Axios";
import Header from "./Templates/Header";
import HorizentalCards from "./Templates/HorizentalCards";
import Dropdown from "./Templates/Dropdown";
import Loading from "./Loading";


// This is the functional component of home page
const Home = () => {
  // This is title for home page...
  document.title = "React_Movie-APP | Home";


  // These are some state data for our app...
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setcategory] = useState("all");


  // This function is responsible for fetching all day trending movie images and randomly setting into wallpaper for header part....
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


  // This function is responsible fetching all day trending movie details...
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
  // This is the useEffect hook in react for calling the getTrending() function and getWallpaper 
  useEffect(() => {
    getTrending();
    !wallpaper && getWallpaper();
  }, [category]);

  // Returning the jsx for Home component
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

// Exporting it for further usecases....
export default Home;
