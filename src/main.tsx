import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";


// Import CSS Style
import './index.css'
import '@mantine/core/styles/global.css';
import '@mantine/core/styles.css';
import './assets/css/ConfirmPage.css'
import './assets/css/HomePage.css'
import './assets/css/SignPage.css'
import './assets/css/ForgotPassword.css'
import './assets/css/SetorSampahPages.css'
import './assets/css/ExchangePage.css'
import './assets/css/HistoryPage.css'
import './assets/css/DepositPage.css'
import './assets/css/HomePage.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
