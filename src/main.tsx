import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";


// Import CSS Style
import './index.css'
import '@mantine/core/styles/global.css';
import '@mantine/core/styles.css';
import './assets/css/HomePage.module.css'
import './assets/css/SignPage.css'
import './assets/css/ForgotPassword.css'
import './assets/css/SetorSampahPages.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
