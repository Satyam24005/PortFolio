import { useState, useEffect } from 'react';
import { Mail, ArrowRight, Download, Eye, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Custom Typewriter Hook with looping text
function useTypewriter(words, speed = 100, delay = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const activeWord = words[currentWordIndex];

    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
      }, speed / 2);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
      }, speed);
    }

    // Checking if typed the whole word
    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return currentText;
}

export default function Hero() {
  const words = [
    'B.Tech Artificial Intelligence & Machine Learning Student',
    'Full Stack Developer',
    'AI & ML Enthusiast',
    'Hackathon Participant',
  ];

  const typedText = useTypewriter(words, 80, 1500);

  // Floating technology icons definition with absolute positioning offsets
  // and varied float speeds
  const techLogos = [
    { name: 'Java', color: 'text-red-500 bg-red-500/10 border-red-500/20', left: '10%', top: '20%', delay: 0 },
    { name: 'Python', color: 'text-amber-400 bg-amber-400/10 border-amber-400/20', left: '85%', top: '25%', delay: 1.5 },
    { name: 'Spring Boot', color: 'text-green-500 bg-green-500/10 border-green-500/20', left: '15%', top: '75%', delay: 2.2 },
    { name: 'React', color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20', left: '78%', top: '65%', delay: 0.8 },
    { name: 'Node.js', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20', left: '25%', top: '45%', delay: 3 },
    { name: 'JS', color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20', left: '70%', top: '15%', delay: 1.2 },
    { name: 'MongoDB', color: 'text-green-400 bg-green-400/10 border-green-400/20', left: '5%', top: '50%', delay: 2.7 },
    { name: 'MySQL', color: 'text-blue-400 bg-blue-400/10 border-blue-400/20', left: '90%', top: '50%', delay: 0.4 },
    { name: 'Git', color: 'text-orange-500 bg-orange-500/10 border-orange-500/20', left: '35%', top: '80%', delay: 1.9 },
    { name: 'GitHub', color: 'text-white bg-white/10 border-white/20', left: '65%', top: '82%', delay: 3.5 },
  ];

  const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href = "/SatyamResume.pdf";
  link.download = "Satyam_Mishra_Resume.pdf";
  link.click();
};

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-[350px] h-[350px] bg-accent-violet/10 rounded-full blur-[120px] -z-10 animate-pulse-glow" />

      {/* Floating Technology Orbs - Desktop only */}
      <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
        {techLogos.map((tech) => (
          <motion.div
            key={tech.name}
            style={{ left: tech.left, top: tech.top }}
            initial={{ y: 0 }}
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: tech.delay,
            }}
            className={`absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-md shadow-lg ${tech.color}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
            {tech.name}
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-medium mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Available for Internships & Projects</span>
        </motion.div>

        {/* Hello Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-accent-violet bg-clip-text text-transparent drop-shadow-sm">
            Satyam Mishra
          </span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-8 md:h-10 mb-8"
        >
          <p className="font-heading font-medium text-lg md:text-2xl text-cyan-400 flex items-center justify-center gap-1">
            <span>{typedText}</span>
            <span className="inline-block w-1.5 h-5 md:h-6 bg-cyan-400 animate-[pulse_1s_infinite]" />
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl text-slate-400 text-sm md:text-base leading-relaxed mb-10 text-center"
        >
          I build intelligent web applications and AI-powered solutions that solve real-world problems.
          Passionate about Full Stack Development, Machine Learning, Spring Boot, MERN Stack, and Problem Solving.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-all text-sm"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 hover:border-white/20 hover:scale-105 transition-all text-sm"
          >
            <Download className="w-4 h-4 text-slate-400" />
            Download Resume
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-transparent hover:bg-white/5 text-slate-300 hover:text-white font-medium transition-all text-sm"
          >
            <Eye className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/Satyam24005"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-900 border border-white/5 hover:border-white/20 text-slate-400 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/satyam-mishra-aba886373"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-900 border border-white/5 hover:border-blue-500/40 text-slate-400 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition-all"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          <a
            href="mailto:shivsatya594@gmail.com"
            className="p-3 rounded-full bg-slate-900 border border-white/5 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all"
            aria-label="Email Contact"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Bottom element separator link indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-6 bg-slate-700 rounded-full relative"
        >
          <span className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
