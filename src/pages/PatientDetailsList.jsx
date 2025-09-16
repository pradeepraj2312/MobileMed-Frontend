import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorSidebar from "../components/DoctorSidebar";
import "./StyleSheet/patientdetialslist.css";

// Dummy data for demonstration
const dummyPatients = [
  { id: "P001", name: "John Doe" },
  { id: "P002", name: "Jane Smith" },
  { id: "P003", name: "Alice Johnson" },
];


const PatientDetailsList = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredPatients = dummyPatients.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-page">
     
      <div className="dashboard-main-content patient-details-list-page">
        <div className="patient-details-list-header">
          <h2>Patient Details Queue</h2>
          <input
            className="patient-details-search"
            type="text"
            placeholder="Search by name or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="patient-details-list-table-wrapper">
          <table className="patient-details-list-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Patient ID</th>
                <th>Report</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient, idx) => (
                <tr key={patient.id}>
                  <td>{patient.name}</td>
                  <td>{patient.id}</td>
                  <td>
                    <button
                      className="report-btn"
                      onClick={() => navigate(`/report?id=${patient.id}`)}
                    >
                      Report
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
};

export default PatientDetailsList;
