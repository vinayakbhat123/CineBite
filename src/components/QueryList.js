import React from "react";
import useFetchQuery from "../hooks/useFetchQuery";
import { useSelector } from "react-redux";

const QueryList = () => {
  const { loading, error } = useFetchQuery();
  const Finaldata = useSelector((store) => store.data.datas);
  if (loading) return <div>Loading assets...</div>;
  if (error) return <div>Error loading videos: {error.message}</div>;
  if (!Finaldata || Finaldata.length === 0)
    return <div>No data found. Please verify your API response.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {Finaldata.map((item, index) => {
        // Check what each item actually looks like
        console.log("Video item:", item);
        // Adjust this key depending on your actual response structure
        const videoUrl = item.url || item.video_files?.[0]?.link || "";

        if (!videoUrl) {return (<div key={index} className="text-red-500">
              Missing video URL in data item.
            </div>
          );
        }

        return (
          <div key={index} className="shadow-lg rounded-2xl overflow-hidden bg-gray-900">
            <video
              className="w-full h-64 object-cover"
              controls
              autoPlay
              loop
              muted
              poster="preview.jpg"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support video playback — please upgrade your browser.
            </video>
          </div>
        );
      })}
    </div>
  );
};

export default QueryList;
