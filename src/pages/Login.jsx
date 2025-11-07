import React, { use, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaRegEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthContext";

// const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [show, setShow] = useState(false);
  const {
    signWithEmailAndPasswordFunc, 
    signWithEmailFunc,
    signOutWithUserFunc,
    sendPassResetFunc,
    user,
    setUser,
    setLoading,
  } = use(AuthContext)
  const navigate = useNavigate();

  const emailRef= useRef(null)


  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log({ email, password });
    signWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        // setLoading(false);
        // Will be delete
        if(!res.user?.emailVerified){
          toast.error("Your email is not verified")
          return;
        }
        // Delete above
        setUser(res.user);
        console.log(res);
        toast.success("Login Successful");
        navigate("/")
      })
      .catch((e) => {
        console.log(e);
        toast.error("Please Input Valid Credential");
      });

 

  const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain both uppercase and lowercase letters."
      );
      return;
    }
  };
  const handleGoogleLogin = () => {
    console.log("google signined");
    signWithEmailFunc()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        console.log(res);
        toast.success("Login Successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Please Input Valid Credential");
      });
  };

  

  const handleForgetPassword =()=>{
// console.log(e.target.email)
// console.log(emailRef.current.value)

const email = emailRef.current.value

   sendPassResetFunc(email)
   .then((res)=>{
    setLoading(false);
    toast.success('Check email to reset password')
   }).catch((e)=>{
    toast.error(e.message)
   })
  }

  return (
    <div>
        <form
          onSubmit={handleLogin}
          className="container mx-auto py-5 flex justify-center min-h-screen items-center"
        >
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className="text-2xl font-bold text-center">
              Login your account
            </h2>
            <div className="card-body relative">
              <fieldset className="fieldset">
                {/* Email */}
                <label className="label">Email address</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  required
                  className="input bg-base-200"
                  placeholder="Enter your email address"
                />
                {/* Password */}
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  required
                  className="input bg-base-200"
                  placeholder="Enter your password"
                />

                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[58px] top-[130px] cursor-pointer z-50"
                >
                  {show ? <FaEye size={18} /> : <IoEyeOff size={18} />}
                </span>

                <div>
                  <button 
                  className="hover:underline cursor-pointer" 
                  onClick={handleForgetPassword}
                  type="button"
                  >Forgot password?</button>
                  {/* <a className="link link-hover">Forgot password?</a> */}
                </div>


                {/* {error && <p className="text-red-500">{error}</p>} */}
                <button
                  type="submit"
                  className="btn bg-[#EA4A30] rounded text-white mt-4"
                >
                  Login
                </button>

                {/* Divider */}
                <div className="flex items-center justify-center gap-2 my-2">
                  <div className="h-px w-26 bg-[#EA4A30]"></div>
                  <span className="text-sm ">or</span>
                  <div className="h-px w-26 bg-[#EA4A30]"></div>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="btn  mt-2 cursor-pointer"
                >
                  <FcGoogle size={24} />
                  Continue with Google
                </button>

                <p className="text-center pt-5 font-semibold">
                  Don't Have An Account ?{" "}
                  <Link to="/register" className="text-red-600 underline">
                    Register
                  </Link>
                </p>
              </fieldset>
            </div>
          </div>
        </form>
    </div>
  );
};

export default Login;
