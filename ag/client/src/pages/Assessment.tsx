import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Loader2,
  Award,
  Brain,
  Layers,
  HelpCircle
} from 'lucide-react';
import { getQuestionsApi, submitAssessmentApi } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { ProgressBar } from '../components/ProgressBar';
import { Question } from '../types';

export const Assessment: React.FC = () => {
  const { refreshUser } = useAuth();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [calculatingStep, setCalculatingStep] = useState(0);

  useEffect(() => {
    async function loadQuestions() {
      try {
        const res = await getQuestionsApi();
        setQuestions(res.questions || []);
      } catch (err) {
        console.error('Failed to load questions:', err);
      } finally {
        setLoading(false);
      }
    }
    loadQuestions();
  }, []);

  const currentQuestion = questions[currentIdx];
  const progressPercent = questions.length > 0 ? Math.round(((currentIdx + 1) / questions.length) * 100) : 0;
  const isOptionSelected = answers[currentQuestion?.id] !== undefined;

  const handleSelectOption = (optionIndex: number) => {
    if (!currentQuestion) return;
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    // Transform answers into array: [{ questionId, optionIndex }]
    const payload = Object.entries(answers).map(([qId, optIdx]) => ({
      questionId: Number(qId),
      optionIndex: optIdx
    }));

    // If some questions were skipped, ensure all have at least default
    questions.forEach(q => {
      if (answers[q.id] === undefined) {
        payload.push({ questionId: q.id, optionIndex: 0 });
      }
    });

    try {
      // High-tech calculation phases for realistic SaaS feel
      setCalculatingStep(1);
      await new Promise(r => setTimeout(r, 650));
      setCalculatingStep(2);
      await new Promise(r => setTimeout(r, 650));
      setCalculatingStep(3);
      await new Promise(r => setTimeout(r, 650));

      await submitAssessmentApi(payload);
      await refreshUser();
      navigate('/recommendations');
    } catch (err) {
      console.error('Submission failed:', err);
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-3" />
        <p className="text-sm text-zinc-500">Preparing multi-dimensional discovery diagnostic...</p>
      </div>
    );
  }

  if (submitting) {
    return (
      <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-3xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-xl">
            <Sparkles className="w-10 h-10 animate-spin-slow" />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mb-2">
          Calculating Suitability Vectors...
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-md mb-6">
          {calculatingStep === 1 && 'Analyzing problem-solving responses across 38 distinct career domains...'}
          {calculatingStep === 2 && 'Scoring cognitive, artistic, performing, and analytical dimensions...'}
          {calculatingStep === 3 && 'Generating personalized suitability percentages & 4-tier roadmaps...'}
        </p>
        <div className="w-72">
          <ProgressBar progress={calculatingStep === 1 ? 35 : calculatingStep === 2 ? 70 : 98} size="sm" showPercentage={false} color="gradient" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Top Header & Progress */}
      <div className="mb-8 space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          <span className="uppercase tracking-wider">
            Question {currentIdx + 1} of {questions.length}
          </span>
          <span className="tabular-nums font-bold text-indigo-600 dark:text-indigo-400">
            {progressPercent}% Complete
          </span>
        </div>
        <ProgressBar progress={progressPercent} size="sm" showPercentage={false} color="gradient" />
      </div>

      {/* Main Question Card */}
      {currentQuestion && (
        <div className="rounded-3xl p-6 sm:p-10 glass-panel border border-zinc-200/80 dark:border-zinc-800 shadow-xl space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {currentQuestion.dimension || 'Multi-Vector Diagnostic'}
              </span>
              {currentQuestion.category && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50">
                  {currentQuestion.category}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white leading-snug">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, optIdx) => {
              const isSelected = answers[currentQuestion.id] === optIdx;

              return (
                <button
                  key={optIdx}
                  type="button"
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full p-4 sm:p-5 rounded-2xl text-left border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-500 dark:border-indigo-400 ring-2 ring-indigo-500/20 shadow-md'
                      : 'bg-white/80 dark:bg-zinc-900/80 border-zinc-200/70 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-indigo-600 text-white'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700'
                      }`}
                    >
                      {String.fromCharCode(65 + optIdx)}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed">
                      {option.text}
                    </span>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-600 text-white'
                        : 'border-zinc-300 dark:border-zinc-700 text-transparent'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 fill-current" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="pt-6 border-t border-zinc-200/70 dark:border-zinc-800 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white disabled:opacity-30 disabled:hover:text-zinc-600 flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!isOptionSelected}
              className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 disabled:opacity-40 transition-all shadow-md shadow-indigo-500/20 flex items-center gap-1.5"
            >
              <span>{currentIdx === questions.length - 1 ? 'Analyze & View Results' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
