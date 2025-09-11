import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Vitals = () => {
  const navigate = useNavigate();

  const [patients] = useState([
    { id: 12345, name: "Ethan Carter", time: "10:45 AM", addedBy: "Dr. Harper" },
    { id: 67890, name: "Olivia Bennett", time: "10:42 AM", addedBy: "Dr. Evans" },
    { id: 24680, name: "Noah Thompson", time: "10:38 AM", addedBy: "Nurse Jackie" },
    { id: 13579, name: "Sophia Clark", time: "10:35 AM", addedBy: "Dr. Harper" },
    { id: 97531, name: "Liam Walker", time: "10:31 AM", addedBy: "Dr. Evans" },
  ]);

  const handleRecordVitals = (patient) => {
    navigate("/recordvitals", { state: { patient } });
  };

  return (
    <div className="vitals-container">
      <div className="vitals-header">
        <h1 className="vitals-title">Vitals</h1>
        <button className="refresh-btn">⟳ Refresh</button>
      </div>

      <div className="vitals-table-wrapper">
        <table className="vitals-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>ID</th>
              <th>Time Added</th>
              <th>Added By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.id}</td>
                <td>{patient.time}</td>
                <td>{patient.addedBy}</td>
                <td>
                  <button
                    className="record-btn"
                    onClick={() => handleRecordVitals(patient)}
                  >
                    Record Vitals
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vitals;

