import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar"; // adjust path if needed
import "../App.css";

function AddDoctor() {
  const [formData, setFormData] = useState({
    name: "",
    doctorId: "",
    dob: "",
    phone: "",
    email: "",
    specialization: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log("Saved Doctor:", formData);
    alert("Doctor saved successfully!");
  };

  const handleSaveAndAddAnother = () => {
    console.log("Saved Doctor:", formData);
    alert("Doctor saved! Add another one.");
    setFormData({
      name: "",
      doctorId: "",
      dob: "",
      phone: "",
      email: "",
      specialization: "",
      experience: "",
    });
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="main-content">
        <h2>Add Doctor</h2>

        <div className="form-card">
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter doctor's name"
              />
            </div>
            <div className="form-group">
              <label>Doctor ID</label>
              <input
                type="text"
                name="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                placeholder="Enter doctor ID"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(XXX) XXX-XXXX"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Specialization</label>
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="e.g., Cardiologist, Neurologist"
              />
            </div>
            <div className="form-group">
              <label>Years of Experience</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Enter years of experience"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="form-buttons">
            <button className="secondary-btn" onClick={handleSaveAndAddAnother}>
              Save and Add Another
            </button>
            <button className="primary-btn" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDoctor;
