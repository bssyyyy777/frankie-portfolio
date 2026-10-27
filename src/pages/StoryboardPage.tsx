import React, { useRef, useState } from 'react';
import { Language, StoryboardProject } from '../types';
import { STORYBOARD_PROJECTS } from '../data/portfolioData';
import { 
  Layers, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Camera, 
  Compass, 
  Info,
  Maximize2
} from 'lucide-react';

interface StoryboardPageProps {
  lang: Language;
  onOpenLightbox: (imageUrl: string, title: string, subtitle?: string) => void;
}

export const StoryboardPage: React.FC<StoryboardPageProps> = ({
  lang,
  onOpenLightbox,
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(STORYBOARD_PROJECTS[0].id);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const activeProject = STORYBOARD_PROJECTS.find((p) => p.id === selectedProjectId) || STORYBOARD_PROJECTS[0];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -450 : 450;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full px-4 sm:px-8 lg:px-12 py-10 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#e8e2d8]/10">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#ffb3b1] uppercase tracking-widest">
              VISUAL CONTINUITY // 03
            </span>
            <span className="h-px w-8 bg-[#37342e]" />
          </div>
          <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-[#e8e2d8] tracking-tight mt-1">
            {lang === 'en' ? 'STORYBOARD DESIGN ARCHIVE' : '分镜设计作品档案'}
          </h1>
          <p className="text-sm sm:text-base text-[#e4bdbc]/80 mt-2 max-w-2xl">
            {lang === 'en'
              ? 'Two complete storyboard boards covering a live-action social-impact campaign and a 3D animated coffee adventure. Each board keeps the full shot structure, timing, camera plan, and visual continuity visible in one view.'
              : '两个完整分镜项目：一个是实拍公益宣传片，一个是3D咖啡动画。每张分镜板都保留完整镜头结构、时间节奏、机位规划与视觉连续性。'}
          </p>
        </div>

        {/* Project Switcher */}
        <div className="flex items-center bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-full p-1.5 shadow-inner">
          {STORYBOARD_PROJECTS.map((proj) => {
            const isActive = selectedProjectId === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all ${
                  isActive
                    ? 'bg-[#cf2335] text-[#ffe8e6] shadow-md'
                    : 'text-[#e4bdbc]/70 hover:text-[#e8e2d8]'
                }`}
              >
                {lang === 'en' ? proj.filmTitle.en : proj.filmTitle.zh}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Panoramic Showcase Strip */}
      <div className="flex flex-col gap-8 pt-8">
        {/* Strip Container Card */}
        <div className="bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
          {/* Top Bar with Carousel Nav */}
          <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-[#e8e2d8]/10">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1]">
                <span className="px-2.5 py-0.5 rounded bg-[#891b25] text-[#ffe8e6] font-bold">
                  {lang === 'en' ? activeProject.shotRange.en : activeProject.shotRange.zh}
                </span>
                <span>·</span>
                <span>{lang === 'en' ? activeProject.technique.en : activeProject.technique.zh}</span>
              </div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-[#e8e2d8] mt-1">
                {lang === 'en' ? activeProject.title.en : activeProject.title.zh}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              {/* Scroll controls */}
              <button
                onClick={() => handleScroll('left')}
                className="w-10 h-10 rounded-full bg-[#2c2a23] hover:bg-[#cf2335] text-[#e8e2d8] flex items-center justify-center transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-10 h-10 rounded-full bg-[#2c2a23] hover:bg-[#cf2335] text-[#e8e2d8] flex items-center justify-center transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Fullscreen zoom */}
              <button
                onClick={() => onOpenLightbox(
                  activeProject.storyboardImageUrl,
                  lang === 'en' ? activeProject.title.en : activeProject.title.zh,
                  lang === 'en' ? activeProject.formatNote.en : activeProject.formatNote.zh
                )}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#cf2335] hover:bg-[#891b25] text-[#ffe8e6] font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow-md ml-2"
              >
                <ZoomIn className="w-4 h-4" />
                <span>{lang === 'en' ? 'Fullscreen Lightbox' : '全屏放大长卷'}</span>
              </button>
            </div>
          </div>

          {/* Horizontally Scrollable / Swipeable Panorama Canvas */}
          <div className="relative flex flex-col">
            <div
              ref={scrollRef}
              className="w-full overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none rounded-xl bg-[#100e09] border border-[#e8e2d8]/10 p-4"
              tabIndex={0}
            >
              <div className="min-w-[1200px] flex flex-col gap-2">
                <img
                  src={activeProject.storyboardImageUrl}
                  alt={lang === 'en' ? activeProject.title.en : activeProject.title.zh}
                  className="block w-full h-auto max-h-[720px] object-contain rounded-lg shadow-inner cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={() => onOpenLightbox(
                    activeProject.storyboardImageUrl,
                    lang === 'en' ? activeProject.title.en : activeProject.title.zh
                  )}
                />

                {/* Subtitle / Timeline Track Bar */}
                <div className="flex items-center justify-between text-xs font-mono text-[#e4bdbc]/70 pt-2 px-2 border-t border-[#e8e2d8]/10">
                  {activeProject.timelineLabels.map((label, index) => (
                    <span
                      key={`${activeProject.id}-timeline-${index}`}
                      className={`flex items-center gap-1 ${
                        index === 0
                          ? 'text-[#ffb3b1]'
                          : index === activeProject.timelineLabels.length - 1
                            ? 'text-[#cf2335] font-bold'
                            : ''
                      }`}
                    >
                      {index === 0 && <Compass className="w-3.5 h-3.5" />}
                      <span>{lang === 'en' ? label.en : label.zh}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#e4bdbc]/60 pt-2 px-1">
              <span>{lang === 'en' ? '← Swipe or drag horizontally to inspect the complete storyboard board →' : '← 支持横向拖拽滑动或滚轮查看完整分镜板 →'}</span>
              <span>{lang === 'en' ? activeProject.formatNote.en : activeProject.formatNote.zh}</span>
            </div>
          </div>

          {/* Director Notes & Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-2">
              <span className="text-xs font-mono uppercase text-[#ffb3b1] font-semibold flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                {lang === 'en' ? 'Continuity Architecture' : '连续性视觉调度理念'}
              </span>
              <p className="text-xs sm:text-sm text-[#e4bdbc]/90 leading-relaxed">
                {lang === 'en' ? activeProject.description.en : activeProject.description.zh}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-2">
              <span className="text-xs font-mono uppercase text-[#ffb3b1] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                {lang === 'en' ? 'Director’s Script Note' : '导演手记'}
              </span>
              <p className="text-xs sm:text-sm text-[#e8e2d8]/90 italic leading-relaxed">
                {lang === 'en' ? activeProject.directorNotes.en : activeProject.directorNotes.zh}
              </p>
            </div>
          </div>

          {/* Detailed Shot Beat Annotations */}
          <div className="flex flex-col gap-4 pt-4 border-t border-[#e8e2d8]/10">
            <span className="text-xs font-mono uppercase text-[#ffb3b1] font-semibold">
              {lang === 'en' ? 'Shot Breakdown & Camera Blocking:' : '分镜镜头细节与运镜参数：'}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {activeProject.continuityDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-1.5 text-xs"
                >
                  <span className="font-headline font-bold text-[#e8e2d8]">
                    {lang === 'en' ? detail.beat.en : detail.beat.zh}
                  </span>
                  <span className="font-mono text-[11px] text-[#ffb3b1] flex items-center gap-1">
                    <Camera className="w-3 h-3 text-[#cf2335]" />
                    {lang === 'en' ? detail.camera.en : detail.camera.zh}
                  </span>
                  <p className="text-[#e4bdbc]/80 leading-relaxed pt-1">
                    {lang === 'en' ? detail.action.en : detail.action.zh}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
