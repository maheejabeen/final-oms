import { useState } from "react";

function AppointmentBooking() {
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
    type: "video",
    reason: ""
  });

  const [doctors] = useState([
    { id: 1, name: "Dr. Sarah Smith", specialty: "Cardiologist" },
    { id: 2, name: "Dr. John Wilson", specialty: "General Physician" },
    { id: 3, name: "Dr. Emily Johnson", specialty: "Dermatologist" },
    { id: 4, name: "Dr. Michael Brown", specialty: "Pediatrician" }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.doctor || !formData.date || !formData.time) {
      alert("Please fill all required fields! ⚠️");
      return;
    }
    alert(`Appointment booked successfully! 🎉\nDoctor: ${formData.doctor}\nDate: ${formData.date}\nTime: ${formData.time}`);
    setFormData({ doctor: "", date: "", time: "", type: "video", reason: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page">
      <h1>📅 Book Your Appointment</h1>
      <p>Schedule a consultation with our expert doctors</p>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>Select Doctor *</label>
          <select name="doctor" value={formData.doctor} onChange={handleChange} required>
            <option value="">Choose a doctor...</option>
            {doctors.map(doc => (
              <option key={doc.id} value={doc.name}>
                {doc.name} - {doc.specialty}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          <div className="form-group">
            <label>Time *</label>
            <select name="time" value={formData.time} onChange={handleChange} required>
              <option value="">Select time...</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">04:00 PM</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Consultation Type</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="type"
                value="video"
                checked={formData.type === "video"}
                onChange={handleChange}
              />
              📹 Video Call
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="type"
                value="inperson"
                checked={formData.type === "inperson"}
                onChange={handleChange}
              />
              🏥 In-Person
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Reason for Visit</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Describe your symptoms or reason for consultation..."
            rows="4"
          />
        </div>

        <button type="submit" className="book-btn">
          📅 Book Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentBooking;
