import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Compass,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  BookOpen,
  Award,
  TrendingUp,
  Terminal,
  UtensilsCrossed,
  Music,
  MapPin,
  Palette,
  BarChart3,
  Loader2,
  Clock,
  RotateCcw,
  Zap,
  Target,
  Mic,
  Camera,
  Film,
  Building2,
  HeartPulse,
  Scale,
  Brain,
  GraduationCap,
  ShieldCheck,
  Calendar,
  Activity,
  Check
} from 'lucide-react';
import { getDashboardApi, getRecommendationsApi, setActiveCareerApi } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { ProgressBar } from '../components/ProgressBar';
import { Badge } from '../components/Badge';
import { DashboardData, Recommendation } from '../types';

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

export const Dashboard: React.FC = () => {
  const { user, refreshUser } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState<DashboardData | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset stale state immediately when user identity changes
    setData(null);
    setRecommendations([]);
    setLoading(true);

    if (!user?.id) return;

    async function loadDashboard() {
      try {
        const [dashRes, recRes] = await Promise.all([
          getDashboardApi(),
          getRecommendationsApi().catch(() => ({ recommendations: [] }))
        ]);
        setData(dashRes);
        setRecommendations(recRes.recommendations || []);
      } catch (err) {
        console.error('Failed to load dashboard:', err);
      } finally {
        setLoading(false);
      }
    }
    loadDashboard();
  }, [user?.id]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const handleSelectCareerRoadmap = async (careerId: string) => {
    try {
      await setActiveCareerApi(careerId);
      await refreshUser();
      navigate(`/roadmap/${careerId}`);
    } catch {
      navigate(`/roadmap/${careerId}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-3" />
        <p className="text-sm text-zinc-500">Loading student command center...</p>
      </div>
    );
  }

  const topCareer = data?.topCareer;
  const TopIcon = iconMap[topCareer?.icon || 'Compass'] || Compass;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs uppercase font-extrabold tracking-wider text-indigo-600 dark:text-indigo-400">
              Student Command Center
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800">
              Level 1 Explorer
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            {getGreeting()}, {data?.user?.name || user?.name || 'Explorer'}!
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Track your milestones, explore matched pathways, and level up your career competencies.
          </p>
        </div>

        {/* Action quick links */}
        <div className="flex items-center gap-2.5">
          <Link
            to="/assessment"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 glass-panel hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5 text-indigo-500" />
            <span>Retake Assessment</span>
          </Link>
          <Link
            to={`/roadmap/${data?.roadmapProgress?.careerId || 'singer_vocalist'}`}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md shadow-indigo-500/20 flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Continue Roadmap</span>
          </Link>
        </div>
      </div>

      {/* MOTIVATIONAL QUOTE BANNER */}
      {data?.quote && (
        <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-indigo-50/80 via-purple-50/60 to-pink-50/60 dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-pink-950/30 border border-indigo-200/60 dark:border-indigo-800/50 flex items-start gap-3.5 shadow-xs">
          <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-900/60 flex items-center justify-center shrink-0 text-indigo-600 dark:text-indigo-400 mt-0.5">
            <Sparkles className="w-4 h-4 fill-indigo-500/30" />
          </div>
          <div className="text-xs sm:text-sm space-y-0.5">
            <span className="text-zinc-800 dark:text-zinc-200 italic font-medium leading-relaxed block">
              "{data.quote.quote}"
            </span>
            <span className="text-zinc-500 dark:text-zinc-400 font-semibold text-xs block">
              — {data.quote.author}
            </span>
          </div>
        </div>
      )}

      {/* 4 SUMMARY METRIC TILES (PERFECTLY ALIGNED GRID & UNIFORM HEIGHTS) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* 1. Primary Career Match */}
        <div className="rounded-3xl p-5 glass-panel border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex items-center justify-between h-full hover:shadow-md transition-shadow">
          <div className="space-y-1">
            <span className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider block">
              Top Career Match
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tabular-nums">
                {topCareer ? `${topCareer.suitability || 95}%` : 'Diagnostic'}
              </span>
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-wide">
                {topCareer ? 'Match' : 'Pending'}
              </span>
            </div>
            <span className="text-[11px] text-zinc-500 font-medium block truncate max-w-[140px]">
              {topCareer?.title || 'Take Assessment'}
            </span>
          </div>
          <div className="w-13 h-13 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/70 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-xs">
            <Award className="w-6 h-6" />
          </div>
        </div>

        {/* 2. Active Roadmap Progress */}
        <div className="rounded-3xl p-5 glass-panel border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex items-center justify-between h-full hover:shadow-md transition-shadow">
          <div className="space-y-1">
            <span className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider block">
              Active Progress
            </span>
            <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 tabular-nums">
              {data?.roadmapProgress?.percentage || 0}%
            </div>
            <span className="text-[11px] text-zinc-500 font-medium block">
              {data?.roadmapProgress?.completedCount || 0} / {data?.roadmapProgress?.totalCount || 0} topics completed
            </span>
          </div>
          <div className="w-13 h-13 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/70 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-xs">
            <Target className="w-6 h-6" />
          </div>
        </div>

        {/* 3. Completed Topics */}
        <div className="rounded-3xl p-5 glass-panel border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex items-center justify-between h-full hover:shadow-md transition-shadow">
          <div className="space-y-1">
            <span className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider block">
              Completed Topics
            </span>
            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums">
              {data?.completedTopicsCount || 0}
            </div>
            <span className="text-[11px] text-zinc-500 font-medium block">
              Across all career tracks
            </span>
          </div>
          <div className="w-13 h-13 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/70 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-xs">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        {/* 4. Interests & Matched Paths */}
        <div className="rounded-3xl p-5 glass-panel border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex items-center justify-between h-full hover:shadow-md transition-shadow">
          <div className="space-y-1">
            <span className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider block">
              Curiosity Fields
            </span>
            <div className="text-3xl font-black text-purple-600 dark:text-purple-400 tabular-nums">
              {data?.user?.interests?.length || 0}
            </div>
            <span className="text-[11px] text-zinc-500 font-medium block">
              {recommendations.length || 38} matched pathways
            </span>
          </div>
          <div className="w-13 h-13 rounded-2xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200/70 dark:border-purple-800 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 shadow-xs">
            <Compass className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* MAIN TWO-COLUMN DASHBOARD CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Top Recommended Career & Active Roadmap Tracker */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Top Recommended Career Feature Card */}
          {topCareer ? (
            <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-zinc-200/80 dark:border-zinc-800 shadow-xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  Primary Recommended Pathway
                </span>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 shadow-xs">
                  {topCareer.suitability || 95}% Suitability
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 shadow-xs">
                    <TopIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
                        {topCareer.title}
                      </h2>
                      {topCareer.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800">
                          {topCareer.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {topCareer.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                  <Link
                    to={`/careers/${topCareer.id}`}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 glass-panel hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-center"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleSelectCareerRoadmap(topCareer.id)}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm flex items-center justify-center gap-1"
                  >
                    <span>Open Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Rationale */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <span className="font-bold text-zinc-900 dark:text-white">Match Rationale: </span>
                {topCareer.whyItMatches}
              </div>

              {/* Skills Tags & Meta */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">
                  Core Competencies & Skills
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {topCareer.requiredSkills?.slice(0, 6).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-xl text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-3xl p-8 glass-panel border border-zinc-200/80 dark:border-zinc-800 text-center space-y-4">
              <Compass className="w-10 h-10 text-indigo-500 mx-auto" />
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Complete Your Assessment</h3>
                <p className="text-xs text-zinc-500 max-w-sm mx-auto mt-1">
                  Take 3 minutes to evaluate your natural strengths and uncover your personalized recommendations across 35+ diverse career paths.
                </p>
              </div>
              <Link
                to="/assessment"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md"
              >
                <span>Take Assessment Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          {/* Active Roadmap Progress Box */}
          <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-zinc-200/80 dark:border-zinc-800 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white">
                  Active Roadmap: {data?.roadmapProgress?.careerTitle || 'Curriculum'}
                </h3>
                <p className="text-xs text-zinc-500">
                  {data?.roadmapProgress?.completedCount || 0} of {data?.roadmapProgress?.totalCount || 13} modules marked completed
                </p>
              </div>

              <Link
                to={`/roadmap/${data?.roadmapProgress?.careerId || 'singer_vocalist'}`}
                className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
              >
                <span>Full Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <ProgressBar
              progress={data?.roadmapProgress?.percentage || 0}
              size="lg"
              color="gradient"
              showPercentage={true}
            />

            <div className="pt-2 flex items-center justify-between text-xs text-zinc-500">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Real-time MongoDB cloud synchronization
              </span>
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                Next Tier: Advanced
              </span>
            </div>
          </div>

          {/* TOP 3 ALTERNATIVE CAREER MATCHES */}
          {recommendations.length > 1 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                  Other High-Suitability Pathways
                </h3>
                <Link to="/recommendations" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                  View All ({recommendations.length}) →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendations.slice(1, 3).map((rec) => {
                  const career = rec.career;
                  if (!career) return null;
                  const CIcon = iconMap[career.icon || 'Compass'] || Compass;

                  return (
                    <div
                      key={rec.careerId}
                      className="rounded-2xl p-4 glass-panel border border-zinc-200/80 dark:border-zinc-800 hover:shadow-md transition-shadow flex flex-col justify-between space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                            <CIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-zinc-900 dark:text-white line-clamp-1">
                              {career.title}
                            </h4>
                            <span className="text-[11px] text-zinc-500">{career.category}</span>
                          </div>
                        </div>

                        <span className="text-sm font-black text-indigo-600 dark:text-indigo-400 tabular-nums">
                          {rec.suitability}%
                        </span>
                      </div>

                      <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">
                        {career.tagline}
                      </p>

                      <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs">
                        <Link
                          to={`/careers/${rec.careerId}`}
                          className="font-semibold text-zinc-600 dark:text-zinc-400 hover:text-indigo-600"
                        >
                          Details
                        </Link>
                        <button
                          onClick={() => handleSelectCareerRoadmap(rec.careerId)}
                          className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                        >
                          <span>Roadmap</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Right 1 Col: Quick Actions, Selected Interests & Recent Activity */}
        <div className="space-y-6">
          
          {/* Quick Actions Card */}
          <div className="rounded-3xl p-6 glass-panel border border-zinc-200/80 dark:border-zinc-800 space-y-4">
            <h3 className="font-bold text-base text-zinc-900 dark:text-white">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <Link
                to="/interests"
                className="w-full p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  <span>Update Selected Interests</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </Link>

              <Link
                to="/assessment"
                className="w-full p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Compass className="w-4 h-4 text-purple-500" />
                  <span>Take / Retake Assessment</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </Link>

              <Link
                to="/recommendations"
                className="w-full p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Explore All 38 Careers</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </Link>

              <Link
                to="/profile"
                className="w-full p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-emerald-500" />
                  <span>Edit Student Profile</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </Link>
            </div>
          </div>

          {/* User Interests Pill Box */}
          <div className="rounded-3xl p-6 glass-panel border border-zinc-200/80 dark:border-zinc-800 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                Active Curiosity Fields
              </h3>
              <Link to="/interests" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                Edit
              </Link>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {(data?.user?.interests || []).length > 0 ? (
                data?.user?.interests.map((intId) => (
                  <span
                    key={intId}
                    className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800 capitalize"
                  >
                    {intId.replace(/_/g, ' ')}
                  </span>
                ))
              ) : (
                <p className="text-xs text-zinc-400">No interests selected yet.</p>
              )}
            </div>
          </div>

          {/* Recent Activity Stream */}
          <div className="rounded-3xl p-6 glass-panel border border-zinc-200/80 dark:border-zinc-800 space-y-4">
            <h3 className="font-bold text-base text-zinc-900 dark:text-white">
              Recent Milestones
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-zinc-900 dark:text-white">
                    Completed Roadmap Module
                  </h5>
                  <p className="text-[11px] text-zinc-500">Progress tracked and synced in your career roadmap</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-zinc-900 dark:text-white">
                    Multi-Vector Assessment Diagnostic
                  </h5>
                  <p className="text-[11px] text-zinc-500">Ranked top suitability matches across 38 careers</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
