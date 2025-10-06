import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserPlus, FaEye, FaEdit } from "react-icons/fa";
import "./StyleSheet/workers.css";

function Workers() {
  const navigate = useNavigate();

  const [workers, setWorkers] = useState([
    { id: "W001", name: "Dr. Emily Carter" },
    { id: "W002", name: "Dr. David Lee" },
    { id: "W003", name: "Dr. Sarah Jones" },
    { id: "W004", name: "Dr. Michael Brown" },
    { id: "W005", name: "Dr. Jessica Wilson" },
  ]);

  return (
    <div className="admin-worker-layout">
      <div className="admin-worker-main">
        <div className="admin-worker-header">
          <h2>Workers</h2>
          <button
            className="admin-worker-add-btn"
            onClick={() => navigate("/addworker")}
          >
            <FaUserPlus className="admin-worker-icon" /> Add Worker
          </button>
        </div>

        <input
          type="text"
          placeholder="Search by name or ID"
          className="admin-worker-search"
        />

        <div className="admin-worker-table-wrapper">
          <table className="admin-worker-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {workers.map((worker) => (
                <tr key={worker.id}>
                  <td>{worker.name}</td>
                  <td>{worker.id}</td>
                  <td className="admin-worker-actions">
                    <button className="admin-worker-view">
                      <FaEye /> View
                    </button>
                    <button className="admin-worker-update">
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

export default Workers;