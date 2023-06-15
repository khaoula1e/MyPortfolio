import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
