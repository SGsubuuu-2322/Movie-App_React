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
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
