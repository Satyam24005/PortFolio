import { useState } from 'react';
import { Award, Eye, X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);

  const certificates = [
    {
      title: 'Hackverse 2026 Participation Certificate',
      issuer: 'Hackverse CODESTREAX',
      date: '2026',
      image: '/assets/hackverse_2026.jpg',
      badge: 'Hackathon',
    },
    {
      title: 'Project Morpheus 2026 Participation Certificate',
      issuer: 'Sinhgad Institute of Technology, Lonavala',
      date: '2026',
      image: '/assets/morpheus_2026.jpg',
      badge: 'College Project',
    },
    {
      title: 'Tech तत्व Hackathon Participation Certificate',
      issuer: 'Nirmala Memorial Foundation College',
      date: 'Jan 2026',
      image: '/assets/techtatva_2026.jpg',
      badge: 'Hackathon',
    },
  ];

  const handleOpenLightbox = (cert) => {
    setSelectedCert(cert);
    setScale(1);
    setRotate(0);
  };

  const handleCloseLightbox = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/25">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] -z-10" />

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
            <Award className="w-3.5 h-3.5" />
            <span>Achievements</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl leading-tight text-white"
          >
            Certifications & <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Recognitions</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-[2rem] overflow-hidden group border border-white/5 hover:border-cyan-500/25 transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div className="relative overflow-hidden aspect-[4/3] border-b border-white/5 bg-slate-900">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay Hover Effect */}
                <div
                  onClick={() => handleOpenLightbox(cert)}
                  className="absolute inset-0 bg-slate-950/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                >
                  <div className="p-4 rounded-full bg-blue-600 border border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)] translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold uppercase tracking-wider text-cyan-400 mb-3">
                  {cert.badge}
                </span>

                <h3 className="font-heading font-bold text-base text-slate-100 line-clamp-1 mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 mb-1">{cert.issuer}</p>
                <span className="text-[11px] text-slate-500">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / PDF Simulator Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
          >
            {/* Click outside to close */}
            <div className="absolute inset-0 cursor-default" onClick={handleCloseLightbox} />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full glass-card rounded-2xl md:rounded-3xl overflow-hidden z-10 flex flex-col h-[85vh] border border-white/10"
            >
              {/* Lightbox Header Controls */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-slate-900/50 backdrop-blur-md">
                <div>
                  <h3 className="font-heading font-bold text-sm md:text-base text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">{selectedCert.issuer}</p>
                </div>

                <div className="flex items-center gap-3">
                  {/* Zoom controls */}
                  <button
                    onClick={() => setScale(prev => Math.min(2.5, prev + 0.25))}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setScale(prev => Math.max(0.5, prev - 0.25))}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setRotate(prev => prev + 90)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title="Rotate"
                  >
                    <RotateCw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleCloseLightbox}
                    className="p-2 rounded-lg bg-white/10 hover:bg-red-600/30 border border-white/10 hover:border-red-500/30 text-slate-300 hover:text-red-400 transition-all font-bold ml-2"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Lightbox Image Viewport */}
              <div className="flex-1 bg-slate-950 overflow-auto flex items-center justify-center p-6 select-none">
                <div
                  className="transition-transform duration-300 ease-out"
                  style={{
                    transform: `scale(${scale}) rotate(${rotate}deg)`,
                  }}
                >
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-h-[60vh] max-w-full rounded-lg shadow-2xl border border-white/10"
                    draggable="false"
                  />
                </div>
              </div>

              {/* Lightbox Footer Actions */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-white/5 bg-slate-900/50">
                <span className="text-xs text-slate-400">PDF Viewer Mock (Scale: {Math.round(scale * 100)}%)</span>
                <button
                  onClick={() => window.open(selectedCert.image, '_blank')}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline"
                >
                  Open In New Tab
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
