
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyHistory from './Pages/Dashboard/MyHistory';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';

import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<Signup />}></Route>
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }
        ></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
        >
          <Route index element={<MyAppointment />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="myHistory" element={<MyHistory />}></Route>
          <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor /></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors /></RequireAdmin>}></Route>
        </Route>
        <Route path='reviews' element={<About />}></Route>
        <Route path='contactUs' element={<About />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
