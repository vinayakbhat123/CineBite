import {  useState } from "react";
import { lang } from "../utils/LangConstant";
import { useSelector } from "react-redux";
const Gptsearch = () => {
 const [searchtext, setsearchtext] = useState('');
  const NewlangKey = useSelector((store) => store.config.langKey)


    return (
        <div> 
       <form onSubmit={(e)=>{e.preventDefault();}}
        className="flex flex-col md:flex-row items-center gap-4 bg-gray-800/70 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-2xl w-full max-w-3xl mx-auto"
      >
        {/* Search Input */}
        <input
          type="text"
          value={searchtext}
          placeholder={lang[NewlangKey]?.gptPlaceholder}
          onChange={(e) => setsearchtext(e.target.value)}
          className="w-full md:flex-1 px-5 py-3 bg-gray-900/70 border border-green-400 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 shadow-inner"
        />

        {/* Search Button */}
        <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-green-500/30 transition-transform transform hover:scale-105" 
        >
          {lang[NewlangKey]?.search}
        </button>
      </form></div>
    )
}

export default Gptsearch;