import React, { useContext, useState, useEffect } from "react";
import {
  FaTachometerAlt,
  FaUserInjured,
  FaHeartbeat,
  FaClipboardList,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import logo1 from "../assets/image/logo1.png";
import "../pages/StyleSheet/navbar.css";

const WorkerSidebar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setCollapsed(true);
      } else {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getActiveMenu = () => {
    if (location.pathname.startsWith("/workerdashboard")) return "dashboard";
    if (location.pathname.startsWith("/patientdetails")) return "patients";
    if (location.pathname.startsWith("/details")) return "patients";
    if (location.pathname.startsWith("/queue")) return "queue";
    if (location.pathname.startsWith("/vitals")) return "vitals";
    return "";
  };

  const [isActive, setIsActive] = useState(getActiveMenu());

  useEffect(() => {
    setIsActive(getActiveMenu());
    if (isMobile) {
      setMobileOpen(false);
    }
  }, [location.pathname, isMobile]);

  const menuItems = [
    { id: "dashboard", icon: <FaTachometerAlt />, label: "Dashboard", path: "/workerdashboard" },
    { id: 'Patients', icon: <FaUserInjured />, label: 'Patients', path: '/patients' },
    { id: "queue", icon: <FaClipboardList />, label: "Queue", path: "/queue" },
    { id: "vitals", icon: <FaHeartbeat />, label: "Record Vitals", path: "/vitals" },
    { id: "logout", icon: <FaSignOutAlt />, label: "Logout", path: "/logout" },
  ];

  const handleItemClick = (itemId) => {
    setIsActive(itemId);
  };

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <>
      {isMobile && (
        <button className="mobile-toggle-btn" onClick={toggleSidebar} aria-label="Toggle menu">
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {isMobile && mobileOpen && (
        <div className="navbar-overlay" onClick={() => setMobileOpen(false)}></div>
      )}

      <div
        className={`navbar-container${collapsed ? " collapsed" : ""}${isMobile ? " mobile" : ""}${mobileOpen ? " mobile-open" : ""}`}
      >
        <button className="toggle-btn" onClick={toggleSidebar} aria-label="Toggle sidebar">
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>

        <div className="user-info">
          <div className="clinic-logo" onClick={() => !isMobile && setCollapsed((prev) => !prev)}>
            <img src={logo1} alt="MobileMed Logo" className="logo-img" />
            <span className="clinic-name">MobileMed</span>
          </div>
          {!collapsed && (
            <div className="user-details">
              <div className="user-role">{user?.userRole || "Worker"}</div>
              <div className="doctor-name">{user?.userName || "Hospital Worker"}</div>
              <div className="doctor-title">Patient Care</div>
            </div>
          )}
        </div>

        <nav className="navbar">
          <ul className="nav-menu">
            {menuItems.map((item, index) => (
              <li
                key={item.id}
                className={`nav-item ${isActive === item.id ? "active" : ""}`}
                onClick={() => handleItemClick(item.id)}
                style={{ animationDelay: `${index * 0.05 + 0.05}s` }}
              >
                <Link to={item.path} className="nav-link">
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </Link>
                {collapsed && <span className="tooltip">{item.label}</span>}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default WorkerSidebar;