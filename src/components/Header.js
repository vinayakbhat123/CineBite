import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { LOGO_URL } from "../utils/constants";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { removeUser, addUser } from "../utils/UserSlice";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useEffect } from "react";
import { changegptsearch } from "../utils/GptSlice";
import { SUPPORTED_LANG } from "../utils/LangConstant";
import { changelang } from "../utils/ConfigSlice";

const Header = () => {
  const Status = useOnlineStatus(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((store) => store.user);
  const isgptsearch = useSelector((store) => store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white flex items-center justify-between px-8 py-3 shadow-md z-50 border-b border-gray-700">
      <img
        className="w-20 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
        src={LOGO_URL}
        alt="logo-header"
      />

      {User && (
        <nav>
          <ul className="flex items-center space-x-8">
           {isgptsearch && <select className="bg-black border border-white p-2" onChange={(e) => dispatch(changelang(e.target.value))}>
              {SUPPORTED_LANG.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>}
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-4 py-2 rounded-lg font-semibold shadow-sm transition-all duration-200"
             onClick={(e) => { e.preventDefault();dispatch(changegptsearch())}}>
               {isgptsearch ? "Home Page"  :"GPT Search" }
            </button>

            <li className="text-sm font-semibold bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm">
              Status:
              <span
                className={`ml-2 font-extrabold ${
                  Status ? "text-green-600" : "text-red-600"
                }`}
              >
                {Status ? "Online" : "Offline"}
              </span>
            </li>

            <li className="text-lg font-semibold text-gray-200 hover:text-white transition-colors duration-200">
              {User?.displayName}
            </li>

            <button
              onClick={handleSignOut}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105"
            >
              Sign Out
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
