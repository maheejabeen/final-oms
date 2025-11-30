import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Dashboard from "./pages/Dashboard";
import Store from "./pages/Store";
import HealthTips from "./pages/HealthTips";

import LiveDoctorChat from "./pages/features/LiveDoctorChat";
import VideoConsultation from "./pages/features/VideoConsultation";
import AppointmentBooking from "./pages/features/AppointmentBooking";
import MedicineStore from "./pages/features/MedicineStore";
import PatientRecords from "./pages/features/PatientRecords";
import SmartNotifications from "./pages/features/SmartNotifications";

import Login from "./pages/Login";   // ✅ Fix added

function App() {
  return (
    <Router>
      <Navbar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/store" element={<Store />} />
          <Route path="/healthtips" element={<HealthTips />} />

          {/* Feature Routes */}
          <Route path="/feature/chat" element={<LiveDoctorChat />} />
          <Route path="/feature/video" element={<VideoConsultation />} />
          <Route path="/feature/booking" element={<AppointmentBooking />} />
          <Route path="/feature/medicine" element={<MedicineStore />} />
          <Route path="/feature/records" element={<PatientRecords />} />
          <Route path="/feature/notifications" element={<SmartNotifications />} />

          {/* Login Route */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
