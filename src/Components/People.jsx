// import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from "../Utils/Axios";

import { useEffect, useState } from "react";
import TopNav from "./Templates/TopNav";
import Dropdown from "./Templates/Dropdown";
import Cards from "./Templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  document.title = "React_Movie-App | Movies ";
  const Navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [person, setperson] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setperson((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
      //   console.log(data);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  // console.log(trending);

  const refreshhandler = () => {
    if (person.length === 0) {
      getPerson();
    } else {
      setpage(1);
      setperson([]);
      getPerson();
    }
  };

  useEffect(() => {
    refreshhandler();
  }, [category]);

  return person.length > 0 ? (
    <div className="h-screen w-screen">
      <div className="w-full flex items-center justify-between px-[5%]">
        <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => Navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>
          Tv Shows<span className="ml-2 text-sm">({category})</span>
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={getPerson}
        hasMore={hasMore}
        loader={<h1>...Loading</h1>}
      >
        <Cards data={person} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
