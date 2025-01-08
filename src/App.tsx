import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Workwithus from './components/Workwithus';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Workflow />
        <Workwithus />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;