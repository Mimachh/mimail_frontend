import Navbar from '@/components/nav/navbar';
import useAuthContext from '@/context/AuthContext';
import React, { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const GuestLayout = () => {

  const { user } = useAuthContext() as AuthContextType;
  // return (
  //   <>
  //     {children}
  //   </>
  // );
  return !user ? <>
  <Navbar />
  <Outlet /> </>: <Navigate to="/dashboard"/>
};

export default GuestLayout;
