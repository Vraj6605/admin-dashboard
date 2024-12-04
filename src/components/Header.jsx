import React from "react";

function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">Notifications</button>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
}

export default Header;
