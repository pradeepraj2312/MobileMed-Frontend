// AdminSidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function AdminSidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">MobileMed</h2>
      <ul className="sidebar-links">
        <li><NavLink to="/admin">📊 Dashboard</NavLink></li>
        <li><NavLink to="/workers">👥 Workers</NavLink></li>
        <li><NavLink to="/doctors">🩺 Doctors</NavLink></li>
        <li><NavLink to="/records">📑 Records</NavLink></li>
        <li><NavLink to="/disease-analytics">📈 Disease Analytics</NavLink></li>
        <li><NavLink to="/logout">↪️ Logout</NavLink></li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
