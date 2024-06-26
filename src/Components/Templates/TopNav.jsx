// import React from 'react'

// This is the top nav component of our app's home page...

// And these are some few imports for our app...
import axios from "../../Utils/Axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noImage from "/noImage.jpg";


// This is our topnav functional component definition...
const TopNav = () => {

  // And these are two state variables for our component...
  const [query, setQuery] = useState("");
  const [searches, setsearches] = useState(null);

  // And this is the getSearches function for searching the keyword from the tmdb api
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
      // console.log(data.results);
    } catch (err) {
      console.log("Error: ", err);
    }
  };


  // This is useEffect hook used for calling getSearches function whenever query changes...
  useEffect(() => {
    getSearches();
  }, [query]);


  // This is jsx return to showcase our TopNav component....
  return (
    // This is the search bar....
    <div className="z-[100] relative w-[80%] h-[10vh] mx-auto flex items-center">
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

{/* This is search result showcase section.... */}
      <div className="bg-zinc-200 w-[50%] max-h-[50vh] absolute top-[95%] left-[8%] overflow-auto">
        {searches &&
          searches.map((s, i) => (
            <Link
              to={`/${s.media_type}/details/${s.id}`}
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


// This is exporting our TopNav component...
export default TopNav;
