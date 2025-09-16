import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar"; // adjust path if needed
import "../App.css";

function AddWorker() {
  const [formData, setFormData] = useState({
    name: "",
    workerId: "",
    dob: "",
    phone: "",
    email: "",
    role: "",
    experience: "",
    employmentType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log("Saved Worker:", formData);
    alert("Worker saved successfully!");
  };

  const handleSaveAndAddAnother = () => {
    console.log("Saved Worker:", formData);
    alert("Worker saved! Add another one.");
    setFormData({
      name: "",
      workerId: "",
      dob: "",
      phone: "",
      email: "",
      role: "",
      experience: "",
      employmentType: "",
    });
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="main-content">
        <h2>Add Worker</h2>

        <div className="form-card">
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter worker's name"
              />
            </div>
            <div className="form-group">
              <label>Worker ID</label>
              <input
                type="text"
                name="workerId"
                value={formData.workerId}
                onChange={handleChange}
                placeholder="Enter worker ID"
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
              <label>Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select role</option>
                <option value="Doctor">Doctor</option>
                <option value="Nurse">Nurse</option>
                <option value="Technician">Technician</option>
                <option value="Admin">Admin</option>
              </select>
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

          <div className="form-group">
            <label>Employment Type</label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
            >
              <option value="">Select employment type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
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

export default AddWorker;
