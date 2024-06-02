import { Routes, Route } from "react-router-dom";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';

// Import Pages
import HomePage from "./assets/Pages/HomePage";
import RegisterPage from "./assets/Pages/RegisterPage";
import LoginPage from "./assets/Pages/LoginPage";
import ForgotPassword from "./assets/Components/ForgotPassword";
import SetorSampahPages from "./assets/Pages/SetorSampahPages";
import ConfirmPage from "./assets/Pages/ConfirmPage";
import ConfirmPenukaranPage from "./assets/Pages/ConfirmPenukaranPage";
import HistoryPage from "./assets/Pages/HistoryPage";
import DepositSetorSampahPage from "./assets/Pages/DepositSetorSampahPage";
import DepositPenukaranPage from "./assets/Pages/DepositPenukaranPage";
import ExchangePage from "./assets/Pages/ExchangePage";
import FirstHistoryPage from "./assets/Pages/FirstHistoryPage"
import GoogleCallback from "./assets/Pages/GoogleCallback";
import AccountPage from "./assets/Pages/AccountPage";


function App() {

  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/daftar" element={<RegisterPage />} />
        <Route path="/masuk" element={<LoginPage />} />
        <Route path="/lupa-sandi" element={<ForgotPassword />} />

        <Route path="/profile" element={<AccountPage />} />
        <Route path="/setor-sampah" element={<SetorSampahPages />} />
        <Route path="/konfirmasi" element={<ConfirmPage />} />
        <Route path="/konfirmasi-penukaran" element={<ConfirmPenukaranPage />} />
        <Route path="/riwayat" element={<HistoryPage />} />
        <Route path="/metode-setor" element={<DepositSetorSampahPage />} />
        <Route path="/metode-penukaran" element={<DepositPenukaranPage />} />
        <Route path="/penukaran" element={<ExchangePage />} />

      </Routes>
    </MantineProvider>
  )
}

export default App
