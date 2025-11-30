import { useState } from "react";
import { Link } from "react-router-dom";

function Doctors() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Smith",
      specialty: "Cardiologist",
      experience: "15 years",
      rating: 4.9,
      consultationFee: 500,
      availability: "Available",
      education: "MBBS, MD Cardiology",
      hospital: "City Heart Hospital",
      languages: ["English", "Hindi"]
    },
    {
      id: 2,
      name: "Dr. John Wilson",
      specialty: "General Physician",
      experience: "12 years",
      rating: 4.8,
      consultationFee: 300,
      availability: "Available",
      education: "MBBS, MD Internal Medicine",
      hospital: "General Medical Center",
      languages: ["English", "Spanish"]
    },
    {
      id: 3,
      name: "Dr. Emily Johnson",
      specialty: "Dermatologist",
      experience: "10 years",
      rating: 4.7,
      consultationFee: 400,
      availability: "Busy",
      education: "MBBS, MD Dermatology",
      hospital: "Skin Care Clinic",
      languages: ["English", "French"]
    }
  ];

  const specialties = ["all", "Cardiologist", "General Physician", "Dermatologist"];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = selectedSpecialty === "all" || doctor.specialty === selectedSpecialty;
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  const bookAppointment = (doctor) => {
    if (doctor.availability === "Busy") {
      alert(`${doctor.name} is currently busy. Please try booking for a later time. 🕰️`);
      return;
    }
    alert(`Redirecting to book appointment with ${doctor.name}... 📅`);
  };

  return (
    <div className="doctors-page">
      <h1>👩‍⚕️ Find Your Doctor</h1>
      <p>Connect with certified doctors and specialists</p>

      <div className="search-filter-section">
        <input
          type="text"
          placeholder="Search doctors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select 
          value={selectedSpecialty} 
          onChange={(e) => setSelectedSpecialty(e.target.value)}
        >
          {specialties.map(specialty => (
            <option key={specialty} value={specialty}>
              {specialty === "all" ? "All Specialties" : specialty}
            </option>
          ))}
        </select>
      </div>

      <div className="doctors-grid">
        {filteredDoctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-avatar">👩‍⚕️</div>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <div className="rating">⭐ {doctor.rating}</div>
            <p>Experience: {doctor.experience}</p>
            <p>Fee: ₹{doctor.consultationFee}</p>
            <div className={`availability ${doctor.availability.toLowerCase()}`}>
              {doctor.availability === "Available" ? "🟢" : "🟡"} {doctor.availability}
            </div>
            <div className="doctor-actions">
              <button 
                onClick={() => bookAppointment(doctor)}
                disabled={doctor.availability === "Busy"}
              >
                📅 Book
              </button>
              <Link to="/feature/chat">💬 Chat</Link>
              <Link to="/feature/video">📹 Video</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;