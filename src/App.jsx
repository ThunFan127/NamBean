import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Stats from './components/Stats.jsx';
import Expertise from './components/Expertise.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import MediaGallery from './components/MediaGallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Expertise />
        <Services />
        <Process />
        <MediaGallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
