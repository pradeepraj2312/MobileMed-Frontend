import React from "react";
import { useLocation } from "react-router-dom";

const PatientDetails = () => {
  const location = useLocation();
  const patient = location.state?.patient || {
    name: "Sophia Clark",
    age: 32,
    gender: "Female",
    contact: "+1-555-123-4567",
    language: "English",
    symptoms: "Fever, cough, fatigue",
    bloodType: "O+",
    bloodPressure: "120/80 mmHg",
    bloodSugar: "90 mg/dL",
    weight: "65 kg",
    height: "170 cm",
  };

  return (
    <div className="main-content">
      <div className="patient-details-container">
        <h1 className="patient-details-title">Patient Details</h1>
        <p className="patient-details-desc">
          View and manage patient information and vital signs.
        </p>
        <div className="patient-details-card">
          <h2 className="patient-details-card-title">Basic Information</h2>
          <div className="patient-details-info-row">
            <div className="patient-details-info-col">
              <div style={{ marginBottom: 18 }}>
                <div className="patient-details-label">Name</div>
                <div className="patient-details-value">{patient.name}</div>
              </div>
              <div style={{ marginBottom: 18 }}>
                <div className="patient-details-label">Gender</div>
                <div className="patient-details-value">{patient.gender}</div>
              </div>
              <div style={{ marginBottom: 18 }}>
                <div className="patient-details-label">Native Language</div>
                <div className="patient-details-value">{patient.language}</div>
              </div>
              <div style={{ marginBottom: 18 }}>
                <div className="patient-details-label">Symptoms</div>
                <div className="patient-details-value">{patient.symptoms}</div>
              </div>
            </div>
            <div className="patient-details-info-col">
              <div style={{ marginBottom: 18 }}>
                <div className="patient-details-label">Age</div>
                <div className="patient-details-value">{patient.age}</div>
              </div>
              <div style={{ marginBottom: 18 }}>
                <div className="patient-details-label">Contact Number</div>
                <div className="patient-details-value">{patient.contact}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="patient-details-card">
          <h2 className="patient-details-card-title">Vital Signs</h2>
          <div className="patient-details-info-row">
            <div className="patient-details-info-col">
              <div className="patient-details-info-item">
                <div className="patient-details-label">Blood Type</div>
                <div className="patient-details-value">{patient.bloodType}</div>
              </div>
              <div className="patient-details-info-item">
                <div className="patient-details-label">Weight</div>
                <div className="patient-details-value">{patient.weight}</div>
              </div>
            </div>
            <div className="patient-details-info-col">
              <div className="patient-details-info-item">
                <div className="patient-details-label">Blood Pressure</div>
                <div className="patient-details-value">{patient.bloodPressure}</div>
              </div>
              <div className="patient-details-info-item">
                <div className="patient-details-label">Height</div>
                <div className="patient-details-value">{patient.height}</div>
              </div>
            </div>
            <div className="patient-details-info-col">
              <div className="patient-details-info-item">
                <div className="patient-details-label">Blood Sugar</div>
                <div className="patient-details-value">{patient.bloodSugar}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
