// import React from 'react'

const HorizentalCards = ({ data }) => {
  //   console.log(data);
  return (
    <div className="w-full h-[40vh] p-5">
      <div className="mb-5">
        <h1 className="text-3xl text-zinc-400 font-bold">Trending</h1>
      </div>

      <div className="w-[100%] h-[40vh] flex overflow-y-hidden">
        {data.map((d, i) => (
          <div key={i} className="min-w-[15%] mr-5 bg-zinc-900">
            <img
              className="w-full h-[55%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />
            <h1 className="text-xl font-black text-white">
              {" "}
              {d.name || d.original_name || d.title || d.original_title}
            </h1>
            <p className="text-white mt-3 mb-3">
              {d.overview.slice(0, 50)}...
              <span className="text-blue-600">more</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizentalCards;
