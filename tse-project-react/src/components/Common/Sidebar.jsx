import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const sideItems = [
    {name:"Dashboard", path:"" , active:true},
    {name:"Profile", path:"profile" , active:false},
    {name:"Forum", path:"forum" , active:false},
    {name:"Resources", path:"resources" , active:false},
    {name:"Logout", path:"/" , active:false}
  ]

  return (
    <>
    <button onClick={toggleSidebar} className={`p-2 z-20 top-0 fixed ${isOpen &&"hidden" }`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div className={`bg-gray-800 z-10  text-white w-64 h-screen fixed left-0 top-0 overflow-auto ease-in-out transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}> 

      {/* <div className={`bg-gray-800 text-white w-64 h-screen  ${isOpen ? 'block' : 'hidden'}`}> */}
        <div className="p-4 ">
            <div className='flex items-center justify-between'>
                <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                <button onClick={toggleSidebar} className={`p-2 ${isOpen || "hidden" }`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

      </button>
            </div>
          
          <ul className="space-y-2">
            {sideItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className={`block hover:bg-gray-700 rounded px-2 py-1 ${item.active && "bg-gray-700"}`}>{item.name}</Link>
              </li>
            ))}
            {/* <li>
              <Link to="dashboard" className="block hover:bg-gray-700 rounded px-2 py-1">Dashboard</Link>
            </li>
            <li>
              <Link to="profile" className="block hover:bg-gray-700 rounded px-2 py-1">Profile</Link>
            </li>
            <li>
              <Link to="settings" className="block hover:bg-gray-700 rounded px-2 py-1">Settings</Link>
            </li>
            <li>
              <Link to="/" className="block hover:bg-gray-700 rounded px-2 py-1">Logout</Link>
            </li> */}
          </ul>
        </div>
      </div>
      {/* <button onClick={toggleSidebar} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button> */}
    </>
  );
};

export default Sidebar;