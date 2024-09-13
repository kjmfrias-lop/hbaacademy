// src/components/MainContent.js
import React from 'react';

const MainContent = () => {
  return (
    <div className="w-full h-full">
      <iframe
        className="w-full h-[calc(100vh-136px)] rounded" // Adjust height based on total height of Navbar and Banner
        src="https://www.youtube.com/embed/nfWlot6h_JM" // Taylor Swift - Shake It Off
        title="Taylor Swift - Shake It Off"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MainContent;
