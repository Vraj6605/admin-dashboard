const API_URL = "http://localhost:3001/users";

// Fetch all users
export const fetchUsers = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// Add new user
export const addUser = async (newUser) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser), // Send the new user data
  });
  return response.json();
};

// Delete user
export const deleteUser = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};

// Update user
export const updateUser = async (id, updatedUser) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });
  return response.json();
};
