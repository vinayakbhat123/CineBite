import { useRef, useState } from "react";
import { CheckValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [ErrorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = CheckValidData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          setErrorMsg(error.code + ": " + error.message);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).catch((error) => {
        setErrorMsg(error.code + ": " + error.message);
      });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        src={BG_URL}
        alt="background"
      />

      {/* Form Container */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-black/80 backdrop-blur-md border border-gray-700 p-6 sm:p-8 rounded-2xl shadow-2xl text-white transition-all duration-300"
        >
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-green-500 mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {/* Full Name (Sign Up Only) */}
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="block w-full p-3 sm:p-4 mb-4 border border-gray-500 bg-black/70 rounded-lg text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          )}

          {/* Email */}
          <input
            ref={email}
            type="email"
            placeholder="Email address"
            className="block w-full p-3 sm:p-4 mb-4 border border-gray-500 bg-black/70 rounded-lg text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Password */}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="block w-full p-3 sm:p-4 mb-4 border border-gray-500 bg-black/70 rounded-lg text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Error Message */}
          {ErrorMsg && (
            <p className="text-red-500 font-semibold text-sm mb-3 text-center">
              {ErrorMsg}
            </p>
          )}

          {/* Submit Button */}
          <button
            onClick={handleButtonClick}
            className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-3 sm:py-4 rounded-lg transition-transform duration-200 hover:scale-105 shadow-lg"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* Toggle Link */}
          <p
            onClick={toggleSignInForm}
            className="text-center mt-5 text-sm sm:text-base cursor-pointer text-gray-300 hover:text-green-400 transition-colors"
          >
            {isSignInForm
              ? "New here? Create an account"
              : "Already have an account? Sign in"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
