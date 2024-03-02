import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the sidebar if clicked outside
  useEffect(() => {
    const closeSidebar = (e) => {
      if (e.target.id !== 'sidebar' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', closeSidebar);
    }

    return () => document.removeEventListener('mousedown', closeSidebar);
  }, [isOpen]);

  return (
    <>
      <button
        className="p-4 text-white bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'X' : 'Menu'}
      </button>
      {isOpen && (
        <div id="sidebar" className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50">
          <div className="p-5">
            {/* Close Button with an "X" icon */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-red-700 rounded p-2 mb-4"
            >
              X
            </button>
            <Link to="/" className="block p-2.5 hover:bg-gray-700 rounded">Home</Link>
            <Link to="/basic-info" className="block p-2.5 hover:bg-gray-700 rounded">Basic Info</Link>
            <Link to="/contacts" className="block p-2.5 hover:bg-gray-700 rounded">Contacts</Link>
            <Link to="/address" className="block p-2.5 hover:bg-gray-700 rounded">Address</Link>
          </div>
        </div>
      )}
    </>
  );
};
