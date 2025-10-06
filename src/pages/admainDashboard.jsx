import React from 'react';
import { FaUserMd, FaUserFriends, FaCalendarCheck } from 'react-icons/fa';
import './StyleSheet/admindashboard.css';

function AdminDashboard() {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="admin-page">
      <div className="admin-layout">
        <div className="admin-main-content">
          <div className="admin-header-row">
            <div>
              <h1 className="admin-title">Admin Dashboard</h1>
              <div className="admin-date">
                Today's Date: <span className="admin-date-value">{today}</span>
              </div>
            </div>
          </div>

          <div className="admin-content-row">
            <div className="admin-content-main">
              <div className="admin-card">
                <h2 className="admin-card-title">Staff Overview</h2>
                <div className="admin-daily-list">
                  <div className="admin-daily-item">
                    <span>Available Doctors</span>
                    <span className="admin-daily-icon"><FaUserMd /></span>
                    <span className="admin-daily-value">58</span>
                  </div>
                  <div className="admin-daily-item">
                    <span>Available Workers</span>
                    <span className="admin-daily-icon"><FaUserFriends /></span>
                    <span className="admin-daily-value">210</span>
                  </div>
                </div>
              </div>

              <div className="admin-card">
                <div className="admin-card-header-row">
                  <h2 className="admin-card-title">Upcoming Visit Scheduling</h2>
                  <button className="admin-schedule-btn">
                    <FaCalendarCheck style={{ marginRight: '6px' }} />
                    Schedule a Visit
                  </button>
                </div>
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Location/Village</th>
                      <th>Visit Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Kapsabet</td><td>28 July, 2023</td></tr>
                    <tr><td>Eldoret</td><td>29 July, 2023</td></tr>
                    <tr><td>Nandi Hills</td><td>30 July, 2023</td></tr>
                    <tr><td>Iten</td><td>01 Aug, 2023</td></tr>
                    <tr><td>Kapsabet</td><td>02 Aug, 2023</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;