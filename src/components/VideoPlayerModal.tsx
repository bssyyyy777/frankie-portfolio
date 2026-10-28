import React, { useState, useEffect, useRef } from 'react';
import { Language, VideoProject, FilmProject } from '../types';
import { 
  X, 
  Maximize, 
  Sparkles, 
  Camera, 
  Film, 
  Info,
  PlayCircle
} from 'lucide-react';

interface VideoPlayerModalProps {
  project: VideoProject | FilmProject | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  project,
  isOpen,
  onClose,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'player' | 'bts'>('player');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isVideoProject = project && 'category' in project;
  const isFilmProject = project && 'genre' in project;

  // Derive poster and video sources
  const posterSrc = project
    ? ('thumbnailUrl' in project ? project.thumbnailUrl : project.heroImage)
    : '';
  const videoSrc = project?.videoUrl || '';

  // Pause the current media when the modal closes. Playback is intentionally
  // user initiated so browsers do not reject unmuted autoplay.
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        if (videoRef.current) {
          videoRef.current.pause();
        }
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen().catch(() => {});
      }
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#100e09]/95 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-[#1e1b15] border border-[#e8e2d8]/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden my-auto max-h-[94vh]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#15130e] border-b border-[#e8e2d8]/10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#cf2335] animate-pulse" />
            <div className="flex flex-col">
              <h3 className="font-headline text-base sm:text-lg font-bold text-[#e8e2d8] leading-tight">
                {lang === 'en' ? project.title.en : project.title.zh}
              </h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs font-mono text-[#ffb3b1]">
                  {isVideoProject
                    ? (lang === 'en' ? (project as VideoProject).role.en : (project as VideoProject).role.zh)
                    : (lang === 'en' ? (project as FilmProject).roles.en : (project as FilmProject).roles.zh)}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2c2a23] text-[#e4bdbc]/80 uppercase">
                  Native HTML5 MP4
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Tab Switch */}
            <div className="flex items-center bg-[#221f19] rounded-lg p-0.5 border border-[#e8e2d8]/10 text-xs">
              <button
                onClick={() => setActiveTab('player')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono transition-colors ${
                  activeTab === 'player'
                    ? 'bg-[#cf2335] text-[#ffe8e6] font-semibold'
                    : 'text-[#e4bdbc]/70 hover:text-[#e8e2d8]'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Screening' : '视频播放'}</span>
              </button>
              <button
                onClick={() => setActiveTab('bts')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono transition-colors ${
                  activeTab === 'bts'
                    ? 'bg-[#cf2335] text-[#ffe8e6] font-semibold'
                    : 'text-[#e4bdbc]/70 hover:text-[#e8e2d8]'
                }`}
              >
                <Info className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'BTS Notes' : '创作手记'}</span>
              </button>
            </div>

            {/* Quick Fullscreen Button */}
            <button
              onClick={handleFullscreen}
              className="p-2 rounded-full bg-[#2c2a23] hover:bg-[#37342e] text-[#e8e2d8] transition-colors hidden sm:flex items-center justify-center"
              title={lang === 'en' ? 'Fullscreen Video' : '全屏播放'}
              aria-label="Fullscreen"
            >
              <Maximize className="w-4 h-4" />
            </button>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="p-2 rounded-full bg-[#2c2a23] hover:bg-[#cf2335] text-[#e8e2d8] transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab 1: Native HTML5 Video Player */}
        {activeTab === 'player' && (
          <div className="flex flex-col flex-1 bg-black overflow-hidden">
            {/* Video Viewport Container */}
            <div className="relative w-full bg-[#0d0c09] flex items-center justify-center p-2 sm:p-4 min-h-[360px] max-h-[74vh] overflow-hidden">
              <video
                ref={videoRef}
                key={videoSrc}
                src={videoSrc}
                poster={posterSrc}
                controls
                playsInline
                preload="metadata"
                className="max-h-[68vh] w-auto max-w-full rounded-xl shadow-2xl object-contain bg-black outline-none border border-[#e8e2d8]/10"
              >
                <source src={videoSrc} type="video/mp4" />
                {lang === 'en'
                  ? 'Your browser does not support the video tag. Please update to a modern browser.'
                  : '您的浏览器暂不支持该视频播放，请使用现代浏览器。'}
              </video>
            </div>

            {/* Bottom Info Bar */}
            <div className="bg-[#15130e] px-5 py-3 flex items-center justify-between border-t border-[#e8e2d8]/10 flex-wrap gap-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-[#e4bdbc]/80">
                <PlayCircle className="w-4 h-4 text-[#cf2335]" />
                <span className="text-[#e8e2d8]">
                  {lang === 'en' ? 'Tencent Cloud VOD:' : '腾讯云点播地址：'}{' '}
                  <span className="text-[#ffb3b1]">{videoSrc}</span>
                </span>
              </div>
              <div className="flex items-center gap-4 text-[#e4bdbc]/70">
                <span>{lang === 'en' ? 'Controls: Play / Seek / Volume / Fullscreen' : '支持原生控制条、快进与全屏'}</span>
                <span className="hidden sm:inline text-[#cf2335]">● 1080P/4K H.264 MP4</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Behind-The-Scenes / Project Dossier */}
        {activeTab === 'bts' && (
          <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6 text-[#e8e2d8]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Concept & Story */}
              <div className="flex flex-col gap-3 bg-[#15130e] p-5 rounded-xl border border-[#e8e2d8]/10">
                <div className="flex items-center gap-2 text-[#ffb3b1] font-mono text-xs uppercase tracking-wider">
                  <Film className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Core Narrative & Concept' : '核心构思与叙事'}</span>
                </div>
                <p className="text-sm text-[#e4bdbc]/90 leading-relaxed">
                  {isVideoProject
                    ? (lang === 'en' ? (project as VideoProject).description.en : (project as VideoProject).description.zh)
                    : (lang === 'en' ? (project as FilmProject).concept.en : (project as FilmProject).concept.zh)}
                </p>
              </div>

              {/* Technical Blueprint */}
              <div className="flex flex-col gap-3 bg-[#15130e] p-5 rounded-xl border border-[#e8e2d8]/10">
                <div className="flex items-center gap-2 text-[#ffb3b1] font-mono text-xs uppercase tracking-wider">
                  <Camera className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Technical Specifications' : '摄制技术规格'}</span>
                </div>
                <div className="flex flex-col gap-2 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-[#e8e2d8]/10">
                    <span className="text-[#e4bdbc]/60">{lang === 'en' ? 'Camera & Format' : '机位与规格'}:</span>
                    <span className="text-[#e8e2d8]">
                      {isFilmProject ? (project as FilmProject).cameraSpecs : 'Mobile 4K UHD 60fps'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#e8e2d8]/10">
                    <span className="text-[#e4bdbc]/60">{lang === 'en' ? 'Key Editing Suite' : '剪辑与调色'}:</span>
                    <span className="text-[#e8e2d8]">
                      {isVideoProject ? (project as VideoProject).keyTools.join(' · ') : 'CapCut · DaVinci Resolve'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#e8e2d8]/10">
                    <span className="text-[#e4bdbc]/60">{lang === 'en' ? 'Collaboration' : '合作形式'}:</span>
                    <span className="text-[#e8e2d8]">
                      {isVideoProject
                        ? (lang === 'en' ? (project as VideoProject).collabType.en : (project as VideoProject).collabType.zh)
                        : (lang === 'en' ? 'Curriculum 5-Person Crew' : '课程5人剧组合作')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights or Directing Reflection */}
            <div className="bg-[#15130e] p-5 rounded-xl border border-[#e8e2d8]/10 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#ffb3b1] font-mono text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'en' ? 'Director Insights & Key Takeaways' : '编导手记与执行亮点'}</span>
              </div>
              {isVideoProject ? (
                <ul className="list-disc list-inside space-y-2 text-sm text-[#e4bdbc]/80">
                  {(project as VideoProject).highlights.map((h, i) => (
                    <li key={i}>{lang === 'en' ? h.en : h.zh}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-[#e4bdbc]/90 italic leading-relaxed">
                  {lang === 'en' ? (project as FilmProject).reflections.en : (project as FilmProject).reflections.zh}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
