// import React from 'react'

import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movies from "./Components/Movies";
import TvShows from "./Components/TvShows";
import People from "./Components/People";
import MovieDetails from "./Components/MovieDetails";
import TvDetails from "./Components/TvDetails";
import PersonDetails from "./Components/PersonDetails";

const App = () => {
  return (
    <div className="bg-[#1f1e24] h-screen w-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />}>
          <Route path="/movies/details/:id" element={<MovieDetails />} />
        </Route>
        <Route path="/tv-shows" element={<TvShows />}>
          <Route path="/tv-shows/details/:id" element={<TvDetails />} />
        </Route>
        <Route path="/person" element={<People />}>
          <Route path="/person/details/:id" element={<PersonDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
