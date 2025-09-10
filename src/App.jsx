import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/navbar';
import Landing from './pages/landing';
import Main from './pages/main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/dashbord'; 
import './App.css';
import Queue from './pages/queue';
import Patients from './pages/patients';
import Vitals from './pages/vitals';
import Settings from './pages/settings';
import AdminDashboard from './pages/admainDashboard';
import DoctorDashboard from './pages/doctorDashboard';
import WorkerDashboard from './pages/workerDashboard';
import AddPatientForm from './components/Addpatient';



function AppLayout() {
  const location = useLocation();

  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = ['/', '/landing', '/landing/login', '/landing/signup'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="app">
      <Navbar />
      <div className={`main-content ${shouldHideNavbar ? 'full-width' : ''}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/landing/login" element={<Login />} />
            <Route path="/landing/signup" element={<Signup />} />
            <Route path="/workerdashboard" element={<WorkerDashboard />} />
            <Route path="/doctordashboard" element={<DoctorDashboard />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/queue' element={<Queue/>}/>
            <Route path='/patients' element={<Patients/>}/>
            <Route path='/vitals' element={<Vitals/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/addpatient' element={<AddPatientForm/>}/>
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