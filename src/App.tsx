import { Routes, Route } from "react-router-dom";
import '@mantine/core/styles.css';
import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';

// Import Pages
import { HomePage } from "./assets/Pages/HomePage";
import RegisterPage from "./assets/Pages/RegisterPage";
import LoginPage from "./assets/Pages/LoginPage";
import ForgotPassword from "./assets/Components/ForgotPassword";
import SetorSampahPages from "./assets/Pages/SetorSampahPages";


function App() {

  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/daftar" element={<RegisterPage />} />
        <Route path="/masuk" element={<LoginPage />} />
        <Route path="/lupa-sandi" element={<ForgotPassword />} />
        <Route path="/setor-sampah" element={<SetorSampahPages />} />
      </Routes>
    </MantineProvider>
  )
}

export default App
