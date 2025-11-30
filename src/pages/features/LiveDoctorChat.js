import { useState } from "react";

function LiveDoctorChat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Dr. Wilson", text: "Hello! How can I help you today?", time: "10:30 AM", isDoctor: true },
    { id: 2, sender: "You", text: "Hi Doctor, I've been having headaches lately.", time: "10:31 AM", isDoctor: false }
  ]);
  
  const [newMessage, setNewMessage] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. Wilson");
  const [isOnline, setIsOnline] = useState(true);

  const availableDoctors = [
    { name: "Dr. Wilson", specialty: "General Physician", status: "online" },
    { name: "Dr. Smith", specialty: "Cardiologist", status: "busy" },
    { name: "Dr. Johnson", specialty: "Dermatologist", status: "online" }
  ];

  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: messages.length + 1,
      sender: "You",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isDoctor: false
    };

    setMessages([...messages, message]);
    setNewMessage("");

    // Simulate doctor response
    setTimeout(() => {
      const doctorResponse = {
        id: messages.length + 2,
        sender: selectedDoctor,
        text: "I understand. Can you tell me more about when these headaches occur?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isDoctor: true
      };
      setMessages(prev => [...prev, doctorResponse]);
    }, 2000);
  };

  return (
    <div className="chat-container">
      <h1>💬 Live Doctor Chat</h1>
      
      <div className="chat-layout">
        {/* Doctor Selection Sidebar */}
        <div className="doctors-sidebar">
          <h3>👩‍⚕️ Available Doctors</h3>
          {availableDoctors.map(doctor => (
            <div 
              key={doctor.name} 
              className={`doctor-item ${selectedDoctor === doctor.name ? 'selected' : ''}`}
              onClick={() => setSelectedDoctor(doctor.name)}
            >
              <div className="doctor-info">
                <strong>{doctor.name}</strong>
                <span className="specialty">{doctor.specialty}</span>
              </div>
              <span className={`status ${doctor.status}`}>
                {doctor.status === 'online' ? '🟢' : '🟡'} {doctor.status}
              </span>
            </div>
          ))}
        </div>

        {/* Chat Area */}
        <div className="chat-area">
          <div className="chat-header">
            <h3>Chat with {selectedDoctor}</h3>
            <span className="online-status">
              {isOnline ? '🟢 Online' : '🔴 Offline'}
            </span>
          </div>

          <div className="messages-container">
            {messages.map(message => (
              <div key={message.id} className={`message ${message.isDoctor ? 'doctor' : 'patient'}`}>
                <div className="message-content">
                  <strong>{message.sender}:</strong>
                  <p>{message.text}</p>
                  <span className="message-time">{message.time}</span>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="message-form">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="message-input"
            />
            <button type="submit" className="send-btn">🚀 Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LiveDoctorChat;
