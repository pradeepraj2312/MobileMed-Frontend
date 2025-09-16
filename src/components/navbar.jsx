
import '../pages/StyleSheet/navbar.css'
import React, { useContext, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo1 from '../assets/image/logo1.png';
import { FaThLarge, FaUserInjured, FaHeartbeat, FaListAlt, FaSignOutAlt, FaBars, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';


function Navbar() {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Auto-collapse on mobile
      if (mobile) {
        setCollapsed(true);
      } else {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set active menu based on current route
  const getActiveMenu = () => {
    if (location.pathname.startsWith('/queue') || location.pathname.startsWith('/patientdetails')) return 'Queue';
    if (location.pathname.startsWith('/dashboard')) return 'Dashboard';
    if (location.pathname.startsWith('/patients')) return 'Patients';
    if (location.pathname.startsWith('/vitals')) return 'Vitals';
    return '';
  };
  
  const [isActive, setIsActive] = useState(getActiveMenu());

  useEffect(() => {
    setIsActive(getActiveMenu());
    // Close mobile menu when navigating
    if (isMobile) {
      setMobileOpen(false);
    }
  }, [location.pathname, isMobile]);

  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = ['/', '/landing', '/landing/login', '/landing/signup'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  const menuItems = [
    { id: 'Dashboard', icon: <FaThLarge />, label: 'Dashboard', path: '/dashboard' },
    { id: 'Patients', icon: <FaUserInjured />, label: 'Patients', path: '/patients' },
    { id: 'Vitals', icon: <FaHeartbeat />, label: 'Vitals', path: '/vitals' },
    { id: 'Queue', icon: <FaListAlt />, label: 'Queue', path: '/queue' },
    { id: 'Logout', icon: <FaSignOutAlt />, label: 'Logout', path: '/landing' }
  ];

  const handleItemClick = (itemId) => {
    setIsActive(itemId);
  };

  const toggleNavbar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  // Don't render navbar on specific routes
  if (shouldHideNavbar) {
    return null;
  }

  return (
    <>
      {/* Mobile hamburger menu button */}
      {isMobile && (
        <button 
          className="mobile-toggle-btn"
          onClick={toggleNavbar}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}
      
      {/* Overlay for mobile when menu is open */}
      {isMobile && mobileOpen && (
        <div 
          className="navbar-overlay"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
      
      <div 
        className={`navbar-container${collapsed ? ' collapsed' : ''}${isMobile ? ' mobile' : ''}${mobileOpen ? ' mobile-open' : ''}`}
      > 
        <button className="toggle-btn" onClick={toggleNavbar} aria-label="Toggle sidebar">
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
        
        <div className="user-info">
          <div className="clinic-logo" onClick={() => !isMobile && setCollapsed(prev => !prev)}>
            <img src={logo1} alt="MobileMed Logo" className="logo-img" />
            <span className="clinic-name">MobileMed</span>
          </div>
          {!collapsed && (
            <div className="user-details">
              <div className="user-role">{user && user.userRole ? user.userRole : "Role"}</div>
              <div className="doctor-name">{user && user.userName ? `Dr. ${user.userName}` : "Dr. Emily Carter"}</div>
              <div className="doctor-title">Medical Camp {user && user.userRole ? user.userRole : "Worker"}</div>
            </div>
          )}
        </div>
        
        <nav className="navbar">
          <ul className="nav-menu">
            {menuItems.map((item, index) => (
              <li
                key={item.id}
                className={`nav-item ${isActive === item.id ? 'active' : ''}`}
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
}

export default Navbar;