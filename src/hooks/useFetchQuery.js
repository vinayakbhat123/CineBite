import { useState, useEffect } from "react";
import { pixels_key } from "../utils/constants";

const useFetchQuery = ({ query }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

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
        console.log("Fetched video data:", data.videos);
        setData(data?.videos );
      } catch (err) {
        console.error("Error fetching video:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [query]);

  return { data, loading, error };
};

export default useFetchQuery;
