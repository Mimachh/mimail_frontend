import useAuthContext from '@/context/AuthContext';
import React, { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';



const AuthLayout = () => {

  const { user } = useAuthContext() as AuthContextType;


  // return (
  //   <>
  //   auth
  //     {children}
  //   </>
  // );
  return user ? <Outlet /> : <Navigate to="/login"/>
};

export default AuthLayout;
