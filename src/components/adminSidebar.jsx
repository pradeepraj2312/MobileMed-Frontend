import React, { useContext, useState, useEffect } from "react";
import {
  FaTachometerAlt,
  FaUserMd,
  FaUserFriends,
  FaFileAlt,
  FaChartLine,
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

const AdminSidebar = () => {
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
    if (location.pathname.startsWith("/admin")) return "dashboard";
    if (location.pathname.startsWith("/workers")) return "workers";
    if (location.pathname.startsWith("/doctors")) return "doctors";
    if (location.pathname.startsWith("/records")) return "records";
    if (location.pathname.startsWith("/disease-analytics")) return "analytics";
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
    { id: "dashboard", icon: <FaTachometerAlt />, label: "Dashboard", path: "/admin" },
    { id: "workers", icon: <FaUserFriends />, label: "Workers", path: "/workers" },
    { id: "doctors", icon: <FaUserMd />, label: "Doctors", path: "/doctors" },
    { id: "records", icon: <FaFileAlt />, label: "Records", path: "/records" },
    { id: "analytics", icon: <FaChartLine />, label: "Disease Analytics", path: "/disease-analytics" },
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
              <div className="user-role">{user?.userRole || "Admin"}</div>
              <div className="doctor-name">{user?.userName || "Admin Panel"}</div>
              <div className="doctor-title">System Management</div>
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

export default AdminSidebar;