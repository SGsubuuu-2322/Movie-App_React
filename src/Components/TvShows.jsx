import { useNavigate } from "react-router-dom";
import axios from "../Utils/Axios";

import { useEffect, useState } from "react";
import TopNav from "./Templates/TopNav";
import Dropdown from "./Templates/Dropdown";
import Cards from "./Templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const TvShows = () => {
  document.title = "React_Movie-App | Movies ";
  const Navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [tvShows, settvShows] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const gettvShows = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        settvShows((prev) => [...prev, ...data.results]);
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
    if (tvShows.length === 0) {
      gettvShows();
    } else {
      setpage(1);
      settvShows([]);
      gettvShows();
    }
  };

  useEffect(() => {
    refreshhandler();
  }, [category]);
  return tvShows.length > 0 ? (
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
          <Dropdown
            title="category"
            options={["airing_today", "on_the_air", "top_rated", "popular"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tvShows.length}
        next={gettvShows}
        hasMore={hasMore}
        loader={<h1>...Loading</h1>}
      >
        <Cards data={tvShows} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default TvShows;
