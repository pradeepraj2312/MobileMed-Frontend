import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import "../App.css";


function Admin() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <AdminSidebar />


      {/* Main Section */}
      <div className="dashboard-main">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome back, Admin!</p>
          </div>
          <div className="header-right">
            <button className="notif-btn">🔔</button>
            <div className="profile-pic">👥</div>
          </div>
        </div>


        {/* Stats */}
        <div className="stats-row">
          <div className="stat-box doctor">
            <div className="stat-icon">➕</div>
            <div>
              <p>Available Doctors</p>
              <h2>58</h2>
            </div>
          </div>
          <div className="stat-box worker">
            <div className="stat-icon">👥</div>
            <div>
              <p>Available Workers</p>
              <h2>210</h2>
            </div>
          </div>
        </div>


        {/* Upcoming Visits */}
        <div className="card">
          <div className="card-header">
            <h2>Upcoming Visit Scheduling</h2>
            <button className="schedule-btn">+ Schedule a Visit</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Location/Village</th>
                <th>Visit Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kapsabet</td>
                <td>28 July, 2023</td>
                <td><span className="status scheduled">Scheduled</span></td>
              </tr>
              <tr>
                <td>Eldoret</td>
                <td>29 July, 2023</td>
                <td><span className="status scheduled">Scheduled</span></td>
              </tr>
              <tr>
                <td>Nandi Hills</td>
                <td>30 July, 2023</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
              <tr>
                <td>Iten</td>
                <td>01 Aug, 2023</td>
                <td><span className="status scheduled">Scheduled</span></td>
              </tr>
              <tr>
                <td>Kapsabet</td>
                <td>02 Aug, 2023</td>
                <td><span className="status scheduled">Scheduled</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export default Admin;
