import { useRef, useState } from "react";
import {CheckValidData} from "../utils/Validate"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth"
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { BG_URL } from "../utils/constants";
const Login = () => {
  const [isSignInForm,setisSignInForm] = useState(true)
  const [ErrorMsg,setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm)
  }
  const handleButtonClick = () => {
    // validate the data
    const message =CheckValidData(email.current.value,password.current.value);
    setErrorMsg(message);
    
    if(message) return;
    // Sign In /Sign Up

    if(!isSignInForm){
      //  Sign Up
      createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
      .then((userCredential) => {
       // Signed up 
         const user = userCredential.user;
         updateProfile(user, {
              displayName: name.current?.value
          }).then(() => {
              const {uid,email,displayName} = auth.currentUser;
              console.log({uid:uid,email:email,displayName:displayName})
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));  
          }).catch((error) => {
             // An error occurred
             setErrorMsg(error.message)
             // ... 
          });
            // ...
     })
      .catch((error) => {
          const errorCode = error.code;
         const errorMessage = error.message;
        setErrorMsg(errorCode + ":" + errorMessage)
    });
    }else{
      // sign In
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
     .then((userCredential) => {
      // Signed in 
         const user = userCredential.user;
    })
     .catch((error) => {
        setErrorMsg(error.Code +":" +error.message )
     });

    }
  }
      return (
        <div className="">
           <img className="w-full" src={BG_URL} alt="logo" />
             <div className="absolute inset-0 flex justify-center items-center py-15">
               <form onSubmit={(e) => {e.preventDefault()}} className="bg-black bg-opacity-75 p-6 rounded-lg shadow-lg text-white w-96">
                <h1 className="text-green-700 justify-center items-center flex font-bold"> { isSignInForm ? "Sign In" : "Sign Up"}</h1>
                { !isSignInForm  && <input ref={name} type="text" placeholder="Full Name" className="block w-full p-4 my-4  border border-white bg-black bg-opacity-120 rounded"  /> }
                  <input 
                  ref={email}
                   type="email" placeholder="Email address" className="block w-full p-4 my-4  border border-white bg-black bg-opacity-120 rounded"   />
                  <input  ref={password} type="password" placeholder="Password" className="block w-full p-4 my-4 border-white  bg-black bg-opacity-120 rounded" />
                  {<p className="text-red-600 font-bold">{ErrorMsg}</p>}
                  <button className="w-full bg-red-500 text-white  p-4 my-4  rounded hover:bg-red-700 transition-colors" onClick={handleButtonClick}>
                  { isSignInForm ? "Sign In" : "Sign Up"}</button>
                  <p onClick={toggleSignInForm} className="py-4 cursor-pointer"> { isSignInForm ? "Are You New User? Sign Up" : "Already Registered? Sign In"}</p>
               </form>
             </div>
        </div>

    )
}
export default Login;