// import { Navigate, createBrowserRouter } from "react-router-dom";
// import Login from "./views/Login";
// import Signup from "./views/Signup";
// import App from "./App"
// import NotFound from "./views/NotFound";
// import AuthLayout from "./layouts/AuthLayout";
// import Signin from "./views/Signin";
// import GuestLayout from "./layouts/GuestLayout";

// const router = createBrowserRouter([
//     {
//         path: '/auth',
//         element: <AuthLayout />,
//         children: [
//             {
//                 path: '/auth',
//                 element: <Navigate to="/auth/dashboard" />,
//             },
//             {
//                 path: '/auth/dashboard',
//                 element: <Signin />
//             }
//         ]
//     },
//     {
//         path: '/',
//         element: <GuestLayout />,
//         children: [
//             {
//                 path: '/login',
//                 element: <Login />
//             },
//             {
//                 path: '/signup',
//                 element: <Signup />
//             },
//             {
//                 path: '/',
//                 element: <App />
//             },
//         ]
//     },
//     {
//         path: '*',
//         element: <NotFound />
//     },


// ]);

// export default router;

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


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Route>

      <Route element={<GuestLayout />}>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        
      </Route>

      <Route element={<AppLayout />}>
        <Route path='/' element={<App />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
