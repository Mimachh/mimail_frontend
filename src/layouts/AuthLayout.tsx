import Navbar from '@/components/sidebar/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';
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
  return user ? 
  <div className="h-full relative">
       <div 
       className="hidden h-full md:flex md:w-72 
        md:flex-col md:fixed md:inset-y-0 
        bg-gray-900
       ">
        <Sidebar />
       </div>
       <main className="md:pl-72">
            <Navbar />
            <Outlet />
       </main>
    </div>
  : <Navigate to="/login"/>
};

export default AuthLayout;
