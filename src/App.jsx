import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import AdminPage from "./components/AdminPage";
import UserPage from "./components/UserPage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
  };

  return (
    <Router>
      <div className="p-6">
        {/* Display login form if the user is not logged in */}
        {!currentUser ? (
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        ) : (
          <Routes>
            {/* Admin page is only accessible by users with the Admin role */}
            <Route
              path="/admin"
              element={
                currentUser.role === "Admin" ? (
                  <AdminPage />
                ) : (
                  <Navigate to="/user" />
                )
              }
            />

            {/* User page is only accessible by users with the User role */}
            <Route
              path="/user"
              element={
                currentUser.role === "User" ? (
                  <UserPage />
                ) : (
                  <Navigate to="/admin" />
                )
              }
            />

            {/* Redirect to User Page or Admin Page after login */}
            <Route path="/" element={<Navigate to={currentUser.role === "Admin" ? "/admin" : "/user"} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
