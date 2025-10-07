

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/navbar';
import Landing from './pages/landing';
import Main from './pages/main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/dashbord';
import Queue from './pages/queue';
import Vitals from './pages/vitals';
import Settings from './pages/settings';
import Admin from './pages/admin';
import Workers from './pages/workers';
import AddWorker from "./pages/addworker";
import AddDoctor from './pages/AddDoctor';
import Doctors from "./pages/doctors";
import DiseaseAnalytics from "./pages/DiseaseAnalytics";
import Addpatient from './pages/Addpatient';


import AdminDashboard from './pages/admainDashboard';
import DoctorDashboard from './pages/doctorDashboard';
import WorkerDashboard from './pages/workerDashboard';

import './App.css';

function AppLayout() {
  const location = useLocation();

  // Define routes where Navbar should be hidden
    const hideNavbarRoutes = ['/', '/landing', '/landing/login', '/landing/signup','/admin','/workers','/add-worker','/adddoctor', '/doctor', '/report', '/patientdetails'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="app">
      {/* Only show Navbar when not on hide routes */}
      {!shouldHideNavbar && <Navbar />}

      <div className={`main-content ${shouldHideNavbar ? 'full-width' : ''}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Landing + Auth */}
            <Route path="/" element={<Navigate to="/landing" replace />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/landing/login" element={<Login />} />
            <Route path="/landing/signup" element={<Signup />} />

            {/* Dashboards */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/doctordashboard" element={<DoctorDashboard />} />
            <Route path="/workerdashboard" element={<WorkerDashboard />} />

            {/* Admin Page (with sidebar inside admin.jsx) */}
            <Route path="/admin" element={<Admin />} />
              {/*workers page*/}
            <Route path="/workers" element={<Workers />} />
            <Route path="/addworker" element={<AddWorker />} />
              
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/adddoctor" element={<AddDoctor />} />
            <Route path="/disease-analytics" element={<DiseaseAnalytics />} />

            
            {/* Other Pages */}
            <Route path="/queue" element={<Queue />} />
            <Route path="/patients" element={<Addpatient />} />
            <Route path="/vitals" element={<Vitals />} />
            <Route path="/settings" element={<Settings />} />

            {/* Disease Analytics Page */}
            <Route path="/disease-analytics" element={<DiseaseAnalytics />} />

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/landing" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
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
