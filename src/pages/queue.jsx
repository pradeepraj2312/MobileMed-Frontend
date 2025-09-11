import React from "react";
import Navbar from "../components/navbar";


function QueueManagement() {
  // sample patients (replace with API data later)
  const patients = [
    { id: 54321, name: "Ava Martinez", lastUpdated: "11:15 AM" },
    { id: 98765, name: "James Wilson", lastUpdated: "11:12 AM" },
    { id: 11223, name: "Charlotte Lee", lastUpdated: "11:08 AM" },
    { id: 44556, name: "Benjamin Garcia", lastUpdated: "11:05 AM" },
    { id: 77889, name: "Mia Rodriguez", lastUpdated: "11:01 AM" },
  ];

  return (
    <div className="queue-page">
      {/* Sidebar Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        <div className="queue-header">
          <h2>Patient Vitals</h2>
          <div className="queue-actions">
            <button className="btn btn-primary">Manage Queue</button>
            <button className="btn btn-outline">Refresh</button>
          </div>
        </div>

        <table className="queue-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>ID</th>
              <th>Last Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.id}</td>
                <td>{p.lastUpdated}</td>
                <td>
                  <button className="btn btn-primary">View Details</button>
                  <button className="btn btn-outline">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QueueManagement;
