import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import './StyleSheet/queue.css';
import { usePatients } from "../context/usePatients";

function QueueManagement() {
  const { patients: contextPatients } = usePatients();
  const [patients, setPatients] = useState([]);
  const [manageMode, setManageMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (contextPatients && contextPatients.length > 0) {
      setPatients(contextPatients);
    }
  }, [contextPatients]);

  const moveUp = (index) => {
    if (index === 0) return;
    const newPatients = [...patients];
    [newPatients[index - 1], newPatients[index]] = [newPatients[index], newPatients[index - 1]];
    setPatients(newPatients);
  };

  const moveDown = (index) => {
    if (index === patients.length - 1) return;
    const newPatients = [...patients];
    [newPatients[index + 1], newPatients[index]] = [newPatients[index], newPatients[index + 1]];
    setPatients(newPatients);
  };

  return (
    <div>
   
      <div className="queue-header">
        <h2>Queue</h2>
        <div className="queue-actions">
          <button className="btn btn-primary" onClick={() => setManageMode((m) => !m)}>
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
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.patientId}</td>
              <td>{p.updateTime}</td>
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
                            _id : p._id,
                            name: p.name,
                            age: p.age || "N/A",
                            gender: p.gender || "N/A",
                            contact: p.contactNumber || "N/A",
                            language: p.language || "N/A",
                            symptoms: p.initialSymptoms || "N/A",
                            bloodType: p.bloodType || "O+",
                            bloodPressure: p.bloodPressure || "120/80 mmHg",
                            bloodSugar: p.bloodSugar || "90 mg/dL",
                            weight: p.weight || "65 kg",
                            height: p.height || "170 cm",
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
  );
}

export default QueueManagement;