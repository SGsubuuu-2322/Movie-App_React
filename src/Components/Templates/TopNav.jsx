// import React from 'react'

import axios from "../../Utils/Axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noImage from "/noImage.jpg";

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setsearches] = useState(null);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
      // console.log(data.results);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="relative w-[80%] h-[8vh] mx-auto">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        className="w-[50%] mx-10 p-2 outline-none text-xl border-none bg-transparent text-zinc-200"
        type="text"
        value={query}
        placeholder="Search anything..."
      />
      {query && (
        <i
          onClick={() => setQuery("")}
          className="text-3xl text-zinc-400 ri-close-fill"
        ></i>
      )}

      <div className="bg-zinc-200 w-[50%] max-h-[50vh] absolute top-[95%] left-[8%] overflow-auto">
        {searches &&
          searches.map((s, i) => (
            <Link
              key={i}
              className="hover:text-black hover:bg-zinc-300 duration-300 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 text-zinc-600 font-semibold"
            >
              <img
                className="w-[10vh] h-[10vh] object-cover rounded-md mr-5 shadow-xl"
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      }`
                    : noImage
                }
                alt="image"
              />
              <span>
                {s.name || s.original_name || s.title || s.original_title}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TopNav;
