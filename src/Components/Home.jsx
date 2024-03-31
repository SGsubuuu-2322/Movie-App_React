// import React from 'react'

import SideNav from "./Templates/SideNav";
import TopNav from "./Templates/TopNav";

const Home = () => {
  document.title = "React_Movie-APP | Home";
  return (
    <>
      <SideNav />
      <div className="w-[80%] h-full">
        <TopNav />
      </div>
    </>
  );
};

export default Home;
