import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { FaEye, FaRegEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log("Sign up function clicked", { email, password, displayName, photoURL });
    
    
    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain both uppercase and lowercase letters."
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
      updateProfile(res.user, {
         displayName, 
         photoURL,
      }).then(res=>{
        toast.success("Register Successful");
      }).catch((e)=>{
        toast.error(e.message)
      })
        
      })
      .catch((e) => {
        console.log(e);
        toast.error("User already registered");
      });
  };
  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="container mx-auto py-5 flex justify-center min-h-screen items-center"
      >
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 ">
          <h2 className="text-2xl font-bold text-center">
            Register your account
          </h2>
          <div className="card-body relative">
            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input
                type="text"
                name="name"
                className="input bg-base-200"
                placeholder="Enter your name"
                required
              />
              {/* {nameError && <p className='text-error'>{nameError}</p>} */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input bg-base-200"
                placeholder="Enter your Photo URL"
                required
              />

              <label className="label">Email address</label>
              <input
                type="email"
                name="email"
                className="input bg-base-200"
                placeholder="Enter your email address"
                required
              />

              <label className="label">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                className="input bg-base-200"
                placeholder="Enter your password"
                required
              />

              <span
                onClick={() => setShow(!show)}
                className="absolute right-[58px] top-[275px] cursor-pointer z-50"
              >
                {show ? <FaEye size={18} /> : <IoEyeOff size={18} />}
              </span>

              {/* <div className='flex gap-3 pt-3'>
              <input type="checkbox"/>
              <a className="link link-hover">Accept Term & Conditions</a>
            </div> */}
              <button
                type="submit"
                className="btn bg-[#EA4A30] rounded text-white mt-4"
              >
                Register
              </button>
              <p className="text-center pt-5 font-semibold">
                Already have account ?{" "}
                <Link to="/login" className="text-red-600 underline">
                  Login
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
