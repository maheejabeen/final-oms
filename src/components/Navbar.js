import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Logged out successfully! 👋");
  };

  return (
    <nav className="navbar">
      <div className="logo">💊 Virtual Medical</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/healthtips">Health Tips</Link></li>
        {!isLoggedIn ? (
          <li><Link to="/login" className="login-link">🔐 Login</Link></li>
        ) : (
          <li><button onClick={handleLogout} className="logout-btn">🚪 Logout</button></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
