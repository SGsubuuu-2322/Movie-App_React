import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useParams,
  useNavigate,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import { asyncLoadPerson, unloadPerson } from "../Store/actions/PersonActions";
import HorizentalCards from "./Templates/HorizentalCards";

import Loading from "../Components/Loading";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  const { id } = useParams();
  const { info } = useSelector((state) => state.person);

  console.log(info);

  useEffect(() => {
    Dispatch(asyncLoadPerson(id));

    return () => {
      Dispatch(unloadPerson());
    };
  }, [id]);

  return info ? (
    <div className="px-[5%] w-screen flex flex-col bg-[#1f1e24] h-[150vh]">
      <nav className="h-[5vh] w-full text-zinc-200 flex items-center gap-10 text-2xl">
        <Link
          onClick={() => Navigate(-1)}
          className="hover:text-[#6556cd] ri-arrow-left-line"
        ></Link>
      </nav>
      <div className="w-full flex">
        <div className="w-[15%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.6)] w-full  h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />

          <hr className="mt-8 mb-5 border-none bg-zinc-500 h-[2px]" />

          <div className="text-2xl text-white flex gap-x-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
            >
              <i className="hover:text-[#6556cd] ri-earth-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalId.facebook_id}`}
            >
              <i className="hover:text-[#6556cd] ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalId.instagram_id}`}
            >
              <i className="hover:text-[#6556cd] ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalId.twitter_id}`}
            >
              <i className="hover:text-[#6556cd] ri-twitter-x-fill"></i>
            </a>
          </div>

          <h1 className="text-2xl text-zinc-400 font-semibold my-2">
            Personal Info:
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Known For:</h1>
          <h1 className=" text-zinc-400">{info.detail.known_for_department}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-1">Gender:</h1>
          <h1 className=" text-zinc-400">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-1">
            Birthday:
          </h1>
          <h1 className=" text-zinc-400">{info.detail.birthday}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold">Deathday:</h1>
          <h1 className=" text-zinc-400 mt-0">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold">
            Place of Birth:
          </h1>
          <h1 className=" text-zinc-400 mt-0">{info.detail.place_of_birth}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold">
            Also Known as:
          </h1>
          <h1 className=" text-zinc-400 mt-0">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>

        <div className="w-[85%] ml-[3%]">
          <h1 className="text-6xl text-zinc-400 font-black my-3">
            {info.detail.name}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold">Biography:</h1>
          <p className="text-zinc-400">{info.detail.biography}</p>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
