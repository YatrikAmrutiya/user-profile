import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the sidebar
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="p-4 text-white bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "X" : "Menu"}
      </button>
      {isOpen && (
        <div
          id="sidebar"
          className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50"
        >
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src="https://picsum.photos/100"
                  alt="Profile"
                  className="h-8 w-8 rounded-full mr-2"
                />
                <span>My name</span>
              </div>
              <button
                onClick={closeSidebar}
                className="text-white hover:bg-red-700 rounded p-2"
              >
                X
              </button>
            </div>
            <Link to="/" className="block p-2.5 hover:bg-gray-700 rounded" onClick={closeSidebar}>
              Home
            </Link>
            <Link to="/profile" className="block p-2.5 hover:bg-gray-700 rounded" onClick={closeSidebar}>
              Profile
            </Link>
            <Link to="/appointment" className="block p-2.5 hover:bg-gray-700 rounded" onClick={closeSidebar}>
              Appointments
            </Link>
            <Link to="/consultation" className="block p-2.5 hover:bg-gray-700 rounded" onClick={closeSidebar}>
              Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
