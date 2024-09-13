// src/Learn.js
import React from 'react';
import Navbar from '../navbar/navbar';
import Banner from '../banner/banner';
import Sidebar from '../sidebar/sidebar';
import MainContent from '../maincontent/maincontent';

function Learn({ user, signOut }) {
  return (
    // <div className='app-container min-h-screen flex flex-col bg-gray-100'>
     
    //   <Navbar signOut={signOut} user={user}/>
    //   <Banner />

    //   <div className="flex flex-1">
    //     <Sidebar />
    //     <MainContent />
    //   </div>
    // </div>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Banner />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 ml-64 mt-36 p-6 overflow-y-auto"> {/* Adjusted for sidebar and banner height */}
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default Learn;