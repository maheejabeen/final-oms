import { useState } from "react";

function PatientRecords() {
  const [activeTab, setActiveTab] = useState("overview");
  
  const patientInfo = {
    name: "John Doe",
    age: 32,
    gender: "Male",
    bloodGroup: "O+",
    phone: "+91 9876543210",
    email: "john.doe@email.com",
    address: "123 Health Street, Medical City"
  };

  const medicalHistory = [
    { id: 1, date: "2025-01-10", doctor: "Dr. Smith", diagnosis: "Common Cold", treatment: "Rest, Paracetamol", status: "Recovered" },
    { id: 2, date: "2024-12-15", doctor: "Dr. Wilson", diagnosis: "Hypertension Checkup", treatment: "Blood pressure monitoring", status: "Ongoing" },
    { id: 3, date: "2024-11-20", doctor: "Dr. Johnson", diagnosis: "Annual Health Checkup", treatment: "Routine tests", status: "Completed" }
  ];

  const prescriptions = [
    { id: 1, date: "2025-01-10", doctor: "Dr. Smith", medicines: ["Paracetamol 500mg - 3 times daily", "Vitamin C - Once daily"], duration: "5 days" },
    { id: 2, date: "2024-12-15", doctor: "Dr. Wilson", medicines: ["Amlodipine 5mg - Once daily", "Aspirin 75mg - Once daily"], duration: "30 days" }
  ];

  const testReports = [
    { id: 1, date: "2024-11-20", test: "Complete Blood Count", result: "Normal", doctor: "Dr. Johnson" },
    { id: 2, date: "2024-11-20", test: "Lipid Profile", result: "Cholesterol slightly elevated", doctor: "Dr. Johnson" },
    { id: 3, date: "2024-12-15", test: "Blood Pressure", result: "140/90 mmHg", doctor: "Dr. Wilson" }
  ];

  const allergies = ["Penicillin", "Shellfish", "Dust mites"];
  const chronicConditions = ["Hypertension", "Mild Asthma"];

  return (
    <div className="patient-records">
      <h1>📁 Patient Medical Records</h1>
      <p>Comprehensive view of your health information</p>

      {/* Tab Navigation */}
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          📄 Overview
        </button>
        <button 
          className={`tab ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          📅 Medical History
        </button>
        <button 
          className={`tab ${activeTab === 'prescriptions' ? 'active' : ''}`}
          onClick={() => setActiveTab('prescriptions')}
        >
          💊 Prescriptions
        </button>
        <button 
          className={`tab ${activeTab === 'reports' ? 'active' : ''}`}
          onClick={() => setActiveTab('reports')}
        >
          📈 Test Reports
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="patient-info-card">
              <h3>👤 Patient Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <strong>Name:</strong> {patientInfo.name}
                </div>
                <div className="info-item">
                  <strong>Age:</strong> {patientInfo.age} years
                </div>
                <div className="info-item">
                  <strong>Gender:</strong> {patientInfo.gender}
                </div>
                <div className="info-item">
                  <strong>Blood Group:</strong> {patientInfo.bloodGroup}
                </div>
                <div className="info-item">
                  <strong>Phone:</strong> {patientInfo.phone}
                </div>
                <div className="info-item">
                  <strong>Email:</strong> {patientInfo.email}
                </div>
              </div>
            </div>

            <div className="health-summary">
              <div className="summary-card">
                <h4>⚠️ Allergies</h4>
                <ul>
                  {allergies.map((allergy, index) => (
                    <li key={index}>{allergy}</li>
                  ))}
                </ul>
              </div>
              
              <div className="summary-card">
                <h4>💔 Chronic Conditions</h4>
                <ul>
                  {chronicConditions.map((condition, index) => (
                    <li key={index}>{condition}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="history-section">
            <h3>📅 Medical History</h3>
            <div className="history-list">
              {medicalHistory.map(record => (
                <div key={record.id} className="history-item">
                  <div className="history-date">{record.date}</div>
                  <div className="history-details">
                    <h4>{record.diagnosis}</h4>
                    <p><strong>Doctor:</strong> {record.doctor}</p>
                    <p><strong>Treatment:</strong> {record.treatment}</p>
                    <span className={`status ${record.status.toLowerCase()}`}>{record.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'prescriptions' && (
          <div className="prescriptions-section">
            <h3>💊 Prescriptions</h3>
            <div className="prescriptions-list">
              {prescriptions.map(prescription => (
                <div key={prescription.id} className="prescription-item">
                  <div className="prescription-header">
                    <span className="date">{prescription.date}</span>
                    <span className="doctor">by {prescription.doctor}</span>
                  </div>
                  <div className="medicines">
                    {prescription.medicines.map((medicine, index) => (
                      <div key={index} className="medicine">{medicine}</div>
                    ))}
                  </div>
                  <div className="duration">Duration: {prescription.duration}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="reports-section">
            <h3>📈 Test Reports</h3>
            <div className="reports-list">
              {testReports.map(report => (
                <div key={report.id} className="report-item">
                  <div className="report-info">
                    <h4>{report.test}</h4>
                    <p><strong>Date:</strong> {report.date}</p>
                    <p><strong>Doctor:</strong> {report.doctor}</p>
                    <p><strong>Result:</strong> {report.result}</p>
                  </div>
                  <button className="download-btn">📎 Download</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientRecords;
