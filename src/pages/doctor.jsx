import React, { useContext } from 'react';
import Navbar from '../components/navbar';
import { UserContext } from '../context/UserContext';
import { FaMapMarkerAlt, FaUsers, FaCheckCircle } from 'react-icons/fa';
import DoctorSidebar from '../components/DoctorSidebar';

function Doctor() {
  const { user } = useContext(UserContext);
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="dashboard-page">
      <DoctorSidebar user={user} />
      <div className="main-content dashboard-main-content">
        <div className="dashboard-header-row">
          <div>
            <h1 className="dashboard-title">Route</h1>
            <div className="dashboard-date">Today's Date: <span className="dashboard-date-value">{today}</span></div>
          </div>
        </div>
        <div className="dashboard-content-row">
          <div className="dashboard-content-main">
            <div className="dashboard-card dashboard-live-route">
              <div className="dashboard-card-header-row">
                <h2 className="dashboard-card-title">Live Route</h2>
                <input className="dashboard-search" placeholder="Search location..." />
              </div>
              <div className="dashboard-live-route-img">
                {/* Replace with actual map or image */}
                <img src="https://img.icons8.com/color/480/marker.png" alt="Live Route" style={{ width: '100%', maxHeight: 220, objectFit: 'contain', background: '#f5f5f5', borderRadius: 12 }} />
              </div>
            </div>
            <div className="dashboard-card dashboard-total-schedule">
              <h2 className="dashboard-card-title">Total Schedule</h2>
              <div className="dashboard-schedule-list">
                <div className="dashboard-schedule-item">
                  <FaMapMarkerAlt className="dashboard-schedule-icon" />
                  <div>
                    <div className="dashboard-schedule-location">Rural Village A</div>
                    <div className="dashboard-schedule-time">9:00 AM - 12:00 PM</div>
                    <div className="dashboard-schedule-desc">Community Health Check-ups</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-content-side">
            <div className="dashboard-card dashboard-daily-schedule">
              <h2 className="dashboard-card-title">Daily Schedule</h2>
              <div className="dashboard-daily-list">
                <div className="dashboard-daily-item">
                  <span>Villages to Visit</span>
                  <span className="dashboard-daily-icon"><FaMapMarkerAlt /></span>
                  <span className="dashboard-daily-value">2</span>
                </div>
                <div className="dashboard-daily-item">
                  <span>Patients in Queue</span>
                  <span className="dashboard-daily-icon"><FaUsers /></span>
                  <span className="dashboard-daily-value">3</span>
                </div>
                <div className="dashboard-daily-item">
                  <span>Patients Completed</span>
                  <span className="dashboard-daily-icon"><FaCheckCircle /></span>
                  <span className="dashboard-daily-value">2</span>
                </div>
              </div>
            </div>
            <div className="dashboard-card dashboard-route-details">
              <h2 className="dashboard-card-title">Route Details</h2>
              <div className="dashboard-route-section">
                <div className="dashboard-route-label">Current Location</div>
                <div className="dashboard-route-box">
                  <div className="dashboard-route-location">Rural Village A</div>
                  <div className="dashboard-route-time">Arrived at 9:00 AM</div>
                </div>
              </div>
              <div className="dashboard-route-section">
                <div className="dashboard-route-label">Upcoming Location</div>
                <div className="dashboard-route-box">
                  <div className="dashboard-route-location">Urban Slum B</div>
                  <div className="dashboard-route-time">ETA: 2:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor;