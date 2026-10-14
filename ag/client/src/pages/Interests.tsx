import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Terminal,
  UtensilsCrossed,
  Music,
  Compass,
  Palette,
  BarChart3,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Loader2,
  Check,
  Scale,
  GraduationCap,
  HeartPulse,
  Activity,
  Microscope,
  Code
} from 'lucide-react';
import { getInterestsApi, updateUserInterestsApi } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { Badge } from '../components/Badge';
import { Interest } from '../types';

const iconMap: Record<string, any> = {
  Terminal,
  Code: Terminal,
  UtensilsCrossed,
  Music,
  Compass,
  Palette,
  BarChart3,
  Sparkles,
  TrendingUp,
  Scale,
  GraduationCap,
  HeartPulse,
  Activity,
  Microscope
};

export const Interests: React.FC = () => {
  const { user, refreshUser } = useAuth();
  const navigate = useNavigate();

  const [interests, setInterests] = useState<Interest[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Reset stale state when user identity changes
    setSelected([]);
    setLoading(true);

    async function loadData() {
      try {
        const res = await getInterestsApi();
        setInterests(res.interests || []);
        // Only populate selected interests from what's actually saved for this user
        if (user?.interests && user.interests.length > 0) {
          setSelected(user.interests);
        }
        // New users with no interests start with an empty selection (no defaults)
      } catch (err: any) {
        console.error('Failed to load interests:', err);
        setError('Failed to fetch interests catalog.');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [user?.id]);

  const toggleInterest = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleContinue = async () => {
    if (selected.length === 0) {
      setError('Please select at least one interest to personalize your assessment.');
      return;
    }
    setError(null);
    setSaving(true);
    try {
      await updateUserInterestsApi(selected);
      await refreshUser();
      navigate('/assessment');
    } catch (err: any) {
      setError(err.message || 'Failed to save interests.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-3" />
        <p className="text-sm text-zinc-500">Loading your interests catalog...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
        <Badge variant="primary" size="md">Step 1 of 2</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          What sparks your curiosity?
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Select the fields, crafts, and performing or technical areas you naturally gravitate toward. Select as many as you like.
        </p>
      </div>

      {error && (
        <div className="max-w-md mx-auto mb-6 p-3 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-700 dark:text-red-300 text-center font-medium">
          {error}
        </div>
      )}

      {/* Grid of Interests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
        {interests.map((item) => {
          const Icon = iconMap[item.icon] || Sparkles;
          const isSelected = selected.includes(item.id);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleInterest(item.id)}
              className={`p-5 rounded-3xl text-left border transition-all duration-200 flex flex-col justify-between relative group ${
                isSelected
                  ? 'bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-500/80 dark:border-indigo-500 shadow-md shadow-indigo-500/10 ring-2 ring-indigo-500/20'
                  : 'glass-panel border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md'
              }`}
            >
              {/* Checkmark bubble */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                    isSelected
                      ? 'bg-indigo-600 text-white'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                    isSelected
                      ? 'bg-indigo-600 border-indigo-600 text-white'
                      : 'border-zinc-300 dark:border-zinc-700 text-transparent'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-400">
                  {item.category}
                </span>
                <h3 className="font-bold text-base text-zinc-900 dark:text-white mt-0.5">
                  {item.name}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Floating Action Bar */}
      <div className="sticky bottom-6 max-w-xl mx-auto glass-panel p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-2xl flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center justify-center">
            {selected.length}
          </div>
          <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            {selected.length === 1 ? '1 field selected' : `${selected.length} fields selected`}
          </span>
        </div>

        <button
          onClick={handleContinue}
          disabled={saving || selected.length === 0}
          className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 disabled:opacity-50 transition-all shadow-md shadow-indigo-500/20 flex items-center gap-1.5"
        >
          <span>{saving ? 'Saving...' : 'Start Diagnostic Assessment'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
