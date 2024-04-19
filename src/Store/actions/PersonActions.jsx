export { unloadPerson } from "../reducers/PersonSlice";
import axios from "../../Utils/Axios";
import { loadPerson } from "../reducers/PersonSlice";

export const asyncLoadPerson = (id) => async (Dispatch) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalId = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);

    let theUltimateDetails = {
      detail: detail.data,
      externalId: externalId.data,
      combineCredits: combinedCredits.data,
      movieCredits: movieCredits.data,
      tvCredits: tvCredits.data,
    };

    Dispatch(loadPerson(theUltimateDetails));
  } catch (err) {
    console.log("Error: ", err);
  }
};
