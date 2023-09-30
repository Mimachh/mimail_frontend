import NavBar from '@/components/nav/NavBar';
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
  <NavBar />
  <Outlet /> </>: <Navigate to="/dashboard"/>
};

export default GuestLayout;
