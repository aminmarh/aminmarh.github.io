import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TaxeApprentissage from './pages/TaxeApprentissage';
import Podcast from './pages/Podcast';
import Evenements from './pages/Evenements';
import Ressources from './pages/Ressources';
import Contact from './pages/Contact';
import VerserTaxe from './pages/VerserTaxe';

function App() {
  return (
    <BrowserRouter basename="/ApprentisCite">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/taxe" element={<TaxeApprentissage />} /> */}
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/events" element={<Evenements />} />
            <Route path="/resources" element={<Ressources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/verser" element={<VerserTaxe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;