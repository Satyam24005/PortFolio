import { motion } from 'framer-motion';
import { ExternalLink, Code, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projectsList = [
    {
      title: 'HealthGuard AI',
      featured: true,
      description:
        'HealthGuard AI is an AI-powered web application designed to improve community healthcare through early health risk prediction and real-time monitoring. The system analyzes health-related data using Machine Learning algorithms to identify potential health risks before they become critical. It provides an interactive dashboard with live health statistics, disease prediction, visualization, smart alerts, and data-driven insights to support proactive healthcare management.',
      techStack: ['React', 'Spring Boot', 'Python', 'Machine Learning', 'MySQL', 'REST API'],
      liveLink: '#',
      githubLink: 'https://github.com/Satyam24005/HealthGuard-AI', // standard placeholder link structure
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop', // beautiful medical AI mockup image
    },
    {
      title: 'VerseScanner',
      featured: false,
      description:
        'VerseScanner is a modern web application for analyzing and processing textual content with an intuitive and responsive user interface.',
      techStack: ['React', 'JavaScript', 'CSS', 'API Integration'],
      liveLink: 'https://verserscanner.vercel.app/',
      githubLink: 'https://github.com/Satyam24005/VerseScanner',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop', // textual/scanner mockup
    },
    {
      title: 'Employee Management System',
      featured: false,
      description:
        'A Full Stack Employee Management System built using Spring Boot, React, and MySQL with secure REST APIs and CRUD functionality.',
      features: ['Employee Management', 'Search', 'Update', 'Delete', 'REST API Integration'],
      techStack: ['React', 'Spring Boot', 'MySQL', 'REST API'],
      liveLink: '#',
      githubLink: 'https://github.com/Satyam24005/Employee-Management-System',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop', // workspace dashboard mockup
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-accent-violet/5 rounded-full blur-[130px] -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold mb-4"
          >
            <Code className="w-3.5 h-3.5" />
            <span>My Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl leading-tight text-white"
          >
            Featured <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Projects Layout Grid */}
        <div className="flex flex-col gap-12">
          {projectsList.map((project, index) => {
            const isFeatured = project.featured;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`glass-card rounded-[2.5rem] overflow-hidden p-6 md:p-8 lg:p-10 flex flex-col ${
                  isFeatured ? 'lg:grid lg:grid-cols-12 gap-8 lg:gap-12' : 'grid grid-cols-1 gap-6'
                } relative hover:border-blue-500/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500`}
              >
                {/* Visual Glow Indicator */}
                {isFeatured && (
                  <div className="absolute top-6 left-6 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-md z-20">
                    <Sparkles className="w-3 h-3 animate-spin" />
                    Featured Project
                  </div>
                )}

                {/* Left Side: Mock Image Showcase */}
                <div
                  className={`relative overflow-hidden rounded-[2rem] border border-white/5 group ${
                    isFeatured ? 'lg:col-span-6 h-[250px] md:h-[350px]' : 'h-[220px] md:h-[280px]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* Right Side / Bottom: Info Details */}
                <div
                  className={`flex flex-col justify-between ${
                    isFeatured ? 'lg:col-span-6 mt-4 lg:mt-0' : 'mt-2'
                  }`}
                >
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features list (specifically for Employee Management System) */}
                    {project.features && (
                      <div className="mb-6">
                        <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                          {project.features.map(f => (
                            <li key={f} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tech stack badge & Action buttons */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-semibold rounded-lg bg-white/5 border border-white/5 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      {project.liveLink && project.liveLink !== '#' ? (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-102 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live Demo
                        </a>
                      ) : (
                        <button
                          onClick={() => alert(`Live link mock for ${project.title}.`)}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600/80 to-cyan-500/80 text-white text-xs font-semibold hover:scale-102 transition-all cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live Demo
                        </button>
                      )}

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white text-xs font-semibold hover:scale-102 transition-all"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        Code Repository
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
