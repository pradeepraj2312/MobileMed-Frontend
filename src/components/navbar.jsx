import React, { useContext, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo1 from '../assets/image/logo1.png'
import { 
  FaThLarge, 
  FaUserInjured, 
  FaHeartbeat, 
  FaListAlt, 
  FaCog, 
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import { UserContext } from '../context/UserContext';

function Navbar({ onToggleCollapse }){

  const handleToggle = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    if (onToggleCollapse) {
      onToggleCollapse(newState);
    }
  };
  const {user} = useContext(UserContext)
  const location = useLocation();
  const [isActive, setIsActive] = useState('Dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = ['/', '/landing', '/landing/login', '/landing/signup','/workers','/addworker','/doctors'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  
  const menuItems = [
    { id: 'Dashboard', icon: <FaThLarge />, label: 'Dashboard', path: '/dashboard' },
    { id: 'Patients', icon: <FaUserInjured />, label: 'Patients', path: '/patients' },
    { id: 'Vitals', icon: <FaHeartbeat />, label: 'Vitals', path: '/vitals' },
    { id: 'Queue', icon: <FaListAlt />, label: 'Queue', path: '/queue' },
    { id: 'Settings', icon: <FaCog />, label: 'Settings', path: '/settings' },
    { id: 'Logout', icon: <FaSignOutAlt />, label: 'Logout', path: '/landing' }
  ];

  const handleItemClick = (itemId) => {
    setIsActive(itemId);
  };

  // Don't render navbar on specific routes
  if (shouldHideNavbar) {
    return null;
  }

  return (
    <div className={`navbar-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="toggle-btn" onClick={handleToggle}>
        {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </div>
      
      <div className="user-info">
        <div className="clinic-logo">
          <img src={logo1} alt="MobileMed Logo" className="logo-img" />
          {!isCollapsed && <span className="clinic-name">MobileMed</span>}
        </div>
        
        {!isCollapsed && (
          <div className="user-details">
            <div className="user-role">{user && user.userRole ? user.userRole : "Role"}</div>
            <div className="doctor-name">{user && user.userName ? `Dr. ${user.userName}` : "Dr. Emily Carter"}</div>
            <div className="doctor-title">Medical Camp {user && user.userRole ? user.userRole : "Worker"}</div>
          </div>
        )}
      </div>
      
      <nav className="navbar">
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li 
              key={item.id} 
              className={`nav-item ${isActive === item.id ? 'active' : ''}`}
              onClick={() => handleItemClick(item.id)}
            >
              <Link to={item.path} className="nav-link">
                <span className="nav-icon">{item.icon}</span>
                {!isCollapsed && <span className="nav-label">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;