import useFetchQuery from "../hooks/useFetchQuery";
import Imagesfiles from "./Imagesfiles";

const Body = ({ query }) => {
  const { data, loading, error } = useFetchQuery({ query });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-green-400 text-lg font-semibold animate-pulse">
        Loading video assets...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 font-medium bg-red-100 border border-red-300 rounded-lg p-4 shadow-md">
        Error loading videos: {error.message}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center text-gray-400 bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-inner">
        No videos found for this query.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 p-6 bg-gray-900 rounded-2xl shadow-inner">
      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((video) => {
          const file =
            video.video_files.find((file) => file.width > 720) ||
            video.video_files[0];

          return (
            <div
              key={video.id}
              className="rounded-2xl overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-green-500/20 transform hover:scale-105"
            >
              <video
                className="w-full h-56 object-cover"
                controls
                autoPlay
                loop
                muted
                preload="metadata"
              >
                <source src={file.link} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="p-3 bg-gray-900/70 text-gray-300 backdrop-blur-sm">
                <p className="font-semibold text-green-400 truncate">
                  {video.user?.name || "Unknown Creator"}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Duration: {video.duration}s
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Horizontal Image Row with Dynamic Downloads */}
      <div className="flex overflow-x-auto gap-6 p-4 bg-gray-800 rounded-xl shadow-lg scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-700">
        {data.map((item, index) => {
          const imageData = item.video_pictures?.[index];
          return (
            imageData && (
              <div
                key={index}
                className="relative flex-shrink-0 w-64 sm:w-80 md:w-96 rounded-2xl overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-green-500/20 transform hover:scale-105"
              >
                {/* Image Display */}
                <Imagesfiles value={imageData} />

                {/* Dynamic Download Button */}
  
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Body;
