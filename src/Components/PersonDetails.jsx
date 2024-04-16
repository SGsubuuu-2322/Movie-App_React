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
    <div className="px-[10%] w-screen flex flex-col">
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

export default PersonDetails;
