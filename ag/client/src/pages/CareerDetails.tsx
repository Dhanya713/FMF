import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Award,
  Layers,
  Terminal,
  UtensilsCrossed,
  Music,
  MapPin,
  Palette,
  BarChart3,
  Loader2,
  Share2,
  Check,
  ShieldCheck,
  Clock,
  ExternalLink,
  ThumbsUp,
  AlertTriangle,
  BookOpen,
  Users,
  FolderGit2,
  Mic,
  Camera,
  Film,
  Building2,
  HeartPulse,
  Scale,
  Brain,
  GraduationCap,
  Activity,
  Compass
} from 'lucide-react';
import { getCareerByIdApi, setActiveCareerApi } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { Badge } from '../components/Badge';
import { Career } from '../types';

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

export const CareerDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user, refreshUser } = useAuth();
  const navigate = useNavigate();

  const [career, setCareer] = useState<Career | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function loadCareer() {
      if (!id) return;
      try {
        const res = await getCareerByIdApi(id);
        setCareer(res.career);
      } catch (err) {
        console.error('Failed to load career:', err);
      } finally {
        setLoading(false);
      }
    }
    loadCareer();
  }, [id]);

  const handleStartRoadmap = async () => {
    if (!id) return;
    try {
      await setActiveCareerApi(id);
      await refreshUser();
      navigate(`/roadmap/${id}`);
    } catch {
      navigate(`/roadmap/${id}`);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-3" />
        <p className="text-sm text-zinc-500">Loading comprehensive career dossier...</p>
      </div>
    );
  }

  if (!career) {
    return (
      <div className="max-w-xl mx-auto py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold">Career Pathway Not Found</h2>
        <p className="text-zinc-500">The requested career pathway does not exist in our database.</p>
        <Link to="/recommendations" className="inline-flex items-center gap-1.5 text-indigo-600 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Career Catalog
        </Link>
      </div>
    );
  }

  const Icon = iconMap[career.icon || 'Compass'] || Compass;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      {/* Top Breadcrumb & Share */}
      <div className="flex items-center justify-between">
        <Link
          to="/recommendations"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Recommendations</span>
        </Link>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold glass-panel hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
          <span>{copied ? 'Link Copied!' : 'Share Dossier'}</span>
        </button>
      </div>

      {/* Hero Dossier Header */}
      <div className="rounded-3xl p-6 sm:p-10 glass-panel border border-zinc-200/80 dark:border-zinc-800 shadow-xl space-y-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 shadow-md">
              <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs uppercase font-extrabold tracking-wider text-indigo-600 dark:text-indigo-400">
                  {career.category}
                </span>
                {career.badge && <Badge variant="primary" size="sm">{career.badge}</Badge>}
                {career.demandLevel && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                    {career.demandLevel}
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                {career.title}
              </h1>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
                {career.tagline}
              </p>
            </div>
          </div>

          <button
            onClick={handleStartRoadmap}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl text-sm font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 shrink-0"
          >
            <Layers className="w-4 h-4" />
            <span>Open Learning Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Quick Stat Metric Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4 border-t border-zinc-200/70 dark:border-zinc-800">
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800">
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-1">
              <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
              <span>Salary Range</span>
            </div>
            <div className="font-extrabold text-sm sm:text-base text-zinc-900 dark:text-white">
              {career.salaryRange}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800">
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-1">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-500" />
              <span>Growth Outlook</span>
            </div>
            <div className="font-extrabold text-sm sm:text-base text-emerald-600 dark:text-emerald-400">
              {career.growth}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800">
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-1">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Learning Horizon</span>
            </div>
            <div className="font-extrabold text-sm sm:text-base text-zinc-900 dark:text-white">
              {career.estimatedLearningTime || '6 – 12 Months'}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800">
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-1">
              <Award className="w-3.5 h-3.5 text-purple-500" />
              <span>Skill Curve</span>
            </div>
            <div className="font-extrabold text-sm sm:text-base text-zinc-900 dark:text-white">
              {career.difficulty}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN TWO-COLUMN DOSSIER BODY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Detailed Overview, Day-to-Day, Pros/Challenges, Resources */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Why this career may suit you */}
          {career.whyItMatches && (
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent border border-indigo-200/60 dark:border-indigo-800/60 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Why This Career May Suit You
              </span>
              <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                {career.whyItMatches}
              </p>
            </div>
          )}

          {/* Overview & Description */}
          <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-zinc-200/80 dark:border-zinc-800 space-y-4">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-white">
              Role Overview & Mission
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {career.description}
            </p>
            {career.overview && (
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed pt-2 border-t border-zinc-100 dark:border-zinc-800">
                {career.overview}
              </p>
            )}
          </div>

          {/* Specializations if available */}
          {career.specializations && career.specializations.length > 0 && (
            <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-zinc-200/80 dark:border-zinc-800 space-y-4">
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white">
                Career Specialization Pathways
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {career.specializations.map((spec, sIdx) => (
                  <div key={sIdx} className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 flex items-center gap-2.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Responsibilities / Day-to-Day */}
          {career.keyResponsibilities && (
            <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-zinc-200/80 dark:border-zinc-800 space-y-4">
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white">
                Day-to-Day Work & Key Responsibilities
              </h3>
              <div className="space-y-3">
                {career.keyResponsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {resp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pros & Challenges */}
          {(career.pros || career.challenges) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {career.pros && (
                <div className="rounded-3xl p-6 glass-panel border border-emerald-200/50 dark:border-emerald-900/40 bg-emerald-50/20 dark:bg-emerald-950/10 space-y-3">
                  <span className="text-xs font-extrabold uppercase text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <ThumbsUp className="w-4 h-4" />
                    Major Advantages & Pros
                  </span>
                  <div className="space-y-2">
                    {career.pros.map((pro, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {career.challenges && (
                <div className="rounded-3xl p-6 glass-panel border border-amber-200/50 dark:border-amber-900/40 bg-amber-50/20 dark:bg-amber-950/10 space-y-3">
                  <span className="text-xs font-extrabold uppercase text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    Considerations & Challenges
                  </span>
                  <div className="space-y-2">
                    {career.challenges.map((ch, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Recommended Real-World Projects */}
          {career.projects && (
            <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-zinc-200/80 dark:border-zinc-800 space-y-4">
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white flex items-center gap-2">
                <FolderGit2 className="w-5 h-5 text-indigo-500" />
                Portfolio Capstone Projects
              </h3>
              <div className="space-y-2.5">
                {career.projects.map((proj, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 flex items-center gap-3 text-xs text-zinc-800 dark:text-zinc-200">
                    <span className="w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 font-bold text-[11px] flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="font-medium">{proj}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Curated Learning Resources */}
          {career.learningResources && career.learningResources.length > 0 && (
            <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-zinc-200/80 dark:border-zinc-800 space-y-4">
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-500" />
                Curated Learning Resources & Documentation
              </h3>
              <div className="space-y-2.5">
                {career.learningResources.map((res, rIdx) => (
                  <a
                    key={rIdx}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-800 flex items-center justify-between text-xs transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 font-semibold text-[10px] uppercase">
                        {res.type}
                      </span>
                      <span className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                        {res.title}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-indigo-600" />
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right 1 Col: Required Skills, Certifications, Communities, Related */}
        <div className="space-y-6">
          
          {/* Required Skills */}
          <div className="rounded-3xl p-6 glass-panel border border-zinc-200/80 dark:border-zinc-800 space-y-4">
            <h3 className="font-bold text-base text-zinc-900 dark:text-white">
              Required Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {career.requiredSkills?.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/60 dark:border-zinc-700/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Industry Certifications */}
          {career.certifications && (
            <div className="rounded-3xl p-6 glass-panel border border-zinc-200/80 dark:border-zinc-800 space-y-3">
              <h3 className="font-bold text-base text-zinc-900 dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                Industry Certifications
              </h3>
              <div className="space-y-2">
                {career.certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 text-xs font-medium text-zinc-800 dark:text-zinc-200">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Professional Communities */}
          {career.communities && (
            <div className="rounded-3xl p-6 glass-panel border border-zinc-200/80 dark:border-zinc-800 space-y-3">
              <h3 className="font-bold text-base text-zinc-900 dark:text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-500" />
                Professional Communities
              </h3>
              <div className="space-y-2">
                {career.communities.map((comm, cIdx) => (
                  <div key={cIdx} className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 text-xs font-medium text-zinc-800 dark:text-zinc-200">
                    {comm}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Roadmap Fast Action Callout */}
          <div className="rounded-3xl p-6 bg-gradient-to-tr from-indigo-600 via-indigo-700 to-purple-800 text-white shadow-xl space-y-4 text-center">
            <Layers className="w-8 h-8 text-indigo-200 mx-auto" />
            <div>
              <h4 className="font-extrabold text-base text-white">
                4-Tier Learning Roadmap
              </h4>
              <p className="text-xs text-indigo-100 mt-1">
                Beginner → Intermediate → Advanced → Professional
              </p>
            </div>
            <button
              onClick={handleStartRoadmap}
              className="w-full py-3 rounded-2xl font-extrabold text-xs text-zinc-950 bg-white hover:bg-zinc-100 transition-all shadow-md active:scale-95"
            >
              Start Tracking Roadmap
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
