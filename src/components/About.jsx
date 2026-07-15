import { motion } from 'framer-motion';
import { User, GraduationCap, Award, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] -z-10" />

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
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl leading-tight text-white"
          >
            About <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Bento-like Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Summary / Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-6 flex items-center gap-3">
                <Code2 className="text-blue-400 w-6 h-6" /> Who I Am
              </h3>
              <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed">
                <p>
                  I am <strong className="text-white font-semibold">Satyam Mishra</strong>, a B.Tech student specializing in Artificial Intelligence and Machine Learning. I actively participate in hackathons and enjoy solving real-world challenges using AI and Full Stack technologies.
                </p>
                <p>
                  I have experience building scalable web applications, AI-powered healthcare systems, and modern user interfaces. I continuously improve my technical skills through projects, coding practice, and learning new technologies.
                </p>
              </div>
            </div>

            {/* Microstats banner */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5 text-center">
              <div>
                <p className="font-heading font-extrabold text-2xl text-cyan-400">10+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Tech Stack</p>
              </div>
              <div>
                <p className="font-heading font-extrabold text-2xl text-blue-400">5+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Projects</p>
              </div>
              <div>
                <p className="font-heading font-extrabold text-2xl text-accent-violet">3+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Hackathons</p>
              </div>
            </div>
          </motion.div>

          {/* Details / Background Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Education Card */}
            <div className="glass-card rounded-3xl p-8 flex-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white mb-2">Education</h4>
                  <p className="text-sm font-semibold text-slate-200">B.Tech in Artificial Intelligence & Machine Learning</p>
                  <p className="text-xs text-slate-400 mt-1">Thakur College of Engineering and Technology (TCET)</p>
                  <p className="text-[11px] text-slate-500 mt-1">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Focus Card */}
            <div className="glass-card rounded-3xl p-8 flex-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white mb-2">Hackathon Contender</h4>
                  <p className="text-sm text-slate-300">
                    Passionate about collaborative rapid prototyping. Focuses on leveraging Machine Learning/AI integrations inside robust Spring Boot & MERN webapps.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
