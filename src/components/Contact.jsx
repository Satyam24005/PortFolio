import { useState } from 'react';
import { Mail, Send, User, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ success: null, error: null, loading: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: null, error: 'Please fill in all details before submitting.', loading: false });
      return;
    }

    setStatus({ success: null, error: null, loading: true });

    // Mock API processing simulation
    setTimeout(() => {
      setStatus({
        success: 'Thank you Satyam! Your message has been simulated successfully and received.',
        error: null,
        loading: false,
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] -z-10 animate-pulse-glow" />

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
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl leading-tight text-white"
          >
            Let's <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 glass-card rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between h-full min-h-[380px]"
          >
            <div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-6">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                Feel free to reach out to me for project collaborations, internship queries, hackathon teams or tech networking.
              </p>

              <div className="space-y-6">
                {/* Email Info */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Email Me</h4>
                    <a href="mailto:shivsatya594@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors">
                      shivsatya594@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn Info */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 transition-all">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/satyam-mishra-aba886373"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/satyam-mishra-aba886373
                    </a>
                  </div>
                </div>

                {/* GitHub Info */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-white/10 transition-all">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">GitHub</h4>
                    <a
                      href="https://github.com/Satyam24005"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                    >
                      github.com/Satyam24005
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 glass-card rounded-[2.5rem] p-8 md:p-10 border border-white/5 hover:border-cyan-500/20"
          >
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Name Details Input */}
              <div className="relative">
                <label htmlFor="name" className="text-xs font-semibold text-slate-400 mb-2 block">Your Name</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-white/5 hover:border-white/10 focus:border-cyan-400 focus:outline-none text-slate-200 text-sm transition-all focus:bg-slate-950"
                    required
                  />
                </div>
              </div>

              {/* Email Details Input */}
              <div className="relative">
                <label htmlFor="email" className="text-xs font-semibold text-slate-400 mb-2 block">Your Email</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-white/5 hover:border-white/10 focus:border-cyan-400 focus:outline-none text-slate-200 text-sm transition-all focus:bg-slate-950"
                    required
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="relative">
                <label htmlFor="message" className="text-xs font-semibold text-slate-400 mb-2 block">Your Message</label>
                <div className="relative">
                  <span className="absolute left-4 top-5 text-slate-500">
                    <MessageSquare className="w-4 h-4" />
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can I help you?"
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-white/5 hover:border-white/10 focus:border-cyan-400 focus:outline-none text-slate-200 text-sm transition-all focus:bg-slate-950 resize-none"
                    required
                  />
                </div>
              </div>

              {/* Feedback messages */}
              <AnimatePresence mode="wait">
                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{status.error}</span>
                  </motion.div>
                )}

                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{status.success}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] text-white font-medium hover:scale-[1.01] transition-all disabled:opacity-50 text-sm cursor-pointer"
              >
                {status.loading ? 'Sending message...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
