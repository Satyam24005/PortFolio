import { motion } from 'framer-motion';
import { Award, Target, Trophy, Flame } from 'lucide-react';

export default function Hackathons() {
  const events = [
    {
      title: 'Smart India Hackathon',
      project: 'HealthGuard AI',
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      description:
        'Developed an AI-powered healthcare monitoring system to support early disease prediction and community healthcare management.',
      glow: 'shadow-[0_0_20px_rgba(250,204,21,0.15)] border-yellow-500/20',
      badge: 'National Level',
      badgeColor: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
    },
    {
      title: 'College Hackathons',
      project: 'AI & Full Stack Prototyping',
      icon: <Flame className="w-6 h-6 text-orange-400" />,
      description: 'Built innovative AI and Full Stack projects focused on solving real-world challenges.',
      glow: 'shadow-[0_0_20px_rgba(251,146,60,0.15)] border-orange-500/20',
      badge: 'Institutional Level',
      badgeColor: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
    },
  ];

  return (
    <section id="hackathons" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Hackathons</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl leading-tight text-white"
          >
            Hackathon <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline Path Line Layout */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Animated Bullet Node */}
              <div className="absolute -left-[38px] md:-left-[54px] top-1.5 flex items-center justify-center p-2 rounded-full bg-slate-900 border border-white/10 shadow-lg z-10">
                {event.icon}
              </div>

              {/* Event card */}
              <div className={`glass-card rounded-3xl p-6 md:p-8 hover:scale-[1.01] transition-transform ${event.glow}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border mb-2 ${event.badgeColor}`}>
                      {event.badge}
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-white">
                      {event.title}
                    </h3>
                  </div>
                  {event.project && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-cyan-400 font-semibold self-start sm:self-center">
                      <Target className="w-3.5 h-3.5" />
                      {event.project}
                    </div>
                  )}
                </div>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
