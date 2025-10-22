import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addqueries } from "../utils/PixelsSlice";
import Body from "./Body";

const Browse = () => {
  const [searchtext, setsearchtext] = useState('');
  const query = useSelector(store => store.Pixels?.Queries);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center py-10 px-6">
      <div className="w-full max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-gray-800/60 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-2xl">
          
          {/* Search Input */}
          <input
            className="w-full md:w-2/3 border border-green-400 bg-gray-900/50 text-white rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent shadow-inner placeholder-gray-400 transition-all duration-300"
            type="text"
            placeholder="Enter search keyword..."
            value={searchtext}
            onChange={(e) => setsearchtext(e.target.value)}
          />

          {/* Search Button */}
          <button
            className="w-full md:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-green-500/30 transition-transform transform hover:scale-105"
            onClick={() => dispatch(addqueries(searchtext))}
          >
            Search
          </button>
        </div>

        {/* Results Section */}
        <div className="mt-10">
          <Body query={query} />
          
        </div>
      </div>
    </div>
  );
};

export default Browse;
