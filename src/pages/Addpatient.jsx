import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import './StyleSheet/addPatients.css';
import { UserContext } from "../context/UserContext";

const AddPatientForm = () => {
  const {user} = useContext(UserContext)
  const [Name , setName] = useState("")
  const [age , setAge] = useState("")
  const [gender , setGender] = useState("")
  const [contactNumber , setContactNumber] = useState("")
  const [initialSymptoms , setInitialSymptoms] = useState("")
  const [temperature , setTemperature] = useState("")
  const [language , setLanguage] = useState("")
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fullName":
        setName(value);
        break;
      case "age":
        setAge(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "contactNumber":
        setContactNumber(value);
        break;
      case "initialSymptoms":
        setInitialSymptoms(value);
        break;
      case "temperature":
        setTemperature(value);
        break;
      case "language":
        setLanguage(value);
        break;
      default:
        break;
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // if (loading) return;

    setLoading(true);
    try {
      const response = await fetch('http://localhost:3333/patient/addpatient', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name : Name , age , gender , contactNumber, initialSymptoms, temperature, language, addedBy : `${user.userName}`}),
      });
      const data = await response.json();
      console.log(data);
      alert("Patient record added!");
    
      navigate(0);
    } catch (error) {
      console.log("Error adding patient:", error);
      alert("Failed to add patient. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-title">Add New Patient</h2>
        <p className="form-subtitle">Fill in the details below to add a new patient record.</p>

        <div className="form-group">
          <label className="form-label" htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="form-input"
            value={Name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              className="form-input"
              value={age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              className="form-input"
              value={gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            className="form-input"
            value={contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="initialSymptoms">Initial Symptoms</label>
          <textarea
            id="initialSymptoms"
            name="initialSymptoms"
            className="form-input"
            value={initialSymptoms}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="temperature">Temperature (°C)</label>
            <input
              type="number"
              id="temperature"
              name="temperature"
              className="form-input"
              value={temperature}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="language">Native Language</label>
            <select
              id="language"
              name="language"
              className="form-input"
              value={language}
              onChange={handleChange}
              required
            >
              <option value="">Select Language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <button type="submit" className="form-button" disabled={loading}>
          {loading ? "Submitting..." : "Add Patient Record"}
        </button>
      </form>
    </div>
  );
};

export default AddPatientForm;