import React, { useEffect } from "react";
import { Link } from "react-router";

const NotFound = () => {
  useEffect(() => { document.title = "ToyTopia | 404 Not Found"; }, []);
  return (
    <div className="min-h-[60vh] max-w-3xl mx-auto p-6 text-center space-y-4">
      <h1 className="text-4xl font-bold text-[#EA4A30]">404</h1>
      <p className="opacity-80">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn bg-[#EA4A30] border-[#EA4A30] text-white hover:brightness-95">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
