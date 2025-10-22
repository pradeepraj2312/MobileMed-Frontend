import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineFileText,
  AiOutlineHeart,
  AiOutlineSafety,
  AiOutlineSchedule,
} from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import './StyleSheet/addWorker.css'

function AddWorker() {
  const [formData, setFormData] = useState({
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
    <div className="admin-addworker-layout">
      <div className="admin-addworker-main">
        <h2>
          <FiUserCheck /> Register Health Worker
        </h2>
        <div className="admin-addworker-card">
          <h3><AiOutlineUser /> Personal Information</h3>
          <div className="admin-addworker-row">
            <div className="admin-addworker-group">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
            </div>
            <div className="admin-addworker-group">
              <label>Worker ID</label>
              <input type="text" name="workerId" value={formData.workerId} onChange={handleChange} placeholder="Worker ID" />
            </div>
          </div>

          <div className="admin-addworker-row">
            <div className="admin-addworker-group">
              <label>Date of Birth</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
            </div>
            <div className="admin-addworker-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="admin-addworker-group">
              <label>Nationality</label>
              <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} placeholder="Nationality" />
            </div>
            <div className="admin-addworker-group">
              <label>Photo</label>
              <input type="file" name="photo" onChange={handleChange} />
            </div>
          </div>

          <h3><AiOutlinePhone /> Contact Information</h3>
          <div className="admin-addworker-row">
            <div className="admin-addworker-group">
              <label>Phone</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
            </div>
            <div className="admin-addworker-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            </div>
          </div>

          <div className="admin-addworker-group">
            <label>Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Full Address" />
          </div>

          <div className="admin-addworker-row">
            <div className="admin-addworker-group">
              <label>Emergency Contact Name</label>
              <input type="text" name="emergencyContactName" value={formData.emergencyContactName} onChange={handleChange} placeholder="Emergency Contact Name" />
            </div>
            <div className="admin-addworker-group">
              <label>Emergency Contact Phone</label>
              <input type="text" name="emergencyContactPhone" value={formData.emergencyContactPhone} onChange={handleChange} placeholder="Emergency Contact Phone" />
            </div>
          </div>

          <h3><AiOutlineFileText /> Professional Information</h3>
          <div className="admin-addworker-row">
            <div className="admin-addworker-group">
              <label>Role</label>
              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="">Select Role</option>
                <option value="Doctor">Doctor</option>
                <option value="Nurse">Nurse</option>
                <option value="Technician">Technician</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="admin-addworker-group">
              <label>Qualifications</label>
              <input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} placeholder="Degree/Certificate" />
            </div>
            <div className="admin-addworker-group">
              <label>Experience (Years)</label>
              <input type="number" name="experience" value={formData.experience} onChange={handleChange} placeholder="Experience" />
            </div>
          </div>

          <div className="admin-addworker-group">
            <label>Previous Organizations / Camps</label>
            <input type="text" name="previousOrganizations" value={formData.previousOrganizations} onChange={handleChange} placeholder="Previous work" />
          </div>

          <h3><AiOutlineSafety /> License / Legal (Optional)</h3>
          <div className="admin-addworker-row">
            <div className="admin-addworker-group">
              <label>License Number</label>
              <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} placeholder="License Number" />
            </div>
            <div className="admin-addworker-group">
              <label>License Validity</label>
              <input type="date" name="licenseValidity" value={formData.licenseValidity} onChange={handleChange} />
            </div>
            <div className="admin-addworker-group">
              <label>Council Registration</label>
              <input type="text" name="councilRegistration" value={formData.councilRegistration} onChange={handleChange} placeholder="Medical/Nursing Council" />
            </div>
          </div>

          <h3><AiOutlineHeart /> Health & Safety</h3>
          <div className="admin-addworker-row">
            <div className="admin-addworker-group">
              <label>Vaccination Status</label>
              <div className="admin-addworker-checkbox">
                {["COVID-19", "Hepatitis B", "Tetanus"].map((vaccine) => (
                  <label key={vaccine}>
                    <input type="checkbox" name="vaccinationStatus" value={vaccine} checked={formData.vaccinationStatus.includes(vaccine)} onChange={handleVaccinationChange} /> {vaccine}
                  </label>
                ))}
              </div>
            </div>
            <div className="admin-addworker-group">
              <label>Allergies / Health Info</label>
              <input type="text" name="allergies" value={formData.allergies} onChange={handleChange} placeholder="Allergies or health info" />
            </div>
            <div className="admin-addworker-group">
              <label>Medical Fitness Certificate</label>
              <input type="file" name="medicalFitnessCertificate" onChange={handleChange} />
            </div>
          </div>

          <h3><AiOutlineSchedule /> Employment & Availability</h3>
          <div className="admin-addworker-row">
            <div className="admin-addworker-group">
              <label>Employment Type</label>
              <select name="employmentType" value={formData.employmentType} onChange={handleChange}>
                <option value="">Select Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
            <div className="admin-addworker-group">
              <label>Preferred Shift</label>
              <input type="text" name="preferredShift" value={formData.preferredShift} onChange={handleChange} placeholder="Morning/Afternoon/Night" />
            </div>
            <div className="admin-addworker-group admin-addworker-checkbox">
              <label>
                <input type="checkbox" name="transportRequired" checked={formData.transportRequired} onChange={handleChange} /> Transport Required
              </label>
            </div>
          </div>

          <div className="admin-addworker-buttons">
            <button className="admin-addworker-btn secondary" onClick={handleSaveAndAddAnother}>Save and Add Another</button>
            <button className="admin-addworker-btn primary" onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddWorker;
