import React from 'react';
import Navbar from '@/components/nav/navbar';
import { Outlet } from 'react-router-dom';


const AppLayout = () => {
  return  <>
  <Navbar />
  <Outlet /> 
  </>
};

export default AppLayout;
