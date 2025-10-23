import Gptsearch from "./Gptsearch"
import { useSelector } from "react-redux";
const Browse = () => {
  const isgptsearch = useSelector((store) =>store.gpt.showGptSearch)
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6 py-32">
      { isgptsearch && <Gptsearch /> }
    </div>
  );
};

export default Browse;
