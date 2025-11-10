import React, { useEffect } from "react";

const Cookies = () => {
  useEffect(() => { document.title = "ToyTopia | Cookie Policy"; }, []);
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Cookie Policy</h1>
      <p>We use cookies to make ToyTopia work properly and to improve your experience.</p>
      <h2 className="text-xl font-semibold">What Are Cookies?</h2>
      <p>Small text files stored on your device to remember preferences and session info.</p>
      <h2 className="text-xl font-semibold">Types of Cookies</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Essential: required for core functionality</li>
        <li>Analytics: help us understand usage and improve features</li>
      </ul>
      <h2 className="text-xl font-semibold">Managing Cookies</h2>
      <p>You can disable cookies in your browser settings; some features may not work correctly.</p>
      <p className="text-sm opacity-70">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default Cookies;
