import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Signup from "./components/auth/Signup";
import Login from "./components/Auth/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardMain from "./components/dashboard/DashboardMain";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" replace />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardMain />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
