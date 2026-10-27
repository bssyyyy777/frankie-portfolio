import React, { useState } from 'react';
import { Language, PageId, VideoProject, FilmProject } from '../types';
import { PERSONAL_INFO, ASSETS, VIDEO_PROJECTS, FILM_PROJECTS, STORYBOARD_PROJECTS, STRATEGY_CASE_STUDIES } from '../data/portfolioData';
import { 
  Play, 
  ArrowRight, 
  Layers, 
  Film, 
  ZoomIn, 
  CheckCircle2, 
  Mail, 
  FileText,
  Sparkles,
  BarChart3,
  Calendar
} from 'lucide-react';

interface HomePageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onSelectVideo: (project: VideoProject) => void;
  onSelectFilm: (project: FilmProject) => void;
  onOpenLightbox: (imageUrl: string, title: string, subtitle?: string) => void;
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  onNavigate,
  onSelectVideo,
  onSelectFilm,
  onOpenLightbox,
  onOpenResume,
}) => {
  const [videoFilter, setVideoFilter] = useState<'all' | 'variety' | 'documentary' | 'lifestyle'>('all');

  const filteredVideos = videoFilter === 'all'
    ? VIDEO_PROJECTS
    : VIDEO_PROJECTS.filter((v) => v.category === videoFilter);

  const featuredStoryboard = STORYBOARD_PROJECTS[0];

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Faithful to Stitch Design) */}
      <section className="relative px-4 sm:px-8 lg:px-12 pt-8 sm:pt-14 pb-14 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-[#891b25]/20 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] rounded-full bg-[#cf2335]/15 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14 relative z-10">
          {/* Left Column: Creator Moniker, Headline & Bio */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Top pill badge */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#1e1b15] border border-[#e8e2d8]/10 text-[#ffb3b1] font-mono text-xs uppercase tracking-widest">
                {lang === 'en' ? 'PORTFOLIO' : '个人作品集'}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#cf2335] animate-pulse" />
              <span className="text-xs font-mono text-[#e4bdbc]/70 tracking-wider">
                {lang === 'en' ? 'SINGAPORE / GREATER CHINA' : '新加坡 / 中国'}
              </span>
            </div>

            {/* Headline Title */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#e8e2d8] tracking-tight leading-none">
                  {lang === 'en' ? PERSONAL_INFO.nameEn : PERSONAL_INFO.nameZh}
                </h1>
                {lang === 'zh' && (
                  <span className="font-headline text-2xl sm:text-3xl font-semibold text-[#ffb3b1]">
                    Frankie Yu
                  </span>
                )}
              </div>
              <p className="font-headline text-lg sm:text-2xl text-[#e4bdbc] mt-2 font-medium">
                {lang === 'en' ? 'Short-form Video Content Creation · Content Planning · Video Filming & Editing' : '短视频内容创作 · 内容策划 · 视频拍摄与剪辑'}
              </p>
              <p className="font-mono text-xs sm:text-sm text-[#ffb3b1] tracking-widest uppercase mt-1">
                {lang === 'en' ? 'Creative Direction · Mobile Cinematography · Social Strategy' : '创意构思 · 移动掌镜 · 社交媒体传播策略'}
              </p>
            </div>

            {/* Filmic Accent Tagline */}
            <div className="flex items-center gap-3 my-1">
              <div className="h-[1px] w-12 bg-[#cf2335]" />
              <p className="font-headline text-base sm:text-lg text-[#e8e2d8] font-semibold italic tracking-wide">
                {lang === 'en' ? PERSONAL_INFO.tagline.en : PERSONAL_INFO.tagline.zh}
              </p>
            </div>

            {/* Bio Body */}
            <p className="text-sm sm:text-base text-[#e4bdbc]/90 max-w-xl leading-relaxed">
              {lang === 'en' ? PERSONAL_INFO.bio.en : PERSONAL_INFO.bio.zh}
            </p>

            {/* Quick Skills Tags */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {(lang === 'en'
                ? ['#Scriptwriting', '#Storyboarding', '#MobileShooting', '#VideoEditing', '#ContentCreation', '#BrandContent']
                : ['#剧本编创', '#分镜设计', '#移动摄制', '#剪辑调色', '#内容创作', '#品牌内容']
              ).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-[#1e1b15] text-[#e4bdbc]/80 border border-[#e8e2d8]/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 pt-3 flex-wrap">
              <button
                onClick={() => onNavigate('video-content')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#cf2335] text-[#ffe8e6] font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold shadow-lg hover:bg-[#891b25] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="w-4 h-4 ml-0.5" />
                <span>{lang === 'en' ? 'Explore My Work' : '浏览作品'}</span>
              </button>

              <button
                onClick={() => onNavigate('about-contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e1b15] hover:bg-[#2c2a23] text-[#e8e2d8] font-mono text-xs sm:text-sm uppercase tracking-wider transition-all border border-[#e8e2d8]/10"
              >
                <span>{lang === 'en' ? 'About Frankie' : '关于我'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Frankie Portrait Staged Card */}
          <div className="w-full lg:w-[400px] shrink-0 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] group">
              {/* Backlight glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#cf2335]/40 via-[#891b25]/20 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#1e1b15] shadow-2xl p-2.5 border border-[#ab8887]/30">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-[#100e09]">
                  <img
                    src={ASSETS.portrait}
                    alt="Frankie Yu (俞伊倩)"
                    className="w-full h-full object-cover object-top contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100e09] via-transparent to-[#100e09]/30" />

                  {/* Live Tag Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-[#100e09]/80 backdrop-blur-md border border-[#ab8887]/40">
                    <span className="w-2 h-2 rounded-full bg-[#cf2335] animate-ping" />
                    <span className="font-mono text-[10px] text-[#e8e2d8] tracking-wider uppercase">
                      REC · ACTIVE
                    </span>
                  </div>

                  {/* Lower Card Info */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#100e09]/90 backdrop-blur-md flex items-center justify-between border border-[#ab8887]/30">
                    <div className="flex flex-col">
                      <span className="font-headline text-sm text-[#e8e2d8] font-bold">
                        {lang === 'en' ? PERSONAL_INFO.nameEn : PERSONAL_INFO.nameZh}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[10px] text-[#e4bdbc]/70 block">FPS: 24 · 4K UHD</span>
                      <span className="font-mono text-[10px] text-[#cf2335] font-bold">
                        {lang === 'en' ? 'OPEN FOR INQUIRIES' : '可接洽实习'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECTED SHORT-FORM VIDEO WORKS (9:16 Cards Grid) */}
      <section className="px-4 sm:px-8 lg:px-12 py-12 border-t border-[#e8e2d8]/10 bg-[#15130e]" id="selected-videos">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Header & Filter pills */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#ffb3b1] uppercase tracking-widest">
                  01 // REEL ARCHIVE
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
              </div>
              <h2 className="font-headline text-2xl sm:text-4xl font-bold text-[#e8e2d8] tracking-tight mt-1">
                {lang === 'en' ? 'FEATURED SHORT-FORM VIDEOS' : '精选短视频作品'}
              </h2>
              <p className="text-sm text-[#e4bdbc]/80 mt-1">
                {lang === 'en'
                  ? 'High-energy campus variety, NGO documentary, street food ASMR, and cinematic vlogs.'
                  : '涵盖高校趣味综艺、非营利组织微访谈、美食探店与光影快剪。'}
              </p>
            </div>

            {/* Filter pills */}
            <div className="inline-flex items-center p-1 rounded-full bg-[#1e1b15] border border-[#e8e2d8]/10">
              {(['all', 'variety', 'documentary', 'lifestyle'] as const).map((cat) => {
                const labels = {
                  all: { en: 'ALL', zh: '全部' },
                  variety: { en: 'VARIETY', zh: '微综艺' },
                  documentary: { en: 'DOCS', zh: '纪实访谈' },
                  lifestyle: { en: 'LIFESTYLE', zh: '生活探店' },
                };
                const isActive = videoFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setVideoFilter(cat)}
                    className={`px-3 sm:px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                      isActive
                        ? 'bg-[#e8e2d8] text-[#15130e] font-semibold shadow-sm'
                        : 'text-[#e4bdbc]/70 hover:text-[#e8e2d8]'
                    }`}
                  >
                    {lang === 'en' ? labels[cat].en : labels[cat].zh}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => onSelectVideo(video)}
                className="group flex flex-col rounded-xl bg-[#1e1b15] border border-[#e8e2d8]/10 p-3 transition-all duration-300 hover:shadow-2xl hover:bg-[#2c2a23] cursor-pointer"
              >
                {/* 9:14 Frame */}
                <div className="relative w-full aspect-[9/14] rounded-lg overflow-hidden bg-[#100e09]">
                  <img
                    src={video.thumbnailUrl}
                    alt={lang === 'en' ? video.title.en : video.title.zh}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100e09] via-transparent to-[#100e09]/40" />

                  {/* Badges */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-[#891b25] text-[#ffe8e6] font-mono text-[10px] uppercase font-bold">
                      {video.platform}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#100e09]/80 text-[#ffb3b1] font-mono text-[10px]">
                      {lang === 'en' ? video.collabType.en : video.collabType.zh}
                    </span>
                  </div>

                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#100e09]/80 font-mono text-[10px] text-[#e8e2d8]">
                    {video.duration}
                  </span>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <div className="w-12 h-12 rounded-full bg-[#cf2335] flex items-center justify-center text-[#ffe8e6] shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Title */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="font-mono text-[10px] text-[#ffb3b1] uppercase tracking-wider block mb-0.5">
                      {lang === 'en' ? video.subtitle.en : video.subtitle.zh}
                    </span>
                    <h3 className="font-headline text-base text-[#e8e2d8] leading-tight font-bold">
                      {lang === 'en' ? video.title.en : video.title.zh}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-1.5 pt-3">
                  <p className="text-xs text-[#e4bdbc]/80 line-clamp-2">
                    {lang === 'en' ? video.summary.en : video.summary.zh}
                  </p>
                  <div className="flex items-center justify-between text-[#e4bdbc]/70 pt-1 border-t border-[#e8e2d8]/5 font-mono text-[11px]">
                    <span className="text-[#ffb3b1]">
                      {lang === 'en' ? video.role.en : video.role.zh}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={() => onNavigate('video-content')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1e1b15] hover:bg-[#2c2a23] text-xs font-mono tracking-wider text-[#e8e2d8] border border-[#e8e2d8]/10 transition-colors"
            >
              <span>{lang === 'en' ? 'View All Video Case Studies' : '查看全部短视频案例库'}</span>
              <ArrowRight className="w-4 h-4 text-[#ffb3b1]" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. NARRATIVE FILM PROJECTS (The Chase & Blind Spot) */}
      <section className="px-4 sm:px-8 lg:px-12 py-14 bg-[#100e09] border-t border-[#e8e2d8]/10" id="selected-films">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#ffb3b1] uppercase tracking-widest">
                  02 // NARRATIVE DIRECTING
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
              </div>
              <h2 className="font-headline text-2xl sm:text-4xl font-bold text-[#e8e2d8] tracking-tight mt-1">
                {lang === 'en' ? 'FEATURED NARRATIVE SHORT FILMS' : '精选叙事短片'}
              </h2>
              <p className="text-sm text-[#e4bdbc]/80 mt-1">
                {lang === 'en'
                  ? 'University of Newcastle ARTS1004 productions: The Chase & Blind Spot.'
                  : '纽卡斯尔大学影视制作课程两部代表作：《追逐》与《盲区》。'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('film-narrative')}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ffb3b1] hover:text-[#e8e2d8] transition-colors"
            >
              <span>{lang === 'en' ? 'Explore Full Behind-The-Scenes' : '查看完整幕后复盘'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 2 Widescreen Film Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {FILM_PROJECTS.map((film) => (
              <div
                key={film.id}
                className="group flex flex-col rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 overflow-hidden hover:border-[#cf2335]/50 transition-all duration-300"
              >
                {/* Widescreen Preview */}
                <div 
                  onClick={() => onSelectFilm(film)}
                  className="relative w-full aspect-video overflow-hidden bg-black cursor-pointer"
                >
                  <img
                    src={film.heroImage}
                    alt={lang === 'en' ? film.title.en : film.title.zh}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b15] via-transparent to-transparent" />

                  {/* Genre pill */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#891b25] text-[#ffe8e6] font-mono text-xs uppercase font-bold tracking-wider">
                      {lang === 'en' ? film.genre.en : film.genre.zh}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#e8e2d8] font-mono text-xs">
                      {film.duration} MIN
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="font-mono text-xs text-[#ffb3b1] uppercase tracking-widest block">
                        {lang === 'en' ? film.course.en : film.course.zh}
                      </span>
                      <h3 className="font-headline text-2xl font-bold text-[#e8e2d8]">
                        {lang === 'en' ? film.title.en : film.title.zh}
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#cf2335] text-[#ffe8e6] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-5 h-5 ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                  <div className="flex flex-col gap-3">
                    <p className="text-sm text-[#e4bdbc]/90 leading-relaxed">
                      <strong className="text-[#e8e2d8] font-headline font-semibold">
                        {lang === 'en' ? 'Logline: ' : '故事梗概：'}
                      </strong>
                      {lang === 'en' ? film.logline.en : film.logline.zh}
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                      <div className="flex flex-col">
                        <span className="text-[#ffb3b1] uppercase">{lang === 'en' ? 'Roles' : '主创职责'}</span>
                        <span className="text-[#e8e2d8]">{lang === 'en' ? film.roles.en : film.roles.zh}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#ffb3b1] uppercase">{lang === 'en' ? 'Camera & Look' : '摄影与影调'}</span>
                        <span className="text-[#e8e2d8] line-clamp-1">{film.cameraSpecs}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#e8e2d8]/10">
                    <span className="text-xs font-mono text-[#ffb3b1] italic">
                      {lang === 'en' ? film.pullQuote.en : film.pullQuote.zh}
                    </span>
                    <button
                      onClick={() => onNavigate('film-narrative')}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2c2a23] hover:bg-[#cf2335] text-[#e8e2d8] font-mono text-xs uppercase tracking-wider transition-colors shrink-0"
                    >
                      <span>{lang === 'en' ? 'Read BTS' : '幕后手记'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STORYBOARD DESIGN (Panoramic Strip Preview) */}
      <section className="px-4 sm:px-8 lg:px-12 py-14 bg-[#15130e] border-t border-[#e8e2d8]/10" id="storyboard-preview">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#ffb3b1] uppercase tracking-widest">
                  03 // VISUAL CONTINUITY
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
              </div>
              <h2 className="font-headline text-2xl sm:text-4xl font-bold text-[#e8e2d8] tracking-tight mt-1">
                {lang === 'en' ? 'STORYBOARD DESIGN ARCHIVE' : '分镜设计作品档案'}
              </h2>
              <p className="text-sm text-[#e4bdbc]/80 mt-1">
                {lang === 'en'
                  ? 'Two complete storyboard boards: a live-action SCWO campaign and a 3D animated coffee adventure.'
                  : '两个完整分镜项目：SCWO公益实拍宣传片与咖啡喷泉3D动画。'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('storyboard')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1e1b15] hover:bg-[#2c2a23] text-xs font-mono text-[#ffb3b1] border border-[#e8e2d8]/10 transition-colors"
            >
              <Layers className="w-4 h-4" />
              <span>{lang === 'en' ? 'Open Storyboard Suite' : '进入分镜专区'}</span>
            </button>
          </div>

          {/* Panoramic Strip Container */}
          <div className="relative rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-[#891b25] text-[#ffe8e6] font-mono text-xs uppercase font-bold">
                  {lang === 'en' ? featuredStoryboard.filmTitle.en : featuredStoryboard.filmTitle.zh}
                </span>
                <span className="text-xs font-mono text-[#e4bdbc]/70">
                  {lang === 'en' ? featuredStoryboard.shotRange.en : featuredStoryboard.shotRange.zh}
                </span>
              </div>

              <button
                onClick={() => onOpenLightbox(
                  featuredStoryboard.storyboardImageUrl,
                  lang === 'en' ? featuredStoryboard.title.en : featuredStoryboard.title.zh,
                  lang === 'en' ? featuredStoryboard.formatNote.en : featuredStoryboard.formatNote.zh
                )}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2c2a23] hover:bg-[#cf2335] text-[#ffb3b1] hover:text-[#ffe8e6] font-mono text-xs uppercase transition-colors"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Enlarge Full Storyboard' : '查看完整长卷大图'}</span>
              </button>
            </div>

            {/* Horizontally scrollable preview */}
            <div className="relative w-full rounded-xl overflow-x-auto bg-[#100e09] p-3 border border-[#e8e2d8]/10">
              <img
                src={featuredStoryboard.storyboardImageUrl}
                alt={lang === 'en' ? featuredStoryboard.title.en : featuredStoryboard.title.zh}
                className="min-w-[900px] h-auto max-h-[420px] object-contain rounded-lg cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => onOpenLightbox(
                  featuredStoryboard.storyboardImageUrl,
                  lang === 'en' ? featuredStoryboard.title.en : featuredStoryboard.title.zh
                )}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#e4bdbc]/60">
              <span>{lang === 'en' ? 'Each project is presented as one complete storyboard board with its timing and visual plan intact.' : '注：每个项目展示完整分镜板，保留时间节奏与视觉调度。'}</span>
              <span className="text-[#ffb3b1]">{lang === 'en' ? featuredStoryboard.formatNote.en : featuredStoryboard.formatNote.zh}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STRATEGY & COMMUNICATION CASE STUDIES */}
      <section className="px-4 sm:px-8 lg:px-12 py-14 bg-[#100e09] border-t border-[#e8e2d8]/10" id="strategy-preview">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#ffb3b1] uppercase tracking-widest">
                  04 // STRATEGY & RESEARCH
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
              </div>
              <h2 className="font-headline text-2xl sm:text-4xl font-bold text-[#e8e2d8] tracking-tight mt-1">
                {lang === 'en' ? 'STRATEGY & COMMUNICATION AUDITS' : '传播策略与公关审计'}
              </h2>
              <p className="text-sm text-[#e4bdbc]/80 mt-1">
                {lang === 'en'
                  ? 'Academic case studies evaluating celebrity digital media ecosystems and corporate crisis communication.'
                  : '学术案例深度复盘：明星个人IP跨平台矩阵与企业食品安全危机公关。'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('strategy-communication')}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ffb3b1] hover:text-[#e8e2d8] transition-colors"
            >
              <span>{lang === 'en' ? 'View Full Case Studies' : '查看完整报告与数据图表'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STRATEGY_CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                onClick={() => onNavigate('strategy-communication')}
                className="group flex flex-col rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 p-6 hover:border-[#cf2335]/50 transition-all duration-300 cursor-pointer justify-between"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#891b25] text-[#ffe8e6] font-mono text-xs uppercase font-bold">
                      {lang === 'en' ? study.badge.en : study.badge.zh}
                    </span>
                    <span className="text-xs font-mono text-[#e4bdbc]/60">{study.course}</span>
                  </div>

                  <h3 className="font-headline text-xl font-bold text-[#e8e2d8] group-hover:text-[#ffb3b1] transition-colors">
                    {lang === 'en' ? study.title.en : study.title.zh}
                  </h3>

                  <p className="text-xs text-[#e4bdbc]/80 leading-relaxed">
                    {lang === 'en' ? study.challenge.en : study.challenge.zh}
                  </p>

                  <div className="p-3 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-2 mt-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1]">
                      <BarChart3 className="w-4 h-4" />
                      <span>{lang === 'en' ? 'Core Insight' : '核心发现'}</span>
                    </div>
                    <p className="text-xs text-[#e8e2d8]/90">
                      {lang === 'en' ? study.keyInsights[0].en : study.keyInsights[0].zh}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#e8e2d8]/10 text-xs font-mono">
                  <span className="text-[#ffb3b1]">
                    {study.leadStudent} · {study.course.split(':')[0]}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#e8e2d8] group-hover:translate-x-1 transition-transform">
                    {lang === 'en' ? 'Deep Dive' : '深度复盘'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION & CONTACT FOOTER */}
      <section className="px-4 sm:px-8 lg:px-12 py-16 bg-[#15130e] border-t border-[#e8e2d8]/10">
        <div className="max-w-7xl mx-auto rounded-3xl bg-[#1e1b15] border border-[#e8e2d8]/10 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#cf2335]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 justify-between items-start">
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#cf2335] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#ffb3b1] font-semibold">
                  {lang === 'en' ? PERSONAL_INFO.status.en : PERSONAL_INFO.status.zh}
                </span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#e8e2d8] leading-tight">
                {lang === 'en' ? 'Let’s create stories that cut through the noise.' : '期待与您共创打动人心的作品。'}
              </h2>

              <p className="text-sm text-[#e4bdbc]/90 max-w-xl leading-relaxed">
                {lang === 'en'
                  ? 'Equipped with end-to-end capabilities: from viral script outlines and storyboarding to camera execution, DaVinci/Premiere post-production, and social platform audience operations. Ready to contribute fresh creative energy to forward-thinking studios and digital agencies.'
                  : '具备全流程影视与短视频能力：涵盖脚本编撰、分镜绘制、现场掌镜、DaVinci/Premiere后期剪辑调色及社交平台运营。随时准备为前瞻性的创意工作室和数字化机构注入新鲜视觉活力。'}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#cf2335] text-[#ffe8e6] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#891b25] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Get in Touch' : '发送邮件联络'}</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2c2a23] hover:bg-[#37342e] text-[#e8e2d8] font-mono text-xs uppercase tracking-wider border border-[#e8e2d8]/10 transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#ffb3b1]" />
                  <span>{lang === 'en' ? 'View Resume' : '查看简历档案'}</span>
                </button>
              </div>
            </div>

            {/* Academic Integrity Disclosure */}
            <div className="w-full lg:w-80 p-5 rounded-2xl bg-[#15130e] border border-[#e8e2d8]/10 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#ffb3b1]">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-mono text-xs font-semibold uppercase">
                  {lang === 'en' ? 'Academic Integrity' : '真实学术背景声明'}
                </span>
              </div>
              <p className="text-xs text-[#e4bdbc]/80 leading-relaxed">
                {lang === 'en'
                  ? 'Authentic student portfolio. Academic group and individual projects are clearly annotated with precise individual contribution breakdowns to preserve complete transparency.'
                  : '真实学生作品集。所有学术小组与个人项目均严格标明具体个人创作分工，杜绝过度虚构，保持全面真实与透明。'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
