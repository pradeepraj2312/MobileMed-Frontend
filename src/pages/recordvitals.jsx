import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './StyleSheet/addPatients.css';

const RecordVitals = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { patient } = location.state || {};

  const [bloodType, setBloodType] = useState(patient?.bloodType || "");
  const [bloodPressure, setBloodPressure] = useState(patient?.bloodPressure || "");
  const [bloodSugar, setBloodSugar] = useState(patient?.bloodSugar || "");
  const [weight, setWeight] = useState(patient?.weight || "");
  const [height, setHeight] = useState(patient?.height || "");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "bloodType":
        setBloodType(value);
        break;
      case "bloodPressure":
        setBloodPressure(value);
        break;
      case "bloodSugar":
        setBloodSugar(value);
        break;
      case "weight":
        setWeight(value);
        break;
      case "height":
        setHeight(value);
        break;
      default:
        break;
    }
  };
  var date = new Date();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updateData = {
      bloodType,
      bloodPressure,
      bloodSugar,
      weight,
      updateTime : `${date.toLocaleString()}`,
      height,
      updatedAt : date.toLocaleDateString()
    };

    try {
      const response = await fetch(`http://localhost:3333/patient/updatepatient/${patient._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-title">Update Patient Vitals</h2>
        <p className="form-subtitle">Modify vital signs for patient: <b>{patient?.name}</b></p>

        <div className="form-group">
          <label className="form-label" htmlFor="bloodType">Blood Type</label>
          <input
            type="text"
            id="bloodType"
            name="bloodType"
            className="form-input"
            value={bloodType}
            onChange={handleChange}
            placeholder="e.g., O+"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="bloodPressure">Blood Pressure (mmHg)</label>
          <input
            type="text"
            id="bloodPressure"
            name="bloodPressure"
            className="form-input"
            value={bloodPressure}
            onChange={handleChange}
            placeholder="e.g., 120/80"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="bloodSugar">Blood Sugar (mg/dL)</label>
            <input
              type="number"
              id="bloodSugar"
              name="bloodSugar"
              className="form-input"
              value={bloodSugar}
              onChange={handleChange}
              placeholder="e.g., 90"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              className="form-input"
              value={weight}
              onChange={handleChange}
              placeholder="e.g., 70"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="height">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            className="form-input"
            value={height}
            onChange={handleChange}
            placeholder="e.g., 175"
            required
          />
        </div>

        <button type="submit" className="form-button" disabled={loading}>
          {loading ? "Updating..." : "Update Vitals"}
        </button>
      </form>
    </div>
  );
};

export default RecordVitals;