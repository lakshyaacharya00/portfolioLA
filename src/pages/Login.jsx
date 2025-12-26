import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/AuthSlice";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Email,setEmail]= useState("");
  const [Number,setNumber]= useState("");
  const [Conform,setConform]= useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login({ username }));
      navigate("/dashboard");
    }
  };

  return (

    <div className=" h-screen  bg-[url(https://img.freepik.com/premium-photo/abstract-blur-defocused-hotel-lobby-interior-background-vintage-filter_875825-64135.jpg)] bg-no-repeat bg-cover ">
     
    <div className="flex  items-center justify-center pt-[250px]">
      <form className="bg-white/60 backdrop-blur-lg border-[4px] p-6 rounded shadow-md h-[1000px] w-[900px]" onSubmit={handleLogin}>
        <h2 className="text-8xl text-center mb-4">Register</h2>

        <div>
          <hr />

        </div>
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border-[3px]  h-[80px] mt-8 text-3xl text-black rounded-4xl  border-black placeholder-black pl-4"
        />
     
        <input
          type="email"
          placeholder="E-mail"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border-[3px]  h-[80px] mt-8 text-3xl text-black rounded-4xl border-black placeholder-black pl-4"
        />
        <input
          type="Number"
          placeholder="Number"
          value={Number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full p-2 mb-3 border-[3px]  h-[80px] mt-8 text-3xl text-black  rounded-4xl border-black placeholder-black pl-4"
        />

      <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border-[3px] border-black  h-[80px] mt-8 text-3xl rounded-4xl text-black placeholder-black pl-4"
        />
      <input
          type="password"
          placeholder=" Conform Password"
          value={Conform}
          onChange={(e) => setConform(e.target.value)}
          className="w-full p-2 mb-3 border-[3px]  h-[80px] mt-8  text-3xl text-black rounded-4xl border-black placeholder-black pl-4"
        />

        <button type="submit" className=" bg-blue-500 rounded-4xl text-white py-2  w-full p-2 mb-3 border-[3px]  h-[80px] mt-8 text-4xl">
          Sign Up
        </button>
      </form>
      
     
    </div>
    <div className="text-center pt-[20px]"> <button className="bg-transparent border-2 rounded-4xl h-[60px] w-[800px] border-black border-s-4 text-3xl ">Login</button></div>
    <div className="flex items-center justify-center pt-11 gap-10">
    <a href=""><img className="h-[120px] w-[400px]" src="https://static.cdninstagram.com/rsrc.php/v4/yt/r/Yfc020c87j0.png" alt="" /></a>
    <a href=""><img className="h-[120px] w-[400px]" src="https://static.cdninstagram.com/rsrc.php/v4/yz/r/c5Rp7Ym-Klz.png" alt="" /></a>
    </div>
    </div>
  );
}