import React, { useEffect } from "react";

const Privacy = () => {
  useEffect(() => { document.title = "ToyTopia | Privacy Policy"; }, []);
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p>We care about your privacy. This policy explains what data we collect and how we use it.</p>
      <h2 className="text-xl font-semibold">Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Account data: name, email, photo URL</li>
        <li>Usage data: pages visited, actions taken</li>
      </ul>
      <h2 className="text-xl font-semibold">How We Use Information</h2>
      <p>To provide and improve the service, personalize content, and secure accounts.</p>
      <h2 className="text-xl font-semibold">Your Rights</h2>
      <p>You can access, update, or delete your information from your profile or by contacting support.</p>
      <p className="text-sm opacity-70">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default Privacy;
