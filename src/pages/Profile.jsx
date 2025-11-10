import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAuth, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  useEffect(() => { document.title = "ToyTopia | My Profile"; }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await updateProfile(auth.currentUser, { displayName: name, photoURL });
      await auth.currentUser.reload();
      setUser(auth.currentUser);
      toast.success("Profile updated");
    } catch (err) {
      toast.error(err.message || "Update failed");
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-xl mx-auto p-6 space-y-8">
      <div className="flex items-center gap-4">
        <img
          src={photoURL || "https://i.ibb.co/fYhsqxNB/Masum2.jpg"}
          alt="avatar"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{name || "No Name"}</h1>
          <p className="opacity-80">{user.email}</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="card bg-base-100 shadow rounded-2xl">
        <div className="card-body space-y-3">
          <div className="form-control flex gap-3">
            <label className="label mb-2">
              <span className="label-text text-base font-medium">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-control flex gap-3">
            <label className="label mb-2">
              <span className="label-text text-base font-medium">Photo URL</span>
            </label>
            <input
              type="url"
              className="input input-bordered"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="https://example.com/photo.jpg"
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-[#EA4A30] border-[#EA4A30] text-white hover:brightness-95"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
