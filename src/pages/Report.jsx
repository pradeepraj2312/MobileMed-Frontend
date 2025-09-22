import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DoctorSidebar from "../components/DoctorSidebar";
import { usePatients } from "../context/usePatients";

const Report = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const patientId = params.get("id");
  
  // const [form, setForm] = useState({
  //   name: "",
  //   dateOfVisit: "",
  //   initialSymptoms: "",
  //   diagnosis: "",
  //   medication: "",
  //   dosage: "",
  //   frequency: "",
  //   duration: "",
  // });
  const [name, setName] = useState("")
  const [dateOfVisit, setDateOfVisit] = useState("")
  const [initialSymptoms, setInitialSymptoms ] = useState("")
  const [diagnosis,setDiagnosis] = useState("")
  const [medication,setMedication]= useState("")
  const [dosage,setDosage] = useState("")
  const [frequency, setFrequency] = useState("")
  const [duration,setDuration] = useState("")
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "dateOfVisit":
        setDateOfVisit(value);
        break;
      case "initialSymptoms":
        setInitialSymptoms(value);
        break;
      case "diagnosis":
        setDiagnosis(value);
        break;
      case "medication":
        setMedication(value);
        break;
      case "dosage":
        setDosage(value);
        break;
      case "frequency":
        setFrequency(value);
        break;
      case "duration":
        setDuration(value);
        break;
      default:
        break;
    }
  };

  async function handleSubmit(e){
  e.preventDefault();

  const formData = {
    name,
    dateOfVisit,
    initialSymptoms,
    diagnosis,
    medication,
    dosage,
    frequency,
    duration,
  };
  try {
      const response = await fetch(`http://localhost:3333/patient/updatepatient/${patient._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Vitals updated successfully!");
        navigate("/patients");
      } else {
        alert(result.message || "Failed to update vitals.");
      }
    } catch (error) {
      console.error("Error updating vitals:", error);
      alert("Something went wrong. Please try again.");
    }

  alert("Patient visit log submitted!\n" + JSON.stringify(formData, null, 2));
  navigate("/patientdetails");
};

  // // Dummy patient data
  // const patients = {
  //   id: patientId || 'P001',
  //   name: 'Jane Doe',
  //   age: 32,
  //   gender: 'Female',
  //   contact: '+1-555-123-4567',
  //   language: 'English',
  //   bloodType: 'O+',
  //   bloodPressure: '120/80 mmHg',
  //   bloodSugar: '90 mg/dL',
  //   weight: '65 kg',
  //   height: '170 cm',
  //   initialSymptoms: 'Fever, cough, fatigue',
  // };
  const { patients, loading } = usePatients();
  // Find the patient by id from the array
  const patient = patients && Array.isArray(patients)
    ? patients.find((p) => p._id === patientId || p.id === patientId)
    : null;

  return (
    <div className="dashboard-page">
      <DoctorSidebar active="patients" />
      <div className="dashboard-main-content report-flex-row" style={{ background: '#f7f8fa', minHeight: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', gap: 32 }}>
        {/* Patient Details Card */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #e5e7eb', width: 320, margin: '40px 0', padding: 28, flexShrink: 0 }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 10 }}>Patient Details</h3>
          {loading ? (
            <div>Loading...</div>
          ) : patient ? (
            <>
              <div style={{ marginBottom: 8 }}><b>Name:</b> {patient.name}</div>
              <div style={{ marginBottom: 8 }}><b>Patient ID:</b> {patient._id || patient.id}</div>
              <div style={{ marginBottom: 8 }}><b>Age:</b> {patient.age}</div>
              <div style={{ marginBottom: 8 }}><b>Gender:</b> {patient.gender}</div>
              <div style={{ marginBottom: 8 }}><b>Contact:</b> {patient.contactNumber}</div>
              <div style={{ marginBottom: 8 }}><b>Language:</b> {patient.language}</div>
              <div style={{ marginBottom: 8 }}><b>Blood Type:</b> {patient.bloodType}</div>
              <div style={{ marginBottom: 8 }}><b>Blood Pressure:</b> {patient.bloodPressure}</div>
              <div style={{ marginBottom: 8 }}><b>Blood Sugar:</b> {patient.bloodSugar}</div>
              <div style={{ marginBottom: 8 }}><b>Weight:</b> {patient.weight}</div>
              <div style={{ marginBottom: 8 }}><b>Height:</b> {patient.height}</div>
              <div style={{ marginBottom: 8 }}><b>Initial Symptoms:</b> {patient.initialSymptoms}</div>
            </>
          ) : (
            <div>No patient found.</div>
          )}
        </div>
        {/* Report Form */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #e5e7eb', maxWidth: 600, width: '100%', margin: '40px 0', padding: 36 }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 6 }}>Patient Visit Log</h2>
          <div style={{ color: '#6b7280', marginBottom: 24, fontSize: 16 }}>
            A digital form for doctors to efficiently log initialSymptoms, diagnoses, and prescribe medications.
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 17 }}>Patient Information</div>
            <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontWeight: 500, fontSize: 15 }}>Patient Name</label>
                <div style={{
                  width: '100%',
                  padding: 10,
                  borderRadius: 6,
                  border: '1px solid #e5e7eb',
                  marginTop: 4,
                  background: '#f3f4f6',
                  minHeight: 38,
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 500,
                  fontSize: 16
                }}>
                  {patient ? patient.name : ''}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontWeight: 500, fontSize: 15 }}>Date of Visit</label>
                <input
                  type="date"
                  name="dateOfVisit"
                  value={dateOfVisit}
                  onChange={handleChange}
                  placeholder="mm/dd/yyyy"
                  style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb', marginTop: 4 }}
                  required
                />
              </div>
            </div>
            <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 17, marginTop: 24 }}>Clinical Details</div>
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontWeight: 500, fontSize: 15 }}>initialSymptoms</label>
              <textarea
                name="initialSymptoms"
                value={initialSymptoms}
                onChange={handleChange}
                placeholder={patient ? patient.initialSymptoms : ""}
                style={{ width: '100%', minHeight: 70, padding: 10, borderRadius: 6, border: '1px solid #e5e7eb', marginTop: 4, resize: 'vertical' }}
              />
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontWeight: 500, fontSize: 15 }}>Diagnosis</label>
              <input
                type="text"
                name="diagnosis"
                value={diagnosis}
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
                value={medication}
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
                  value={dosage}
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
                  value={frequency}
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
                  value={duration}
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
