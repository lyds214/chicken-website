import Home from "./pages/Home";
import About from "./pages/About";
import OurSpecialties from "./pages/OurSpecialties";
import Location from "./pages/Location";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./pages/Menu";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
        <About />
        <OurSpecialties />
        <Location />
        <Menu />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
