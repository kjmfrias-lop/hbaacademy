// src/components/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div className="bg-white p-3 fixed w-full top-20 z-40 border-t border-b border-gray-200"> {/* Add border-t for top border */}
      <h1 className="text-2xl font-semibold text-gray-900">Home Building 101</h1>
      <p className="text-sm text-gray-500">Welcome to Home Building 101 Certification</p>
    </div>
  );
};

export default Banner;
