import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
// import i18n (needs to be bundled ;))
import '../i18n';

import { BrowserRouter, RouterProvider, Routes
 } from 'react-router-dom';
import Navbar from './components/nav/navbar';
import router from './router';
import AppRoutes from './router';
import { AuthProvider } from './context/AuthContext';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      {/* <div className='font-clashVariable'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        
      </Routes>
      </BrowserRouter>
      <RouterProvider router={router} />
      </div> */}

    <React.StrictMode>
      <div className='font-clashVariable'>
        <BrowserRouter>
          <AuthProvider>
            <Navbar />
            <AppRoutes />
          </AuthProvider>
        </BrowserRouter>
      </div>
    </React.StrictMode>
      

    </React.StrictMode>
  );
} else {
  console.error("L'élément avec l'ID 'root' n'a pas été trouvé.");
}
