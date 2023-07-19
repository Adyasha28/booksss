import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom"; 
import App from './App';
import AppContextProvider from '../src/Components/Context/appcontext';
import { AuthProvider } from './context/AuthProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AppContextProvider>
      <AuthProvider>
      <App />
      </AuthProvider>
  
    </AppContextProvider>   
  </Router>
   
);

