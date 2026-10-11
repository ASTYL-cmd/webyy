import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Founder from './components/Founder';
import FounderPage from './components/FounderPage';
import WhatsAppButton from './components/WhatsAppButton';

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
        <Process />
        <Pricing />
        <Team />
        <Founder />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  const path = window.location.pathname;

  if (path === '/founder' || path === '/founder/') {
    return <FounderPage />;
  }

  if (path === '/term' || path === '/term/' || path === '/term/index.html') {
    return <Terms />;
  }

  return <HomePage />;
}

export default App;
