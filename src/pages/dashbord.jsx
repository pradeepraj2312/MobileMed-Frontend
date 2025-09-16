import React, { useContext } from 'react';

import {
  FaClock,
  FaMapMarkerAlt,
  FaUserInjured,
  FaUserPlus,
  FaHeartbeat,
  FaTasks,
  FaCalendarDay
} from 'react-icons/fa';
import { UserContext } from '../context/UserContext';
import './StyleSheet/worker.css'

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div className="worker-dashboard">
      <header className="dashboard-header">
        <h1>{user && user.userRole ? `${user.userRole} Dashboard` : "Dashboard"}</h1>
        <p className="welcome-message">
          {user && user.userName
            ? `Welcome back, Dr. ${user.userName}`
            : "Welcome back"}
        </p>
      </header>

      <section className="today-overview">
        <h2>Today's Overview</h2>
        <div className="overview-cards">
          <div className="overview-card">
            <div className="card-icon">
              <FaClock />
            </div>
            <div className="card-content">
              <h3>Duty Time</h3>
              <p>8:00 AM - 5:00 PM</p>
            </div>
          </div>

          <div className="overview-card">
            <div className="card-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="card-content">
              <h3>Current Location</h3>
              <p>Camp Alpha</p>
            </div>
          </div>

          <div className="overview-card">
            <div className="card-icon">
              <FaUserInjured />
            </div>
            <div className="card-content">
              <h3>Patients Seen</h3>
              <p>25</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tasks-section">
        <h2>Tasks</h2>
        <div className="tasks-list">
          <div className="task-item">
            <div className="task-icon">
              <FaUserPlus />
            </div>
            <div className="task-details">
              <h3>Add New Patients</h3>
              <p>10:00 AM - 12:00 PM</p>
            </div>
            <div className="task-status pending">Pending</div>
          </div>

          <div className="task-item">
            <div className="task-icon">
              <FaHeartbeat />
            </div>
            <div className="task-details">
              <h3>Check Vital Signs</h3>
              <p>1:00 PM - 2:00 PM</p>
            </div>
            <div className="task-status in-progress">In Progress</div>
          </div>

          <div className="task-item">
            <div className="task-icon">
              <FaTasks />
            </div>
            <div className="task-details">
              <h3>Queue Management</h3>
              <p>All Day</p>
            </div>
            <div className="task-status completed">Completed</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;