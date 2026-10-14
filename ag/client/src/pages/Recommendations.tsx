import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Briefcase,
  Award,
  Terminal,
  UtensilsCrossed,
  Music,
  MapPin,
  Palette,
  BarChart3,
  Loader2,
  CheckCircle2,
  Compass,
  RotateCcw,
  Search,
  Mic,
  Camera,
  Film,
  Building2,
  HeartPulse,
  Scale,
  Brain,
  GraduationCap,
  ShieldCheck,
  Activity,
  Clock,
  Layers,
  Filter
} from 'lucide-react';
import { getRecommendationsApi, setActiveCareerApi } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { Badge } from '../components/Badge';
import { Recommendation } from '../types';

const iconMap: Record<string, any> = {
  Terminal,
  UtensilsCrossed,
  Music,
  Compass: MapPin,
  MapPin,
  Palette,
  BarChart3,
  Mic,
  Camera,
  Film,
  Building2,
  HeartPulse,
  Scale,
  Brain,
  GraduationCap,
  ShieldCheck,
  Activity,
  Sparkles
};

const CATEGORIES = [
  'All Categories',
  'Entertainment & Performing Arts',
  'Creative & Design',
  'Technology',
  'Business & Management',
  'Education & People',
  'Healthcare',
  'Science & Research',
  'Law & Public Service',
  'Lifestyle & Practical'
];

