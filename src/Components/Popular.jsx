// import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from "../Utils/Axios";

import { useEffect, useState } from "react";
import TopNav from "./Templates/TopNav";
import Dropdown from "./Templates/Dropdown";
import Cards from "./Templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
  const Navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "React_Movie-App | Trending " + category.toUpperCase();

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`/${category}/popular?page=${page}`);
      if (data.results.length > 0) {
        setPopular((prev) => [...prev, ...data.results]);
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
    if (popular.length === 0) {
      getPopular();
    } else {
      setpage(1);
      setPopular([]);
      getPopular();
    }
  };

  useEffect(() => {
    refreshhandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="h-screen w-screen">
      <div className="w-full flex items-center justify-between px-[5%]">
        <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => Navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>
          Popular
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
          <Dropdown
            title="category"
            options={["movie", "tv"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasMore}
        loader={<h1>...Loading</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
