import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function PatientDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const patient = location.state?.patient || {
    name: "",
    age: 0,
    gender: "",
    contact: "",
    language: "",
    symptoms: "",
    bloodType: "",
    bloodPressure: "",
    bloodSugar: "",
    weight: "",
    height: "",
  };
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(patient);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSave(e) {
    e.preventDefault();
    setLoading(true);
    const date = new Date();
    const updateData = {
      name: form.name,
      age: form.age,
      gender: form.gender,
      contactNumber: form.contact,
      initialSymptoms: form.symptoms,
      language: form.language,
      bloodType: form.bloodType,
      bloodPressure: form.bloodPressure,
      bloodSugar: form.bloodSugar,
      weight: form.weight,
      updateTime: `${date.toLocaleString()}`,
      height: form.height,
      updatedAt: date.toLocaleDateString()
    };

    try {
      const response = await fetch(`http://localhost:3333/patient/updatepatient/${patient._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Patient details updated successfully!");
        setForm(result.patient || form); // Update form with response data
        setEditMode(false);
      } else {
        alert(result.message || "Failed to update patient details.");
      }
    } catch (error) {
      console.error("Error updating patient details:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-content">
      <div className="patient-details-container">
        <h1 className="patient-details-title">Patient Details</h1>
        <p className="patient-details-desc">
          View and manage patient information and vital signs.
        </p>
        <form onSubmit={handleSave}>
          <div className="patient-details-card">
            <h2 className="patient-details-card-title">Basic Information</h2>
            <div className="patient-details-info-row">
              <div className="patient-details-info-col">
                <div style={{ marginBottom: 18 }}>
                  <div className="patient-details-label">Name</div>
                  {editMode ? (
                    <input name="name" value={form.name} onChange={handleChange} />
                  ) : (
                    <div className="patient-details-value">{form.name}</div>
                  )}
                </div>
                <div style={{ marginBottom: 18 }}>
                  <div className="patient-details-label">Gender</div>
                  {editMode ? (
                    <input name="gender" value={form.gender} onChange={handleChange} />
                  ) : (
                    <div className="patient-details-value">{form.gender}</div>
                  )}
                </div>
                <div style={{ marginBottom: 18 }}>
                  <div className="patient-details-label">Native Language</div>
                  {editMode ? (
                    <input name="language" value={form.language} onChange={handleChange} />
                  ) : (
                    <div className="patient-details-value">{form.language}</div>
                  )}
                </div>
                <div style={{ marginBottom: 18 }}>
                  <div className="patient-details-label">Symptoms</div>
                  {editMode ? (
                    <input name="symptoms" value={form.symptoms} onChange={handleChange} />
                  ) : (
                    <div className="patient-details-value">{form.symptoms}</div>
                  )}
                </div>
              </div>
              <div className="patient-details-info-col">
                <div style={{ marginBottom: 18 }}>
                  <div className="patient-details-label">Age</div>
                  {editMode ? (
                    <input name="age" value={form.age} onChange={handleChange} />
                  ) : (
                    <div className="patient-details-value">{form.age}</div>
                  )}
                </div>
                <div style={{ marginBottom: 18 }}>
                  <div className="patient-details-label">Contact Number</div>
                  {editMode ? (
                    <input name="contact" value={form.contact} onChange={handleChange} />
                  ) : (
                    <div className="patient-details-value">{form.contact}</div>
                  )}
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
                  {editMode ? (
                    <input name="bloodType" value={form.bloodType} onChange={handleChange} />
                  ) : (
                    <div className="patient-details-value">{form.bloodType}</div>
                  )}
                </div>
                <div className="patient-details-info-item">
                  <div className="patient-details-label">Weight</div>
                  {editMode ? (
                    <input name="weight" value={form.weight} onChange={handleChange} />
                  ) : (
                    <div className="patient-details-value">{form.weight}</div>
                  )}
                </div>
              </div>
              <div className="patient-details-info-col">
                <div className="patient-details-info-item">
                  <div className="patient-details-label">Blood Pressure</div>
                  {editMode ? (
                    <input name="bloodPressure" value={form.bloodPressure} onChange={handleChange} />
                  ) : (
                    <div className="patient-details-value">{form.bloodPressure}</div>
                  )}
                </div>
                <div className="patient-details-info-item">
                  <div className="patient-details-label">Height</div>
                  {editMode ? (
                    <input name="height" value={form.height} onChange={handleChange} />
                  ) : (
                    <div className="patient-details-value">{form.height}</div>
                  )}
                </div>
              </div>
              <div className="patient-details-info-col">
                <div className="patient-details-info-item">
                  <div className="patient-details-label">Blood Sugar</div>
                  {editMode ? (
                    <input name="bloodSugar" value={form.bloodSugar} onChange={handleChange} />
                  ) : (
                    <div className="patient-details-value">{form.bloodSugar}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {editMode && (
            <button type="submit" className="form-button" style={{ marginTop: 24 }}>
              Save Details
            </button>
          )}
        </form>
        {!editMode && (
          <button className="form-button" style={{ marginTop: 24 }} onClick={() => setEditMode(true)}>
            Edit Details
          </button>
        )}
      </div>
    </div>
  );
}

export default PatientDetails;
