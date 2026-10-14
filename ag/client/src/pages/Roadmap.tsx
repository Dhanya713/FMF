import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  Circle,
  Clock,
  ExternalLink,
  ChevronDown,
  Layers,
  Sparkles,
  Flame,
  Award,
  Loader2,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { getRoadmapApi, toggleRoadmapItemApi, getCareersApi } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { ProgressBar } from '../components/ProgressBar';
import { Badge } from '../components/Badge';
import { Roadmap as RoadmapType, Career, RoadmapStage, RoadmapItem } from '../types';

export const Roadmap: React.FC = () => {
  const { careerId: paramCareerId } = useParams<{ careerId?: string }>();
  const { user, refreshUser } = useAuth();
  const navigate = useNavigate();

  const [activeCareerId, setActiveCareerId] = useState<string>(
    paramCareerId || user?.activeCareerId || user?.topCareerId || 'software_engineer'
  );
  const [roadmap, setRoadmap] = useState<RoadmapType | null>(null);
  const [career, setCareer] = useState<Career | null>(null);
  const [allCareers, setAllCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [togglingItemId, setTogglingItemId] = useState<string | null>(null);
  const [expandedStages, setExpandedStages] = useState<Record<string, boolean>>({
    Beginner: true,
    Intermediate: true,
    Advanced: false,
    Professional: false
  });

  // Load all careers for switching tab
  useEffect(() => {
    async function loadCareersList() {
      try {
        const res = await getCareersApi();
        setAllCareers(res.careers);
      } catch (e) {
        console.error('Failed to load careers list:', e);
      }
    }
    loadCareersList();
  }, []);

  // Update when URL param changes
  useEffect(() => {
    if (paramCareerId && paramCareerId !== activeCareerId) {
      setActiveCareerId(paramCareerId);
    }
  }, [paramCareerId]);

  // Load roadmap data
  useEffect(() => {
    // Reset stale state when user identity or career changes
    setRoadmap(null);
    setLoading(true);

    if (!user?.id) return;

    async function loadRoadmapData() {
      try {
        const res = await getRoadmapApi(activeCareerId);
        setRoadmap(res.roadmap);
        setCareer(res.career);
      } catch (err) {
        console.error('Failed to load roadmap:', err);
      } finally {
        setLoading(false);
      }
    }
    loadRoadmapData();
  }, [activeCareerId, user?.id]);

  const toggleStageAccordion = (stageName: string) => {
    setExpandedStages(prev => ({
      ...prev,
      [stageName]: !prev[stageName]
    }));
  };

  const handleToggleItem = async (stage: RoadmapStage, item: RoadmapItem) => {
    if (!roadmap) return;
    const newStatus = !item.completed;
    setTogglingItemId(item.id);

    try {
      const res = await toggleRoadmapItemApi({
        careerId: activeCareerId,
        itemId: item.id,
        completed: newStatus
      });

      setRoadmap(res.roadmap);
      await refreshUser();

      // Trigger celebration confetti if an item was completed!
      if (newStatus) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      }
    } catch (err) {
      console.error('Failed to toggle item:', err);
    } finally {
      setTogglingItemId(null);
    }
  };

  const handleCareerSwitch = (cid: string) => {
    setActiveCareerId(cid);
    navigate(`/roadmap/${cid}`);
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-3" />
        <p className="text-sm text-zinc-500">Loading learning roadmap curriculum...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      
      {/* Career Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {allCareers.map((c) => (
          <button
            key={c.id}
            onClick={() => handleCareerSwitch(c.id)}
            className={`px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeCareerId === c.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'glass-panel hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      {/* Hero Overview Card */}
      {career && roadmap && (
        <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-zinc-200/80 dark:border-zinc-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="primary" size="sm">Mastery Pathway</Badge>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{career.category}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                {career.title} Roadmap
              </h1>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
                {career.tagline}
              </p>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <div className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400 tabular-nums">
                {roadmap.progressPercentage}%
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                {roadmap.completedItems} of {roadmap.totalItems} topics completed
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <ProgressBar progress={roadmap.progressPercentage} size="md" color="gradient" showPercentage={false} />

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 text-center">
              <span className="text-[10px] uppercase font-bold text-zinc-400 block">Total Stages</span>
              <span className="text-sm font-bold text-zinc-900 dark:text-white">4 Tiers</span>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 text-center">
              <span className="text-[10px] uppercase font-bold text-zinc-400 block">Curriculum</span>
              <span className="text-sm font-bold text-zinc-900 dark:text-white">{roadmap.totalItems} Topics</span>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 text-center">
              <span className="text-[10px] uppercase font-bold text-zinc-400 block">Estimated Time</span>
              <span className="text-sm font-bold text-zinc-900 dark:text-white">~350 Hours</span>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 text-center">
              <span className="text-[10px] uppercase font-bold text-zinc-400 block">Placement Level</span>
              <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">Industry Ready</span>
            </div>
          </div>
        </div>
      )}

      {/* ROADMAP STAGES LIST */}
      <div className="space-y-6">
        {roadmap?.stages.map((stage, sIdx) => {
          const isExpanded = expandedStages[stage.stage] ?? true;

          return (
            <div
              key={stage.stage}
              className="rounded-3xl glass-panel border border-zinc-200/80 dark:border-zinc-800 shadow-lg overflow-hidden transition-all duration-200"
            >
              {/* Accordion Stage Header */}
              <button
                type="button"
                onClick={() => toggleStageAccordion(stage.stage)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 font-black text-sm flex items-center justify-center shrink-0">
                    0{sIdx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-lg text-zinc-900 dark:text-white">
                        {stage.stage} Stage
                      </h3>
                      <Badge variant="neutral" size="sm">{stage.badge}</Badge>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {stage.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="hidden sm:block text-right">
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                      {stage.completedCount} / {stage.totalCount} completed
                    </span>
                    <span className="text-[10px] text-zinc-400 block">
                      {stage.stageProgress}%
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-indigo-600 dark:text-indigo-400' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Items List (if expanded) */}
              {isExpanded && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-zinc-100 dark:border-zinc-800/60 space-y-3">
                  {stage.items.map((item) => {
                    const isToggling = togglingItemId === item.id;

                    return (
                      <div
                        key={item.id}
                        className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                          item.completed
                            ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-800/40'
                            : 'bg-white/60 dark:bg-zinc-900/60 border-zinc-200/60 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                        }`}
                      >
                        {/* Checkbox & Details */}
                        <div className="flex items-start gap-3.5 flex-1">
                          <button
                            type="button"
                            onClick={() => handleToggleItem(stage, item)}
                            disabled={isToggling}
                            className={`mt-0.5 w-6 h-6 rounded-xl border flex items-center justify-center shrink-0 transition-all ${
                              item.completed
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : 'border-zinc-300 dark:border-zinc-600 text-transparent hover:border-indigo-500'
                            }`}
                          >
                            {isToggling ? (
                              <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                            ) : (
                              <CheckCircle2 className="w-4 h-4 fill-current" />
                            )}
                          </button>

                          <div>
                            <div className="flex items-center gap-2">
                              <h4
                                className={`text-sm font-bold transition-all ${
                                  item.completed
                                    ? 'line-through text-zinc-400 dark:text-zinc-500'
                                    : 'text-zinc-900 dark:text-white'
                                }`}
                              >
                                {item.title}
                              </h4>
                              {item.completed && (
                                <Badge variant="success" size="sm">Done</Badge>
                              )}
                            </div>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* Resource and time tags */}
                        <div className="flex items-center gap-3 shrink-0 text-xs self-end sm:self-center">
                          <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{item.estimatedTime}</span>
                          </span>

                          <span className="px-2.5 py-1 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium flex items-center gap-1 border border-zinc-200/50 dark:border-zinc-700/50">
                            <BookOpen className="w-3 h-3 text-indigo-500" />
                            <span className="max-w-[140px] truncate">{item.resource}</span>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
