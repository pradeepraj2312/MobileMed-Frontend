import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";


function QueueManagement() {
  // sample patients (replace with API data later)
  const [patients, setPatients] = useState([
    { id: 54321, name: "Ava Martinez", lastUpdated: "11:15 AM" },
    { id: 98765, name: "James Wilson", lastUpdated: "11:12 AM" },
    { id: 11223, name: "Charlotte Lee", lastUpdated: "11:08 AM" },
    { id: 44556, name: "Benjamin Garcia", lastUpdated: "11:05 AM" },
    { id: 77889, name: "Mia Rodriguez", lastUpdated: "11:01 AM" },
  ]);
  const [manageMode, setManageMode] = useState(false);

  const navigate = useNavigate();
  // Move patient up in the queue
  const moveUp = (index) => {
    if (index === 0) return;
    const newPatients = [...patients];
    [newPatients[index - 1], newPatients[index]] = [newPatients[index], newPatients[index - 1]];
    setPatients(newPatients);
  };

  // Move patient down in the queue
  const moveDown = (index) => {
    if (index === patients.length - 1) return;
    const newPatients = [...patients];
    [newPatients[index + 1], newPatients[index]] = [newPatients[index], newPatients[index + 1]];
    setPatients(newPatients);
  };

  return (
    <div className="queue-page">
      {/* Sidebar Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        <div className="queue-header">
          <h2>Queue</h2>
          <div className="queue-actions">
            <button
              className="btn btn-primary"
              onClick={() => setManageMode((m) => !m)}
            >
              {manageMode ? "Done" : "Manage Queue"}
            </button>
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
            {patients.map((p, idx) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.id}</td>
                <td>{p.lastUpdated}</td>
                <td>
                  {manageMode ? (
                    <>
                      <button
                        className="btn btn-sm btn-outline"
                        onClick={() => moveUp(idx)}
                        disabled={idx === 0}
                        style={{ marginRight: 4 }}
                      >
                        ↑
                      </button>
                      <button
                        className="btn btn-sm btn-outline"
                        onClick={() => moveDown(idx)}
                        disabled={idx === patients.length - 1}
                      >
                        ↓
                      </button>
                    </>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        navigate("/details", {
                          state: {
                            patient: {
                              name: p.name,
                              age: 32, // demo static
                              gender: "Female", // demo static
                              contact: "+1-555-123-4567", // demo static
                              language: "English", // demo static
                              symptoms: "Fever, cough, fatigue", // demo static
                              bloodType: "O+",
                              bloodPressure: "120/80 mmHg",
                              bloodSugar: "90 mg/dL",
                              weight: "65 kg",
                              height: "170 cm",
                            },
                          },
                        })
                      }
                    >
                      View Details
                    </button>
                  )}
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
