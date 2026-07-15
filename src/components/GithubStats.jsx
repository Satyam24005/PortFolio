import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { GitPullRequest, GitFork, Award, BarChart2 } from "lucide-react";
export default function GithubStats() {
  const username = 'Satyam24005';

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-slate-950/15">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent-violet/5 rounded-full blur-[140px] -z-10" />

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
            <FaGithub className="w-3.5 h-3.5" />
            <span>GitHub Profile Info</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl leading-tight text-white"
          >
            Open Source <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Contributions</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* GitHub stats widgets grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Main GitHub Stats Widget Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-[2rem] p-6 md:p-8 flex flex-col justify-between border border-white/5 hover:border-blue-500/20"
          >
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-6 flex items-center gap-3">
                <BarChart2 className="text-blue-400 w-5 h-5" /> Overall Stats
              </h3>
              <div className="w-full flex items-center justify-center p-2 rounded-2xl bg-slate-950/40 border border-white/5">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0f172a&title_color=3B82F6&icon_color=06B6D4&text_color=e2e8f0`}
                  alt="Satyam's GitHub Stats"
                  className="w-full h-auto object-contain rounded-xl"
                  onError={(e) => {
                    e.target.style.display = 'none'; // Fallback if API fails
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Languages & Streak Widgets Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Top Languages API widget */}
            <div className="glass-card rounded-[2rem] p-6 flex-1 flex flex-col justify-between border border-white/5 hover:border-cyan-500/20">
              <h3 className="font-heading font-bold text-lg text-white mb-4 flex items-center gap-3">
                <GitPullRequest className="text-cyan-400 w-5 h-5" /> Top Languages
              </h3>
              <div className="w-full flex items-center justify-center p-2 rounded-2xl bg-slate-950/40 border border-white/5">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0f172a&title_color=8B5CF6&text_color=e2e8f0`}
                  alt="Satyam's Top Languages"
                  className="w-full h-auto object-contain rounded-xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* GitHub Streak widget card */}
            <div className="glass-card rounded-[2rem] p-6 flex-1 flex flex-col justify-between border border-white/5 hover:border-accent-violet/20">
              <h3 className="font-heading font-bold text-lg text-white mb-4 flex items-center gap-3">
                <GitFork className="text-accent-violet w-5 h-5" /> GitHub Streak
              </h3>
              <div className="w-full flex items-center justify-center p-2 rounded-2xl bg-slate-950/40 border border-white/5">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0f172a&ring=3B82F6&fire=06B6D4&currStreakNum=8B5CF6`}
                  alt="Satyam's GitHub Streak"
                  className="w-full h-auto object-contain rounded-xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Contribution Graph SVG */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[2rem] p-6 md:p-8 border border-white/5 hover:border-blue-500/20"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
            <h3 className="font-heading font-bold text-lg text-white flex items-center gap-3">
              <Award className="text-yellow-400 w-5 h-5" /> Activity Graph
            </h3>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 underline"
            >
              Visit GitHub Profile @{username}
            </a>
          </div>

          {/* Activity grid wrapper */}
          <div className="w-full overflow-x-auto p-4 rounded-2xl bg-slate-950/40 border border-white/5 flex items-center justify-center">
            <img
              src={`https://ghchart.rshah.org/3B82F6/${username}`}
              alt={`${username}'s Contribution Chart`}
              className="w-full min-w-[700px] h-auto object-contain filter invert brightness-110 contrast-125"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
