import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo login (you can replace with backend later)
    if (email === "admin@virtualmed.com" && password === "admin123") {
      alert("Login Successful 🎉");
      window.location.href = "/dashboard";
    } else {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">🔐 Login to Virtual Medical</h2>
        <p className="login-sub">Your health dashboard awaits ✨</p>

        <form onSubmit={handleLogin} className="login-form">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="footer-note">
          © 2025 Virtual Medical System | All Rights Reserved 💊
        </p>
      </div>
    </div>
  );
}
