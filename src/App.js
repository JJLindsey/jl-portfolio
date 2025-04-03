
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';
//import Home from './Home';
import About from './newcomponents/AboutMe';
import Portfolio from './newcomponents/PortfolioCard';
import NavBar from './newcomponents/NavBar';
import Home2 from './Home2';
import Footer from './newcomponents/Footer';

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

