import React, { useState } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO, ASSETS } from '../data/portfolioData';
import { 
  GraduationCap, 
  Wrench, 
  Mail, 
  Phone, 
  Linkedin, 
  FileText, 
  MapPin, 
  CheckCircle2, 
  ExternalLink,
  Send,
  Sparkles,
  Award,
  Globe
} from 'lucide-react';

interface AboutContactPageProps {
  lang: Language;
  onOpenResume: () => void;
}

export const AboutContactPage: React.FC<AboutContactPageProps> = ({
  lang,
  onOpenResume,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full px-4 sm:px-8 lg:px-12 py-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col pb-8 border-b border-[#e8e2d8]/10">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#ffb3b1] uppercase tracking-widest">
            CREATOR PROFILE // 05
          </span>
          <span className="h-px w-8 bg-[#37342e]" />
        </div>
        <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-[#e8e2d8] tracking-tight mt-1">
          {lang === 'en' ? 'ABOUT FRANKIE & CONTACT' : '关于俞伊倩与联络方式'}
        </h1>
        <p className="text-sm sm:text-base text-[#e4bdbc]/80 mt-2 max-w-2xl">
          {lang === 'en'
            ? 'Media student at the University of Newcastle seeking creative internships in short-form video creation, directing, and content strategy.'
            : '纽卡斯尔大学传媒专业在读，积极寻求短视频内容策划、影视编导与新媒体制作相关实习与合作机会。'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-10">
        {/* Left 2 Columns: Bio, Education, Timeline, Skills */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* Bio Overview */}
          <div className="bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1] uppercase font-semibold">
              <Award className="w-4 h-4" />
              <span>{lang === 'en' ? 'Background & Professional Direction' : '个人背景与职业志向'}</span>
            </div>

            <p className="text-base sm:text-lg text-[#e8e2d8] font-headline font-semibold leading-relaxed">
              {lang === 'en' ? PERSONAL_INFO.bio.en : PERSONAL_INFO.bio.zh}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#e8e2d8]/10 text-xs font-mono">
              <div className="flex flex-col gap-1">
                <span className="text-[#ffb3b1] uppercase">{lang === 'en' ? 'Core Focus:' : '核心赛道:'}</span>
                <span className="text-[#e8e2d8]">
                  {lang === 'en'
                    ? 'Short-form Video Directing, Video Content Creation, Brand Marketing, Creative Planning, Storyboard Design, Xiaohongshu & Douyin Operations'
                    : '爆款短视频编导、视频内容创作、品牌营销、创意策划、分镜设计、小红书与抖音全案运营'}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#ffb3b1] uppercase">{lang === 'en' ? 'Internship Availability:' : '实习档期:'}</span>
                <span className="text-[#cf2335] font-bold">
                  {lang === 'en' ? 'Available for Creative Internships' : '开放创意全职 / 项目制实习'}
                </span>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1] uppercase font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>{lang === 'en' ? 'Academic Education' : '教育背景'}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 p-5 rounded-xl bg-[#15130e] border border-[#e8e2d8]/10">
              <div className="flex flex-col gap-1">
                <span className="font-headline font-bold text-lg text-[#e8e2d8]">
                  {lang === 'en' ? PERSONAL_INFO.education.institution.en : PERSONAL_INFO.education.institution.zh}
                </span>
                <span className="text-sm text-[#ffb3b1] font-mono">
                  {lang === 'en' ? PERSONAL_INFO.education.degree.en : PERSONAL_INFO.education.degree.zh}
                </span>

                <div className="flex flex-wrap gap-2 mt-3 text-xs font-mono">
                  <span className="text-[#e4bdbc]/50">{lang === 'en' ? 'Coursework:' : '主修课程:'}</span>
                  {(lang === 'en' ? PERSONAL_INFO.education.courses.en : PERSONAL_INFO.education.courses.zh).map((c, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-[#221f19] text-[#e8e2d8] border border-[#e8e2d8]/5">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <span className="text-xs font-mono text-[#ffb3b1] shrink-0 px-3 py-1 rounded-full bg-[#1e1b15] border border-[#e8e2d8]/10 self-start">
                {PERSONAL_INFO.education.period}
              </span>
            </div>
          </div>

          {/* Skill Sets Matrix */}
          <div className="bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1] uppercase font-semibold">
              <Wrench className="w-4 h-4" />
              <span>{lang === 'en' ? 'Core Capabilities & Toolkit' : '专业核心技能与软件工具'}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Creative skills */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono uppercase text-[#ffb3b1] font-semibold">
                  {lang === 'en' ? 'Directing & Creative' : '专业编导能力'}
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {(lang === 'en' ? PERSONAL_INFO.skills.creative.en : PERSONAL_INFO.skills.creative.zh).map((s, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-[#15130e] text-[#e8e2d8] border border-[#e8e2d8]/10">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical tools */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono uppercase text-[#ffb3b1] font-semibold">
                  {lang === 'en' ? 'Technical Software' : '后期软件与设备'}
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {(lang === 'en' ? PERSONAL_INFO.skills.technical.en : PERSONAL_INFO.skills.technical.zh).map((t, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-[#15130e] text-[#e8e2d8] border border-[#e8e2d8]/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Platform knowledge */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono uppercase text-[#ffb3b1] font-semibold">
                  {lang === 'en' ? 'Social Platform Ecosystems' : '熟稔社交媒体平台'}
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {(lang === 'en' ? PERSONAL_INFO.skills.platforms.en : PERSONAL_INFO.skills.platforms.zh).map((p, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-[#15130e] text-[#e8e2d8] border border-[#e8e2d8]/10">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono uppercase text-[#ffb3b1] font-semibold">
                  {lang === 'en' ? 'Bilingual Languages' : '双语能力'}
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {(lang === 'en' ? PERSONAL_INFO.skills.languages.en : PERSONAL_INFO.skills.languages.zh).map((l, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-[#15130e] text-[#e8e2d8] border border-[#e8e2d8]/10">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right 1 Column: Direct Contact Channels & Quick Email Form */}
        <div className="flex flex-col gap-8">
          {/* Direct Contact Cards */}
          <div className="bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-2xl p-6 flex flex-col gap-5">
            <span className="font-mono text-xs uppercase text-[#ffb3b1] font-semibold">
              {lang === 'en' ? 'Direct Contact Channels' : '直联方式'}
            </span>

            <div className="flex flex-col gap-3">
              {/* Email */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5">
                <div className="w-9 h-9 rounded-full bg-[#2c2a23] flex items-center justify-center text-[#ffb3b1] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-mono text-[#e4bdbc]/60 uppercase">Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs text-[#e8e2d8] hover:text-[#ffb3b1] truncate font-mono"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5">
                <div className="w-9 h-9 rounded-full bg-[#2c2a23] flex items-center justify-center text-[#ffb3b1] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-[#e4bdbc]/60 uppercase">
                    {lang === 'en' ? 'Phone / WeChat' : '手机 / 微信'}
                  </span>
                  <span className="text-xs text-[#e8e2d8] font-mono">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5">
                <div className="w-9 h-9 rounded-full bg-[#2c2a23] flex items-center justify-center text-[#ffb3b1] shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-mono text-[#e4bdbc]/60 uppercase">LinkedIn</span>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#e8e2d8] hover:text-[#ffb3b1] flex items-center gap-1 font-mono"
                  >
                    <span>Yu Yiqian</span>
                    <ExternalLink className="w-3 h-3 text-[#cf2335]" />
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5">
                <div className="w-9 h-9 rounded-full bg-[#2c2a23] flex items-center justify-center text-[#ffb3b1] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-[#e4bdbc]/60 uppercase">Location</span>
                  <span className="text-xs text-[#e8e2d8] font-mono">
                    {lang === 'en' ? PERSONAL_INFO.location.en : PERSONAL_INFO.location.zh}
                  </span>
                </div>
              </div>
            </div>

            {/* Resume Action */}
            <button
              onClick={onOpenResume}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#cf2335] hover:bg-[#891b25] text-[#ffe8e6] font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow-md mt-2"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'en' ? 'Open Interactive CV (PDF)' : '查看并下载完整简历'}</span>
            </button>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-2xl p-6 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase text-[#ffb3b1] font-semibold flex items-center gap-1.5">
              <Send className="w-4 h-4" />
              {lang === 'en' ? 'Send a Direct Message' : '在线发送合作意向'}
            </span>

            {isSubmitted ? (
              <div className="p-4 rounded-xl bg-[#15130e] border border-[#cf2335]/40 text-center flex flex-col items-center gap-2">
                <CheckCircle2 className="w-8 h-8 text-[#cf2335]" />
                <span className="font-headline font-bold text-sm text-[#e8e2d8]">
                  {lang === 'en' ? 'Message Transmitted!' : '信息已记录！'}
                </span>
                <p className="text-xs text-[#e4bdbc]/80">
                  {lang === 'en'
                    ? 'Thank you for reaching out. Frankie will reply via email shortly.'
                    : '感谢您的留言，Frankie 将第一时间查收并回复。'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-xs font-mono">
                <div>
                  <label className="block text-[#e4bdbc]/70 mb-1">
                    {lang === 'en' ? 'Your Name' : '您的称谓'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'en' ? 'e.g. Creative Producer' : '例如：制片人 / 媒体HR'}
                    className="w-full px-3 py-2 rounded-lg bg-[#15130e] border border-[#e8e2d8]/10 text-[#e8e2d8] focus:outline-none focus:border-[#cf2335]"
                  />
                </div>

                <div>
                  <label className="block text-[#e4bdbc]/70 mb-1">
                    {lang === 'en' ? 'Email Address' : '电子邮箱'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 rounded-lg bg-[#15130e] border border-[#e8e2d8]/10 text-[#e8e2d8] focus:outline-none focus:border-[#cf2335]"
                  />
                </div>

                <div>
                  <label className="block text-[#e4bdbc]/70 mb-1">
                    {lang === 'en' ? 'Collaboration Scope' : '意向内容'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'en' ? 'Brief description of internship or project role...' : '简要说明实习岗位、拍摄项目或商业需求...'}
                    className="w-full px-3 py-2 rounded-lg bg-[#15130e] border border-[#e8e2d8]/10 text-[#e8e2d8] focus:outline-none focus:border-[#cf2335] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#2c2a23] hover:bg-[#cf2335] text-[#e8e2d8] hover:text-[#ffe8e6] font-mono text-xs uppercase tracking-wider font-semibold transition-colors mt-1"
                >
                  {lang === 'en' ? 'Send Message' : '发送意向'}
                </button>
              </form>
            )}
          </div>

          {/* Academic Transparency Note */}
          <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/10 flex flex-col gap-1.5 text-xs">
            <span className="font-mono text-[#ffb3b1] uppercase font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#cf2335]" />
              {lang === 'en' ? 'Academic Integrity' : '学术诚信与分工真实性'}
            </span>
            <p className="text-[#e4bdbc]/80 leading-relaxed">
              {lang === 'en'
                ? 'All academic group projects (The Chase, Blind Spot, Esther Yu Audit) are documented with exact individual contribution breakdowns.'
                : '所有课程项目（《追逐》、《盲区》、虞书欣策略审计）均明确区分小组集体成果与个人独立执导分工，杜绝过度包装。'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
