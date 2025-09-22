import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/navbar';
import Landing from './pages/landing';
import Main from './pages/main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/dashbord';
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
function AppLayout() {
  const location = useLocation();

  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = [
    '/',
    '/landing',
    '/landing/login',
    '/landing/signup',
    '/doctordashboard',
    '/admindashboard',
    '/report',
    '/patientdetails'
  ];
  const doctorBar = [
    '/doctordashboard',
    '/patientdetails'
  ]
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  const shouldShowNavbar = doctorBar.includes(location.pathname) ;
  const simpleRoutes = ["/", "/landing", "/landing/login", "/landing/signup"];
  const isSimple = simpleRoutes.includes(location.pathname);
  return (
    isSimple ? (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing/login" element={<Login />} />
          <Route path="/landing/signup" element={<Signup />} />
        </Routes>
      </AnimatePresence>
    ) : (
      <div className="app">
        {!shouldHideNavbar && <Navbar />}
        {shouldShowNavbar && <DoctorSidebar/>}
        <div className="app-content">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/workerdashboard" element={<WorkerDashboard />} />
              <Route path="/doctordashboard" element={<DoctorDashboard />} />
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/queue" element={<Queue />} />
              <Route path="/vitals" element={<Vitals />} />
              
              <Route path="/patients" element={<AddPatientForm />} />
              <Route path="/report" element={<Report />} />
              <Route path="/recordvitals" element={<RecordVitals />} />
              <Route path="/doctor" element={<Doctor />} />
              <Route path="/patientdetails" element={<PatientDetailsList />} />
              <Route path="/details" element={<PatientDetails />} />
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