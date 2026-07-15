import { motion } from 'framer-motion';
import { Cpu, Terminal, Palette, Database, Brain, Settings, HeartHandshake } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Programming',
      icon: <Terminal className="w-5 h-5 text-blue-400" />,
      skills: ['Java', 'Python', 'JavaScript'],
    },
    {
      title: 'Frontend',
      icon: <Palette className="w-5 h-5 text-cyan-400" />,
      skills: ['HTML5', 'CSS3', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: <Cpu className="w-5 h-5 text-accent-violet" />,
      skills: ['Spring Boot', 'Node.js', 'Express.js'],
    },
    {
      title: 'Database',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      skills: ['MySQL', 'MongoDB'],
    },
    {
      title: 'AI & ML',
      icon: <Brain className="w-5 h-5 text-yellow-400" />,
      skills: ['Machine Learning', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn'],
    },
    {
      title: 'Tools',
      icon: <Settings className="w-5 h-5 text-orange-400" />,
      skills: ['Git', 'GitHub', 'REST APIs', 'VS Code', 'Postman'],
    },
    {
      title: 'Core Skills',
      icon: <HeartHandshake className="w-5 h-5 text-red-400" />,
      skills: ['Data Structures & Algorithms', 'Problem Solving', 'Object-Oriented Programming'],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -z-10" />

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
            <Cpu className="w-3.5 h-3.5 animate-pulse" />
            <span>Tech Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl leading-tight text-white"
          >
            Skills & <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className={`glass-card rounded-2xl p-6 relative hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden ${
                index === categories.length - 1 ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              {/* Blur gradient highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -z-10 group-hover:bg-cyan-500/10 transition-colors" />

              {/* Title & Icon Header */}
              <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-white">{cat.title}</h3>
              </div>

              {/* Skill Tags List */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-cyan-500/30 border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
