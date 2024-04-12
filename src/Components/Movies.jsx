import { useNavigate } from "react-router-dom";
import axios from "../Utils/Axios";

import { useEffect, useState } from "react";
import TopNav from "./Templates/TopNav";
import Dropdown from "./Templates/Dropdown";
import Cards from "./Templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = () => {
  document.title = "React_Movie-App | Movies ";
  const Navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovies((prev) => [...prev, ...data.results]);
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
    if (movies.length === 0) {
      getMovies();
    } else {
      setpage(1);
      setMovies([]);
      getMovies();
    }
  };

  useEffect(() => {
    refreshhandler();
  }, [category]);
  return movies.length > 0 ? (
    <div className="h-screen w-screen">
      <div className="w-full flex items-center justify-between px-[5%]">
        <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => Navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>
          Movies<span className="ml-2 text-sm">({category})</span>
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
          <Dropdown
            title="category"
            options={["upcoming", "now_playing", "top_rated", "popular"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={movies.length}
        next={getMovies}
        hasMore={hasMore}
        loader={<h1>...Loading</h1>}
      >
        <Cards data={movies} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
