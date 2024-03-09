//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './Components/AboutMe';
import Portfolio from './Components/PortfolioCard';
import NavBar from './Components/NavBar';

function App() {
  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
  );
}

export default App;

