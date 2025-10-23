import { useState, useEffect } from "react";
import { pixels_key } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../utils/DataSlice";
const useFetchQuery = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = useSelector((store) => store.query.queries)
  const dispatch = useDispatch();
  const data = useSelector((store) =>store.data.datas)
   const fetchVideo = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.pexels.com/videos/search?query=${query}`,
          {
            headers: {
              Authorization: pixels_key,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        dispatch(addData(data?.videos));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
   useEffect(() => {
     !data && fetchVideo();
  }, []);

  return {loading, error };
};

export default useFetchQuery;
