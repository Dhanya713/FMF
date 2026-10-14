import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 relative selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-400">
      {/* Subtle Apple-style Ambient Gradients in Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[30%] left-[20%] w-[550px] h-[550px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-[130px] animate-pulse-subtle" />
        <div className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-[140px]" />
        <div className="absolute -bottom-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-sky-500/10 dark:bg-sky-600/10 blur-[130px]" />
      </div>

      {/* Main App Content */}
      <Navbar />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
