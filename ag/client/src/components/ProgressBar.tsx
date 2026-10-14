import React from 'react';

interface ProgressBarProps {
  progress: number;
  label?: string;
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'indigo' | 'emerald' | 'amber' | 'purple' | 'gradient';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  showPercentage = true,
  size = 'md',
  color = 'gradient',
  className = ''
}) => {
  const clampedProgress = Math.min(100, Math.max(0, Math.round(progress)));

  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-3.5'
  };

  const colorClasses = {
    indigo: 'bg-indigo-600 dark:bg-indigo-500',
    emerald: 'bg-emerald-500 dark:bg-emerald-400',
    amber: 'bg-amber-500 dark:bg-amber-400',
    purple: 'bg-purple-600 dark:bg-purple-500',
    gradient: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
  };

  return (
    <div className={`w-full ${className}`}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between text-xs mb-1.5">
          {label && <span className="font-medium text-zinc-600 dark:text-zinc-400">{label}</span>}
          {showPercentage && (
            <span className="font-semibold text-zinc-800 dark:text-zinc-200 tabular-nums">
              {clampedProgress}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-zinc-100 dark:bg-zinc-800/80 rounded-full overflow-hidden p-0.5 border border-zinc-200/50 dark:border-zinc-800/50`}>
        <div
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
};
