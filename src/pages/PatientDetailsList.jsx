import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorSidebar from "../components/DoctorSidebar";
import "./StyleSheet/patientdetialslist.css";
import { usePatients } from "../context/usePatients";

// Dummy data for demonstration
// const dummyPatients = [
//   { id: "P001", name: "John Doe" },
//   { id: "P002", name: "Jane Smith" },
//   { id: "P003", name: "Alice Johnson" },
// ];


const PatientDetailsList = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { patients } = usePatients();
  const filteredPatients = patients && Array.isArray(patients)
    ? patients.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.id.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const handleViewDetails = (patient) => {
    navigate('/details', { state: { patient } });
  };

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
                <th>Added Time</th>
                <th>Added Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient, idx) => (
                <tr key={patient._id}>
                  <td>{patient.name}</td>
                  <td>{patient.patientId}</td>
                  <td>{patient.time}</td>
                  <td>{patient.date}</td>
                  <td>
                    <button
                      className="details-btn"
                      onClick={() => handleViewDetails(patient)}
                      style={{
                        background: '#007bff',
                        color: 'white',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginRight: '5px',
                        fontSize: '12px'
                      }}
                    >
                      View Details
                    </button>
                    <button
                      className="report-btn"
                      onClick={() => navigate(`/report?id=${patient._id}`)}
                      style={{
                        background: '#28a745',
                        color: 'white',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
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
