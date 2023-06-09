import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/providers/AuthProvider';
import { AppDataProvider } from './context/providers/AppDataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppDataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppDataProvider>
    </AuthProvider>
  </React.StrictMode>
);
