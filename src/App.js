
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';
//import Home from './Home';
import About from './components/AboutMe';
import Portfolio from './components/PortfolioCard';
import NavBar from './components/NavBar';
import Home2 from './Home2';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import TechnicalDeepDive from './components/TechDeepDive';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter basename='/jl-portfolio'>
      <NavBar/>
      <Routes>
       {/* Dedicated project route */}
       <Route path="/projects/:id" element={<ProjectDetails />} />
        {/* Main site SPA sections */}
        <Route
          path="/"
          element={
            <>
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
                <TechnicalDeepDive />
                <section>
                  <Footer />
                </section>
              </main>
            </>
          }
        />
        </Routes>
    </BrowserRouter>   
    </div>
    </ThemeProvider>
  )
}

export default App;

