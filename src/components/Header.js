import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/UserSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const User =  useSelector(store => store.user)
    const handleSignOut=() =>{
        signOut(auth).then(() => {
       alert("Sign-out successful")
        navigate("/");
        dispatch(removeUser());
       }).catch((error) => {
        // An error happened.
        navigate("/error")
       });
    }
  return (
    <header className=" top-0 w-full bg-black text-white flex items-center justify-between px-6 py-1 shadow-lg z-50">
      <img
        className="w-32 rounded-md"
        src="https://images.pexels.com/photos/5852131/pexels-photo-5852131.jpeg"
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
