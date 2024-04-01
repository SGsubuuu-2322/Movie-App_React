// import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="relative w-full h-[10vh] flex justify-start items-center">
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

      <div className="bg-zinc-200 w-[50%] max-h-[50vh] absolute top-[90%] overflow-auto">
        <Link className="hover:text-black hover:bg-zinc-300 duration-300 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 text-zinc-600 font-semibold">
          <img src="" alt="" />
          <span>Hello Everyone....</span>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
