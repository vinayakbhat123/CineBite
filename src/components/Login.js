import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm,setisSignInForm] = useState(true)
  const togglehandle = () => {
    setisSignInForm(!isSignInForm)
  }
      return (
        <div className="">
            <Header />
           <img className="w-full" src="https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg" alt="logo" />
             <div className="absolute inset-0 flex justify-center items-center py-15">
               <form className="bg-black bg-opacity-75 p-6 rounded-lg shadow-lg text-white">
                <h1 className="text-green-700 justify-center items-center flex font-bold"> { isSignInForm ? "Sign In" : "Sign Up"}</h1>
                { !isSignInForm  && <input type="text" placeholder="Full Name" className="block w-full p-4 my-4  border border-gray-300 rounded" required/> }
                  <input type="email" placeholder="Email address" className="block w-full p-4 my-4  border border-gray-300 rounded" required/>
                  <input type="password" placeholder="Password" className="block w-full p-4 my-4 border border-gray-300 rounded" required/>
                  <button className="w-full bg-red-500 text-white  p-4 my-4  rounded hover:bg-red-700 transition-colors">
                  { isSignInForm ? "Sign In" : "Sign Up"}</button>
                  <p onClick={togglehandle} className="py-4 cursor-pointer"> { isSignInForm ? "Are You New User? Sign Up" : "Already Registered? Sign In"}</p>
               </form>
             </div>
        </div>

    )
}
export default Login;