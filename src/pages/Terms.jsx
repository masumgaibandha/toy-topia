import React, { useEffect } from "react";

const Terms = () => {
  useEffect(() => { document.title = "ToyTopia | Terms & Conditions"; }, []);
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Terms & Conditions</h1>
      <p>Welcome to ToyTopia. By accessing or using our site, you agree to these terms.</p>
      <h2 className="text-xl font-semibold">Use of Service</h2>
      <p>Use the platform for lawful purposes and respect intellectual property rights.</p>
      <h2 className="text-xl font-semibold">Accounts</h2>
      <p>You are responsible for maintaining the confidentiality of your account.</p>
      <h2 className="text-xl font-semibold">Purchases</h2>
      <p>Prices and availability may change without prior notice.</p>
      <h2 className="text-xl font-semibold">Limitation of Liability</h2>
      <p>ToyTopia is not liable for indirect or consequential damages.</p>
      <p className="text-sm opacity-70">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default Terms;
