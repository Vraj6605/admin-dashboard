const login = async (email, password) => {
  const response = await fetch('http://localhost:3001/users');
  const users = await response.json();

  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    return { success: true, user };
  } else {
    return { success: false, message: 'Invalid email or password' };
  }
};

export default login;
