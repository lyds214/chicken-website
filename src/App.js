import Home from "./pages/Home";
import About from "./pages/About";
import OurSpecialties from "./pages/OurSpecialties";
import Location from "./pages/Location";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <OurSpecialties />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
