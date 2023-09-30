import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Toaster } from 'react-hot-toast';
import './index.css';
// import i18n (needs to be bundled ;))
import '../i18n';

import { BrowserRouter
 } from 'react-router-dom';

import AppRoutes from './router';
import { AuthProvider } from './context/AuthContext';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>

    <React.StrictMode>
      <div className='font-clashVariable'>
        <BrowserRouter>
          <AuthProvider>
            {/* <Navbar /> */}
            <Toaster />
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
