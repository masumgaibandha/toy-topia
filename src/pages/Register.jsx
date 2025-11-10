import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [show, setShow] = useState(false);
  const {
    createUserWithEmailAndPasswordFunc,
    signWithEmailFunc,
    updateProfileFunc,
    setLoading,
    signOutWithUserFunc,
    setUser,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const displayName = e.target.name?.value?.trim();
    const photoURL = e.target.photo?.value?.trim();
    const email = e.target.email?.value?.trim();
    const password = e.target.password?.value;

    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain both uppercase and lowercase letters."
      );
      return;
    }

    setLoading(true);
    try {
      const res = await createUserWithEmailAndPasswordFunc(email, password);
      await updateProfileFunc(displayName, photoURL);

      toast.success("Register Successful. Please login to continue.");

      await signOutWithUserFunc();
      setUser(null);

      e.target.reset();
      navigate("/login", { replace: true });
    } catch (err) {
      if (err?.code === "auth/email-already-in-use") {
        toast.error("User already registered");
      } else {
        toast.error(err?.message || "Registration failed");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    signWithEmailFunc()
      .then(() => {
        toast.success("Register Successful with Google");
        navigate("/");
      })
      .catch(() => {
        toast.error("Google Sign-In Failed");
      });
  };

  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="container mx-auto py-5 flex justify-center min-h-screen items-center"
      >
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="text-2xl font-bold text-center">Register your account</h2>
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

              <button
                type="submit"
                className="btn bg-[#EA4A30] rounded text-white mt-4"
              >
                Register
              </button>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn mt-2 cursor-pointer"
              >
                <FcGoogle size={24} />
                Continue with Google
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
