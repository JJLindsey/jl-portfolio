
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';
//import Home from './Home';
import About from './Components/AboutMe';
import Portfolio from './Components/PortfolioCard';
import NavBar from './Components/NavBar';
import Home2 from './Home2';
import Footer from './Components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <BrowserRouter basename='/jl-portfolio'> */}
      <NavBar/>
      <main>
          <section id="home">
            <Home2 />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Portfolio />
          </section>
          <section>
            <Footer />
          </section>
        </main>
    {/* </BrowserRouter>    */}
    </div>
    </ThemeProvider>
  )
}

export default App;

