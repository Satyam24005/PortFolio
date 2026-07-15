import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certifications from './components/Certifications';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B1120] text-white overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200 scroll-smooth">
      {/* Background Interactive Particles */}
      <ParticlesBackground />

      {/* Floating Header */}
      <Header />

      {/* Core Pages Assembly */}
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Certifications />
        <GithubStats />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
