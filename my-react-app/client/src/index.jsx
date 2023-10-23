import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MusicPlayerProvider } from "./components/mediaPlayer/musicPlayerContext";

import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

import App from "./App";


// New way of rendering using createRoot for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <React.StrictMode>
      <MusicPlayerProvider>
        <App />
        </MusicPlayerProvider>
    </React.StrictMode>
  </BrowserRouter>
);
