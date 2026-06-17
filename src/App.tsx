import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-void text-white-custom font-sans antialiased">
      <Navigation />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Work />
        <About />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
