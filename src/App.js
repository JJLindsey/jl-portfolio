import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';
//import Home from './Home';
import About from './components/AboutMe';
import Portfolio from './components/PortfolioTabs';
import NavBar from './components/NavBar';
import Home2 from './components/Home/Home2';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import DesignProjectDetail from './components/DesignProjectDetails';
import MindfulDesign from './components/DesignSystems/MindfulColorSys.jsx'
import { projects } from './data/projects';
import { designProjects } from './data/designprojects';

const allProjects = [...projects, ...designProjects]

function ProjectRouter() {
  const { id } = useParams();
  const project = allProjects.find(p => p.id === id);
   const isDesignOnly = project?.category?.length === 1 && 
                       project?.category?.includes('design');
  return isDesignOnly ? <DesignProjectDetail /> : <ProjectDetails />;
}

function App() {

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter basename='/jl-portfolio'>
      <NavBar/>
      <Routes>
       {/* Dedicated project route */}
       <Route path="/projects/:id" element={ <ProjectRouter/> } />
       <Route path="/design/art-meditation-color-system" element={ <MindfulDesign />}
/>        {/* Main site SPA sections */}
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

