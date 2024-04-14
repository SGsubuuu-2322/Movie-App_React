export { unloadMovie } from "../reducers/MovieSlice";
import axios from "../../Utils/Axios";
import { loadMovie } from "../reducers/MovieSlice";

export const asyncLoadMovie = (id) => async (Dispatch) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalId = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const watchProviders = await axios.get(`/movie/${id}/watch/providers`);

    let theUltimateDetails = {
      detail: detail.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map((t) => t.english_name),
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchProviders: watchProviders.data.results.IN,
    };

    console.log(theUltimateDetails);
    Dispatch(loadMovie(theUltimateDetails));
  } catch (err) {
    console.log("Error: ", err);
  }
};
