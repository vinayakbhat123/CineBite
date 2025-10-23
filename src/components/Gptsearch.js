import { useState } from "react";
import { lang } from "../utils/LangConstant";
import { useSelector } from "react-redux";

const Gptsearch = () => {
  const [searchtext, setsearchtext] = useState("");
  const NewlangKey = useSelector((store) => store.config.langKey);

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 mt-20 sm:mt-28">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row items-center gap-4 bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl w-full max-w-lg sm:max-w-2xl md:max-w-3xl transition-all duration-300"
      >
        {/* Search Input */}
        <input
          type="text"
          value={searchtext}
          placeholder={lang[NewlangKey]?.gptPlaceholder}
          onChange={(e) => setsearchtext(e.target.value)}
          className="w-full sm:flex-1 px-4 sm:px-5 py-3 bg-gray-900/70 border border-green-400 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 shadow-inner text-sm sm:text-base"
        />

        {/* Search Button */}
        <button
          className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-green-500/30 transition-transform duration-200 hover:scale-105 text-sm sm:text-base"
        >
          {lang[NewlangKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default Gptsearch;
