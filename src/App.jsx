import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/navbar';
import Landing from './pages/landing';
import Main from './pages/main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logout from './pages/Logout';

import Queue from './pages/queue';
import Vitals from './pages/vitals';
import AdminDashboard from './pages/admainDashboard';
import DoctorDashboard from './pages/doctorDashboard';
import WorkerDashboard from './pages/workerDashboard';
import AddPatientForm from './pages/Addpatient';
import PatientDetails from './pages/patientdetails';
import RecordVitals from './pages/recordvitals';
import Doctor from './pages/doctor';
import PatientDetailsList from './pages/PatientDetailsList';
import Report from './pages/Report';
import './frame.css'
import DoctorSidebar from './components/DoctorSidebar';
import AdminSidebar from './components/adminSidebar';
import WorkerSidebar from './components/WorkerSidebar';
import Workers from './pages/workers';
function AppLayout() {
  const location = useLocation();

  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = [
    '/',
    '/landing',
    '/landing/login',
    '/landing/signup',
    '/login',
    '/signup',
    '/doctordashboard',
    '/admindashboard',
    '/workerdashboard',
    '/report',
    '/patientdetails',
    '/details'
  ];
  const doctorBar = [
    '/doctordashboard',
    '/patientdetails',
    '/details'
  ];
  const workerBar = [
    '/workerdashboard',
    '/details'
  ];
  const adminBar = [
    '/admindashboard',
    '/workers'
  ];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  const shouldShowDoctorSidebar = doctorBar.includes(location.pathname);
  const shouldShowWorkerSidebar = workerBar.includes(location.pathname);
  const shouldShowAdminSidebar = adminBar.includes(location.pathname);
  
  // For shared routes like /details, determine sidebar based on user role or referrer
  const getUserRole = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.userRole;
  };
  
  const determineActiveSidebar = () => {
    const userRole = getUserRole();
    const currentPath = location.pathname;
    
    if (currentPath === '/details') {
      // For shared /details route, check user role or referrer
      if (userRole === 'Doctor') return 'doctor';
      if (userRole === 'Worker' || userRole === 'Nurse') return 'worker';
      // Default fallback based on previous routes in history
      return 'doctor'; // default to doctor
    }
    
    if (shouldShowDoctorSidebar) return 'doctor';
    if (shouldShowWorkerSidebar) return 'worker';
    if (shouldShowAdminSidebar) return 'admin';
    return null;
  };
  
  const activeSidebar = determineActiveSidebar();
  const simpleRoutes = ["/", "/landing", "/landing/login", "/landing/signup", "/login", "/signup", "/logout"];
  const isSimple = simpleRoutes.includes(location.pathname);
  return (
    isSimple ? (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing/login" element={<Login />} />
          <Route path="/landing/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </AnimatePresence>
    ) : (
      <div className="app">
        {!shouldHideNavbar && <Navbar />}
        {activeSidebar === 'doctor' && <DoctorSidebar/>}
        {activeSidebar === 'worker' && <WorkerSidebar/>}
        {activeSidebar === 'admin' && <AdminSidebar/>}
        <div className="app-content">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/workerdashboard" element={<WorkerDashboard />} />
              <Route path="/doctordashboard" element={<DoctorDashboard />} />
              <Route path="/admindashboard" element={<AdminDashboard />} />
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
              <Route path="/queue" element={<Queue />} />
              <Route path="/vitals" element={<Vitals />} />
              <Route path="/workers" element={<Workers/>}/>
              <Route path="/patients" element={<AddPatientForm />} />
              <Route path="/report" element={<Report />} />
              <Route path="/recordvitals" element={<RecordVitals />} />
              <Route path="/doctor" element={<Doctor />} />
              <Route path="/patientdetails" element={<PatientDetailsList />} />
              <Route path="/details" element={<PatientDetails />} />
              {/* Redirect routes for backward compatibility */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    )
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;