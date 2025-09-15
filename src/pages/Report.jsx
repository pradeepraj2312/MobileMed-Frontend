import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DoctorSidebar from "../components/DoctorSidebar";

const Report = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const patientId = params.get("id");

  const [form, setForm] = useState({
    patientName: "",
    dateOfVisit: "",
    symptoms: "",
    diagnosis: "",
    medication: "",
    dosage: "",
    frequency: "",
    duration: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect with backend API
    alert("Patient visit log submitted!\n" + JSON.stringify(form, null, 2));
    // Redirect to PatientDetailsList after success
    navigate("/patientdetails");
  };

  // Dummy patient data
  const dummyPatient = {
    id: patientId || 'P001',
    name: 'Jane Doe',
    age: 32,
    gender: 'Female',
    contact: '+1-555-123-4567',
    language: 'English',
    bloodType: 'O+',
    bloodPressure: '120/80 mmHg',
    bloodSugar: '90 mg/dL',
    weight: '65 kg',
    height: '170 cm',
    symptoms: 'Fever, cough, fatigue',
  };

  return (
    <div className="dashboard-page">
      <DoctorSidebar active="patients" />
  <div className="dashboard-main-content report-flex-row" style={{ background: '#f7f8fa', minHeight: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', gap: 32 }}>
        {/* Patient Details Card */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #e5e7eb', width: 320, margin: '40px 0', padding: 28, flexShrink: 0 }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 10 }}>Patient Details</h3>
          <div style={{ marginBottom: 8 }}><b>Name:</b> {dummyPatient.name}</div>
          <div style={{ marginBottom: 8 }}><b>Patient ID:</b> {dummyPatient.id}</div>
          <div style={{ marginBottom: 8 }}><b>Age:</b> {dummyPatient.age}</div>
          <div style={{ marginBottom: 8 }}><b>Gender:</b> {dummyPatient.gender}</div>
          <div style={{ marginBottom: 8 }}><b>Contact:</b> {dummyPatient.contact}</div>
          <div style={{ marginBottom: 8 }}><b>Language:</b> {dummyPatient.language}</div>
          <div style={{ marginBottom: 8 }}><b>Blood Type:</b> {dummyPatient.bloodType}</div>
          <div style={{ marginBottom: 8 }}><b>Blood Pressure:</b> {dummyPatient.bloodPressure}</div>
          <div style={{ marginBottom: 8 }}><b>Blood Sugar:</b> {dummyPatient.bloodSugar}</div>
          <div style={{ marginBottom: 8 }}><b>Weight:</b> {dummyPatient.weight}</div>
          <div style={{ marginBottom: 8 }}><b>Height:</b> {dummyPatient.height}</div>
          <div style={{ marginBottom: 8 }}><b>Symptoms:</b> {dummyPatient.symptoms}</div>
        </div>
        {/* Report Form */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #e5e7eb', maxWidth: 600, width: '100%', margin: '40px 0', padding: 36 }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 6 }}>Patient Visit Log</h2>
          <div style={{ color: '#6b7280', marginBottom: 24, fontSize: 16 }}>
            A digital form for doctors to efficiently log symptoms, diagnoses, and prescribe medications.
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 17 }}>Patient Information</div>
            <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontWeight: 500, fontSize: 15 }}>Patient Name</label>
                <input
                  type="text"
                  name="patientName"
                  value={form.patientName}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb', marginTop: 4 }}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontWeight: 500, fontSize: 15 }}>Date of Visit</label>
                <input
                  type="date"
                  name="dateOfVisit"
                  value={form.dateOfVisit}
                  onChange={handleChange}
                  placeholder="mm/dd/yyyy"
                  style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb', marginTop: 4 }}
                  required
                />
              </div>
            </div>
            <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 17, marginTop: 24 }}>Clinical Details</div>
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontWeight: 500, fontSize: 15 }}>Symptoms</label>
              <textarea
                name="symptoms"
                value={form.symptoms}
                onChange={handleChange}
                placeholder="Describe the patient's symptoms..."
                style={{ width: '100%', minHeight: 70, padding: 10, borderRadius: 6, border: '1px solid #e5e7eb', marginTop: 4, resize: 'vertical' }}
                required
              />
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontWeight: 500, fontSize: 15 }}>Diagnosis</label>
              <input
                type="text"
                name="diagnosis"
                value={form.diagnosis}
                onChange={handleChange}
                placeholder="e.g. Acute bronchitis"
                style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb', marginTop: 4 }}
                required
              />
            </div>
            <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 17, marginTop: 24 }}>Prescription</div>
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontWeight: 500, fontSize: 15 }}>Medication Name</label>
              <input
                type="text"
                name="medication"
                value={form.medication}
                onChange={handleChange}
                placeholder="e.g. Amoxicillin"
                style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb', marginTop: 4 }}
                required
              />
            </div>
            <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontWeight: 500, fontSize: 15 }}>Dosage</label>
                <input
                  type="text"
                  name="dosage"
                  value={form.dosage}
                  onChange={handleChange}
                  placeholder="e.g., 500mg"
                  style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb', marginTop: 4 }}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontWeight: 500, fontSize: 15 }}>Frequency</label>
                <input
                  type="text"
                  name="frequency"
                  value={form.frequency}
                  onChange={handleChange}
                  placeholder="e.g., Twice daily"
                  style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb', marginTop: 4 }}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontWeight: 500, fontSize: 15 }}>Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  placeholder="e.g., 7 days"
                  style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb', marginTop: 4 }}
                  required
                />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 16 }}>
              <button type="button" style={{ background: 'none', border: 'none', color: '#222', fontWeight: 500, fontSize: 16, cursor: 'pointer' }} onClick={() => window.history.back()}>
                Cancel
              </button>
              <button type="submit" style={{ background: '#5b4dfa', color: '#fff', fontWeight: 600, fontSize: 16, border: 'none', borderRadius: 6, padding: '10px 28px', cursor: 'pointer' }}>
                Submit Report
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Report;
