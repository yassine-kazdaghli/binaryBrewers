import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

import App from "./App";
import MediaProvider from "./components/mediaPlayer/mediaContext";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <MediaProvider>
        <App />
      </MediaProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
