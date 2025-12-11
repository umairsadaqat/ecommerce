import { useState } from "react";
import "../styles/admin.css";

export default function Admin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginAdmin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      alert("Admin Login Successful!");
      onLogin(); 
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <section className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={loginAdmin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="admin-login-btn">Login</button>
      </form>
    </section>
  );
}
