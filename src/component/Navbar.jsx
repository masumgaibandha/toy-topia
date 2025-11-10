import React, { use } from "react";
import MyContainer from "./MyContainer";
import { Link, NavLink } from "react-router";
import MyLink from "./MyLink";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { BounceLoader, ClockLoader } from "react-spinners";

const Navbar = () => {
  const { user, signOutWithUserFunc, setUser, loading, setLoading } =
    use(AuthContext);

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
    <div className="bg-[#FFF3F1] shadow mb-10 rounded">
      <MyContainer>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 md:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between md:justify-start w-full md:w-auto gap-4">
            <div>
              <MyLink to={"/"}>
                <h1 className="text-xl sm:text-2xl font-bold text-[#EA4A30]">
                  ToyTopia
                </h1>
              </MyLink>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-base sm:text-xl font-semibold">
              <MyLink to={"/"}>Home</MyLink>
              {user && <MyLink to={"/profile"}>My Profile</MyLink>}
            </div>
          </div>

          {loading ? (
            <div className="flex md:justify-end">
              <ClockLoader color="#EA4A30" size={24} />
            </div>
          ) : user ? (
            <div className="relative flex items-center gap-3 md:justify-end">
              <button
                className=""
                popoverTarget="popover-1"
                style={{ anchorName: "--anchor-1" }}
              >
                <img
                  src={user.photoURL || "https://i.ibb.co/fYhsqxNB/Masum2.jpg"}
                  alt=""
                  className="h-[40px] w-[40px] rounded-full"
                />
              </button>
              <div
                className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto"
                id="popover-1"
                style={{ positionAnchor: "--anchor-1" }}
              >
                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                <p className="break-all">{user?.email}</p>
                <button
                  onClick={handleLogout}
                  className="btn bg-[#EA4A30] w-full rounded text-white"
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <div className="flex md:justify-end">
              <button className="btn bg-[#EA4A30] text-white text-base sm:text-xl font-semibold">
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
