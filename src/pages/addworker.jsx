import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar"; // adjust path if needed
import "../App.css";

function AddWorker() {
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    workerId: "",
    dob: "",
    gender: "",
    nationality: "",
    photo: null,

    // Contact
    phone: "",
    email: "",
    address: "",
    emergencyContactName: "",
    emergencyContactPhone: "",

    // Professional
    role: "",
    qualifications: "",
    experience: "",
    previousOrganizations: "",

    // License (optional)
    licenseNumber: "",
    licenseValidity: "",
    councilRegistration: "",

    // Health & Safety
    vaccinationStatus: [],
    allergies: "",
    medicalFitnessCertificate: null,

    // Employment & Availability
    employmentType: "",
    preferredShift: "",
    transportRequired: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox" && name !== "vaccinationStatus") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleVaccinationChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => {
      const list = prev.vaccinationStatus;
      if (list.includes(value)) {
        return { ...prev, vaccinationStatus: list.filter((v) => v !== value) };
      } else {
        return { ...prev, vaccinationStatus: [...list, value] };
      }
    });
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
      gender: "",
      nationality: "",
      photo: null,
      phone: "",
      email: "",
      address: "",
      emergencyContactName: "",
      emergencyContactPhone: "",
      role: "",
      qualifications: "",
      experience: "",
      previousOrganizations: "",
      licenseNumber: "",
      licenseValidity: "",
      councilRegistration: "",
      vaccinationStatus: [],
      allergies: "",
      medicalFitnessCertificate: null,
      employmentType: "",
      preferredShift: "",
      transportRequired: false,
    });
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="main-content">
        <h2>Register Health Worker</h2>
        <div className="form-card">

          {/* Personal Information */}
          <h3>Personal Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <label>Worker ID</label>
              <input
                type="text"
                name="workerId"
                value={formData.workerId}
                onChange={handleChange}
                placeholder="Worker ID"
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
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Nationality"
              />
            </div>
            <div className="form-group">
              <label>Photo</label>
              <input type="file" name="photo" onChange={handleChange} />
            </div>
          </div>

          {/* Contact Information */}
          <h3>Contact Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Full Address"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Emergency Contact Name</label>
              <input
                type="text"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleChange}
                placeholder="Emergency Contact Name"
              />
            </div>
            <div className="form-group">
              <label>Emergency Contact Phone</label>
              <input
                type="text"
                name="emergencyContactPhone"
                value={formData.emergencyContactPhone}
                onChange={handleChange}
                placeholder="Emergency Contact Phone"
              />
            </div>
          </div>

          {/* Professional Information */}
          <h3>Professional Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Role</label>
              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="">Select Role</option>
                <option value="Doctor">Doctor</option>
                <option value="Nurse">Nurse</option>
                <option value="Technician">Technician</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="form-group">
              <label>Qualifications</label>
              <input
                type="text"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleChange}
                placeholder="Degree/Certificate"
              />
            </div>
            <div className="form-group">
              <label>Experience (Years)</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Experience"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Previous Organizations / Camps</label>
            <input
              type="text"
              name="previousOrganizations"
              value={formData.previousOrganizations}
              onChange={handleChange}
              placeholder="Previous work"
            />
          </div>

          {/* License (Optional) */}
          <h3>License / Legal (Optional)</h3>
          <div className="form-row">
            <div className="form-group">
              <label>License Number</label>
              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                placeholder="License Number"
              />
            </div>
            <div className="form-group">
              <label>License Validity</label>
              <input
                type="date"
                name="licenseValidity"
                value={formData.licenseValidity}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Council Registration</label>
              <input
                type="text"
                name="councilRegistration"
                value={formData.councilRegistration}
                onChange={handleChange}
                placeholder="Medical/Nursing Council"
              />
            </div>
          </div>

          {/* Health & Safety */}
          <h3>Health & Safety</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Vaccination Status</label>
              <div className="checkbox-group">
                {["COVID-19", "Hepatitis B", "Tetanus"].map((vaccine) => (
                  <label key={vaccine}>
                    <input
                      type="checkbox"
                      name="vaccinationStatus"
                      value={vaccine}
                      checked={formData.vaccinationStatus.includes(vaccine)}
                      onChange={handleVaccinationChange}
                    />{" "}
                    {vaccine}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Allergies / Health Info</label>
              <input
                type="text"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                placeholder="Allergies or health info"
              />
            </div>
            <div className="form-group">
              <label>Medical Fitness Certificate</label>
              <input
                type="file"
                name="medicalFitnessCertificate"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Employment & Availability */}
          <h3>Employment & Availability</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Employment Type</label>
              <select
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
              >
                <option value="">Select Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
            <div className="form-group">
              <label>Preferred Shift</label>
              <input
                type="text"
                name="preferredShift"
                value={formData.preferredShift}
                onChange={handleChange}
                placeholder="Morning/Afternoon/Night"
              />
            </div>
            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="transportRequired"
                  checked={formData.transportRequired}
                  onChange={handleChange}
                />{" "}
                Transport Required
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="form-buttons">
            <button
              className="secondary-btn"
              onClick={handleSaveAndAddAnother}
            >
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
