
import './App.css'


import { BrowserRouter,Routes,Route } from 'react-router-dom'

//Layouts
import Navbar from './Layouts/NavBar'

//components
import Home from './components/Home'
import SobreMim from './components/SobreMim'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Footer from './Layouts/Footer'





import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<SobreMim />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;



