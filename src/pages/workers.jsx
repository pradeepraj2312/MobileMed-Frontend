import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ import navigation hook
import AdminSidebar from "../components/AdminSidebar";
import "../App.css";

function Workers() {
  const navigate = useNavigate(); // ✅ initialize navigation

  const [workers, setWorkers] = useState([
    { id: "W001", name: "Dr. Emily Carter" },
    { id: "W002", name: "Dr. David Lee" },
    { id: "W003", name: "Dr. Sarah Jones" },
    { id: "W004", name: "Dr. Michael Brown" },
    { id: "W005", name: "Dr. Jessica Wilson" },
  ]);

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="main-content">
        <div className="workers-header">
          <h2>Workers</h2>
          <button
            className="add-worker"
            onClick={() => navigate("/addworker")}  // ✅ navigate to AddWorker page
          >
            + Add Worker
          </button>
        </div>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by name or ID"
          className="search-bar"
        />

        {/* Worker Table */}
        <table className="workers-table">
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

export default Workers;
