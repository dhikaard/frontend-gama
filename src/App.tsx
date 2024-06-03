import { Routes, Route } from "react-router-dom";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import {
  MantineProvider,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";

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
import AccountPage from "./assets/Pages/AccountPage";
import PrivateRoute from "./assets/Components/PrivateRouter";

function App() {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/daftar" element={<RegisterPage />} />
        <Route path="/masuk" element={<LoginPage />} />
        <Route path="/lupa-sandi" element={<ForgotPassword />} />

        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<AccountPage />} />
        </Route>
        <Route path="/setor-sampah" element={<PrivateRoute />}>
          <Route path="/setor-sampah" element={<SetorSampahPages />} />
        </Route>
        <Route path="/konfirmasi" element={<PrivateRoute />}>
          <Route path="/konfirmasi" element={<ConfirmPage />} />
        </Route>
        <Route path="/konfirmasi-penukaran" element={<PrivateRoute />}>
          <Route
            path="/konfirmasi-penukaran"
            element={<ConfirmPenukaranPage />}
          />
        </Route>
        <Route path="/riwayat" element={<PrivateRoute />}>
          <Route path="/riwayat" element={<HistoryPage />} />
        </Route>
        <Route path="/metode-setor" element={<PrivateRoute />}>
          <Route path="/metode-setor" element={<DepositSetorSampahPage />} />
        </Route>
        <Route path="/metode-penukaran" element={<PrivateRoute />}>
          <Route path="/metode-penukaran" element={<DepositPenukaranPage />} />
        </Route>
        <Route path="/penukaran" element={<PrivateRoute />}>
          <Route path="/penukaran" element={<ExchangePage />} />
        </Route>

        <Route path="/beranda" element={<PrivateRoute />}>
          <Route path="/beranda" element={<HomePage />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}

export default App;
