// import React from 'react'
import { useNavigate } from "react-router-dom";
import TopNav from "./Templates/TopNav";
import Dropdown from "./Templates/Dropdown";
import { useEffect, useState } from "react";
import axios from "../Utils/Axios";
import Loading from "./Loading";
import Cards from "./Templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  document.title = "React_Movie-App | Trending ";
  const Navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);


  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        setTrending((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
      // console.log(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  // console.log(trending);

  const refreshhandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setpage(1);
      setTrending([]);
      getTrending();
    }
  };

  useEffect(() => {
    refreshhandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="h-screen w-screen">
      <div className="w-full flex items-center justify-between px-[5%]">
        <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => Navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
          <Dropdown
            title="category"
            options={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title="duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<h1>...Loading</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
