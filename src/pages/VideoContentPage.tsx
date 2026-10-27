import React, { useState } from 'react';
import { Language, VideoProject } from '../types';
import { VIDEO_PROJECTS } from '../data/portfolioData';
import { Play, Sparkles, Wrench, Share2, Award, CheckCircle } from 'lucide-react';

interface VideoContentPageProps {
  lang: Language;
  onSelectVideo: (project: VideoProject) => void;
}

export const VideoContentPage: React.FC<VideoContentPageProps> = ({
  lang,
  onSelectVideo,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'variety' | 'documentary' | 'lifestyle'>('all');

  const filteredProjects = activeCategory === 'all'
    ? VIDEO_PROJECTS
    : VIDEO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full px-4 sm:px-8 lg:px-12 py-10 max-w-7xl mx-auto">
      {/* Page Title & Category Filter */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#e8e2d8]/10">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#ffb3b1] uppercase tracking-widest">
              CATEGORY ARCHIVE // 01
            </span>
            <span className="h-px w-8 bg-[#37342e]" />
          </div>
          <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-[#e8e2d8] tracking-tight mt-1">
            {lang === 'en' ? 'VIDEO & CONTENT CREATION' : '短视频创作与影视策划'}
          </h1>
          <p className="text-sm sm:text-base text-[#e4bdbc]/80 mt-2 max-w-2xl">
            {lang === 'en'
              ? 'Short-form video ideation, scriptwriting, on-set camera operation, and fast-paced editing tuned for Xiaohongshu, Douyin, and international documentary formats.'
              : '涵盖短视频选题构思、脚本分镜撰写、现场摄影掌镜与快节奏剪辑调色，深耕小红书、抖音与国际纪录片叙事。'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="inline-flex items-center p-1 rounded-full bg-[#1e1b15] border border-[#e8e2d8]/10 self-start md:self-auto">
          {(['all', 'variety', 'documentary', 'lifestyle'] as const).map((cat) => {
            const labels = {
              all: { en: 'ALL WORKS', zh: '全部' },
              variety: { en: 'VARIETY', zh: '趣味微综艺' },
              documentary: { en: 'DOCUMENTARY', zh: '纪实微访谈' },
              lifestyle: { en: 'LIFESTYLE & FOOD', zh: '生活与美食' },
            };
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-[#cf2335] text-[#ffe8e6] font-bold shadow-sm'
                    : 'text-[#e4bdbc]/70 hover:text-[#e8e2d8]'
                }`}
              >
                {lang === 'en' ? labels[cat].en : labels[cat].zh}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Showcase Stream */}
      <div className="flex flex-col gap-12 pt-10">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="flex flex-col lg:flex-row gap-8 bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-2xl p-6 sm:p-8 hover:border-[#cf2335]/40 transition-all duration-300"
          >
            {/* Left: Video Media Preview (9:14 format) */}
            <div className="w-full lg:w-[320px] shrink-0 flex flex-col">
              <div 
                onClick={() => onSelectVideo(project)}
                className="group relative w-full aspect-[9/14] rounded-xl overflow-hidden bg-[#100e09] cursor-pointer shadow-xl border border-[#e8e2d8]/10"
              >
                <img
                  src={project.thumbnailUrl}
                  alt={lang === 'en' ? project.title.en : project.title.zh}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100e09] via-transparent to-[#100e09]/40" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-[#891b25] text-[#ffe8e6] font-mono text-xs uppercase font-bold">
                    {project.platform}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#100e09]/80 text-[#ffb3b1] font-mono text-xs">
                    {lang === 'en' ? project.collabType.en : project.collabType.zh}
                  </span>
                </div>

                <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#100e09]/80 font-mono text-xs text-[#e8e2d8]">
                  {project.duration}
                </span>

                {/* Big play button hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-[#cf2335] text-[#ffe8e6] flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-0.5" />
                  </div>
                </div>

                {/* Prompt preview pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-[#e8e2d8]">
                  <span className="bg-[#100e09]/80 px-2 py-1 rounded text-[#ffb3b1]">
                    {lang === 'en' ? 'Click to Screen' : '点击播放体验'}
                  </span>
                  <span className="bg-[#100e09]/80 px-2 py-1 rounded">
                    4K UHD
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Rich Project Case Breakdown */}
            <div className="flex-1 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                {/* Header info */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 text-xs font-mono text-[#ffb3b1]">
                    <span>0{index + 1} // CASE STUDY</span>
                    <span>·</span>
                    <span>{lang === 'en' ? project.subtitle.en : project.subtitle.zh}</span>
                  </div>
                  <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#e8e2d8] mt-1">
                    {lang === 'en' ? project.title.en : project.title.zh}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#e4bdbc]/90 leading-relaxed">
                  {lang === 'en' ? project.description.en : project.description.zh}
                </p>

                {/* Highlights */}
                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/10 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1] uppercase font-semibold">
                    <Sparkles className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Directing & Strategy Highlights' : '核心编导与策划亮点'}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#e8e2d8]/90">
                        <CheckCircle className="w-3.5 h-3.5 text-[#cf2335] shrink-0 mt-0.5" />
                        <span>{lang === 'en' ? h.en : h.zh}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical toolkit */}
                <div className="flex items-center gap-2 flex-wrap text-xs font-mono">
                  <span className="text-[#ffb3b1] flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5" />
                    {lang === 'en' ? 'Toolkit:' : '使用工具与设备:'}
                  </span>
                  {project.keyTools.map((tool, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-[#221f19] text-[#e8e2d8]/90 border border-[#e8e2d8]/5">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Meta & Launch Action */}
              <div className="flex items-center justify-between pt-4 border-t border-[#e8e2d8]/10 flex-wrap gap-4">
                <div className="flex items-center gap-4 text-xs font-mono text-[#e4bdbc]/70">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#ffb3b1]" />
                    <span className="text-[#e8e2d8] font-semibold">
                      {lang === 'en' ? project.role.en : project.role.zh}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectVideo(project)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#cf2335] hover:bg-[#891b25] text-[#ffe8e6] text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-md"
                >
                  <Play className="w-3.5 h-3.5 ml-0.5" />
                  <span>{lang === 'en' ? 'Launch Screening & BTS' : '即刻播放与手记'}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
