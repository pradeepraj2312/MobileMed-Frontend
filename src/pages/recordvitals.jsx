import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RecordVitals = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { patient } = location.state || {};

  const [formData, setFormData] = useState({
    bloodType: "",
    bloodPressure: "",
    bloodSugar: "",
    weight: "",
    height: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    const allFilled = Object.values(formData).every((val) => val !== "" && val !== null && val !== undefined);
    if (!allFilled) {
      alert("Please fill in all vital details before submitting.");
      return;
    }
    // TODO: connect with backend API
    alert("Vitals record added!");
    navigate("/vitals");
  };

  return (
    <div className="container">
      {/* Left Form */}
      <div className="form-section">
        <h2>Patient Vital Signs</h2>
        <p>
          Enter and review vital signs for patient: <b>{patient?.name}</b>
        </p>

        <form onSubmit={handleSubmit} className="form-box">
          <div className="form-group">
            <label>Blood Type</label>
            <input
              type="text"
              name="bloodType"
              placeholder="e.g., O+"
              value={formData.bloodType}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Blood Pressure (mmHg)</label>
            <input
              type="text"
              name="bloodPressure"
              placeholder="e.g., 120/80"
              value={formData.bloodPressure}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Blood Sugar (mg/dL)</label>
              <input
                type="number"
                name="bloodSugar"
                placeholder="e.g., 90"
                value={formData.bloodSugar}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Weight (kg)</label>
              <input
                type="number"
                name="weight"
                placeholder="e.g., 70"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Height (cm)</label>
            <input
              type="number"
              name="height"
              placeholder="e.g., 175"
              value={formData.height}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn">
            Save Vital Signs
          </button>
        </form>
      </div>

      {/* Right Patient Info */}
      <div className="info-section">
        <div className="info-box">
          <h3>Patient Information</h3>
          <p>
            <b>{patient?.name}</b> <br />
            ID: {patient?.id}
          </p>
          <p>Added By: {patient?.addedBy}</p>
          <p>Time Added: {patient?.time}</p>
        </div>
      </div>
    </div>
  );
};

export default RecordVitals;