export const Recommendations: React.FC = () => {
  const { user, refreshUser } = useAuth();
  const navigate = useNavigate();

  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPreliminary, setIsPreliminary] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  useEffect(() => {
    // Reset stale data when user identity changes
    setRecommendations([]);
    setLoading(true);

    if (!user?.id) return;

    async function loadData() {
      try {
        const res = await getRecommendationsApi();
        setRecommendations(res.recommendations || []);
        setIsPreliminary(Boolean(res.isPreliminary));
      } catch (err) {
        console.error('Failed to load recommendations:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [user?.id]);

  const handleSelectRoadmap = async (careerId: string) => {
    try {
      await setActiveCareerApi(careerId);
      await refreshUser();
      navigate(`/roadmap/${careerId}`);
    } catch {
      navigate(`/roadmap/${careerId}`);
    }
  };

  const filteredRecommendations = recommendations.filter((rec) => {
    const career = rec.career;
    if (!career) return false;

    const matchesCat =
      selectedCategory === 'All Categories' ||
      career.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === 'Entertainment & Performing Arts' && career.category.includes('Entertainment'));

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      career.title.toLowerCase().includes(query) ||
      career.tagline.toLowerCase().includes(query) ||
      career.category.toLowerCase().includes(query) ||
      career.requiredSkills.some(s => s.toLowerCase().includes(query)) ||
      (career.specializations && career.specializations.some(sp => sp.toLowerCase().includes(query)));

    return matchesCat && matchesQuery;
  });

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-3" />
        <p className="text-sm text-zinc-500">Retrieving calculated career matches from database...</p>
      </div>
    );
  }

  const topMatch = recommendations[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Multi-Vector Suitability Engine</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Your Personalized Career Matches
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Ranked across 35+ diverse professions evaluating your problem-solving style, behavioral preferences, and creative passions.
        </p>

        {isPreliminary && (
          <div className="mt-3 p-3.5 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-200 max-w-lg mx-auto flex items-center justify-between gap-2 shadow-xs">
            <span>These are preliminary interest-based previews. Take the diagnostic for high-precision weighted scores!</span>
            <Link to="/assessment" className="font-bold underline whitespace-nowrap text-amber-900 dark:text-amber-100">
              Take Test →
            </Link>
          </div>
        )}
      </div>

      {/* TOP MATCH HERO FEATURE CARD */}
      {topMatch && topMatch.career && !searchQuery && selectedCategory === 'All Categories' && (
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-tr from-indigo-950 via-zinc-900 to-purple-950 text-white border border-indigo-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-indigo-500/40 border border-indigo-400/40 text-indigo-100 text-xs font-black tracking-wide uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  #1 Primary Match
                </span>
                <span className="text-xs font-semibold text-indigo-200/80 px-2.5 py-0.5 rounded-full bg-white/10">
                  {topMatch.career.category}
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                  {topMatch.career.title}
                </h2>
                <p className="text-sm sm:text-base text-indigo-100/90 mt-1.5 leading-relaxed font-normal">
                  {topMatch.career.tagline}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-indigo-100 leading-relaxed backdrop-blur-sm">
                <span className="font-bold text-white">Why it matches you: </span>
                {topMatch.whyItMatches}
              </div>

              {/* Specializations (e.g. for Entertainment) */}
              {topMatch.career.specializations && topMatch.career.specializations.length > 0 && (
                <div className="space-y-1">
                  <span className="text-[11px] uppercase font-bold text-indigo-300/80 tracking-wider">
                    Specialization Paths:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {topMatch.career.specializations.map((spec, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-0.5 rounded-full text-xs bg-indigo-500/20 text-indigo-100 border border-indigo-400/20">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills preview */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {topMatch.career.requiredSkills?.slice(0, 5).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full text-xs bg-white/10 text-indigo-100 border border-white/15"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Score & CTA Column */}
            <div className="w-full lg:w-auto flex flex-col items-center sm:items-end justify-center bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10 shrink-0 space-y-5 backdrop-blur-md">
              <div className="text-center sm:text-right">
                <div className="text-5xl sm:text-6xl font-black text-indigo-300 tabular-nums tracking-tight">
                  {topMatch.suitability}%
                </div>
                <div className="text-xs uppercase font-extrabold tracking-wider text-indigo-200/80 mt-1">
                  Suitability Score
                </div>
              </div>

              <div className="w-full flex flex-col gap-2.5">
                <button
                  onClick={() => handleSelectRoadmap(topMatch.careerId)}
                  className="w-full px-6 py-3.5 rounded-2xl font-extrabold text-sm text-zinc-950 bg-white hover:bg-zinc-100 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Start Learning Roadmap</span>
                  <ArrowRight className="w-4 h-4 text-indigo-600" />
                </button>

                <Link
                  to={`/careers/${topMatch.careerId}`}
                  className="w-full px-6 py-2.5 rounded-2xl font-semibold text-xs text-center text-indigo-200 hover:text-white bg-white/10 hover:bg-white/15 transition-all"
                >
                  View Full Career Dossier
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FILTER CONTROLS & SEARCH */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search careers, skills, specializations..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-zinc-900 dark:text-white placeholder:text-zinc-400 shadow-xs"
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            <span>Showing {filteredRecommendations.length} career paths</span>
            <Link
              to="/assessment"
              className="px-3 py-1.5 rounded-xl glass-panel hover:bg-zinc-100 dark:hover:bg-zinc-800 text-indigo-600 dark:text-indigo-400 flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Diagnostic</span>
            </Link>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/20'
                  : 'glass-panel hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ALL RECOMMENDATIONS GRID */}
      {filteredRecommendations.length === 0 ? (
        <div className="text-center py-16 glass-panel rounded-3xl p-8 space-y-3">
          <Compass className="w-10 h-10 text-zinc-400 mx-auto" />
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">No matching careers found</h3>
          <p className="text-xs text-zinc-500 max-w-sm mx-auto">
            Try adjusting your search terms or clearing category filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All Categories');
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecommendations.map((rec) => {
            const career = rec.career;
            if (!career) return null;
            const Icon = iconMap[career.icon || 'Compass'] || Compass;

            return (
              <div
                key={rec.careerId}
                className="rounded-3xl p-6 glass-panel border border-zinc-200/80 dark:border-zinc-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Top card bar */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-zinc-900 dark:text-white line-clamp-1">
                          {career.title}
                        </h3>
                        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 block">
                          {career.category}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 tabular-nums">
                        {rec.suitability}%
                      </span>
                      <span className="text-[10px] block font-bold text-zinc-400 uppercase tracking-wider">
                        Match
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-300 line-clamp-2 leading-relaxed">
                    {career.tagline}
                  </p>

                  {/* Why it matches */}
                  <div className="p-3 rounded-2xl bg-zinc-100/70 dark:bg-zinc-800/60 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">Why it matches: </span>
                    {rec.whyItMatches}
                  </div>

                  {/* Specializations if available */}
                  {career.specializations && career.specializations.length > 0 && (
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                        Paths:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {career.specializations.slice(0, 3).map((sp, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50">
                            {sp}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key metrics bar */}
                  <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 text-center">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-zinc-400 block">Salary</span>
                      <span className="text-xs font-bold text-zinc-900 dark:text-zinc-200 truncate block">
                        {career.salaryRange?.split('–')[0] || '$60k+'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-zinc-400 block">Growth</span>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 truncate block">
                        {career.growth?.split('(')[0] || '+15%'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-zinc-400 block">Difficulty</span>
                      <span className="text-xs font-bold text-zinc-900 dark:text-zinc-200 truncate block">
                        {career.difficulty?.split(' ')[0] || 'Moderate'}
                      </span>
                    </div>
                  </div>

                  {/* Required Skills tags */}
                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">
                      Core Skills:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {career.requiredSkills?.slice(0, 4).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom actions */}
                <div className="pt-4 border-t border-zinc-200/70 dark:border-zinc-800 flex items-center gap-2">
                  <Link
                    to={`/careers/${rec.careerId}`}
                    className="flex-1 py-2.5 rounded-xl text-xs font-bold text-center border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-800 dark:text-zinc-200"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => handleSelectRoadmap(rec.careerId)}
                    className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm flex items-center justify-center gap-1"
                  >
                    <span>Follow Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
