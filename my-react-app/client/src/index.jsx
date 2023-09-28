import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import 'semantic-ui-css/semantic.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter } from "react-router-dom";

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

