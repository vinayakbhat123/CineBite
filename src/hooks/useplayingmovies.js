import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowplayingmovies } from "../utils/moviesSlice";
import { api_key } from "../utils/constants";

const usePlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(api_key);
      
      if (!response.ok) {
        throw new Error("Failed to fetch movie data");
      }

      const data = await response.json();
      console.log("Data added:", data);

      dispatch(addnowplayingmovies(data));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);
};

export default usePlayingMovies;
