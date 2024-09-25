
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import About from './Components/AboutMe';
import Portfolio from './Components/PortfolioCard';
import NavBar from './Components/NavBar';

// function App() {
//   return (
//       <div className="App">
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//         </Routes>
//       </div>
//   );
// }
function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <Home /> 
      <About />  
      <Portfolio />   */}
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Portfolio />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>   
    </div>
  )
}

export default App;

