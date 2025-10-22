import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { LOGO_URL } from "../utils/constants";
import { signOut,onAuthStateChanged } from "firebase/auth";
import { useSelector,useDispatch } from "react-redux";
import { removeUser,addUser } from "../utils/UserSlice";
import { useEffect } from "react";
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const User =  useSelector(store => store.user)
    const handleSignOut=() =>{
        signOut(auth).then(() => {})
        .catch((error) => {
        // An error happened.
        navigate("/error")
       });
    }
    // onauthstatechanged
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
         const {uid,email,displayName} = user;
         dispatch(addUser({uid:uid,email:email,displayName:displayName}));  
         navigate("/browse")
      } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
        }
});   return () =>  unsubscribe()
  },[])

  return (
    <header className=" top-0 w-full bg-gray-600 bg-gradient-to-b text-white flex items-center justify-between px-6 py-1 shadow-lg z-50">
      <img
        className="w-20 rounded-md"
        src={LOGO_URL}
        alt="logo-header"
      />
    { User && <nav>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-300 cursor-pointer">{User?.displayName}</li>
          <button  onClick={handleSignOut} className="text-white w-full bg-red-600 hover:bg-red-800 rounded-lg p-2 font-bold">Sign Out</button>
        </ul>
      </nav> }
    </header>
  );
};

export default Header;
