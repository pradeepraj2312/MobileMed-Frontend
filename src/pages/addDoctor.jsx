import React, { useState } from "react";
import { FiUser, FiPhone, FiBriefcase, FiFileText, FiHeart, FiSave, FiPlus } from "react-icons/fi";
import { FaUserMd } from "react-icons/fa";

import "./StyleSheet/addDoctor.css";

function AddDoctor() {
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
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
    <div className="admin-addDoctor-layout">
      <div className="admin-addDoctor-content">
        <h2 className="admin-addDoctor-title">
          <FaUserMd className="admin-addDoctor-icon" /> Register Doctor
        </h2>

        <div className="admin-addDoctor-card">
          {/* Personal Information */}
          <h3 className="admin-addDoctor-section-title">
            <FiUser /> Personal Information
          </h3>

          <div className="admin-addDoctor-row">
            <div className="admin-addDoctor-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
            </div>
            <div className="admin-addDoctor-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="admin-addDoctor-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="admin-addDoctor-group">
              <label>Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Nationality"
              />
            </div>
            <div className="admin-addDoctor-group">
              <label>Photo</label>
              <input type="file" name="photo" onChange={handleFileChange} />
            </div>
          </div>

          {/* Contact Information */}
          <h3 className="admin-addDoctor-section-title">
            <FiPhone /> Contact Information
          </h3>

          <div className="admin-addDoctor-row">
            <div className="admin-addDoctor-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>
            <div className="admin-addDoctor-group">
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

          <div className="admin-addDoctor-group">
            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Full Address"
            />
          </div>

          <div className="admin-addDoctor-row">
            <div className="admin-addDoctor-group">
              <label>Emergency Contact Name</label>
              <input
                type="text"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleChange}
                placeholder="Emergency Contact Name"
              />
            </div>
            <div className="admin-addDoctor-group">
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
          <h3 className="admin-addDoctor-section-title">
            <FiBriefcase /> Professional Details
          </h3>

          <div className="admin-addDoctor-row">
            <div className="admin-addDoctor-group">
              <label>Doctor ID</label>
              <input
                type="text"
                name="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                placeholder="Unique Doctor ID"
              />
            </div>
            <div className="admin-addDoctor-group">
              <label>Specialization</label>
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="e.g., Cardiologist"
              />
            </div>
            <div className="admin-addDoctor-group">
              <label>Years of Experience</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Years"
              />
            </div>
          </div>

          <div className="admin-addDoctor-row">
            <div className="admin-addDoctor-group">
              <label>Previous Hospital</label>
              <input
                type="text"
                name="previousHospital"
                value={formData.previousHospital}
                onChange={handleChange}
                placeholder="Previous Hospital"
              />
            </div>
            <div className="admin-addDoctor-group">
              <label>Procedures Handled</label>
              <input
                type="text"
                name="proceduresHandled"
                value={formData.proceduresHandled}
                onChange={handleChange}
                placeholder="List of procedures"
              />
            </div>
          </div>

          {/* Legal / License Details */}
          <h3 className="admin-addDoctor-section-title">
            <FiFileText /> Legal / License Details
          </h3>

          <div className="admin-addDoctor-row">
            <div className="admin-addDoctor-group">
              <label>License Number</label>
              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                placeholder="License Number"
              />
            </div>
            <div className="admin-addDoctor-group">
              <label>License Validity</label>
              <input
                type="date"
                name="licenseValidity"
                value={formData.licenseValidity}
                onChange={handleChange}
              />
            </div>
            <div className="admin-addDoctor-group">
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

          {/* Health / Insurance */}
          <h3 className="admin-addDoctor-section-title">
            <FiHeart /> Health / Insurance
          </h3>

          <div className="admin-addDoctor-row">
            <div className="admin-addDoctor-group">
              <label>Vaccination Status</label>
              <input
                type="text"
                name="vaccinationStatus"
                value={formData.vaccinationStatus}
                onChange={handleChange}
                placeholder="e.g., COVID-19, Hepatitis"
              />
            </div>
            <div className="admin-addDoctor-group">
              <label>Insurance Number</label>
              <input
                type="text"
                name="insuranceNumber"
                value={formData.insuranceNumber}
                onChange={handleChange}
                placeholder="Insurance Number"
              />
            </div>
            <div className="admin-addDoctor-group">
              <label>Medical Fitness Certificate</label>
              <input type="file" name="medicalFitnessCertificate" onChange={handleFileChange} />
            </div>
          </div>

          {/* Buttons */}
          <div className="admin-addDoctor-buttons">
            <button className="admin-addDoctor-btn secondary" onClick={handleSaveAndAddAnother}>
              <FiPlus /> Save & Add Another
            </button>
            <button className="admin-addDoctor-btn primary" onClick={handleSave}>
              <FiSave /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDoctor;
