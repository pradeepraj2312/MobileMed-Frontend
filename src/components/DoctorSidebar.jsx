
import React, { useContext } from "react";
import { FaTachometerAlt, FaUserMd, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import logo1 from "../assets/image/logo1.png";
import "../App.css";

const DoctorSidebar = ({ active, onNavigate }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleNav = (route) => {
    if (onNavigate) onNavigate(route);
    navigate(route);
  };

  return (
    <aside className="doctor-sidebar doctor-navbar-gradient">
      <div>
        <div className="doctor-sidebar-header doctor-sidebar-logo-row">
          <img src={logo1} alt="MobileMed Logo" className="doctor-logo-img" />
          <span className="doctor-clinic-name">MobileMed</span>
        </div>
        <div className="doctor-sidebar-header">
          <div className="doctor-avatar" />
          <div className="doctor-info">
            <span className="doctor-name">{user && user.userName ? `Dr. ${user.userName}` : "Dr. Emily Carter"}</span>
            <span className="doctor-role">{user && user.userRole ? user.userRole : "Doctor"}</span>
            <a href="#" className="doctor-profile-link">View Profile</a>
          </div>
        </div>
        <nav className="doctor-sidebar-nav">
          <ul>
            <li className={active === "dashboard" ? "active" : ""} onClick={() => handleNav("/doctor")}> <FaTachometerAlt className="sidebar-icon" /> Dashboard </li>
            <li className={active === "patients" ? "active" : ""} onClick={() => handleNav("/patientdetails")}> <FaUserMd className="sidebar-icon" /> Patient Details </li>

          </ul>
        </nav>
      </div>
      <div className="doctor-sidebar-footer">
        <a className="doctor-logout-link" href="/login"> <FaSignOutAlt /> Logout </a>
      </div>
    </aside>
  );
};

export default DoctorSidebar;
