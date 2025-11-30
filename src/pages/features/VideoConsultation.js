import { useState } from "react";

function VideoConsultation() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const availableDoctors = [
    { id: 1, name: "Dr. Sarah Smith", specialty: "Cardiologist", rating: 4.9, available: true },
    { id: 2, name: "Dr. John Wilson", specialty: "General Physician", rating: 4.8, available: true },
    { id: 3, name: "Dr. Emily Johnson", specialty: "Dermatologist", rating: 4.7, available: false }
  ];

  const startCall = (doctor) => {
    setSelectedDoctor(doctor);
    setIsCallActive(true);
    alert(`Starting video call with ${doctor.name}... 📹`);
  };

  const endCall = () => {
    setIsCallActive(false);
    setSelectedDoctor(null);
    setIsMuted(false);
    setIsVideoOff(false);
    alert("Call ended. Thank you for using our service! 👋");
  };

  if (isCallActive) {
    return (
      <div className="video-call-active">
        <div className="call-header">
          <h2>📹 Video Call with {selectedDoctor.name}</h2>
          <span className="call-duration">05:23</span>
        </div>

        <div className="video-container">
          <div className="doctor-video">
            <div className="video-placeholder">
              <div className="avatar">👩⚕️</div>
              <p>{selectedDoctor.name}</p>
              <span className="specialty">{selectedDoctor.specialty}</span>
            </div>
          </div>

          <div className="patient-video">
            <div className="video-placeholder small">
              {isVideoOff ? (
                <div className="video-off">🚫 Camera Off</div>
              ) : (
                <div className="avatar">👤</div>
              )}
            </div>
          </div>
        </div>

        <div className="call-controls">
          <button 
            className={`control-btn ${isMuted ? 'active' : ''}`}
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? '🔇' : '🎤'} {isMuted ? 'Unmute' : 'Mute'}
          </button>
          
          <button 
            className={`control-btn ${isVideoOff ? 'active' : ''}`}
            onClick={() => setIsVideoOff(!isVideoOff)}
          >
            {isVideoOff ? '📹' : '🚫'} {isVideoOff ? 'Camera On' : 'Camera Off'}
          </button>
          
          <button className="control-btn end-call" onClick={endCall}>
            📞 End Call
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>📹 Video Consultation</h1>
      <p>Connect face-to-face with our certified doctors</p>

      <div className="doctors-grid">
        {availableDoctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-avatar">👩⚕️</div>
            <h3>{doctor.name}</h3>
            <p className="specialty">{doctor.specialty}</p>
            <div className="rating">
              ⭐ {doctor.rating} Rating
            </div>
            <div className={`availability ${doctor.available ? 'available' : 'busy'}`}>
              {doctor.available ? '🟢 Available Now' : '🔴 Busy'}
            </div>
            <button 
              className="video-call-btn"
              onClick={() => startCall(doctor)}
              disabled={!doctor.available}
            >
              📹 Start Video Call
            </button>
          </div>
        ))}
      </div>

      <div className="video-info">
        <h3>📌 How Video Consultation Works</h3>
        <div className="info-steps">
          <div className="step">
            <span className="step-number">1</span>
            <p>Choose an available doctor</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <p>Click "Start Video Call"</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <p>Discuss your health concerns</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <p>Get prescription & advice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoConsultation;
