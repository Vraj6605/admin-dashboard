import React from "react";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-gray-100 flex-shrink-0">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Admin Dashboard</h2>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Users</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Roles</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
