import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './Components/About.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Contact from './Components/Contact.jsx';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <NavLink to="/" className="nav-link">Haqqında</NavLink>
        <NavLink to="/portfolio" className="nav-link">İş nümunələri</NavLink>
        <NavLink to="/contact" className="nav-link">Əlaqə məlumatları</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
