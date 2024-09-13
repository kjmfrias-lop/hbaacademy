// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 fixed top-[165px] bottom-0 overflow-y-auto"> {/* Adjust top position based on Navbar + Banner height */}
      <div className="px-4 py-6">
        <h2 className="text-lg font-semibold">Home Building 101</h2>
        <p className="text-sm text-gray-500">Welcome to Home Building 101 Certification</p>
      </div>
      <nav className="px-4 space-y-2">
        <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100 rounded">
          Module Overview
        </a>
        {/* Other links */}
      </nav>
    </aside>
  );
};

export default Sidebar;
