import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  User as UserIcon,
  Mail,
  GraduationCap,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  LogOut,
  Sparkles,
  ArrowRight,
  Edit3,
  Save,
  X,
  Compass
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { updateProfileApi } from '../services/api';
import { Badge } from '../components/Badge';

export const Profile: React.FC = () => {
  const { user, refreshUser, logout } = useAuth();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [education, setEducation] = useState(user?.education || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [saving, setSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEducation(user.education || '');
      setBio(user.bio || '');
    }
  }, [user]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateProfileApi({ name, education, bio });
      await refreshUser();
      setIsEditing(false);
      setSuccessMessage('Profile saved successfully!');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      console.error('Save failed:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400">
            Account Management
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-0.5">
            Student Profile
          </h1>
        </div>

        <button
          onClick={handleLogout}
          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-900/60 border border-red-200/60 dark:border-red-900/40 flex items-center gap-1.5 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>

      {successMessage && (
        <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-700 dark:text-emerald-300 text-center animate-in fade-in">
          {successMessage}
        </div>
      )}

      {/* Main Profile Info Card */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-zinc-200/80 dark:border-zinc-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-zinc-200/70 dark:border-zinc-800">
          <div className="flex items-center gap-4">
            <img
              src={user?.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${user?.name || 'User'}`}
              alt={user?.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl object-cover border-2 border-indigo-200 dark:border-indigo-800 shadow-md"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                  {user?.name}
                </h2>
                <Badge variant="primary" size="sm">Active Learner</Badge>
              </div>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>{user?.email}</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 rounded-xl text-xs font-semibold glass-panel hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-1.5 text-zinc-800 dark:text-zinc-200 transition-colors"
          >
            {isEditing ? <X className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
            <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
          </button>
        </div>

        {/* Edit Profile Form vs View Details */}
        {isEditing ? (
          <form onSubmit={handleSave} className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-zinc-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 mb-1">
                Education / University
              </label>
              <input
                type="text"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                placeholder="e.g. Stanford University or Self-taught student"
                className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-zinc-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-400 mb-1">
                Bio / Aspirations
              </label>
              <textarea
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Share your goals and passions..."
                className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-zinc-900 dark:text-white"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-500 hover:text-zinc-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 flex items-center gap-1.5 shadow-sm"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{saving ? 'Saving...' : 'Save Profile'}</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <span className="text-xs uppercase font-bold text-zinc-400 block mb-1">
                Education & Background
              </span>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                {user?.education || 'High School / Undergraduate Student'}
              </p>
            </div>

            <div>
              <span className="text-xs uppercase font-bold text-zinc-400 block mb-1">
                Account Status
              </span>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                {user?.isVerified !== false ? 'Verified Account' : 'Verification Pending'}
              </p>
            </div>

            <div className="sm:col-span-2">
              <span className="text-xs uppercase font-bold text-zinc-400 block mb-1">
                Personal Bio & Goals
              </span>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {user?.bio || 'No bio written yet. Click "Edit Profile" to share your aspirations.'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Selected Interests & Assessment History */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Interests */}
        <div className="rounded-3xl p-6 glass-panel border border-zinc-200/80 dark:border-zinc-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-zinc-900 dark:text-white">
              Selected Interests
            </h3>
            <Link to="/interests" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">
              Manage
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {(user?.interests || []).length > 0 ? (
              user?.interests?.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 capitalize border border-zinc-200/60 dark:border-zinc-700/60"
                >
                  {item}
                </span>
              ))
            ) : (
              <p className="text-xs text-zinc-400">No interests selected.</p>
            )}
          </div>
        </div>

        {/* Assessment Status */}
        <div className="rounded-3xl p-6 glass-panel border border-zinc-200/80 dark:border-zinc-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-zinc-900 dark:text-white">
              Assessment Status
            </h3>
            <Link to="/assessment" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">
              {user?.assessmentCompleted ? 'Retake' : 'Take Now'}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${user?.assessmentCompleted ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600' : 'bg-amber-50 dark:bg-amber-950/60 text-amber-600'}`}>
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-900 dark:text-white">
                {user?.assessmentCompleted ? 'Diagnostic Completed' : 'Diagnostic Pending'}
              </div>
              <p className="text-xs text-zinc-500">
                {user?.assessmentCompleted
                  ? 'Weighted career recommendations active'
                  : 'Take test to unlock precision suitability'}
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
