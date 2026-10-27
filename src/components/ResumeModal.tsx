import React from 'react';
import { X, Printer, Mail, Phone, MapPin, ExternalLink, GraduationCap, Award, Briefcase, Wrench } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#100e09]/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#1e1b15] border border-[#e8e2d8]/20 rounded-2xl shadow-2xl flex flex-col my-auto max-h-[92vh] overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#15130e] border-b border-[#e8e2d8]/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#cf2335]" />
            <h3 className="font-headline font-bold text-lg text-[#e8e2d8]">
              {lang === 'en' ? 'Frankie Yu — Curriculum Vitae' : '俞伊倩 — 个人简历'}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2c2a23] hover:bg-[#cf2335] text-xs font-mono text-[#e8e2d8] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Print / Save PDF' : '打印 / 导出PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#2c2a23] hover:bg-[#cf2335] text-[#e8e2d8] transition-colors ml-2"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 flex flex-col gap-8 text-[#e8e2d8] bg-[#1e1b15]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#e8e2d8]/15">
            <div className="flex flex-col">
              <h1 className="font-headline text-3xl font-extrabold tracking-tight text-[#e8e2d8]">
                {lang === 'en' ? 'FRANKIE YU' : '俞伊倩'}
              </h1>
              <p className="font-mono text-sm text-[#ffb3b1] tracking-wider uppercase mt-1">
                {lang === 'en'
                  ? 'Short-form Video Creator & Director · Content Planning'
                  : '传媒专业在读 · 导演 / 摄影 / 视频剪辑 / 爆款短视频策划'}
              </p>
            </div>

            <div className="flex flex-col sm:text-right text-xs font-mono text-[#e4bdbc]/80 gap-1">
              <div className="flex sm:justify-end items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#ffb3b1]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#ffb3b1]" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ffb3b1]" />
                <span>{lang === 'en' ? PERSONAL_INFO.location.en : PERSONAL_INFO.location.zh}</span>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[#ffb3b1] font-mono text-xs uppercase tracking-widest font-semibold">
              <Award className="w-4 h-4" />
              <span>{lang === 'en' ? 'Professional Summary' : '个人简介'}</span>
            </div>
            <p className="text-sm leading-relaxed text-[#e4bdbc]/90">
              {lang === 'en'
                ? 'Media student specializing in AI-assisted directing, short drama creation, and on-location filming. Complete end-to-end production experience spanning story ideation, storyboarding, director execution, and post-production editing. Strong capabilities in mobile cinematography, Photoshop image retouching, and viral social media content management.'
                : '传媒专业在读，专注 AI 辅助编导、短剧创作与现场拍摄，具备从故事构思、分镜设计、导演执行到后期剪辑的完整制作经验；同时具备摄影、Photoshop 修图和社交媒体内容整理能力。适合 AI 内容、短剧制作与新媒体视频岗位。'}
            </p>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[#ffb3b1] font-mono text-xs uppercase tracking-widest font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>{lang === 'en' ? 'Education' : '教育背景'}</span>
            </div>
            <div className="bg-[#15130e] p-4 rounded-xl border border-[#e8e2d8]/10 flex flex-col sm:flex-row justify-between gap-2">
              <div className="flex flex-col">
                <span className="font-headline font-bold text-base text-[#e8e2d8]">
                  {lang === 'en' ? PERSONAL_INFO.education.institution.en : PERSONAL_INFO.education.institution.zh}
                </span>
                <span className="text-sm text-[#ffb3b1]">
                  {lang === 'en' ? PERSONAL_INFO.education.degree.en : PERSONAL_INFO.education.degree.zh}
                </span>
                <div className="flex flex-wrap gap-1.5 mt-2 text-xs font-mono text-[#e4bdbc]/70">
                  <span className="text-[#e8e2d8]/50">{lang === 'en' ? 'Coursework:' : '相关课程:'}</span>
                  {(lang === 'en' ? PERSONAL_INFO.education.courses.en : PERSONAL_INFO.education.courses.zh).map((c, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-[#221f19] border border-[#e8e2d8]/5">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-xs font-mono text-[#e4bdbc]/60 shrink-0">
                {PERSONAL_INFO.education.period}
              </span>
            </div>
          </div>

          {/* Key Projects & Experience */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[#ffb3b1] font-mono text-xs uppercase tracking-widest font-semibold">
              <Briefcase className="w-4 h-4" />
              <span>{lang === 'en' ? 'Project Experience' : '项目经历'}</span>
            </div>

            <div className="flex flex-col gap-4">
              {PERSONAL_INFO.experience.map((exp, idx) => (
                <div key={idx} className="bg-[#15130e] p-4 rounded-xl border border-[#e8e2d8]/10 flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-headline font-bold text-sm text-[#e8e2d8]">
                      {lang === 'en' ? exp.project.en : exp.project.zh}
                    </span>
                    <span className="text-xs font-mono text-[#ffb3b1]">
                      {lang === 'en' ? exp.role.en : exp.role.zh} · {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#e4bdbc]/80 leading-relaxed pt-1">
                    {(lang === 'en' ? exp.details.en : exp.details.zh).map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills & Tools */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[#ffb3b1] font-mono text-xs uppercase tracking-widest font-semibold">
              <Wrench className="w-4 h-4" />
              <span>{lang === 'en' ? 'Skills & Tools' : '专业技能与工具'}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#15130e] p-4 rounded-xl border border-[#e8e2d8]/10 flex flex-col gap-2">
                <span className="text-xs font-mono uppercase text-[#ffb3b1] font-semibold">
                  {lang === 'en' ? 'Creative & Directing' : '专业编导能力'}
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#e4bdbc]/90">
                  {(lang === 'en' ? PERSONAL_INFO.skills.creative.en : PERSONAL_INFO.skills.creative.zh).map((s, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-[#221f19] border border-[#e8e2d8]/5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#15130e] p-4 rounded-xl border border-[#e8e2d8]/10 flex flex-col gap-2">
                <span className="text-xs font-mono uppercase text-[#ffb3b1] font-semibold">
                  {lang === 'en' ? 'Software & Technical' : '后期软件与工具'}
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#e4bdbc]/90">
                  {(lang === 'en' ? PERSONAL_INFO.skills.technical.en : PERSONAL_INFO.skills.technical.zh).map((s, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-[#221f19] border border-[#e8e2d8]/5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
