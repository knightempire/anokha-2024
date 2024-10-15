import React from "react";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import PrivacyPolicyContent from "../components/PrivacyPolicy";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#192032] text-white p-8">
      <div className="max-w-3xl mx-auto">
        <PrivacyPolicyContent />
        <Link
          href="/"
          className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
