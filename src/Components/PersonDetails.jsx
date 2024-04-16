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

  return <div>PersonDetails</div>;
};

export default PersonDetails;
