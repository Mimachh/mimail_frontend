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


const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <GuestLayout>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              {/* Ajoutez d'autres routes spécifiques à GuestLayout ici */}
            </Routes>
          </GuestLayout>
        }
      />
      <Route
        path="/auth/*"
        element={
          <AuthLayout>
            <Routes>
              
              {/* Définissez d'autres routes auth imbriquées ici */}
            </Routes>
          </AuthLayout>
        }
      />
      
      {/* Définissez d'autres routes ici */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
