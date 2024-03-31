import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Features from "./components/Features";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Newslette from "./components/Newsletter";
import Footer from "./shared/Footer";

function App() {
  return (
    <nav>
      <Navbar></Navbar>
      <Home />
      <Features/>
      <About />
      <Pricing />
      <Newslette />
      <Footer />
    </nav>
  );
}

export default App;
