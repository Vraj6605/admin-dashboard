import React from "react";

const Table = ({ data, onDelete, onEdit, currentUserRole }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Password</th>
            <th className="py-2 px-4 text-left">Role</th> {/* Added role column */}
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.password}</td>
              <td className="py-2 px-4">{user.role}</td> {/* Displaying role */}
              <td className="py-2 px-4">
                {currentUserRole === "Admin" && (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onEdit(user.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(user.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
