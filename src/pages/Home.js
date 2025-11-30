import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>🩺 ONLINE MEDICAL VIRTUAL CONSULTATION SYSTEM</h1>
      <p>
        Your health journey starts here 🚀 Book appointments, chat instantly 💬,
        video call doctors 🎥, buy medicines 💊, and access health tips 🌿.
      </p>

      <div className="features-box">
        <h2>✨ Features</h2>

        <ul>
          <li><Link to="/feature/chat">💬 Live Doctor Chat</Link></li>
          <li><Link to="/feature/video">📞 Video Consultation</Link></li>
          <li><Link to="/feature/booking">📅 Appointment Booking</Link></li>
          <li><Link to="/feature/medicine">💊 Medicine Store</Link></li>
          <li><Link to="/feature/records">📁 Patient Records</Link></li>
          <li><Link to="/feature/notifications">🔔 Smart Notifications</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
