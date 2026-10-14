import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Award,
  Layers,
  Flame,
  ChevronDown,
  Star,
  Users,
  Briefcase,
  Terminal,
  UtensilsCrossed,
  Music,
  MapPin,
  Palette,
  BarChart3,
  PlayCircle,
  Mic,
  Drama,
  HeartPulse,
  Scale
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Badge } from '../components/Badge';

export const Landing: React.FC = () => {
  const { isAuthenticated, loginAsDemo } = useAuth();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleDemoLaunch = async () => {
    try {
      await loginAsDemo();
      navigate('/dashboard');
    } catch {
      navigate('/assessment');
    }
  };

  const featuredCareers = [
    {
      id: 'singer_vocalist',
      title: 'Singer & Vocal Artist',
      tagline: 'Vocal artistry, live concert performance & sonic expression',
      salary: '$45k – $140k+/yr',
      growth: '+14% Growth',
      match: '96% Match',
      icon: Mic,
      color: 'from-purple-500 to-pink-600',
      badge: 'Performing Arts'
    },
    {
      id: 'software_engineer',
      title: 'Software Engineer',
      tagline: 'Architecting scalable applications & cloud systems',
      salary: '$85k – $180k/yr',
      growth: '+25% Growth',
      match: '95% Match',
      icon: Terminal,
      color: 'from-indigo-500 to-blue-600',
      badge: 'Technology'
    },
    {
      id: 'ui_ux_designer',
      title: 'UI/UX Product Designer',
      tagline: 'Designing intuitive interfaces & human-computer interactions',
      salary: '$75k – $155k/yr',
      growth: '+22% Growth',
      match: '94% Match',
      icon: Palette,
      color: 'from-pink-500 to-rose-600',
      badge: 'Creative & Design'
    },
    {
      id: 'actor_performer',
      title: 'Actor / Dramatic Performer',
      tagline: 'Character embodiment, on-camera dramatic art & theatre',
      salary: '$42k – $150k+/yr',
      growth: '+13% Growth',
      match: '92% Match',
      icon: Drama,
      color: 'from-amber-500 to-orange-600',
      badge: 'Entertainment'
    },
    {
      id: 'doctor',
      title: 'Doctor & Physician',
      tagline: 'Clinical diagnosis, saving lives & medical therapeutics',
      salary: '$180k – $380k+/yr',
      growth: '+15% Growth',
      match: '94% Match',
      icon: HeartPulse,
      color: 'from-rose-500 to-red-600',
      badge: 'Healthcare'
    },
    {
      id: 'entrepreneur',
      title: 'Startup Founder',
      tagline: 'Venture innovation, product-market fit & scaling startups',
      salary: '$60k – $250k+ (Equity)',
      growth: '+18% Growth',
      match: '93% Match',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Business'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Uncover Your True Passions',
      desc: 'Pick domains you naturally love — from vocal performing and dramatic arts to software architecture, healthcare, design, and business.',
      icon: Sparkles
    },
    {
      step: '02',
      title: 'Take Multi-Vector Diagnostic',
      desc: 'Answer 18 realistic behavioral scenarios evaluating analytical thinking, performance presence, creativity, and empathy.',
      icon: Compass
    },
    {
      step: '03',
      title: 'Receive Weighted Career Scores',
      desc: 'Our scoring engine dynamically ranks suitability percentages across 38+ diverse professions without funneling everyone into IT.',
      icon: Award
    },
    {
      step: '04',
      title: 'Follow Your Curated Roadmap',
      desc: 'Check off milestones on a 4-tier personalized roadmap (Beginner to Professional) with time estimates and verified resources.',
      icon: Layers
    }
  ];

  const testimonials = [
    {
      name: 'Maya Lin',
      role: 'Vocal Artist & Songwriter',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: 'FindMyFlow showed me that my musical and performing drive was a real, structured career. The vocal training milestones gave me the exact foundation I needed!'
    },
    {
      name: 'Julian Vance',
      role: 'UI/UX Product Designer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'Most tests just push you toward software coding. FindMyFlow recognized my visual design eye and mapped out the exact Figma and design systems curriculum.'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Biomedical Researcher',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      text: 'The multi-vector diagnostic accurately identified my analytical science curiosity and desire to cure diseases. The step-by-step roadmap kept me accountable.'
    }
  ];

  const faqs = [
    {
      q: 'How does FindMyFlow calculate career suitability scores?',
      a: 'We evaluate your assessment choices against multidimensional weighted vectors. Each scenario you answer assigns weights to problem-solving patterns, environmental preferences, and intrinsic motivations, producing an accurate suitability percentage without assuming everyone wants tech.'
    },
    {
      q: 'Are entertainment and performing arts careers included?',
      a: 'Yes! FindMyFlow features a dedicated Entertainment & Performing Arts category covering singers, actors, dancers, choreographers, music producers, fashion models, and media hosts with tailored roadmaps.'
    },
    {
      q: 'What is included in the career roadmaps?',
      a: 'Every career features a structured 4-tier learning roadmap: Beginner, Intermediate, Advanced, and Professional. Each stage contains specific topics, estimated hours, projects, and curated learning resources with interactive checkboxes.'
    },
    {
      q: 'Is my roadmap progress saved automatically?',
      a: 'Yes. As you check off completed topics, your dashboard immediately recalculates your overall progress percentage and completed milestones via MongoDB.'
    }
  ];

  return (
    <div className="relative overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-semibold text-indigo-600 dark:text-indigo-400 shadow-sm border border-indigo-200/50 dark:border-indigo-800/50 hover:scale-105 transition-transform cursor-default">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-spin-slow" />
            <span>Discover 35+ Diverse Careers Across Entertainment, Tech, Medicine & Arts</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.08]">
            Find Your Passion.{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Build Your Future.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Discover your strengths, uncover non-linear career possibilities, and receive personalized 4-tier roadmaps that guide you from beginner to professional.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={isAuthenticated ? '/dashboard' : '/signup'}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/recommendations"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl text-base font-semibold text-zinc-700 dark:text-zinc-200 glass-panel hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-indigo-500" />
              <span>Explore 38+ Careers</span>
            </Link>

            {!isAuthenticated && (
              <button
                onClick={handleDemoLaunch}
                className="w-full sm:w-auto text-xs font-semibold px-4 py-3 rounded-2xl text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center justify-center gap-1.5"
              >
                <PlayCircle className="w-4 h-4 text-emerald-500" />
                <span>Instant Test Demo</span>
              </button>
            )}
          </div>

          {/* Feature Highlights Pills */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 18-Question behavioral diagnostic
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 38+ Diverse career paths
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Real-time progress synchronization
            </span>
          </div>
        </div>

        {/* HERO INTERACTIVE SHOWCASE CARD */}
        <div className="mt-14 max-w-5xl mx-auto rounded-3xl p-2 sm:p-4 glass-panel shadow-2xl border border-zinc-200/80 dark:border-zinc-800 relative">
          <div className="rounded-2xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/60 dark:border-zinc-800/60 p-5 sm:p-8 overflow-hidden">
            
            {/* Top Bar Mock */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-zinc-100 dark:border-zinc-800/80 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200/60 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Mic className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg text-zinc-900 dark:text-white">Singer / Vocal Performer</h3>
                    <Badge variant="purple" size="sm">Top Match</Badge>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Entertainment & Performing Arts</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-black text-purple-600 dark:text-purple-400 tabular-nums">96%</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-400">Suitability Score</div>
                </div>
                <Link
                  to="/roadmap/singer_vocalist"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  View Live Roadmap
                </Link>
              </div>
            </div>

            {/* Sub-grid of mock roadmap preview */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-6">
              {[
                { stage: 'Beginner', items: 'Vocal Foundations & Breath', status: 'Completed', color: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/40' },
                { stage: 'Intermediate', items: 'Mix Voice & Agility', status: 'In Progress (50%)', color: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-indigo-200/60 dark:border-indigo-800/40' },
                { stage: 'Advanced', items: 'Studio Stacking & Stage', status: 'Upcoming', color: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700' },
                { stage: 'Professional', items: 'EP Release & Tour', status: 'Mastery', color: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700' }
              ].map((st, i) => (
                <div key={i} className={`p-4 rounded-2xl border ${st.color} flex flex-col justify-between`}>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider block opacity-70">Stage {i + 1}</span>
                    <h4 className="font-bold text-sm mt-0.5">{st.stage}</h4>
                    <p className="text-xs opacity-80 mt-1">{st.items}</p>
                  </div>
                  <div className="mt-3 text-[11px] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 inline" />
                    <span>{st.status}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* METRICS COUNTER BAR */}
      <section className="border-y border-zinc-200/70 dark:border-zinc-800/70 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white">38+</div>
            <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">Diverse Career Paths</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400">18</div>
            <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">Weighted Behavioral Scenarios</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white">4 Tiers</div>
            <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">Curated Mastery Tracks</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-purple-600 dark:text-purple-400">100%</div>
            <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">Free Guided Access</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <Badge variant="primary" size="md">Step-by-Step Path</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            How FindMyFlow Works
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            From raw curiosity to professional mastery in four transparent, data-driven steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="relative rounded-3xl p-6 glass-panel hover:bg-white/90 dark:hover:bg-zinc-900/90 transition-all duration-300 hover:shadow-xl border border-zinc-200/70 dark:border-zinc-800/70 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-zinc-300 dark:text-zinc-700">{st.step}</span>
                </div>
                <h3 className="font-bold text-base text-zinc-900 dark:text-white mb-2">{st.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{st.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED CAREER CATEGORIES */}
      <section id="careers" className="py-16 sm:py-24 bg-zinc-100/60 dark:bg-zinc-900/40 border-y border-zinc-200/70 dark:border-zinc-800/70 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <Badge variant="purple" size="md">Career Catalog</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-2">
                Diverse Career Pathways
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xl mt-1">
                Whether you dream of vocal artistry, healthcare medicine, culinary mastery, enterprise leadership, or engineering.
              </p>
            </div>
            <Link
              to="/recommendations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <span>Explore all 38 career paths</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCareers.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.id}
                  className="rounded-3xl p-6 glass-panel border border-zinc-200/70 dark:border-zinc-800/70 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <Badge variant="neutral" size="sm">{c.badge}</Badge>
                    </div>

                    <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-1">{c.title}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                      {c.tagline}
                    </p>

                    <div className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
                      <div className="flex items-center justify-between">
                        <span>Salary Range:</span>
                        <span className="font-semibold text-zinc-900 dark:text-zinc-200">{c.salary}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Projected Growth:</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">{c.growth}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      to={`/careers/${c.id}`}
                      className="w-full py-2.5 rounded-xl text-xs font-semibold text-center block bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-colors"
                    >
                      View Details & Roadmap
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <Badge variant="success" size="md">Student Success</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Loved By Ambitious Learners
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            Read how students turned raw interests into structured, confident career moves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 glass-panel border border-zinc-200/70 dark:border-zinc-800/70 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-zinc-200 dark:border-zinc-700"
                />
                <div>
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white">{t.name}</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-16 sm:py-24 bg-zinc-100/50 dark:bg-zinc-900/30 border-y border-zinc-200/70 dark:border-zinc-800/70 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <Badge variant="info" size="md">Got Questions?</Badge>
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl glass-panel border border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 text-zinc-400 ${
                      openFaq === i ? 'rotate-180 text-indigo-600 dark:text-indigo-400' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/60">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-tr from-indigo-600 via-indigo-700 to-purple-800 text-white shadow-2xl relative overflow-hidden text-center space-y-6">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-indigo-100 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Your Discovery in 3 Minutes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-2xl mx-auto">
            Ready to Discover Your Authentic Career Direction?
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Take our weighted discovery diagnostic, unlock tailored suitability scores, and start checking off your learning roadmap milestones today.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/signup"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white text-zinc-900 font-bold hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4 text-indigo-600" />
            </Link>
            <button
              onClick={handleDemoLaunch}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-indigo-500/30 hover:bg-indigo-500/40 text-white font-semibold border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Instant Test Demo</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
