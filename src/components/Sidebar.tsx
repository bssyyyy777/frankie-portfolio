import React from 'react';
import { PageId, Language } from '../types';
import { PERSONAL_INFO, ASSETS } from '../data/portfolioData';
import { 
  Home, 
  Video, 
  Film, 
  Layers, 
  BarChart3, 
  User, 
  Mail, 
  Linkedin,
  FileText
} from 'lucide-react';

interface SidebarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
  onOpenResume: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onNavigate,
  lang,
  onOpenResume,
  isMobileOpen = false,
  onCloseMobile,
}) => {
  const navItems: { id: PageId; labelEn: string; labelZh: string; icon: React.ReactNode }[] = [
    { id: 'home', labelEn: 'Home', labelZh: '首页', icon: <Home className="w-4 h-4 mr-3" /> },
    { id: 'video-content', labelEn: 'Video & Content', labelZh: '短视频创作', icon: <Video className="w-4 h-4 mr-3" /> },
    { id: 'film-narrative', labelEn: 'Film & Narrative', labelZh: '叙事短片', icon: <Film className="w-4 h-4 mr-3" /> },
    { id: 'storyboard', labelEn: 'Storyboard', labelZh: '分镜设计', icon: <Layers className="w-4 h-4 mr-3" /> },
    { id: 'strategy-communication', labelEn: 'Strategy & Comm', labelZh: '传播策略', icon: <BarChart3 className="w-4 h-4 mr-3" /> },
    { id: 'about-contact', labelEn: 'About & Contact', labelZh: '关于与联系', icon: <User className="w-4 h-4 mr-3" /> },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          onClick={onCloseMobile}
        />
      )}

      {/* Main Sidebar */}
      <aside 
        className={`fixed left-0 top-0 h-screen w-72 bg-[#100e09] border-r border-[#e8e2d8]/10 z-50 flex flex-col justify-between p-6 transition-transform duration-300 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col gap-6">
          {/* Creator Profile Brand Stamp */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex flex-col gap-1.5 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <img 
                src={ASSETS.logo} 
                alt="Frankie Yu Monogram" 
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-headline text-lg font-bold tracking-tight text-[#e8e2d8] leading-none">
                  {lang === 'en' ? PERSONAL_INFO.nameEn : PERSONAL_INFO.nameZh}
                </span>
                {(lang === 'en' ? PERSONAL_INFO.monikerEn : PERSONAL_INFO.monikerZh) ? (
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#e4bdbc] mt-1">
                    {lang === 'en' ? PERSONAL_INFO.monikerEn : PERSONAL_INFO.monikerZh}
                  </span>
                ) : null}
              </div>
            </div>

            {/* Live Indicator */}
            <div className="flex items-center gap-2 mt-2 px-2.5 py-1 rounded-full bg-[#1e1b15] border border-[#e8e2d8]/5 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#cf2335] animate-pulse"></span>
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#ffb3b1]">
                {lang === 'en' ? 'Available for Commissions' : '开放商业与项目合作'}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5 pt-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between py-2 px-3 rounded-lg text-sm transition-all text-left ${
                    isActive
                      ? 'bg-[#891b25] text-[#ffe8e6] font-semibold pl-4 shadow-sm'
                      : 'text-[#e4bdbc]/80 hover:bg-[#2c2a23] hover:text-[#e8e2d8]'
                  }`}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span>{lang === 'en' ? item.labelEn : item.labelZh}</span>
                  </div>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffb3b1]" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="flex flex-col gap-4 pt-4 border-t border-[#e8e2d8]/10">
          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-[#1e1b15] hover:bg-[#2c2a23] text-[#e8e2d8] text-xs font-mono uppercase tracking-wider transition-colors border border-[#e8e2d8]/10"
            >
              <FileText className="w-3.5 h-3.5 text-[#ffb3b1]" />
              <span>{lang === 'en' ? 'Resume' : '简历'}</span>
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-full bg-[#1e1b15] hover:bg-[#cf2335] text-[#e8e2d8] transition-colors border border-[#e8e2d8]/10"
              title="Email Frankie"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1e1b15] hover:bg-[#cf2335] text-[#e8e2d8] transition-colors border border-[#e8e2d8]/10"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Meta */}
          <div className="flex flex-col text-[11px] text-[#e4bdbc]/50 font-mono">
            <p>© Frankie Yu (俞伊倩)</p>
            <p>University of Newcastle · Reel Portfolio</p>
          </div>
        </div>
      </aside>
    </>
  );
};
