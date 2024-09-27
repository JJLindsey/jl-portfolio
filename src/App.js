
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';
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
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter basename='/jl-portfolio'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Portfolio />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>   
    </div>
    </ThemeProvider>
  )
}

export default App;

