import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Notfound from "../Notfound";

const Trailer = () => {
  const Navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytVideo = useSelector((state) => state[category].info.videos);
  //   console.log(category, ytVideo);
  return (
    <div className="absolute z-[100] w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,.8)] text-white flex items-center justify-center">
      <Link
        onClick={() => Navigate(-1)}
        className="absolute hover:text-[#6556cd] ri-close-fill text-3xl text-white top-[5%] right-[5%]"
      ></Link>
      {ytVideo ? (
        <ReactPlayer
          height={500}
          width={1000}
          url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
        />
      ) : (
        <Notfound />
      )}
    </div>
  );
};

export default Trailer;
