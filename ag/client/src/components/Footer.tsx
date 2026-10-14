import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Heart, Globe, Share2, MessageCircle, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-zinc-200/70 dark:border-zinc-800/70">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-0.5 shadow-md shadow-indigo-500/20">
                <div className="w-full h-full bg-white dark:bg-zinc-950 rounded-[14px] flex items-center justify-center">
                  <Compass className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-zinc-900 dark:text-white">
                FindMyFlow
              </span>
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Empowering students to turn genuine curiosity into thriving professional careers through personalized assessments and step-by-step master roadmaps.
            </p>
            <div className="flex items-center gap-3 pt-2 text-zinc-400 dark:text-zinc-500">
              <a href="#community" className="p-2 rounded-xl hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#share" className="p-2 rounded-xl hover:text-indigo-500 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#contact" className="p-2 rounded-xl hover:text-sky-500 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link to="/assessment" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Interest Assessment</Link></li>
              <li><Link to="/recommendations" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Career Matches</Link></li>
              <li><Link to="/roadmap" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Learning Roadmaps</Link></li>
              <li><Link to="/interests" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Curiosity Explorer</Link></li>
              <li><Link to="/dashboard" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Student Dashboard</Link></li>
            </ul>
          </div>

          {/* Featured Careers */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
              Top Pathways
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link to="/careers/software_engineer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Software Engineer</Link></li>
              <li><Link to="/careers/chef" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Executive Chef</Link></li>
              <li><Link to="/careers/musician" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Musician & Producer</Link></li>
              <li><Link to="/careers/tourist_guide" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Tourist Guide</Link></li>
              <li><Link to="/careers/ui_ux_designer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Product Designer</Link></li>
            </ul>
          </div>

          {/* Trust / Badge */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
              Demo Ready
            </h4>
            <div className="p-3.5 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <span className="font-semibold text-zinc-900 dark:text-zinc-200 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                Startup Grade MVP
              </span>
              Designed for interactive demonstrations with instant weighted scoring and dynamic roadmaps.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} FindMyFlow. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>for aspiring professionals</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
