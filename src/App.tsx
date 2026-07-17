import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terms from './components/Terms';

function HomePage() {
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
        <Pricing />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const path = window.location.pathname;

  if (path === '/term' || path === '/term/' || path === '/term/index.html') {
    return <Terms />;
  }

  return <HomePage />;
}

export default App;
