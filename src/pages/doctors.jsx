import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import AdminSidebar from "../components/AdminSidebar";
import "../App.css";

function Doctors() {
  const [doctors, setDoctors] = useState([
    { id: "D001", name: "Dr. John Smith", specialization: "Cardiologist" },
    { id: "D002", name: "Dr. Emily Davis", specialization: "Neurologist" },
    { id: "D003", name: "Dr. Daniel White", specialization: "Pediatrician" },
    { id: "D004", name: "Dr. Sophia Johnson", specialization: "Orthopedic" },
    { id: "D005", name: "Dr. Michael Brown", specialization: "General Physician" },
  ]);

  const navigate = useNavigate(); // ✅ hook for navigation

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="workers-header">
          <h2>Doctors</h2>
          <button
            className="add-worker"
            onClick={() => navigate("/adddoctor")} // ✅ navigate to adddoctor
          >
            + Add Doctor
          </button>
        </div>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by name or ID"
          className="search-bar"
        />

        {/* Table */}
        <table className="workers-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Specialization</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.name}</td>
                <td>{doctor.id}</td>
                <td>{doctor.specialization}</td>
                <td>
                  <button className="view-btn">View Details</button>
                  <button className="update-btn">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Doctors;
