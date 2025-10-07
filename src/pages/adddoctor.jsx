import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar"; // adjust path if needed
import "../App.css";

function AddDoctor() {
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    dob: "",
    gender: "",
    nationality: "",
    photo: null,

    // Contact Information
    phone: "",
    email: "",
    address: "",
    emergencyContactName: "",
    emergencyContactPhone: "",

    // Professional Details
    doctorId: "",
    specialization: "",
    experience: "",
    previousHospital: "",
    proceduresHandled: "",

    // Legal / License Details
    licenseNumber: "",
    licenseValidity: "",
    medicalCouncil: "",

    // Health / Insurance
    vaccinationStatus: "",
    insuranceNumber: "",
    medicalFitnessCertificate: null,
  });

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  // Save doctor
  const handleSave = () => {
    console.log("Saved Doctor:", formData);
    alert("Doctor saved successfully!");
  };

  // Save and reset form for new entry
  const handleSaveAndAddAnother = () => {
    console.log("Saved Doctor:", formData);
    alert("Doctor saved! Add another one.");
    setFormData({
      name: "",
      dob: "",
      gender: "",
      nationality: "",
      photo: null,
      phone: "",
      email: "",
      address: "",
      emergencyContactName: "",
      emergencyContactPhone: "",
      doctorId: "",
      specialization: "",
      experience: "",
      previousHospital: "",
      proceduresHandled: "",
      licenseNumber: "",
      licenseValidity: "",
      medicalCouncil: "",
      vaccinationStatus: "",
      insuranceNumber: "",
      medicalFitnessCertificate: null,
    });
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="main-content">
        <h2>Register Doctor</h2>

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
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
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
              <input
                type="file"
                name="photo"
                onChange={handleFileChange}
              />
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
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
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
                placeholder="Phone Number"
              />
            </div>
          </div>

          {/* Professional Details */}
          <h3>Professional Details</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Doctor ID</label>
              <input
                type="text"
                name="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                placeholder="Unique Doctor ID"
              />
            </div>
            <div className="form-group">
              <label>Specialization</label>
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="e.g., Cardiologist"
              />
            </div>
            <div className="form-group">
              <label>Years of Experience</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Number of years"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Previous Hospital</label>
              <input
                type="text"
                name="previousHospital"
                value={formData.previousHospital}
                onChange={handleChange}
                placeholder="Previous Hospital/Clinic"
              />
            </div>
            <div className="form-group">
              <label>Procedures Handled</label>
              <input
                type="text"
                name="proceduresHandled"
                value={formData.proceduresHandled}
                onChange={handleChange}
                placeholder="List of procedures handled"
              />
            </div>
          </div>

          {/* Legal / License Details */}
          <h3>Legal / License Details</h3>
          <div className="form-row">
            <div className="form-group">
              <label>License Number</label>
              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                placeholder="Medical License Number"
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
              <label>Medical Council</label>
              <input
                type="text"
                name="medicalCouncil"
                value={formData.medicalCouncil}
                onChange={handleChange}
                placeholder="Medical Council Name"
              />
            </div>
          </div>

          {/* Health / Insurance Details */}
          <h3>Health / Insurance Details</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Vaccination Status</label>
              <input
                type="text"
                name="vaccinationStatus"
                value={formData.vaccinationStatus}
                onChange={handleChange}
                placeholder="e.g., Hepatitis B, COVID-19"
              />
            </div>
            <div className="form-group">
              <label>Insurance Number</label>
              <input
                type="text"
                name="insuranceNumber"
                value={formData.insuranceNumber}
                onChange={handleChange}
                placeholder="Insurance Number"
              />
            </div>
            <div className="form-group">
              <label>Medical Fitness Certificate</label>
              <input
                type="file"
                name="medicalFitnessCertificate"
                onChange={handleFileChange}
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
