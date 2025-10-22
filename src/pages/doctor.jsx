import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserMd, FaEye, FaEdit } from "react-icons/fa";
import "./StyleSheet/doctors.css";

function Doctors() {
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState([
    { id: "D001", name: "Dr. Emily Carter" },
    { id: "D002", name: "Dr. David Lee" },
    { id: "D003", name: "Dr. Sarah Jones" },
    { id: "D004", name: "Dr. Michael Brown" },
    { id: "D005", name: "Dr. Jessica Wilson" },
  ]);

  return (
    <div className="admin-doctor-layout">
      <div className="admin-doctor-main">
        <div className="admin-doctor-header">
          <h2>Doctors</h2>
          <button
            className="admin-doctor-add-btn"
            onClick={() => navigate("/adddoctor")}
          >
            <FaUserMd className="admin-doctor-icon" /> Add Doctor
          </button>
        </div>

        <input
          type="text"
          placeholder="Search by name or ID"
          className="admin-doctor-search"
        />

        <div className="admin-doctor-table-wrapper">
          <table className="admin-doctor-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.name}</td>
                  <td>{doctor.id}</td>
                  <td className="admin-doctor-actions">
                    <button className="admin-doctor-view">
                      <FaEye /> View
                    </button>
                    <button className="admin-doctor-update">
                      <FaEdit /> Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Doctors;