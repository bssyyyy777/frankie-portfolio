import React, { useState } from 'react';
import { Language, FilmProject, FilmProductionProcess } from '../types';
import { FILM_PROJECTS, PRODUCTION_PROCESSES } from '../data/portfolioData';
import { 
  Play, 
  Film, 
  Layers, 
  Camera, 
  Sparkles, 
  Sliders, 
  Quote, 
  Image as ImageIcon,
  Maximize2,
  Clapperboard,
  CheckCircle2,
  AlertCircle,
  ArrowDown,
  ChevronRight,
  FileText,
  Users,
  ZoomIn
} from 'lucide-react';

interface FilmNarrativePageProps {
  lang: Language;
  onSelectFilm: (project: FilmProject) => void;
  onOpenLightbox: (imageUrl: string, title: string, subtitle?: string) => void;
}

export const FilmNarrativePage: React.FC<FilmNarrativePageProps> = ({
  lang,
  onSelectFilm,
  onOpenLightbox,
}) => {
  const [activeFilmId, setActiveFilmId] = useState<string>(FILM_PROJECTS[0].id);
  const [activeStageId, setActiveStageId] = useState<string>('all');

  const selectedFilm = FILM_PROJECTS.find((f) => f.id === activeFilmId) || FILM_PROJECTS[0];
  const selectedProcess: FilmProductionProcess | undefined = PRODUCTION_PROCESSES.find(
    (p) => p.filmId === activeFilmId
  ) || PRODUCTION_PROCESSES[0];

  const filteredStages = activeStageId === 'all'
    ? selectedProcess.stages
    : selectedProcess.stages.filter((s) => s.id === activeStageId);

  return (
    <div className="flex flex-col w-full px-4 sm:px-8 lg:px-12 py-10 max-w-7xl mx-auto">
      {/* Header & Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#e8e2d8]/10">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#ffb3b1] uppercase tracking-widest">
              NARRATIVE CINEMA // 02
            </span>
            <span className="h-px w-8 bg-[#37342e]" />
          </div>
          <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-[#e8e2d8] tracking-tight mt-1">
            {lang === 'en' ? 'FILM & NARRATIVE DIRECTING' : '叙事短片与导演创作'}
          </h1>
          <p className="text-sm sm:text-base text-[#e4bdbc]/80 mt-2 max-w-2xl">
            {lang === 'en'
              ? 'In-depth behind-the-scenes production dossiers for ARTS1004 short films: The Chase and Blind Spot, grounded in Frankie Yu’s authentic reflective journals.'
              : '基于纽卡斯尔大学ARTS1004真实创作反思档案（Reflective Journal），系统复盘《追逐》与《盲区》的全流程编导执导手记。'}
          </p>
        </div>

        {/* Film Switcher Tabs & Quick Jump */}
        <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
          <div className="flex items-center bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-full p-1.5 shadow-inner">
            {FILM_PROJECTS.map((film) => {
              const isActive = activeFilmId === film.id;
              return (
                <button
                  key={film.id}
                  onClick={() => {
                    setActiveFilmId(film.id);
                    setActiveStageId('all');
                  }}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all ${
                    isActive
                      ? 'bg-[#cf2335] text-[#ffe8e6] shadow-md'
                      : 'text-[#e4bdbc]/70 hover:text-[#e8e2d8]'
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? film.title.en.split(' ')[0] : (film.id === 'the-chase' ? '追逐' : '盲区')}</span>
                </button>
              );
            })}
          </div>

          <a
            href="#production-process"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#891b25] hover:bg-[#cf2335] text-[#ffe8e6] font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-md"
          >
            <Clapperboard className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'View Production Process' : '查看拍摄流程记录'}</span>
            <ArrowDown className="w-3 h-3 ml-0.5" />
          </a>
        </div>
      </div>

      {/* Selected Film Presentation */}
      <div className="flex flex-col gap-12 pt-10">
        {/* 1. Hero Screening Banner & Quick Specs */}
        <div className="relative rounded-2xl overflow-hidden bg-[#1e1b15] border border-[#e8e2d8]/10 shadow-2xl flex flex-col">
          <div 
            onClick={() => onSelectFilm(selectedFilm)}
            className="group relative w-full aspect-[21/9] sm:aspect-[2.39/1] min-h-[260px] overflow-hidden bg-black cursor-pointer"
          >
            <img
              src={selectedFilm.heroImage}
              alt={lang === 'en' ? selectedFilm.title.en : selectedFilm.title.zh}
              className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b15] via-transparent to-black/40" />

            {/* Top specs badge (Year removed per instruction) */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#891b25] text-[#ffe8e6] font-mono text-xs uppercase font-bold tracking-wider">
                {lang === 'en' ? selectedFilm.genre.en : selectedFilm.genre.zh}
              </span>
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#e8e2d8] font-mono text-xs">
                {selectedFilm.duration} MIN
              </span>
            </div>

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#cf2335] text-[#ffe8e6] flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 ml-1" />
              </div>
            </div>

            {/* Bottom Overlay Title & Action */}
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between flex-wrap gap-3">
              <div>
                <span className="font-mono text-xs text-[#ffb3b1] uppercase tracking-widest block">
                  {lang === 'en' ? selectedFilm.course.en : selectedFilm.course.zh}
                </span>
                <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-[#e8e2d8] tracking-tight">
                  {lang === 'en' ? selectedFilm.title.en : selectedFilm.title.zh}
                </h2>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href="#production-process"
                  onClick={(e) => {
                    e.stopPropagation();
                    const el = document.getElementById('production-process');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-full bg-[#891b25] hover:bg-[#cf2335] text-[#ffe8e6] text-xs font-mono font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-lg border border-[#ffb3b1]/20"
                >
                  <Clapperboard className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'View Production Process' : '查看拍摄流程记录'}</span>
                </a>
                <span className="px-3 py-2 rounded-full bg-[#100e09]/80 backdrop-blur-md text-xs font-mono text-[#ffb3b1] border border-[#e8e2d8]/10">
                  {lang === 'en' ? 'Click to Launch Cinema Player' : '点击启动影院播放器'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Technical Specs Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e8e2d8]/10 bg-[#15130e] p-5 text-xs font-mono">
            <div className="flex flex-col py-2 sm:py-0 sm:px-4">
              <span className="text-[#ffb3b1] uppercase">{lang === 'en' ? 'Frankie’s Core Roles' : '主创职责'}</span>
              <span className="text-[#e8e2d8] font-semibold mt-1">
                {lang === 'en' ? selectedFilm.roles.en : selectedFilm.roles.zh}
              </span>
            </div>
            <div className="flex flex-col py-2 sm:py-0 sm:px-4">
              <span className="text-[#ffb3b1] uppercase">{lang === 'en' ? 'Camera & Format' : '机位与画幅'}</span>
              <span className="text-[#e8e2d8] font-semibold mt-1">{selectedFilm.cameraSpecs}</span>
            </div>
            <div className="flex flex-col py-2 sm:py-0 sm:px-4">
              <span className="text-[#ffb3b1] uppercase">{lang === 'en' ? 'Color Grading Look' : '色彩分级影调'}</span>
              <span className="text-[#e8e2d8] font-semibold mt-1">
                {lang === 'en' ? selectedFilm.colorGrade.en : selectedFilm.colorGrade.zh}
              </span>
            </div>
          </div>
        </div>

        {/* 2. Detailed Production Breakdown (From Reflective Journal) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main 2-Column Content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Logline & Creative Concept */}
            <div className="bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1] uppercase font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'en' ? 'Project Overview & Logline' : '项目概况与故事梗概'}</span>
              </div>
              <p className="text-base sm:text-lg text-[#e8e2d8] font-headline font-semibold leading-relaxed border-l-2 border-[#cf2335] pl-4">
                {lang === 'en' ? selectedFilm.logline.en : selectedFilm.logline.zh}
              </p>

              <div className="pt-2 border-t border-[#e8e2d8]/10 flex flex-col gap-2">
                <span className="text-xs font-mono uppercase text-[#ffb3b1]">
                  {lang === 'en' ? 'Creative Concept & Script Development' : '创意构思与剧本演进'}
                </span>
                <p className="text-sm text-[#e4bdbc]/90 leading-relaxed">
                  {lang === 'en' ? selectedFilm.concept.en : selectedFilm.concept.zh}
                </p>
              </div>
            </div>

            {/* Pre-Production Details */}
            <div className="bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1] uppercase font-semibold">
                <Layers className="w-4 h-4" />
                <span>{lang === 'en' ? 'Pre-Production & Preparation' : '前期筹备与分镜统筹'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-1.5">
                  <span className="font-mono text-[#ffb3b1] uppercase font-semibold">
                    {lang === 'en' ? '1. Storyboarding & Shot List' : '1. 分镜绘制与镜头清单'}
                  </span>
                  <p className="text-[#e4bdbc]/80 leading-relaxed">
                    {lang === 'en' ? selectedFilm.preProduction.storyboarding.en : selectedFilm.preProduction.storyboarding.zh}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-1.5">
                  <span className="font-mono text-[#ffb3b1] uppercase font-semibold">
                    {lang === 'en' ? '2. Location Scouting' : '2. 场地实勘与光线测试'}
                  </span>
                  <p className="text-[#e4bdbc]/80 leading-relaxed">
                    {lang === 'en' ? selectedFilm.preProduction.scouting.en : selectedFilm.preProduction.scouting.zh}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-1.5">
                  <span className="font-mono text-[#ffb3b1] uppercase font-semibold">
                    {lang === 'en' ? '3. Camera Blocking' : '3. 视线逻辑与机位设计'}
                  </span>
                  <p className="text-[#e4bdbc]/80 leading-relaxed">
                    {lang === 'en' ? selectedFilm.preProduction.shotList.en : selectedFilm.preProduction.shotList.zh}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-1.5">
                  <span className="font-mono text-[#ffb3b1] uppercase font-semibold">
                    {lang === 'en' ? '4. Crew Role Allocation' : '4. 剧组成员任务分工'}
                  </span>
                  <p className="text-[#e4bdbc]/80 leading-relaxed">
                    {lang === 'en' ? selectedFilm.preProduction.scheduling.en : selectedFilm.preProduction.scheduling.zh}
                  </p>
                </div>
              </div>
            </div>

            {/* Production: On-Set Execution & Audio Solutions */}
            <div className="bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1] uppercase font-semibold">
                <Camera className="w-4 h-4" />
                <span>{lang === 'en' ? 'Production & On-Set Challenges' : '现场拍摄与危机排障'}</span>
              </div>

              <div className="flex flex-col gap-4 text-xs sm:text-sm text-[#e4bdbc]/90">
                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-1.5">
                  <span className="font-mono text-xs text-[#cf2335] font-bold uppercase flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {lang === 'en' ? 'Key Challenge on Set:' : '现场重大挑战：'}
                  </span>
                  <p>{lang === 'en' ? selectedFilm.production.challenges.en : selectedFilm.production.challenges.zh}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-1.5">
                  <span className="font-mono text-xs text-[#ffb3b1] font-bold uppercase">
                    {lang === 'en' ? 'Audio Recording & Sound Engineering:' : '收音难题与声效方案：'}
                  </span>
                  <p>{lang === 'en' ? selectedFilm.production.audioRecording.en : selectedFilm.production.audioRecording.zh}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-1.5">
                  <span className="font-mono text-xs text-[#ffb3b1] font-bold uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {lang === 'en' ? 'Director Problem-Solving & Solutions:' : '导演应变与最终解决：'}
                  </span>
                  <p>{lang === 'en' ? selectedFilm.production.solutions.en : selectedFilm.production.solutions.zh}</p>
                </div>
              </div>
            </div>

            {/* Post-Production */}
            <div className="bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1] uppercase font-semibold">
                <Sliders className="w-4 h-4" />
                <span>{lang === 'en' ? 'Post-Production, VFX & Color Grading' : '后期剪辑、特效与调色'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-1.5">
                  <span className="font-mono text-[#ffb3b1] uppercase font-semibold">
                    {lang === 'en' ? 'Editing & Narrative Pacing' : '剪辑节奏推敲'}
                  </span>
                  <p className="text-[#e4bdbc]/80 leading-relaxed">
                    {lang === 'en' ? selectedFilm.postProduction.editing.en : selectedFilm.postProduction.editing.zh}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-1.5">
                  <span className="font-mono text-[#ffb3b1] uppercase font-semibold">
                    {selectedFilm.id === 'the-chase'
                      ? (lang === 'en' ? 'AI Masking & Flying Wallet VFX' : 'AI抠像与飞行动画特效')
                      : (lang === 'en' ? 'Weather Transition VFX' : '天气乌云转晴转场特效')}
                  </span>
                  <p className="text-[#e4bdbc]/80 leading-relaxed">
                    {lang === 'en' ? selectedFilm.postProduction.vfxTechnique.en : selectedFilm.postProduction.vfxTechnique.zh}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-1.5">
                  <span className="font-mono text-[#ffb3b1] uppercase font-semibold">
                    {lang === 'en' ? 'Sound Design & Foley' : '混音与拟音环境构建'}
                  </span>
                  <p className="text-[#e4bdbc]/80 leading-relaxed">
                    {lang === 'en' ? selectedFilm.postProduction.soundDesign.en : selectedFilm.postProduction.soundDesign.zh}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-1.5">
                  <span className="font-mono text-[#ffb3b1] uppercase font-semibold">
                    {lang === 'en' ? 'Color Grading Look' : '影调色彩分级'}
                  </span>
                  <p className="text-[#e4bdbc]/80 leading-relaxed">
                    {lang === 'en' ? selectedFilm.postProduction.colorWork.en : selectedFilm.postProduction.colorWork.zh}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Poster Analysis & Reflection Dossier */}
          <div className="flex flex-col gap-8">
            {/* Official Poster Showcase & Semiotics (Blind Spot has rich poster analysis) */}
            {selectedFilm.poster && (
              <div className="bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-[#ffb3b1] font-semibold flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4" />
                    {lang === 'en' ? 'Official Poster Semiotics' : '官方海报与视觉符号学解析'}
                  </span>
                  <button
                    onClick={() => onOpenLightbox(selectedFilm.poster!.imageUrl, 'Blind Spot — Official Film Poster')}
                    className="p-1.5 rounded-full hover:bg-[#2c2a23] text-[#e8e2d8]"
                    title="Enlarge Poster"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                <div 
                  onClick={() => onOpenLightbox(selectedFilm.poster!.imageUrl, 'Blind Spot — Official Film Poster')}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden bg-black cursor-pointer shadow-xl border border-[#e8e2d8]/10 group"
                >
                  <img
                    src={selectedFilm.poster.imageUrl}
                    alt="Blind Spot Film Poster"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="font-headline text-sm font-bold text-[#e8e2d8] italic">
                      {lang === 'en' ? selectedFilm.poster.tagline.en : selectedFilm.poster.tagline.zh}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#e4bdbc]/90 leading-relaxed pt-1">
                  {lang === 'en' ? selectedFilm.poster.visualAnalysis.en : selectedFilm.poster.visualAnalysis.zh}
                </p>

                {/* Symbolism breakdown */}
                <div className="flex flex-col gap-2 pt-2 border-t border-[#e8e2d8]/10 font-mono text-[11px]">
                  <span className="text-[#ffb3b1] uppercase font-semibold">
                    {lang === 'en' ? 'Visual Semiotic Codes:' : '视觉符号隐喻拆解：'}
                  </span>
                  {selectedFilm.poster.symbolism.map((sym, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[#e4bdbc]/80">
                      <span className="text-[#cf2335]">▪</span>
                      <span>{lang === 'en' ? sym.en : sym.zh}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Directing Reflection Card */}
            <div className="bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1] uppercase font-semibold">
                <Quote className="w-4 h-4" />
                <span>{lang === 'en' ? 'Directing Reflection (Journal)' : '导演个人结案反思手记'}</span>
              </div>

              <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5">
                <p className="text-xs sm:text-sm text-[#e8e2d8]/90 italic leading-relaxed">
                  {lang === 'en' ? selectedFilm.reflections.en : selectedFilm.reflections.zh}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#e4bdbc]/60 pt-2 border-t border-[#e8e2d8]/10">
                <span>ARTS1004 Assessment 3</span>
                <span>c3588114 YUYIQIAN</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. NEW SECTION: PRODUCTION PROCESS / 拍摄流程记录                           */}
        {/* ========================================================================= */}
        <section id="production-process" className="pt-16 border-t border-[#e8e2d8]/10 flex flex-col gap-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#e8e2d8]/10">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#cf2335] uppercase tracking-widest font-bold">
                  PRODUCTION TIMELINE // 03
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
                <span className="px-2.5 py-0.5 rounded-full bg-[#1e1b15] text-[#ffb3b1] font-mono text-[11px] border border-[#e8e2d8]/10">
                  {lang === 'en' ? selectedFilm.title.en : selectedFilm.title.zh}
                </span>
              </div>
              <h2 className="font-headline text-2xl sm:text-4xl font-extrabold text-[#e8e2d8] tracking-tight mt-2 flex items-center gap-3">
                <Clapperboard className="w-7 h-7 sm:w-9 sm:h-9 text-[#cf2335]" />
                <span>{lang === 'en' ? 'PRODUCTION PROCESS' : '拍摄流程记录'}</span>
                <span className="text-[#ffb3b1] font-normal text-xl sm:text-2xl hidden sm:inline">
                  {lang === 'en' ? `// ${selectedProcess.filmTitle.en}` : `// 《${selectedProcess.filmTitle.zh}》全流程`}
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#e4bdbc]/80 mt-2 max-w-3xl leading-relaxed">
                {lang === 'en'
                  ? selectedProcess.overview.en
                  : selectedProcess.overview.zh}
              </p>
            </div>

            {/* Stage Filter Buttons */}
            <div className="flex items-center bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-full p-1 shadow-inner overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveStageId('all')}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap ${
                  activeStageId === 'all'
                    ? 'bg-[#cf2335] text-[#ffe8e6] shadow-sm'
                    : 'text-[#e4bdbc]/70 hover:text-[#e8e2d8]'
                }`}
              >
                {lang === 'en' ? 'All 5 Phases' : '全部5阶段'}
              </button>
              {selectedProcess.stages.map((stage) => {
                const isActive = activeStageId === stage.id;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`px-3 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-[#891b25] text-[#ffe8e6] shadow-sm'
                        : 'text-[#e4bdbc]/70 hover:text-[#e8e2d8]'
                    }`}
                  >
                    <span>{stage.phaseNumber}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5-Phase Visual Timeline Stream */}
          <div className="flex flex-col gap-12">
            {filteredStages.map((stage, idx) => (
              <div 
                key={stage.id}
                className="relative rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 p-6 sm:p-8 flex flex-col gap-6 shadow-xl transition-all hover:border-[#cf2335]/40"
              >
                {/* Timeline Stage Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#e8e2d8]/10">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#891b25] text-[#ffe8e6] font-mono text-xs font-bold flex items-center justify-center shrink-0 border border-[#ffb3b1]/20">
                      {stage.phaseNumber}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-[#cf2335] uppercase tracking-widest font-bold">
                        {lang === 'en' ? stage.phase.en : stage.phase.zh}
                      </span>
                      <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#e8e2d8]">
                        {lang === 'en' ? stage.title.en : stage.title.zh}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="px-3 py-1 rounded-full bg-[#15130e] text-[#ffb3b1] border border-[#e8e2d8]/10 font-mono text-xs flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#cf2335]" />
                      <span>{lang === 'en' ? 'Frankie’s Role: ' : '俞伊倩职责：'}</span>
                      <strong className="text-[#e8e2d8]">{lang === 'en' ? stage.frankieRole.en : stage.frankieRole.zh}</strong>
                    </span>
                  </div>
                </div>

                {/* Stage Narrative Description */}
                <p className="text-sm sm:text-base text-[#e4bdbc]/90 leading-relaxed font-sans">
                  {lang === 'en' ? stage.description.en : stage.description.zh}
                </p>

                {/* Challenges & Solutions Side-by-Side Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Decisions & Challenges */}
                  <div className="p-5 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#ffb4ab] uppercase font-bold">
                      <AlertCircle className="w-4 h-4 text-[#cf2335]" />
                      <span>{lang === 'en' ? 'Creative Decisions & Challenges' : '关键决策与现场挑战'}</span>
                    </div>
                    <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#e4bdbc]/85">
                      {stage.decisionsAndChallenges.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-[#cf2335] font-mono font-bold mt-0.5">•</span>
                          <span className="leading-relaxed">{lang === 'en' ? item.en : item.zh}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions & Outcomes */}
                  <div className="p-5 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1] uppercase font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>{lang === 'en' ? 'Director Solutions & Outcomes' : '导演排障方案与成果'}</span>
                    </div>
                    <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#e4bdbc]/85">
                      {stage.solutionsAndOutcomes.map((item, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-mono font-bold mt-0.5">✓</span>
                          <span className="leading-relaxed">{lang === 'en' ? item.en : item.zh}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Artifacts Gallery (Real Photos, Storyboards, Edit Timelines, Presentation Slides) */}
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#ffb3b1] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5" />
                      {lang === 'en' ? 'Authentic Artifacts & Behind-The-Scenes Evidence' : '真实档案资料与拍摄实证'}
                    </span>
                    <span className="text-[11px] font-mono text-[#e4bdbc]/60">
                      {lang === 'en' ? 'Click any card to inspect full high-res artifact' : '点击图片放大查看高清单张与课件手稿'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {stage.visuals.map((vis, vIdx) => (
                      <div
                        key={vIdx}
                        onClick={() => onOpenLightbox(vis.url, lang === 'en' ? stage.title.en : stage.title.zh, lang === 'en' ? vis.caption.en : vis.caption.zh)}
                        className="group relative rounded-xl overflow-hidden bg-[#100e09] border border-[#e8e2d8]/10 hover:border-[#cf2335]/60 transition-all cursor-pointer flex flex-col"
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                          <img
                            src={vis.url}
                            alt={lang === 'en' ? vis.caption.en : vis.caption.zh}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                          {/* Visual Type Pill */}
                          <div className="absolute top-2 left-2">
                            <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#ffb3b1] uppercase">
                              {vis.type}
                            </span>
                          </div>

                          {/* Hover Zoom Icon */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                            <div className="w-10 h-10 rounded-full bg-[#cf2335] text-[#ffe8e6] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                              <ZoomIn className="w-5 h-5" />
                            </div>
                          </div>
                        </div>

                        <div className="p-3 bg-[#15130e] flex-1 flex flex-col justify-between">
                          <p className="text-xs text-[#e8e2d8] line-clamp-2 leading-relaxed">
                            {lang === 'en' ? vis.caption.en : vis.caption.zh}
                          </p>
                          <div className="flex items-center justify-between pt-2 mt-1 border-t border-[#e8e2d8]/5 text-[10px] font-mono text-[#ffb3b1]">
                            <span>{lang === 'en' ? 'ARTS1004 Journal' : '反思档案资料'}</span>
                            <span className="flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                              {lang === 'en' ? 'Inspect' : '查看'}
                              <ChevronRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Collaborative Reflection Callout */}
          <div className="rounded-2xl bg-gradient-to-r from-[#1e1b15] via-[#2c2a23] to-[#1e1b15] border border-[#e8e2d8]/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#891b25] text-[#ffe8e6] flex items-center justify-center shrink-0">
                <Quote className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-lg sm:text-xl font-bold text-[#e8e2d8] italic">
                  {lang === 'en' ? '“Creativity stems from collaboration.”' : '“创意源自协作。”'}
                </span>
                <span className="text-xs font-mono text-[#ffb3b1] mt-1">
                  {lang === 'en'
                    ? 'ARTS1004 Creative Collaborations — Concluding Journal Thesis by Frankie Yu (c3588114)'
                    : '纽卡斯尔大学ARTS1004创意协作课程 — 俞伊倩 (c3588114) 结案学术总结'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onSelectFilm(selectedFilm)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#cf2335] hover:bg-[#891b25] text-[#ffe8e6] text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-md"
              >
                <Play className="w-3.5 h-3.5 ml-0.5" />
                <span>{lang === 'en' ? 'Watch Full Film' : '观看完整正片'}</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
