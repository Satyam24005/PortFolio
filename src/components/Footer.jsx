import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 py-8 bg-slate-950/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        {/* Attribution details */}
        <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5 order-2 md:order-1">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 animate-[pulse_1s_infinite] fill-red-500" />
          <span>by</span>
          <strong className="text-slate-400 font-semibold">Satyam Mishra</strong>
        </p>

        {/* Copyright branding */}
        <p className="text-xs text-slate-600 order-1 md:order-2">
          &copy; {currentYear} Satyam Mishra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
