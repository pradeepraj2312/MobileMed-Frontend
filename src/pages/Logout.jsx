import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Logout() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    
    // Clear user context
    if (setUser) {
      setUser(null);
    }
    
    // Redirect to login page
    navigate('/landing/login', { replace: true });
  }, [navigate, setUser]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontSize: '18px',
      color: '#666'
    }}>
      Logging out...
    </div>
  );
}

export default Logout;