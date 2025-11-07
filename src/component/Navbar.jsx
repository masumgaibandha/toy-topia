import React, { use } from "react";
import MyContainer from "./MyContainer";
import { Link, NavLink } from "react-router";
import MyLink from "./MyLink";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { BounceLoader, ClockLoader } from "react-spinners";

const Navbar = () => {
  const { user, signOutWithUserFunc, setUser, loading, setLoading } = use(AuthContext);
  console.log(user);

  const handleLogout = () => {
    signOutWithUserFunc()
      .then(() => {
        toast.success("Log Out Successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="bg-base-100 shadow">
      <MyContainer>
        <div className="flex justify-between items-center p-5">
          <div>
            <MyLink to={"/"}>
              <h1 className="text-2xl font-bold text-[#EA4A30]">ToyTopia</h1>
            </MyLink>
          </div>
          <div className="flex gap-10 items-center text-xl font-semibold">
            <MyLink to={"/"}>Home</MyLink>
            <MyLink to={"/about"}>About</MyLink>
            <MyLink to={"/profile"}>Profile</MyLink>
          </div>

          {loading ? (<ClockLoader color="#EA4A30" />) : user ? (
            <div className="text-center space-y-3 mt-5">
              
              <button
                className=""
                popoverTarget="popover-1"
                style={
                  { anchorName: "--anchor-1" } /* as React.CSSProperties */
                }
              >
              <img
                src={user.photoURL || "https://i.ibb.co/fYhsqxNB/Masum2.jpg"}
                alt=""
                className="h-[40px] w-[40px] rounded-full mx-auto"
              />
              </button>

              <div
                className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto"
                id="popover-1"
                style={
                  { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
                }
              >
                  <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="">{user?.email}</p>
              <button
                onClick={handleLogout}
                className="btn bg-[#EA4A30] w-full rounded text-white"
                
              >
                Log Out
              </button>

              </div>

            </div>
          ) : (
            <div>
              <button className="btn bg-[#EA4A30] text-white w-30 text-xl font-semibold">
                <Link to="/login">Login</Link>
              </button>
            </div>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
