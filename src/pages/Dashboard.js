import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [appointments] = useState([
    { id: 1, doctor: "Dr. Smith", date: "2025-01-15", time: "10:00 AM", type: "Video Call" },
    { id: 2, doctor: "Dr. Johnson", date: "2025-01-18", time: "2:30 PM", type: "In-person" }
  ]);

  const [healthStats] = useState({
    heartRate: "72 bpm",
    bloodPressure: "120/80",
    weight: "70 kg",
    lastCheckup: "2025-01-10"
  });

  return (
    <div className="dashboard">
      <h1>📊 Patient Dashboard</h1>
      <p>Welcome back! Here's your health overview.</p>

      <div className="dashboard-grid">
        {/* Quick Actions */}
        <div className="dashboard-card">
          <h3>⚡ Quick Actions</h3>
          <div className="quick-actions">
            <Link to="/feature/booking" className="action-btn">📅 Book Appointment</Link>
            <Link to="/feature/chat" className="action-btn">💬 Start Chat</Link>
            <Link to="/feature/video" className="action-btn">📹 Video Call</Link>
            <Link to="/store" className="action-btn">💊 Buy Medicine</Link>
          </div>
        </div>

        {/* Health Stats */}
        <div className="dashboard-card">
          <h3>💗 Health Stats</h3>
          <div className="health-stats">
            <div className="stat">
              <span className="stat-label">Heart Rate:</span>
              <span className="stat-value">{healthStats.heartRate}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Blood Pressure:</span>
              <span className="stat-value">{healthStats.bloodPressure}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Weight:</span>
              <span className="stat-value">{healthStats.weight}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Last Checkup:</span>
              <span className="stat-value">{healthStats.lastCheckup}</span>
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="dashboard-card">
          <h3>📅 Upcoming Appointments</h3>
          <div className="appointments-list">
            {appointments.map(apt => (
              <div key={apt.id} className="appointment-item">
                <div className="apt-info">
                  <strong>{apt.doctor}</strong>
                  <span>{apt.date} at {apt.time}</span>
                  <span className="apt-type">{apt.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="dashboard-card">
          <h3>📈 Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <span>💊 Ordered Paracetamol - 2 days ago</span>
            </div>
            <div className="activity-item">
              <span>💬 Chatted with Dr. Wilson - 3 days ago</span>
            </div>
            <div className="activity-item">
              <span>📅 Booked appointment - 5 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
