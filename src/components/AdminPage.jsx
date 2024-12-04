import React, { useEffect, useState } from "react";
import { fetchUsers, deleteUser, updateUser, addUser } from "../api/userApi";
import Table from "./Table";
import EditForm from "./EditForm";
import RegisterForm from "./RegisterForm";

function App() {
  const currentUserRole = "Admin"; // Change this as needed for testing
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);

  

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleDelete = (id) => {
    deleteUser(id).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setSelectedUser(userToEdit);
    setIsEditFormOpen(true);
  };

  const handleSave = (updatedUserData) => {
    if (!selectedUser) return;

    const updatedUser = { ...selectedUser, ...updatedUserData };
    updateUser(selectedUser.id, updatedUser).then(() => {
      setUsers(
        users.map((user) =>
          user.id === selectedUser.id ? updatedUser : user
        )
      );
      setIsEditFormOpen(false); // Close the form after saving
      setSelectedUser(null); // Reset selected user
    });
  };

  const handleCancel = () => {
    setIsEditFormOpen(false);
    setSelectedUser(null);
    setIsRegisterFormOpen(false);
  };

  // Handle user registration
  const handleRegister = (newUserData) => {
    addUser(newUserData).then((newUser) => {
      setUsers([...users, newUser]); // Add new user to the list
      setIsRegisterFormOpen(false); // Close the registration form
    });
  };

  return (
    <div className="p-6">



      <h1 className="text-3xl font-bold text-center mb-6">User Management</h1>

      
      <button
        onClick={() => setIsRegisterFormOpen(true)}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Register New User
      </button>
      <Table
        data={users}
        onDelete={handleDelete}
        onEdit={handleEdit}
        currentUserRole={currentUserRole}
      />
      {isEditFormOpen && (
        <EditForm
          user={selectedUser}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
      {isRegisterFormOpen && (
        <RegisterForm onRegister={handleRegister} onCancel={handleCancel} />
      )}
    </div>
  );
}

export default App;
