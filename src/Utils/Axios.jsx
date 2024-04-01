import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTg4NWQ0OTNiYmFmOGFiMDkwZTQyM2I1N2Y4MDFiYyIsInN1YiI6IjY1NTUxYzM1MDgxNmM3MDExYTBiYjE1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KnugFzE8v24fvyQhwClPD8kyMwCLCWY2nHpKuzShNIg",
  },
});
