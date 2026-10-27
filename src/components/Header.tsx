import React from 'react';
import { Language, PageId } from '../types';
import { PERSONAL_INFO, ASSETS } from '../data/portfolioData';
import { Menu, FileText, Globe } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onOpenMobileMenu: () => void;
  onOpenResume: () => void;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage: _currentPage,
  lang,
  onToggleLang,
  onOpenMobileMenu,
  onOpenResume,
  onNavigateHome,
}) => {
  return (
    <header className="fixed top-0 left-0 lg:left-72 right-0 h-16 bg-[#15130e]/85 backdrop-blur-xl border-b border-[#e8e2d8]/10 z-40 flex items-center justify-between px-4 sm:px-8">
      {/* Left: Mobile hamburger & small brand logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-lg bg-[#1e1b15] text-[#e8e2d8] hover:bg-[#2c2a23] transition-colors"
          aria-label="Open Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div 
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <span className="font-headline font-bold text-base sm:text-lg tracking-tight text-[#e8e2d8]">
            {lang === 'en' ? PERSONAL_INFO.nameEn : PERSONAL_INFO.nameZh}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-[#ffb3b1] px-2 py-0.5 rounded bg-[#1e1b15] border border-[#e8e2d8]/5">
            REEL ARCHIVE
          </span>
        </div>
      </div>

      {/* Right: Language Toggle & Quick Resume Trigger */}
      <div className="flex items-center gap-3">
        {/* Language switch button pill */}
        <div className="flex items-center bg-[#221f19] border border-[#e8e2d8]/10 rounded-full p-1 shadow-inner">
          <button
            onClick={() => onToggleLang('en')}
            className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
              lang === 'en'
                ? 'bg-[#cf2335] text-[#ffe8e6] shadow-sm'
                : 'text-[#e4bdbc]/70 hover:text-[#e8e2d8]'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => onToggleLang('zh')}
            className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
              lang === 'zh'
                ? 'bg-[#cf2335] text-[#ffe8e6] shadow-sm'
                : 'text-[#e4bdbc]/70 hover:text-[#e8e2d8]'
            }`}
          >
            中文
          </button>
        </div>

        {/* Quick Resume Button */}
        <button
          onClick={onOpenResume}
          className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1e1b15] hover:bg-[#2c2a23] text-xs font-mono tracking-wider text-[#e8e2d8] border border-[#e8e2d8]/10 transition-colors"
        >
          <FileText className="w-3.5 h-3.5 text-[#ffb3b1]" />
          <span>{lang === 'en' ? 'CV' : '简历'}</span>
        </button>

        {/* Global indicator */}
        <div className="w-8 h-8 rounded-full bg-[#cf2335]/20 border border-[#cf2335]/40 flex items-center justify-center text-[#ffb3b1]">
          <Globe className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
};
