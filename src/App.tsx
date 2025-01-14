import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Team from './components/Team';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CurrencyRates from './components/CurrencyRates';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CurrencyRates />
      <main>
        <Hero />
        <Services />
        <Workflow />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;