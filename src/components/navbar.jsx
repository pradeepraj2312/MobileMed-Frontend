import React, { useContext, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo1 from '../assets/image/logo1.png';
import { FaThLarge, FaUserInjured, FaHeartbeat, FaListAlt, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';


function Navbar() {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  // Set active menu based on current route
  const getActiveMenu = () => {
    if (location.pathname.startsWith('/queue') || location.pathname.startsWith('/patientdetails')) return 'Queue';
    if (location.pathname.startsWith('/dashboard')) return 'Dashboard';
    if (location.pathname.startsWith('/patients')) return 'Patients';
    if (location.pathname.startsWith('/vitals')) return 'Vitals';
    return '';
  };
  const [isActive, setIsActive] = React.useState(getActiveMenu());

  React.useEffect(() => {
    setIsActive(getActiveMenu());
    // eslint-disable-next-line
  }, [location.pathname]);

  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = ['/', '/landing', '/landing/login', '/landing/signup','/workers','/addworker','/doctors'];
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

  // Don't render navbar on specific routes
  if (shouldHideNavbar) {
    return null;
  }

  return (
    <div className={`navbar-container${collapsed ? ' collapsed' : ''}`} style={{ background: 'linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%)', color: '#fff', minHeight: '100vh' }}> 
      <div className="user-info">
        <div className="clinic-logo" onClick={() => setCollapsed((prev) => !prev)} style={{ cursor: 'pointer', paddingLeft: collapsed ? 8 : 18 }}>
          <img src={logo1} alt="MobileMed Logo" className="logo-img" style={{ marginRight: collapsed ? 0 : 10 }} />
          <span className="clinic-name" style={{ fontSize: collapsed ? '1.5rem' : '2.2rem', fontWeight: 700, marginLeft: collapsed ? 0 : 10, display: collapsed ? 'none' : 'inline' }}>MobileMed</span>
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
        <ul className="nav-menu" style={{ gap: collapsed ? '10px' : '18px', background: 'transparent' }}>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${isActive === item.id ? 'active' : ''}`}
              onClick={() => handleItemClick(item.id)}
              style={{ padding: collapsed ? '12px 10px' : '12px 24px', display: 'flex', justifyContent: collapsed ? 'center' : 'flex-start', background: 'transparent' }}
            >
              <Link to={item.path} className="nav-link">
                <span className="nav-icon">{item.icon}</span>
                {!collapsed && <span className="nav-label">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;