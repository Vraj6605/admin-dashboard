import React, { useState, useEffect } from "react";
import { fetchUsers, deleteUser } from "./api/userApi.js";
import EditUserModal from "../modals/EditUserModal";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleDelete = (id) => {
    deleteUser(id).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  return (
    <div className="mt-4 bg-white shadow rounded-lg overflow-hidden">
      <table className="w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left text-gray-600">ID</th>
            <th className="px-4 py-2 text-left text-gray-600">Name</th>
            <th className="px-4 py-2 text-left text-gray-600">Email</th>
            <th className="px-4 py-2 text-left text-gray-600">Role</th>
            <th className="px-4 py-2 text-left text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={() => {
                    setEditingUser(user);
                    setIsModalOpen(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setIsModalOpen(false)}
          onSave={(updatedUser) => {
            setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default UserTable;
