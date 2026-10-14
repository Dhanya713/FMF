import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Compass,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Mail,
  Loader2,
  Send,
  Sparkles
} from 'lucide-react';
import { verifyEmailApi, resendVerificationApi } from '../services/api';

export const VerifyEmail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Resend state
  const [resendEmail, setResendEmail] = useState('');
  const [resendLoading, setResendLoading] = useState(false);
  const [resendStatus, setResendStatus] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function runVerification() {
      if (!token) {
        if (isMounted) {
          setLoading(false);
          setErrorMessage('No verification token provided in the link. Please check your email or request a new link.');
        }
        return;
      }

      try {
        await verifyEmailApi(token);
        if (isMounted) {
          setSuccess(true);
          setLoading(false);
        }
      } catch (err: any) {
        if (isMounted) {
          setErrorMessage(err.message || 'The verification link is invalid or has expired.');
          setLoading(false);
        }
      }
    }

    runVerification();
    return () => {
      isMounted = false;
    };
  }, [token]);

  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resendEmail) return;

    setResendLoading(true);
    setResendStatus(null);
    try {
      const res = await resendVerificationApi(resendEmail);
      setResendStatus(res.message || 'Verification link sent! Check your inbox.');
    } catch (err: any) {
      setResendStatus(err.message || 'Failed to resend verification link.');
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md space-y-6 relative z-10">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 group mb-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-0.5 shadow-md shadow-indigo-500/25">
              <div className="w-full h-full bg-white dark:bg-zinc-950 rounded-[14px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-zinc-900 dark:text-white">
              FindMyFlow
            </span>
          </Link>
        </div>

        {/* Verification Card */}
        <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-zinc-200/80 dark:border-zinc-800 shadow-2xl text-center space-y-5">
          {loading ? (
            <div className="py-8 space-y-4">
              <Loader2 className="w-10 h-10 text-indigo-600 animate-spin mx-auto" />
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Verifying your email...
                </h2>
                <p className="text-xs text-zinc-500 mt-1">
                  Please wait a moment while we validate your activation token.
                </p>
              </div>
            </div>
          ) : success ? (
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
              </div>

              <div className="space-y-1.5">
                <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                  Email Verified Successfully!
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Your account is now fully activated and verified. You can log in normally to access your career roadmaps and dashboard.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/login"
                  className="w-full py-3 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] transition-all shadow-md shadow-indigo-500/20 flex items-center justify-center gap-2"
                >
                  <span>Sign In to Your Account</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200/60 dark:border-red-800/60 flex items-center justify-center mx-auto shadow-inner">
                <XCircle className="w-9 h-9 stroke-[2.2]" />
              </div>

              <div className="space-y-1.5">
                <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                  Verification Failed
                </h2>
                <p className="text-xs sm:text-sm text-red-600 dark:text-red-400 leading-relaxed">
                  {errorMessage || 'This verification link is invalid or has expired.'}
                </p>
              </div>

              {/* Resend Email Form */}
              <div className="pt-3 border-t border-zinc-200/70 dark:border-zinc-800 text-left space-y-3">
                <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 block">
                  Request a new verification link:
                </span>

                {resendStatus && (
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-700 dark:text-indigo-300">
                    {resendStatus}
                  </div>
                )}

                <form onSubmit={handleResend} className="space-y-2">
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={resendEmail}
                      onChange={(e) => setResendEmail(e.target.value)}
                      placeholder="student@example.com"
                      className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-zinc-900 dark:text-white placeholder:text-zinc-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={resendLoading}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center gap-1.5 shadow-sm disabled:opacity-50"
                  >
                    {resendLoading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending Link...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Resend Verification Email</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="pt-2">
                <Link
                  to="/login"
                  className="w-full py-2.5 rounded-xl font-semibold text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 flex items-center justify-center gap-1.5"
                >
                  <span>Return to Sign In</span>
                </Link>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
