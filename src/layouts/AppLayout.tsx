import NavBar from '@/components/nav/NavBar';
import React from 'react';

import { Outlet } from 'react-router-dom';


const AppLayout = () => {
  return  <>
  <NavBar />
  <Outlet /> 
  </>
};

export default AppLayout;
