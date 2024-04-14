import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { asyncLoadMovie, unloadMovie } from "../Store/actions/MovieActions";

import Loading from "../Components/Loading";

const MovieDetails = () => {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);

  useEffect(() => {
    Dispatch(asyncLoadMovie(id));

    return () => {
      Dispatch(unloadMovie());
    };
  }, []);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "top 5%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen w-screen px-[10%]"
    >
      <nav className="h-[10vh] w-full text-zinc-200 flex items-center gap-10 text-2xl">
        <Link
          onClick={() => Navigate(-1)}
          className="hover:text-[#6556cd] ri-arrow-left-line"
        ></Link>

        <a target="_blank" href={info.detail.homepage}>
          <i className="hover:text-[#6556cd] ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
        >
          <i className="hover:text-[#6556cd] ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalId.imdb_id}/`}
          className="hover:text-[#6556cd]"
        >
          imdb
        </a>
      </nav>

      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.6)] h-[40vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="ml-20">
          <h1 className="text-5xl font-black text-white">
            {info.detail.name ||
              info.detail.original_name ||
              info.detail.title ||
              info.detail.original_title}

            <small className="text-2xl font-bold text-zinc-300">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className=" mt-3 mb-10 flex items-center gap-x-3 text-white">
            <span className="text-xl text-white font-semibold h-[6vh] w-[6vh] flex justify-center items-center bg-yellow-400 rounded-full">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="w-[60px] text-2xl font-semibold leading-6">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>
        </div>
      </div>

      <div className="w-[80%] flex flex-col gap-y-5 mt-5">
        {info.watchProviders && info.watchProviders.flatrate && (
          <div className="flex items-center text-white gap-x-5">
            <h1>Available on Platforms: </h1>
            {info.watchProviders.flatrate.map((wp, i) => (
              <img
                title={wp.provider_name}
                className="w-[5vh] h-[5vh] rounded-md object-cover"
                key={i}
                src={`https://image.tmdb.org/t/p/original/${wp.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchProviders && info.watchProviders.rent && (
          <div className="flex items-center text-white gap-x-5">
            <h1>Available on Rent: </h1>
            {info.watchProviders.rent.map((wp, i) => (
              <img
                title={wp.provider_name}
                className="w-[5vh] h-[5vh] rounded-md object-cover"
                key={i}
                src={`https://image.tmdb.org/t/p/original/${wp.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchProviders && info.watchProviders.buy && (
          <div className="flex items-center text-white gap-x-5">
            <h1>Available to Buy: </h1>
            {info.watchProviders.buy.map((wp, i) => (
              <img
                title={wp.provider_name}
                className="w-[5vh] h-[5vh] rounded-md object-cover"
                key={i}
                src={`https://image.tmdb.org/t/p/original/${wp.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
