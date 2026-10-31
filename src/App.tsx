import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import ProjectsShowcase from './components/ProjectsShowcase';
import WhyChoose from './components/WhyChoose';
import AboutSection from './components/AboutSection';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Terms from './components/Terms';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import PageLayout from './components/PageLayout';

function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <Ticker />
      <Services />
      <WhyChoose />
      <ProjectsShowcase />
      <Process />
      <Pricing />
      <AboutSection />
      <Contact />
    </PageLayout>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  switch (path) {
    case '/about':
    case '/founder': // legacy URL: the founder now lives on the About Us page
      return <AboutPage />;
    case '/projects':
      return <ProjectsPage />;
    case '/term':
    case '/term/index.html':
      return <Terms />;
    default:
      return <HomePage />;
  }
}

export default App;
