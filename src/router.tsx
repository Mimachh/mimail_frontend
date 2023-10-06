import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './views/Login';
import NotFound from './views/NotFound';
import Signup from './views/Signup';
import GuestLayout from './layouts/GuestLayout';
import AuthLayout from './layouts/AuthLayout';
import Dashboard from './views/auth/Dashboard';
import AppLayout from './layouts/AppLayout';
import VerifiedEmail from './views/Emails/VerifiedEmail';
import AlreadyVerifiedEmail from './views/Emails/AlreadyVerifiedEmail';
import ForgottenPassword from './views/auth/ForgottenPassword';
import ResetPassword from './views/auth/ResetPassword';
import ProfileIndex from './components/auth/dashboard/profile/ProfileIndex';




const AppRoutes = () => {
  return (
    <Routes>


      <Route element={<GuestLayout />}>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        
        {/* Password */}

      </Route>

      <Route element={<AppLayout />}>
        <Route path='/' element={<App />}></Route>
        <Route path='/*' element={<NotFound />}></Route>

        {/* Email vérification */}
        {/* Arevoir */}
        <Route path='/email/should-be-validated' element={<VerifiedEmail />}></Route>

        <Route path='/email/verify/success' element={<VerifiedEmail />}></Route>
        <Route path='/email/verify/already-success' element={<AlreadyVerifiedEmail />}></Route>

        <Route path='/forgot-password' element={<ForgottenPassword />}></Route>
        <Route path='/password-reset/:token' element={<ResetPassword />}></Route>
      </Route>

      {/* Dashboard */}
      <Route element={<AuthLayout />}>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/profile' element={<ProfileIndex />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
