import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncLoadMovie, unloadMovie } from "../Store/actions/MovieActions";

const MovieDetails = () => {
  const Dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    Dispatch(asyncLoadMovie(id));

    return () => {
      Dispatch(unloadMovie());
    };
  }, []);

  return <div>MovieDetails</div>;
};

export default MovieDetails;
