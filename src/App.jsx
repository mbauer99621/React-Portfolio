import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Index from './pages/Index';
import Skills from './components/Skills';
import './assets/custom.ttf';


function App() {
  return (
    <Router>
      <Header />
      
      <main>
        <Index />
        <About />
        <Portfolio />
        <Resume />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
