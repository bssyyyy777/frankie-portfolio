import React, { useState } from 'react';
import { Language } from '../types';
import { 
  BarChart3, 
  ShieldAlert, 
  PieChart, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle, 
  Users, 
  ArrowRight,
  Flame,
  MessageSquare,
  Repeat,
  Heart,
  ZoomIn,
  Building2,
  FileText,
  HelpCircle,
  Lightbulb,
  ExternalLink,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';

interface StrategyCommPageProps {
  lang: Language;
  onOpenLightbox?: (url: string, title: string, subtitle?: string) => void;
}

export const StrategyCommPage: React.FC<StrategyCommPageProps> = ({ 
  lang,
  onOpenLightbox 
}) => {
  const [activeStudyTab, setActiveStudyTab] = useState<'esther' | 'haidilao'>('esther');
  const [activeDonutIndex, setActiveDonutIndex] = useState<number | null>(null);

  // Donut data for Esther Yu (PDF Page 8)
  const donutData = [
    { labelEn: 'Selfies', labelZh: '日常自拍随拍', percent: 30, color: '#cf2335' },
    { labelEn: 'Lifestyle', labelZh: '生活日常记录', percent: 25, color: '#891b25' },
    { labelEn: 'Fashion', labelZh: '时尚美学穿搭', percent: 20, color: '#e9bbbf' },
    { labelEn: 'Drama Promo', labelZh: '影视剧宣发', percent: 15, color: '#e8e2d8' },
    { labelEn: 'Brand Collab', labelZh: '商业品牌合作', percent: 10, color: '#ffb3b1' },
  ];

  // Helper for SVG donut slice
  const calculateSlicePath = (index: number) => {
    const totalPercent = 100;
    let accumulated = 0;
    for (let i = 0; i < index; i++) {
      accumulated += donutData[i].percent;
    }
    const startAngle = (accumulated / totalPercent) * 360 - 90;
    const endAngle = ((accumulated + donutData[index].percent) / totalPercent) * 360 - 90;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const outerRadius = 85;
    const innerRadius = 55;
    const center = 100;

    const x1 = center + outerRadius * Math.cos(startRad);
    const y1 = center + outerRadius * Math.sin(startRad);
    const x2 = center + outerRadius * Math.cos(endRad);
    const y2 = center + outerRadius * Math.sin(endRad);

    const x3 = center + innerRadius * Math.cos(endRad);
    const y3 = center + innerRadius * Math.sin(endRad);
    const x4 = center + innerRadius * Math.cos(startRad);
    const y4 = center + innerRadius * Math.sin(startRad);

    const largeArc = donutData[index].percent > 50 ? 1 : 0;

    return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`;
  };

  return (
    <div className="flex flex-col w-full px-4 sm:px-8 lg:px-12 py-10 max-w-7xl mx-auto">
      {/* Page Title & Case Study Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#e8e2d8]/10">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#cf2335] uppercase tracking-widest font-bold">
              COMMUNICATION RESEARCH // 04
            </span>
            <span className="h-px w-8 bg-[#37342e]" />
            <span className="px-2.5 py-0.5 rounded-full bg-[#1e1b15] text-[#ffb3b1] font-mono text-[11px] border border-[#e8e2d8]/10">
              {lang === 'zh' ? '纽卡斯尔大学学术课程研究' : 'UON Academic Research'}
            </span>
          </div>
          <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-[#e8e2d8] tracking-tight mt-1">
            {lang === 'zh' ? '传播策略与公关审计' : 'STRATEGY & COMMUNICATION AUDITS'}
          </h1>
          <p className="text-sm sm:text-base text-[#e4bdbc]/80 mt-2 max-w-3xl leading-relaxed">
            {lang === 'zh'
              ? '将学术课程调研与传播理论转化为交互式网页案例：涵盖明星个人IP跨平台内容策略审计（虞书欣案例）与知名跨国企业突发食品安全危机公关复盘（海底捞案例）。'
              : 'Translating academic coursework and communication frameworks into visual interactive web case studies: celebrity personal IP cross-platform auditing (Esther Yu) and enterprise food safety crisis PR analysis (Haidilao).'}
          </p>
        </div>

        {/* Case Study Switcher Tabs */}
        <div className="flex items-center bg-[#1e1b15] border border-[#e8e2d8]/10 rounded-full p-1.5 shadow-inner self-start md:self-auto">
          <button
            onClick={() => setActiveStudyTab('esther')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all ${
              activeStudyTab === 'esther'
                ? 'bg-[#cf2335] text-[#ffe8e6] shadow-md'
                : 'text-[#e4bdbc]/70 hover:text-[#e8e2d8]'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '虞书欣 · 媒体传播审计' : 'Esther Yu Audit'}</span>
          </button>

          <button
            onClick={() => setActiveStudyTab('haidilao')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all ${
              activeStudyTab === 'haidilao'
                ? 'bg-[#891b25] text-[#ffe8e6] shadow-md'
                : 'text-[#e4bdbc]/70 hover:text-[#e8e2d8]'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '海底捞 · 危机公关复盘' : 'Haidilao Crisis PR'}</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CASE STUDY 01: ESTHER YU (虞书欣)                                         */}
      {/* ========================================================================= */}
      {activeStudyTab === 'esther' && (
        <div className="flex flex-col gap-14 pt-10">
          {/* A. PROJECT HERO */}
          <section className="relative rounded-3xl bg-gradient-to-br from-[#1e1b15] via-[#221f19] to-[#15130e] border border-[#e8e2d8]/10 p-6 sm:p-10 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#cf2335]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#891b25] text-[#ffe8e6] font-mono text-xs uppercase font-bold tracking-wider">
                    {lang === 'zh' ? '学术小组研究课题 · CMNS2000' : 'Academic Research · CMNS2000'}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#100e09]/80 text-[#ffb3b1] border border-[#ffb3b1]/20 font-mono text-xs">
                    {lang === 'zh' ? '明星IP传播策略' : 'Celebrity Media Audit'}
                  </span>
                </div>

                <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-[#e8e2d8] tracking-tight leading-tight">
                  {lang === 'zh' ? '虞书欣 — 数字媒体传播策略审计' : 'Esther Yu — Digital Media Strategy Audit'}
                </h2>

                <p className="text-sm sm:text-base text-[#e4bdbc]/90 leading-relaxed max-w-2xl">
                  {lang === 'zh'
                    ? '本案例依托纽卡斯尔大学CMNS2000学术协作小组研究，系统解析中国新生代顶流艺人虞书欣在多社交平台（微博、小红书、抖音、Instagram）的差异化内容矩阵运营、准社交互动模式、内容互动转化率及SWOT竞争态势。'
                    : 'A comprehensive academic media audit examining top Gen-Z actress Esther Yu across multi-platform architectures (Weibo, Xiaohongshu, Douyin, Instagram), parasocial engagement models, content engagement conversion, and competitive SWOT positioning.'}
                </p>

                {/* Academic Group Project Disclaimer */}
                <div className="p-3.5 rounded-xl bg-[#100e09]/90 border border-[#ffb3b1]/20 flex items-start gap-2.5 text-xs text-[#e4bdbc]/80">
                  <Info className="w-4 h-4 text-[#cf2335] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#e8e2d8] block">
                      {lang === 'zh' ? '学术研究声明（非商业合作）：' : 'Academic Research Disclosure:'}
                    </strong>
                    <span>
                      {lang === 'zh'
                        ? '本项目为纽卡斯尔大学CMNS2000课程6人学术小组课题汇报成果（主研与汇报成员：俞伊倩、瞿子星、凌子馨、曹惠涵、王璐佳、陈柯诺）。内容基于公开社交数据分析，非虞书欣官方商业团队职务作品。'
                        : 'Completed as part of a 6-member academic group presentation for CMNS2000 (Yu Yiqian, Qu Zixing, Ling Zixin, Cao Huihan, Wang Lujia, Chen Kenuo). Based on public empirical media analysis; not a commercial partnership.'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Esther Yu Hero Portrait */}
              <div className="w-full lg:w-72 shrink-0 flex justify-center">
                <div 
                  onClick={() => onOpenLightbox && onOpenLightbox('/assets/strategy/esther/esther_hero_portrait.png', 'Esther Yu — Media Strategy Audit', 'Case Study Subject Portrait')}
                  className="relative group w-64 aspect-[3/4] rounded-2xl overflow-hidden bg-black border border-[#e8e2d8]/20 shadow-2xl cursor-pointer"
                >
                  <img
                    src="/assets/strategy/esther/esther_hero_portrait.png"
                    alt="Esther Yu Portrait"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="font-mono text-[11px] text-[#ffb3b1] block">Esther Yu (虞书欣)</span>
                    <span className="text-[10px] text-[#e4bdbc]/70">
                      {lang === 'zh' ? '研究对象：新生代全栖艺人' : 'Research Subject: Gen-Z Actress'}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-[#ffe8e6] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* B. CROSS-PLATFORM COMPARISON (PDF Pages 6–7) */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#cf2335] uppercase font-bold tracking-widest">
                  SECTION B // MULTI-PLATFORM MATRIX
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#e8e2d8]">
                {lang === 'zh' ? '跨平台受众分流与运营定位对比' : 'Cross-Platform Matrix & Follower Comparison'}
              </h3>
              <p className="text-xs sm:text-sm text-[#e4bdbc]/80">
                {lang === 'zh'
                  ? '各平台承担不同的传播目的与内容形态，构建起“泛受众引流 + 垂直美学沉淀 + 核心粉丝固牢”的生态闭环。'
                  : 'Distinct functional positioning across four major platforms creating a complementary ecosystem from broad discovery to core fan loyalty.'}
              </p>
            </div>

            {/* Horizontal Follower Bar Chart */}
            <div className="rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 p-6 sm:p-8 flex flex-col gap-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-mono text-xs uppercase text-[#ffb3b1] font-semibold flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#cf2335]" />
                  {lang === 'zh' ? '平台粉丝量规模对比（单位：万人 / k）' : 'Follower Volume Comparison by Platform (k Followers)'}
                </span>
                <span className="text-[11px] font-mono text-[#e4bdbc]/60">
                  {lang === 'zh' ? 'CMNS2000 课题统计周期公开数据' : 'CMNS2000 Audit Reference Sample'}
                </span>
              </div>

              {/* Bar rows */}
              <div className="flex flex-col gap-4 font-mono text-xs">
                {/* Weibo */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#e8e2d8] font-semibold flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#cf2335]" />
                      Weibo (微博)
                    </span>
                    <span className="text-[#ffb3b1] font-bold">28,495k (~28.5M)</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#15130e] overflow-hidden border border-[#e8e2d8]/5">
                    <div className="h-full bg-gradient-to-r from-[#891b25] to-[#cf2335] rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>

                {/* Douyin */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#e8e2d8] font-semibold flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e4bdbc]" />
                      Douyin (抖音)
                    </span>
                    <span className="text-[#ffb3b1] font-bold">20,322k (~20.3M)</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#15130e] overflow-hidden border border-[#e8e2d8]/5">
                    <div className="h-full bg-gradient-to-r from-[#5f3e42] to-[#e4bdbc] rounded-full" style={{ width: '71.3%' }} />
                  </div>
                </div>

                {/* Xiaohongshu */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#e8e2d8] font-semibold flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab]" />
                      Xiaohongshu (小红书)
                    </span>
                    <span className="text-[#ffb3b1] font-bold">10,315k (~10.3M)</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#15130e] overflow-hidden border border-[#e8e2d8]/5">
                    <div className="h-full bg-gradient-to-r from-[#93000a] to-[#ffb4ab] rounded-full" style={{ width: '36.2%' }} />
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#e8e2d8] font-semibold flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e9bbbf]" />
                      Instagram (海外)
                    </span>
                    <span className="text-[#ffb3b1] font-bold">5,370k (~5.37M)</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#15130e] overflow-hidden border border-[#e8e2d8]/5">
                    <div className="h-full bg-gradient-to-r from-[#46282c] to-[#e9bbbf] rounded-full" style={{ width: '18.8%' }} />
                  </div>
                </div>
              </div>

              {/* Data footnote per prompt requirements */}
              <div className="p-3 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex items-center gap-2 text-[11px] text-[#e4bdbc]/70">
                <Info className="w-3.5 h-3.5 text-[#ffb3b1] shrink-0" />
                <span>
                  {lang === 'zh'
                    ? '数据来源说明：上述粉丝量指标源自课程调研期间从公开平台采样记录（PDF Page 6），仅用于学术对比与结构分析，非当前实时动态数据。'
                    : 'Source Note: Follower counts documented during the academic research phase (PDF Page 6), used strictly for comparative analysis rather than real-time live reporting.'}
                </span>
              </div>
            </div>

            {/* 4 Platform Comparison Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1: Weibo */}
              <div className="p-5 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-3 hover:border-[#cf2335]/50 transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-headline font-bold text-lg text-[#e8e2d8]">Weibo</span>
                  <span className="px-2 py-0.5 rounded bg-[#cf2335]/20 text-[#ffb3b1] font-mono text-[10px]">
                    28,495k
                  </span>
                </div>
                <div className="text-xs text-[#cf2335] font-mono font-semibold uppercase">
                  {lang === 'zh' ? '官方宣发 · 粉丝阵地' : 'News & Fan Engagement'}
                </div>
                <p className="text-xs text-[#e4bdbc]/80 leading-relaxed">
                  {lang === 'zh'
                    ? '作为权威信息首发阵地与剧集宣发主场，注重热搜议题互动、超话互动与粉丝情感长文沟通。'
                    : 'Main hub for official releases, drama marketing campaigns, trending topic participation, and long emotional letters.'}
                </p>
                <div className="pt-2 mt-auto border-t border-[#e8e2d8]/5 font-mono text-[11px] text-[#e8e2d8]/70">
                  {lang === 'zh' ? '高频更新 · 剧集排播联动' : 'Frequent updates · Fandom'}
                </div>
              </div>

              {/* Card 2: Douyin */}
              <div className="p-5 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-3 hover:border-[#cf2335]/50 transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-headline font-bold text-lg text-[#e8e2d8]">Douyin (抖音)</span>
                  <span className="px-2 py-0.5 rounded bg-[#cf2335]/20 text-[#ffb3b1] font-mono text-[10px]">
                    20,322k
                  </span>
                </div>
                <div className="text-xs text-[#cf2335] font-mono font-semibold uppercase">
                  {lang === 'zh' ? '趣味短视频 · 大众破圈' : 'Entertainment & Memes'}
                </div>
                <p className="text-xs text-[#e4bdbc]/80 leading-relaxed">
                  {lang === 'zh'
                    ? '专注卡点翻跳、热梗模仿与搞笑反差花絮，凭借强综艺感与轻松幽默氛围穿透非粉受众群体。'
                    : 'Short humorous videos, viral music syncs, dance challenges, and funny behind-the-scenes clips driving mass virality.'}
                </p>
                <div className="pt-2 mt-auto border-t border-[#e8e2d8]/5 font-mono text-[11px] text-[#e8e2d8]/70">
                  {lang === 'zh' ? '低观影门槛 · 强二次裂变' : 'Low threshold · High viral share'}
                </div>
              </div>

              {/* Card 3: Xiaohongshu */}
              <div className="p-5 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-3 hover:border-[#cf2335]/50 transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-headline font-bold text-lg text-[#e8e2d8]">Xiaohongshu (小红书)</span>
                  <span className="px-2 py-0.5 rounded bg-[#cf2335]/20 text-[#ffb3b1] font-mono text-[10px]">
                    10,315k
                  </span>
                </div>
                <div className="text-xs text-[#cf2335] font-mono font-semibold uppercase">
                  {lang === 'zh' ? '美学随拍 · 种草互动' : 'Lifestyle & Aesthetics'}
                </div>
                <p className="text-xs text-[#e4bdbc]/80 leading-relaxed">
                  {lang === 'zh'
                    ? '以“闺蜜感”高颜值自拍、私人日常、潮流穿搭与美妆测评为主，营造陪伴型亲密社交氛围。'
                    : 'Aesthetic photo carousels, everyday casual vlogs, fashion OOTDs, and beauty shares fostering friend-like intimacy.'}
                </p>
                <div className="pt-2 mt-auto border-t border-[#e8e2d8]/5 font-mono text-[11px] text-[#e8e2d8]/70">
                  {lang === 'zh' ? '高黏性女性受众 · 审美信任' : 'High Gen-Z female loyalty'}
                </div>
              </div>

              {/* Card 4: Instagram */}
              <div className="p-5 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-3 hover:border-[#cf2335]/50 transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-headline font-bold text-lg text-[#e8e2d8]">Instagram</span>
                  <span className="px-2 py-0.5 rounded bg-[#cf2335]/20 text-[#ffb3b1] font-mono text-[10px]">
                    5,370k
                  </span>
                </div>
                <div className="text-xs text-[#cf2335] font-mono font-semibold uppercase">
                  {lang === 'zh' ? '海外视窗 · 国际品牌' : 'Global Audience & Fashion'}
                </div>
                <p className="text-xs text-[#e4bdbc]/80 leading-relaxed">
                  {lang === 'zh'
                    ? '配合海外旅行大片、高级时装周造型及英文简短文案，面向全球年轻影视粉丝输出国际化时尚IP。'
                    : 'High-fashion editorials, international travel snapshots, and English captions targeting global drama fans.'}
                </p>
                <div className="pt-2 mt-auto border-t border-[#e8e2d8]/5 font-mono text-[11px] text-[#e8e2d8]/70">
                  {lang === 'zh' ? '出海窗口 · 国际声量积累' : 'Global window · Fashion IP'}
                </div>
              </div>
            </div>
          </section>

          {/* C. CONTENT TYPE DISTRIBUTION (PDF Page 8) */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#cf2335] uppercase font-bold tracking-widest">
                  SECTION C // CONTENT PROPORTIONS
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#e8e2d8]">
                {lang === 'zh' ? '发布内容类型占比分布（交互式环形图）' : 'Content Type Distribution (Interactive Donut Chart)'}
              </h3>
              <p className="text-xs sm:text-sm text-[#e4bdbc]/80">
                {lang === 'zh'
                  ? '源自PDF第8页内容分类定量分析：自拍与日常记录占55%以上，商业广告仅占10%。'
                  : 'Documented content distribution from PDF Page 8: authentic everyday content makes up 55%, with brand ads restricted to 10%.'}
              </p>
            </div>

            <div className="rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Interactive SVG Donut */}
              <div className="md:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                  <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                    {donutData.map((slice, index) => {
                      const isHovered = activeDonutIndex === index;
                      return (
                        <path
                          key={index}
                          d={calculateSlicePath(index)}
                          fill={slice.color}
                          opacity={activeDonutIndex === null || isHovered ? 1 : 0.4}
                          className="transition-all duration-300 cursor-pointer hover:scale-105 transform origin-center"
                          onMouseEnter={() => setActiveDonutIndex(index)}
                          onMouseLeave={() => setActiveDonutIndex(null)}
                        />
                      );
                    })}
                  </svg>

                  {/* Center Content readout */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
                    {activeDonutIndex !== null ? (
                      <>
                        <span className="font-headline text-2xl sm:text-3xl font-extrabold text-[#e8e2d8]">
                          {donutData[activeDonutIndex].percent}%
                        </span>
                        <span className="font-mono text-xs text-[#ffb3b1] mt-0.5">
                          {lang === 'zh' ? donutData[activeDonutIndex].labelZh : donutData[activeDonutIndex].labelEn}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="font-headline text-2xl sm:text-3xl font-extrabold text-[#cf2335]">
                          55%
                        </span>
                        <span className="font-mono text-xs text-[#e8e2d8] font-semibold mt-0.5">
                          {lang === 'zh' ? '真实原创生活' : 'Everyday Life'}
                        </span>
                        <span className="text-[10px] text-[#e4bdbc]/60">
                          {lang === 'zh' ? '自拍 + 日常' : 'Selfies + Lifestyle'}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Donut Legend & Proportional Takeaway */}
              <div className="md:col-span-7 flex flex-col gap-5">
                <div className="flex flex-col gap-2.5">
                  {donutData.map((slice, index) => {
                    const isHovered = activeDonutIndex === index;
                    return (
                      <div
                        key={index}
                        onMouseEnter={() => setActiveDonutIndex(index)}
                        onMouseLeave={() => setActiveDonutIndex(null)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          isHovered 
                            ? 'bg-[#15130e] border-[#cf2335] shadow-md' 
                            : 'bg-[#15130e]/60 border-[#e8e2d8]/5 hover:border-[#e8e2d8]/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span 
                            className="w-3.5 h-3.5 rounded-md shrink-0" 
                            style={{ backgroundColor: slice.color }} 
                          />
                          <span className="text-xs sm:text-sm font-semibold text-[#e8e2d8]">
                            {lang === 'zh' ? slice.labelZh : slice.labelEn}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 font-mono">
                          <span className="text-xs text-[#e4bdbc]/70">
                            {slice.percent >= 25 ? (lang === 'zh' ? '高频核心' : 'Dominant') : (slice.percent === 10 ? (lang === 'zh' ? '严格克制' : 'Restricted') : (lang === 'zh' ? '中等配比' : 'Moderate'))}
                          </span>
                          <span className="text-sm font-bold text-[#ffb3b1] w-10 text-right">
                            {slice.percent}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Analytical Takeaway Box */}
                <div className="p-4 rounded-xl bg-[#15130e] border border-[#cf2335]/30 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1] font-bold uppercase">
                    <Sparkles className="w-4 h-4 text-[#cf2335]" />
                    <span>{lang === 'zh' ? '内容结构策略启示' : 'Content Architecture Takeaway'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#e4bdbc]/90 leading-relaxed">
                    {lang === 'zh'
                      ? '自拍与生活随拍（合计55%）构成高黏性基石，极大强化了“低距离感明星闺蜜”的亲密感人设；商业合作（Brand Collaboration）严格控制在10%极低比例，有效避免过度商业化变现对粉丝信任资产的过早透支。'
                      : 'Authentic everyday content (Selfies + Lifestyle = 55%) forms the emotional bedrock of user retention, sustaining the accessible friend persona. Hard commercial endorsements are intentionally capped at 10% to protect audience goodwill and trust.'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* D. CONTENT PERFORMANCE COMPARISON (PDF Pages 11–13) */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#cf2335] uppercase font-bold tracking-widest">
                  SECTION D // ENGAGEMENT PERFORMANCE
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#e8e2d8]">
                {lang === 'zh' ? '不同内容类型的互动表现对比' : 'Content Performance Comparison & Data Verification'}
              </h3>
              <p className="text-xs sm:text-sm text-[#e4bdbc]/80">
                {lang === 'zh'
                  ? '源自PDF第11–13页定量与定性分析：比对原创日常、剧组花絮、走心长文、硬广与重复宣发物料的互动差异。'
                  : 'Quantitative & qualitative audit comparing native vlogs, BTS footage, emotional long-form posts, hard brand ads, and repetitive promos.'}
              </p>
            </div>

            {/* Performance Bar Chart & Verified Table */}
            <div className="rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 p-6 sm:p-8 flex flex-col gap-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-mono text-xs uppercase text-[#ffb3b1] font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#cf2335]" />
                  {lang === 'zh' ? '综合互动总量对比（点赞 + 评论 + 转发）' : 'Total Engagement Volume (Likes + Comments + Reposts)'}
                </span>
                <span className="text-[11px] font-mono text-[#e4bdbc]/60">
                  {lang === 'zh' ? '5.5倍互动极差' : '5.5x Engagement Gap'}
                </span>
              </div>

              {/* Horizontal Bars */}
              <div className="flex flex-col gap-4 font-mono text-xs">
                {/* Native Daily Content */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[#e8e2d8] font-semibold">
                      {lang === 'zh' ? '1. 原创日常随拍 / Vlog (Native Daily)' : '1. Native Daily Content (Vlog)'}
                    </span>
                    <span className="text-emerald-400 font-bold">165,000 Total (5.5x of Ads)</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#15130e] overflow-hidden border border-[#e8e2d8]/5">
                    <div className="h-full bg-gradient-to-r from-emerald-700 to-emerald-400 rounded-full" style={{ width: '100%' }} />
                  </div>
                  <span className="text-[11px] text-[#e4bdbc]/60">
                    {lang === 'zh' ? '点赞 125,000 · 评论 18,000 · 转发 22,000' : 'Likes 125k · Comments 18k · Reposts 22k'}
                  </span>
                </div>

                {/* Film BTS */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[#e8e2d8] font-semibold">
                      {lang === 'zh' ? '2. 影视剧组台前幕后 (Film & TV BTS)' : '2. Film & TV Behind-the-scenes'}
                    </span>
                    <span className="text-[#ffb3b1] font-bold">125,000 Total</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#15130e] overflow-hidden border border-[#e8e2d8]/5">
                    <div className="h-full bg-gradient-to-r from-[#891b25] to-[#cf2335] rounded-full" style={{ width: '75.7%' }} />
                  </div>
                  <span className="text-[11px] text-[#e4bdbc]/60">
                    {lang === 'zh' ? '点赞 98,000 · 评论 12,000 · 转发 15,000' : 'Likes 98k · Comments 12k · Reposts 15k'}
                  </span>
                </div>

                {/* Emotional Posts */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[#e8e2d8] font-semibold">
                      {lang === 'zh' ? '3. 情感共鸣走心长文 (Emotional & Thoughtful)' : '3. Emotional & Thoughtful Posts'}
                    </span>
                    <span className="text-[#ffb3b1] font-bold">125,000 Total (Max Comments)</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#15130e] overflow-hidden border border-[#e8e2d8]/5">
                    <div className="h-full bg-gradient-to-r from-[#5f3e42] to-[#ffb3b1] rounded-full" style={{ width: '75.7%' }} />
                  </div>
                  <span className="text-[11px] text-[#e4bdbc]/60">
                    {lang === 'zh' ? '点赞 86,000 · 评论 28,000 (极高比例) · 转发 11,000' : 'Likes 86k · Comments 28k (Highest) · Reposts 11k'}
                  </span>
                </div>

                {/* Repetitive Promo */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[#e8e2d8] font-semibold">
                      {lang === 'zh' ? '4. 重复宣发物料 (Repetitive Promotional)' : '4. Repetitive Promotional Content'}
                    </span>
                    <span className="text-[#e4bdbc]/70 font-bold">38,000 Total</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#15130e] overflow-hidden border border-[#e8e2d8]/5">
                    <div className="h-full bg-[#37342e] rounded-full" style={{ width: '23.0%' }} />
                  </div>
                  <span className="text-[11px] text-[#e4bdbc]/60">
                    {lang === 'zh' ? '点赞 28,000 · 评论 4,500 · 转发 5,500' : 'Likes 28k · Comments 4.5k · Reposts 5.5k'}
                  </span>
                </div>

                {/* Hard Ads */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[#e8e2d8] font-semibold">
                      {lang === 'zh' ? '5. 纯硬广品牌合作 (Hard Brand Advertisement)' : '5. Hard Brand Advertisement'}
                    </span>
                    <span className="text-[#cf2335] font-bold">30,000 Total (Lowest)</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-[#15130e] overflow-hidden border border-[#e8e2d8]/5">
                    <div className="h-full bg-[#891b25] rounded-full" style={{ width: '18.1%' }} />
                  </div>
                  <span className="text-[11px] text-[#e4bdbc]/60">
                    {lang === 'zh' ? '点赞 22,000 · 评论 3,200 · 转发 4,800' : 'Likes 22k · Comments 3.2k · Reposts 4.8k'}
                  </span>
                </div>
              </div>

              {/* Data Inconsistency Reconciliation Note */}
              <div className="p-3.5 rounded-xl bg-[#15130e] border border-[#ffb3b1]/20 flex items-start gap-2.5 text-xs text-[#e4bdbc]/80 font-mono">
                <AlertTriangle className="w-4 h-4 text-[#cf2335] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#e8e2d8] block">
                    {lang === 'zh' ? '原始PPT数据核验与勘误说明（PDF Page 13）：' : 'Source Data Reconciliation Note (PDF Page 13):'}
                  </strong>
                  <span>
                    {lang === 'zh'
                      ? '原PPT表格中硬广与宣发行评论/转发项标注为“3,2000”与“4,8000”（系输入排版笔误），经总互动量倒算检验（22,000 + 3,200 + 4,800 = 30,000；28,000 + 4,500 + 5,500 = 38,000），确认为3,200与4,800。本网站秉持严谨学术原则，展示修正核验后的精准统计量。'
                      : 'The original PPT slide contained typos in table cell formatting ("3,2000" and "4,8000"). Arithmetic reconciliation with Total Engagement (22k + 3.2k + 4.8k = 30,000; 28k + 4.5k + 5.5k = 38,000) confirms actual counts of 3,200 and 4,800, here properly displayed.'}
                  </span>
                </div>
              </div>

              {/* 3 Core Analytical Takeaways */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/10 flex flex-col gap-1.5">
                  <span className="font-mono text-xs text-[#ffb3b1] uppercase font-bold">
                    {lang === 'zh' ? '核心发现 1 // 5.5倍日常转化' : 'Core Finding 1 // 5.5x Engagement'}
                  </span>
                  <p className="text-xs text-[#e4bdbc]/85 leading-relaxed">
                    {lang === 'zh'
                      ? '原生日常日常随拍（Vlog）互动总量达16.5万，是纯硬广品牌贴（3万）的5.5倍，用户对生活化原生态内容展现极高互动偏好。'
                      : 'Native everyday vlogs produce 165k total interactions—5.5 times higher than hard brand advertisements (30k).'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/10 flex flex-col gap-1.5">
                  <span className="font-mono text-xs text-[#ffb3b1] uppercase font-bold">
                    {lang === 'zh' ? '核心发现 2 // 3倍评论深度共鸣' : 'Core Finding 2 // 3x Comments'}
                  </span>
                  <p className="text-xs text-[#e4bdbc]/85 leading-relaxed">
                    {lang === 'zh'
                      ? '走心长文的评论量高达28,000条，是商业宣发类贴文（3,200~4,500条）的近3倍，证明高情绪价值能深度激发粉丝的同理心与互动表达欲。'
                      : 'Emotional long-form text posts generate 28k comments—nearly 3x commercial posts, proving emotional vulnerability unlocks deep fan empathy.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/10 flex flex-col gap-1.5">
                  <span className="font-mono text-xs text-[#ffb3b1] uppercase font-bold">
                    {lang === 'zh' ? '核心发现 3 // 重复宣发审美疲劳' : 'Core Finding 3 // Scroll Fatigue'}
                  </span>
                  <p className="text-xs text-[#e4bdbc]/85 leading-relaxed">
                    {lang === 'zh'
                      ? '高度同质化的机械宣发与单向叫卖类广告会引发显著的滑过率与审美疲劳，平均互动跌幅超77%。'
                      : 'Repetitive promotional posts and hard selling trigger severe scroll fatigue, dropping average audience engagement by over 77%.'}
                  </p>
                </div>
              </div>

              {/* Real Post Visual Proof Gallery */}
              <div className="flex flex-col gap-3 pt-3 border-t border-[#e8e2d8]/10">
                <span className="text-xs font-mono uppercase text-[#ffb3b1] font-semibold">
                  {lang === 'zh' ? '案例代表性样本佐证截图（点击放大查看）' : 'Sample Post Case Artifacts (Click to Enlarge)'}
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div
                    onClick={() => onOpenLightbox && onOpenLightbox('/assets/strategy/esther/post_high_likes.png', 'Highest Likes Post', 'Variety Comedy Snippet')}
                    className="group relative rounded-xl overflow-hidden bg-black aspect-[4/3] border border-[#e8e2d8]/10 cursor-pointer"
                  >
                    <img src="/assets/strategy/esther/post_high_likes.png" alt="High Likes Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[10px] font-mono text-[#e8e2d8] line-clamp-1">
                        {lang === 'zh' ? '最高点赞：综艺搞笑卡段' : 'Max Likes: Variety Clip'}
                      </span>
                    </div>
                  </div>

                  <div
                    onClick={() => onOpenLightbox && onOpenLightbox('/assets/strategy/esther/post_high_comments.png', 'Highest Comments Post', 'Emotional Long-form Text')}
                    className="group relative rounded-xl overflow-hidden bg-black aspect-[4/3] border border-[#e8e2d8]/10 cursor-pointer"
                  >
                    <img src="/assets/strategy/esther/post_high_comments.png" alt="High Comments Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[10px] font-mono text-[#e8e2d8] line-clamp-1">
                        {lang === 'zh' ? '最高评论：走心长文共鸣' : 'Max Comments: Sincere Letter'}
                      </span>
                    </div>
                  </div>

                  <div
                    onClick={() => onOpenLightbox && onOpenLightbox('/assets/strategy/esther/post_ad_hard_selling.png', 'Low Performing Post', 'Hard Brand Advertisement')}
                    className="group relative rounded-xl overflow-hidden bg-black aspect-[4/3] border border-[#e8e2d8]/10 cursor-pointer"
                  >
                    <img src="/assets/strategy/esther/post_ad_hard_selling.png" alt="Hard Ad Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[10px] font-mono text-[#cf2335] line-clamp-1">
                        {lang === 'zh' ? '数据下滑：硬广叫卖式宣传' : 'Low Engagement: Hard Selling Ad'}
                      </span>
                    </div>
                  </div>

                  <div
                    onClick={() => onOpenLightbox && onOpenLightbox('/assets/strategy/esther/douyin_account_analytics.png', 'Douyin Account Analytics', 'Cicada Mama Data')}
                    className="group relative rounded-xl overflow-hidden bg-black aspect-[4/3] border border-[#e8e2d8]/10 cursor-pointer"
                  >
                    <img src="/assets/strategy/esther/douyin_account_analytics.png" alt="Douyin Account Analytics" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[10px] font-mono text-[#ffb3b1] line-clamp-1">
                        {lang === 'zh' ? '蝉妈妈平台账号后台大盘' : 'Douyin Account Analytics'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* E. COMPETITOR & SWOT ANALYSIS (PDF Pages 15–22) */}
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#cf2335] uppercase font-bold tracking-widest">
                  SECTION E // COMPETITOR & SWOT BENCHMARKING
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#e8e2d8]">
                {lang === 'zh' ? '新生代小花竞品横向比对与 2×2 SWOT 分析' : 'Competitor Comparison & 2×2 SWOT Grid'}
              </h3>
              <p className="text-xs sm:text-sm text-[#e4bdbc]/80">
                {lang === 'zh'
                  ? '源自PDF第15–21页：横向比对虞书欣、白鹿、赵露思、杨超越的个人品牌风格、核心定位与差异化优劣势。'
                  : 'Empirical competitive audit comparing Esther Yu, Bai Lu, Zhao Lusi, and Yang Chaoyue across content style, persona, and audience dynamics.'}
              </p>
            </div>

            {/* 1. Competitor Grid (4 Actresses) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Esther Yu */}
              <div className="p-5 rounded-2xl bg-[#1e1b15] border border-[#cf2335]/40 flex flex-col gap-3 shadow-lg relative">
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#cf2335] text-[#ffe8e6] font-mono text-[10px] font-bold">
                  {lang === 'zh' ? '审计主体' : 'Audit Subject'}
                </span>
                <div 
                  onClick={() => onOpenLightbox && onOpenLightbox('/assets/strategy/esther/comp_esther_yu.png', 'Esther Yu', 'Audit Subject Profile')}
                  className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-black border border-[#e8e2d8]/10 cursor-pointer"
                >
                  <img src="/assets/strategy/esther/comp_esther_yu.png" alt="Esther Yu" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-headline font-bold text-lg text-[#e8e2d8]">Esther Yu (虞书欣)</h4>
                  <span className="text-xs font-mono text-[#ffb3b1]">
                    {lang === 'zh' ? '核心定位：朋友系明星 (Friend Vibe)' : 'Positioning: "Celebrity Like a Friend"'}
                  </span>
                </div>
                <div className="text-xs text-[#e4bdbc]/80 flex flex-col gap-1.5 pt-1 border-t border-[#e8e2d8]/5">
                  <p><strong>{lang === 'zh' ? '品牌人设：' : 'Persona: '}</strong>{lang === 'zh' ? '鬼马活泼、真实真诚、元气少女' : 'Cute, lively, genuine'}</p>
                  <p><strong>{lang === 'zh' ? '内容风格：' : 'Content: '}</strong>{lang === 'zh' ? '自拍日常、Vlog碎片、搞笑花絮' : 'Selfies, vlogs, work BTS'}</p>
                  <p><strong>{lang === 'zh' ? '核心优势：' : 'Advantage: '}</strong>{lang === 'zh' ? '双向情感共鸣最深，无距离感' : 'Deepest emotional bonding'}</p>
                </div>
              </div>

              {/* Bai Lu */}
              <div className="p-5 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-3 hover:border-[#e8e2d8]/30 transition-all">
                <div 
                  onClick={() => onOpenLightbox && onOpenLightbox('/assets/strategy/esther/comp_bai_lu.png', 'Bai Lu', 'Competitor Profile')}
                  className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-black border border-[#e8e2d8]/10 cursor-pointer"
                >
                  <img src="/assets/strategy/esther/comp_bai_lu.png" alt="Bai Lu" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-headline font-bold text-lg text-[#e8e2d8]">Bai Lu (白鹿)</h4>
                  <span className="text-xs font-mono text-[#e4bdbc]">
                    {lang === 'zh' ? '核心定位：搞笑女演员 (Humor Sense)' : 'Positioning: Actress With Humor'}
                  </span>
                </div>
                <div className="text-xs text-[#e4bdbc]/80 flex flex-col gap-1.5 pt-1 border-t border-[#e8e2d8]/5">
                  <p><strong>{lang === 'zh' ? '品牌人设：' : 'Persona: '}</strong>{lang === 'zh' ? '幽默自嘲、豪爽接地气、真实' : 'Humorous, funny, candid'}</p>
                  <p><strong>{lang === 'zh' ? '内容风格：' : 'Content: '}</strong>{lang === 'zh' ? '搞笑自制视频、剧组魔性日常' : 'Funny videos, behind scenes'}</p>
                  <p><strong>{lang === 'zh' ? '可借鉴点：' : 'Learning: '}</strong>{lang === 'zh' ? '强化喜剧势能与自嘲幽默感' : 'Learn stronger sense of humor'}</p>
                </div>
              </div>

              {/* Zhao Lusi */}
              <div className="p-5 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-3 hover:border-[#e8e2d8]/30 transition-all">
                <div 
                  onClick={() => onOpenLightbox && onOpenLightbox('/assets/strategy/esther/comp_zhao_lusi.png', 'Zhao Lusi', 'Competitor Profile')}
                  className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-black border border-[#e8e2d8]/10 cursor-pointer"
                >
                  <img src="/assets/strategy/esther/comp_zhao_lusi.png" alt="Zhao Lusi" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-headline font-bold text-lg text-[#e8e2d8]">Zhao Lusi (赵露思)</h4>
                  <span className="text-xs font-mono text-[#cf2335]">
                    {lang === 'zh' ? '最大竞品 · 粉丝大盘领先' : 'Primary Competitor: Scale Leader'}
                  </span>
                </div>
                <div className="text-xs text-[#e4bdbc]/80 flex flex-col gap-1.5 pt-1 border-t border-[#e8e2d8]/5">
                  <p><strong>{lang === 'zh' ? '品牌人设：' : 'Persona: '}</strong>{lang === 'zh' ? '邻家女孩、亲和温柔、甜美' : 'Girl-next-door, approachable'}</p>
                  <p><strong>{lang === 'zh' ? '内容风格：' : 'Content: '}</strong>{lang === 'zh' ? '高频生活记录、高转化商业合作' : 'Daily life, brand collaborations'}</p>
                  <p><strong>{lang === 'zh' ? '可借鉴点：' : 'Learning: '}</strong>{lang === 'zh' ? '建立更稳定的更新排期节奏' : 'Consistent content cadence'}</p>
                </div>
              </div>

              {/* Yang Chaoyue */}
              <div className="p-5 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-3 hover:border-[#e8e2d8]/30 transition-all">
                <div 
                  onClick={() => onOpenLightbox && onOpenLightbox('/assets/strategy/esther/comp_yang_chaoyue.png', 'Yang Chaoyue', 'Competitor Profile')}
                  className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-black border border-[#e8e2d8]/10 cursor-pointer"
                >
                  <img src="/assets/strategy/esther/comp_yang_chaoyue.png" alt="Yang Chaoyue" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-headline font-bold text-lg text-[#e8e2d8]">Yang Chaoyue (杨超越)</h4>
                  <span className="text-xs font-mono text-[#e4bdbc]">
                    {lang === 'zh' ? '核心定位：传统偶像型艺人' : 'Positioning: Traditional Idol Artist'}
                  </span>
                </div>
                <div className="text-xs text-[#e4bdbc]/80 flex flex-col gap-1.5 pt-1 border-t border-[#e8e2d8]/5">
                  <p><strong>{lang === 'zh' ? '品牌人设：' : 'Persona: '}</strong>{lang === 'zh' ? '爱豆光环、粉丝导向、锦鲤标签' : 'Idol-like, fan-oriented'}</p>
                  <p><strong>{lang === 'zh' ? '内容风格：' : 'Content: '}</strong>{lang === 'zh' ? '活动宣发物料、官方舞台精修' : 'Event promotion, idol content'}</p>
                  <p><strong>{lang === 'zh' ? '可借鉴点：' : 'Learning: '}</strong>{lang === 'zh' ? '学习系统化粉丝社群运营法' : 'Systematic fan club management'}</p>
                </div>
              </div>
            </div>

            {/* 2. Clean 2×2 SWOT Grid (PDF Page 21) */}
            <div className="rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 p-6 sm:p-8 flex flex-col gap-6">
              <span className="font-mono text-xs uppercase text-[#ffb3b1] font-semibold flex items-center gap-2">
                <PieChart className="w-4 h-4 text-[#cf2335]" />
                {lang === 'zh' ? '虞书欣个人IP 2×2 SWOT 态势矩阵分析（PDF Page 21）' : 'Esther Yu Personal IP 2×2 SWOT Matrix Analysis'}
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Strengths */}
                <div className="p-5 rounded-xl bg-[#15130e] border border-emerald-500/30 flex flex-col gap-3">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{lang === 'zh' ? 'STRENGTHS // 核心优势' : 'STRENGTHS'}</span>
                  </div>
                  <ul className="text-xs sm:text-sm text-[#e4bdbc]/90 flex flex-col gap-2">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{lang === 'zh' ? '极高粉丝忠诚度与粘性 (Strong fan loyalty & retention)' : 'Strong fan loyalty and exceptional retention across Gen-Z'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{lang === 'zh' ? '高社交活跃度与闺蜜亲密感 (High social media engagement & friend-vibe)' : 'High social engagement driven by accessible friend-vibe'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{lang === 'zh' ? '四平台差异化协同矩阵，各司其职' : 'Differentiated multi-platform synergy across Weibo, Douyin, RED, Instagram'}</span>
                    </li>
                  </ul>
                </div>

                {/* Weaknesses */}
                <div className="p-5 rounded-xl bg-[#15130e] border border-[#cf2335]/30 flex flex-col gap-3">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#ffb4ab] font-bold">
                    <AlertTriangle className="w-4 h-4 text-[#cf2335]" />
                    <span>{lang === 'zh' ? 'WEAKNESSES // 潜在劣势' : 'WEAKNESSES'}</span>
                  </div>
                  <ul className="text-xs sm:text-sm text-[#e4bdbc]/90 flex flex-col gap-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf2335] font-bold">•</span>
                      <span>{lang === 'zh' ? '内容模式同质化与重复 (Homogenized, repetitive content)' : 'Homogenized format prone to repetitive commercial posting'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf2335] font-bold">•</span>
                      <span>{lang === 'zh' ? '过度依赖单一元气甜美标签 (Over-dependent on single cute persona)' : 'Over-reliance on singular cute/eccentric persona risks pigeonholing'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#cf2335] font-bold">•</span>
                      <span>{lang === 'zh' ? '商业硬广缺乏内容包容度，数据断崖下跌' : 'Hard commercial ads lack organic narrative integration'}</span>
                    </li>
                  </ul>
                </div>

                {/* Opportunities */}
                <div className="p-5 rounded-xl bg-[#15130e] border border-blue-500/30 flex flex-col gap-3">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase text-blue-400 font-bold">
                    <TrendingUp className="w-4 h-4" />
                    <span>{lang === 'zh' ? 'OPPORTUNITIES // 市场机遇' : 'OPPORTUNITIES'}</span>
                  </div>
                  <ul className="text-xs sm:text-sm text-[#e4bdbc]/90 flex flex-col gap-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{lang === 'zh' ? 'TikTok 海外市场蓝海空间 (TikTok global market blue ocean)' : 'TikTok global market expansion leveraging international drama fame'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{lang === 'zh' ? '海量海外年轻受众增量潜力 (Mass overseas fan potential)' : 'Untapped cross-border fan monetization and global fashion endorsements'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{lang === 'zh' ? '向高阶时尚艺术大片转型，拓宽商业溢价空间' : 'Fashion editorial crossover elevating brand prestige'}</span>
                    </li>
                  </ul>
                </div>

                {/* Threats */}
                <div className="p-5 rounded-xl bg-[#15130e] border border-amber-500/30 flex flex-col gap-3">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase text-amber-400 font-bold">
                    <ShieldAlert className="w-4 h-4" />
                    <span>{lang === 'zh' ? 'THREATS // 外部威胁' : 'THREATS'}</span>
                  </div>
                  <ul className="text-xs sm:text-sm text-[#e4bdbc]/90 flex flex-col gap-2">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{lang === 'zh' ? '同代小花激烈存量竞争 (Intense competition of young idols)' : 'Fierce competition from peer actresses (Zhao Lusi, Bai Lu)'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{lang === 'zh' ? '受众审美疲劳风险显著 (High risk of audience fatigue)' : 'High risk of public aesthetic fatigue from predictable formats'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{lang === 'zh' ? '社交平台算法机制变迁带来的流量波动' : 'Platform algorithm shifts penalizing non-video promotional posts'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* F. STRATEGIC RECOMMENDATIONS (PDF Page 22) */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#cf2335] uppercase font-bold tracking-widest">
                  SECTION F // ACTIONABLE RECOMMENDATIONS
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#e8e2d8]">
                {lang === 'zh' ? '学术战略建议（问题 → 洞察 → 建议）' : 'Strategic Recommendations (Problem → Insight → Solution)'}
              </h3>
              <p className="text-xs sm:text-sm text-[#e4bdbc]/80">
                {lang === 'zh'
                  ? '源自PDF第22页：采用规范严谨的“痛点问题 → 学术洞察 → 落地策略”三维结构呈现，严禁伪造执行成果。'
                  : 'Derived from PDF Page 22 using a structured Problem → Insight → Recommendation framework from academic analysis.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Card 1: Content Diversification */}
              <div className="p-6 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#891b25] text-[#ffe8e6] font-mono text-xs uppercase font-bold">
                    {lang === 'zh' ? '策略建议 01 // 内容矩阵多维化' : 'Recommendation 01 // Content Matrix'}
                  </span>
                </div>
                <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-[#15130e] border border-[#cf2335]/20">
                    <span className="text-[#cf2335] font-mono font-bold block mb-1">
                      {lang === 'zh' ? '【痛点】重复性物料引发审美疲劳' : '【Problem】Repetitive content causes audience fatigue'}
                    </span>
                    <p className="text-[#e4bdbc]/80">
                      {lang === 'zh'
                        ? '重复剧集宣发物料与商业广告互动量断崖下跌，用户滑过率居高不下。'
                        : 'Repetitive promotional posts result in steep engagement drop-offs and high scroll-past rates.'}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#15130e] border border-[#ffb3b1]/20">
                    <span className="text-[#ffb3b1] font-mono font-bold block mb-1">
                      {lang === 'zh' ? '【洞察】原生日常与走心长文具备极高价值' : '【Insight】Native content drives 5.5x engagement'}
                    </span>
                    <p className="text-[#e4bdbc]/80">
                      {lang === 'zh'
                        ? '粉丝极度渴望看到有温度、有烟火气的真诚表达，而非单纯工具人式的叫卖宣传。'
                        : 'Audiences demand authentic narrative vulnerability rather than commercial broadcasting.'}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#15130e] border border-emerald-500/20">
                    <span className="text-emerald-400 font-mono font-bold block mb-1">
                      {lang === 'zh' ? '【建议】构建多主题内容矩阵 (Diversify Multi-theme Matrix)' : '【Solution】Diversify multi-theme content matrix'}
                    </span>
                    <p className="text-[#e8e2d8]/90">
                      {lang === 'zh'
                        ? '将商业合作深度软性融入“沉浸式Vlog”、“闺蜜探店”与“私享好物”等叙事专题，用高质感生活碎片平衡商业诉求。'
                        : 'Seamlessly blend commercial promotions into high-concept thematic vlogs and authentic beauty curations.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Persona Versatility */}
              <div className="p-6 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#891b25] text-[#ffe8e6] font-mono text-xs uppercase font-bold">
                    {lang === 'zh' ? '策略建议 02 // 立体化人设延伸' : 'Recommendation 02 // Persona Versatility'}
                  </span>
                </div>
                <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-[#15130e] border border-[#cf2335]/20">
                    <span className="text-[#cf2335] font-mono font-bold block mb-1">
                      {lang === 'zh' ? '【痛点】单一“鬼马甜妹”标签存在局限' : '【Problem】Limited single cute image'}
                    </span>
                    <p className="text-[#e4bdbc]/80">
                      {lang === 'zh'
                        ? '随年龄增长与戏路拓展，过度强化单一甜妹标签易引发非粉群体的刻板印象偏见。'
                        : 'Over-indexing on eccentric cuteness limits dramatic role expansion and invites stereotype backlash.'}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#15130e] border border-[#ffb3b1]/20">
                    <span className="text-[#ffb3b1] font-mono font-bold block mb-1">
                      {lang === 'zh' ? '【洞察】专业敬业感是抵御舆论波动的护城河' : '【Insight】Artistic craft sustains longevity'}
                    </span>
                    <p className="text-[#e4bdbc]/80">
                      {lang === 'zh'
                        ? '白鹿与赵露思的竞品分析表明，兼具幽默反差与专业代表作的艺人能获得更持久的国民美誉度。'
                        : 'Competitor benchmarking indicates versatility and craft-oriented documentation anchor long-term respect.'}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#15130e] border border-emerald-500/20">
                    <span className="text-emerald-400 font-mono font-bold block mb-1">
                      {lang === 'zh' ? '【建议】打造多元立体艺人人格 (Multi-dimensional Persona)' : '【Solution】Build multi-dimensional versatile persona'}
                    </span>
                    <p className="text-[#e8e2d8]/90">
                      {lang === 'zh'
                        ? '适度增加剧组研读剧本、形体台词训练与艺术时尚创作的深度幕后记录，实现从“网红甜妹”到“专业演员”的形象进阶。'
                        : 'Document acting training, script readings, and mature fashion styling to progress from internet idol to credible actress.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Global Expansion */}
              <div className="p-6 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#891b25] text-[#ffe8e6] font-mono text-xs uppercase font-bold">
                    {lang === 'zh' ? '策略建议 03 // 布局海外蓝海' : 'Recommendation 03 // Global Market'}
                  </span>
                </div>
                <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-[#15130e] border border-[#cf2335]/20">
                    <span className="text-[#cf2335] font-mono font-bold block mb-1">
                      {lang === 'zh' ? '【痛点】海外社媒阵地尚未系统化深耕' : '【Problem】Undeveloped overseas market'}
                    </span>
                    <p className="text-[#e4bdbc]/80">
                      {lang === 'zh'
                        ? '海外电视剧播映火热，但TikTok等全球短视频主航道尚未建立专属运营团队。'
                        : 'Overseas drama demand is booming, yet global short-form channels like TikTok remain under-utilized.'}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#15130e] border border-[#ffb3b1]/20">
                    <span className="text-[#ffb3b1] font-mono font-bold block mb-1">
                      {lang === 'zh' ? '【洞察】Instagram 已自发聚集537万全球粉丝' : '【Insight】Instagram already attracted 5.37M fans'}
                    </span>
                    <p className="text-[#e4bdbc]/80">
                      {lang === 'zh'
                        ? '海外粉丝对东方美学与甜美元气风格具有极高文化消费意愿与自传播热情。'
                        : 'International Gen-Z exhibits organic affinity for Chinese aesthetic style and joyful lifestyle content.'}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#15130e] border border-emerald-500/20">
                    <span className="text-emerald-400 font-mono font-bold block mb-1">
                      {lang === 'zh' ? '【建议】启动专业化 TikTok 短视频出海运营' : '【Solution】Launch dedicated TikTok/Reels operation'}
                    </span>
                    <p className="text-[#e8e2d8]/90">
                      {lang === 'zh'
                        ? '组建国际化短视频运营小组，针对TikTok流行音乐与全球挑战略点剪辑专属卡段，打通国际时尚品牌代言通路。'
                        : 'Establish specialized short-video localization pairing international audio trends with global fashion shoots.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Systematic Engagement & Differentiation */}
              <div className="p-6 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#891b25] text-[#ffe8e6] font-mono text-xs uppercase font-bold">
                    {lang === 'zh' ? '策略建议 04 // 差异化定位与排期' : 'Recommendation 04 // Cadence & Humor'}
                  </span>
                </div>
                <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-[#15130e] border border-[#cf2335]/20">
                    <span className="text-[#cf2335] font-mono font-bold block mb-1">
                      {lang === 'zh' ? '【痛点】同质化年轻小花激烈存量博弈' : '【Problem】Homogeneous idol competition'}
                    </span>
                    <p className="text-[#e4bdbc]/80">
                      {lang === 'zh'
                        ? '赵露思与白鹿分别在流量体量与幽默赛道形成强力夹击，易出现定位模糊。'
                        : 'Peer competition from scale leaders necessitates sharper, distinctive brand traits.'}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#15130e] border border-[#ffb3b1]/20">
                    <span className="text-[#ffb3b1] font-mono font-bold block mb-1">
                      {lang === 'zh' ? '【洞察】闺蜜真诚感是独一无二的心理资产' : '【Insight】Intimacy is an inimitable asset'}
                    </span>
                    <p className="text-[#e4bdbc]/80">
                      {lang === 'zh'
                        ? '走心长文的28,000高评论印证了其在情感连接上的绝对统领力。'
                        : 'High comment density confirms Esther Yu’s unparalleled reciprocal intimacy.'}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#15130e] border border-emerald-500/20">
                    <span className="text-emerald-400 font-mono font-bold block mb-1">
                      {lang === 'zh' ? '【建议】强化差异化性格特质并建立稳定排期' : '【Solution】Create unique traits & consistent schedule'}
                    </span>
                    <p className="text-[#e8e2d8]/90">
                      {lang === 'zh'
                        ? '学习白鹿的幽默自嘲机制，借鉴赵露思的稳定更新排期，建立跨平台可预期的栏目化发布节奏。'
                        : 'Synthesize Bai Lu’s comedic courage with Zhao Lusi’s scheduled cadence for a dependable editorial flow.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic disclaimer pill */}
            <div className="p-3 rounded-xl bg-[#1e1b15] border border-[#e8e2d8]/10 text-center font-mono text-[11px] text-[#e4bdbc]/60">
              {lang === 'zh'
                ? '注：上述战略建议系CMNS2000学术研究课题汇报推演，仅供媒介分析研究参考，非商业机构实际操盘执行方案。'
                : 'Note: Recommendations derived from CMNS2000 academic coursework; intended for critical media study rather than commercial implementation.'}
            </div>
          </section>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CASE STUDY 02: HAIDILAO (海底捞)                                         */}
      {/* ========================================================================= */}
      {activeStudyTab === 'haidilao' && (
        <div className="flex flex-col gap-14 pt-10">
          {/* A. PROJECT HERO */}
          <section className="relative rounded-3xl bg-gradient-to-br from-[#1e1b15] via-[#221f19] to-[#15130e] border border-[#e8e2d8]/10 p-6 sm:p-10 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#891b25]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#891b25] text-[#ffe8e6] font-mono text-xs uppercase font-bold tracking-wider">
                    {lang === 'zh' ? '学术公关案例分析 · CMNS2530' : 'Academic PR Case Study · CMNS2530'}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#100e09]/80 text-[#ffb3b1] border border-[#ffb3b1]/20 font-mono text-xs">
                    {lang === 'zh' ? '情境危机传播理论 (SCCT)' : 'SCCT Theory Application'}
                  </span>
                </div>

                <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-[#e8e2d8] tracking-tight leading-tight">
                  {lang === 'zh' ? '海底捞 — 危机公关与品牌韧性机制' : 'Haidilao — Crisis Communication Analysis'}
                </h2>

                <p className="text-sm sm:text-base text-[#e4bdbc]/90 leading-relaxed max-w-2xl">
                  {lang === 'zh'
                    ? '2017年8月，中国知名连锁餐饮企业海底捞北京两家门店被卧底媒体曝光后厨老鼠出没、餐具混洗等严重食品卫生安全丑闻。本研究基于Coombs情境危机传播理论（SCCT），系统剖析海底捞“这锅我背、这错我改、员工我护”的公关应对范本及其后续长效沟通不足。'
                    : 'In August 2017, investigative media exposed rats and severe hygiene violations inside two Haidilao restaurants in Beijing. Grounded in Coombs’ Situational Crisis Communication Theory (SCCT), this case analyzes Haidilao’s high-responsibility public response and its subsequent dialogic limitations.'}
                </p>

                <div className="p-3.5 rounded-xl bg-[#100e09]/90 border border-[#ffb3b1]/20 flex items-start gap-2.5 text-xs text-[#e4bdbc]/80">
                  <Info className="w-4 h-4 text-[#cf2335] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#e8e2d8] block">
                      {lang === 'zh' ? '学术独立研究说明：' : 'Academic Disclosure:'}
                    </strong>
                    <span>
                      {lang === 'zh'
                        ? '本案例系纽卡斯尔大学CMNS2530课程学术个人报告（主研人：俞伊倩 c3588114），聚焦危机公关文本解析与传播学学理推演，不涉及任何商业利益与捏造统计。'
                        : 'Individual research presentation completed for CMNS2530 (Yu Yiqian, c3588114). Focuses on crisis discourse analysis and theoretical models; no fabricated metrics or commercial sponsorship.'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Haidilao Visual Badge & Storefront */}
              <div className="w-full lg:w-80 shrink-0 flex flex-col items-center gap-3">
                <div 
                  onClick={() => onOpenLightbox && onOpenLightbox('/assets/strategy/haidilao/haidilao_storefront.png', 'Haidilao Storefront', 'Beijing Store Media Exposure Context')}
                  className="relative group w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-[#e8e2d8]/20 shadow-2xl cursor-pointer"
                >
                  <img
                    src="/assets/strategy/haidilao/haidilao_storefront.png"
                    alt="Haidilao Storefront"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-mono text-[#ffb3b1]">
                      {lang === 'zh' ? '涉事门店现场（北京劲松店 / 太阳宫店）' : 'Exposed Beijing Store Front'}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-[#ffe8e6] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <img src="/assets/strategy/haidilao/haidilao_logo.png" alt="Haidilao Logo" className="h-9 w-auto object-contain" />
                  <span className="font-mono text-xs text-[#e4bdbc]/70">
                    {lang === 'zh' ? '全球门店超1,000家' : '1,000+ Stores Worldwide'}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* B. CRISIS OVERVIEW (PDF Page 2) */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#cf2335] uppercase font-bold tracking-widest">
                  SECTION B // CRISIS OVERVIEW
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#e8e2d8]">
                {lang === 'zh' ? '突发食品卫生危机核心背景' : 'Crisis Background: Three Core Dimensions'}
              </h3>
              <p className="text-xs sm:text-sm text-[#e4bdbc]/80">
                {lang === 'zh'
                  ? '源自PDF第2页：三大维度清晰拆解事件起因、沟通困境与潜在商誉毁灭性威胁。'
                  : 'Concise three-card breakdown from PDF Page 2 covering the incident, core communication challenge, and reputational threat.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Card 1: The Incident */}
              <div className="p-6 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-full bg-[#891b25] text-[#ffe8e6] flex items-center justify-center font-mono text-xs font-bold">
                  01
                </div>
                <h4 className="font-headline font-bold text-lg text-[#e8e2d8]">
                  {lang === 'zh' ? '恶性卫生事件曝光 (The Incident)' : 'The Sanitation Incident'}
                </h4>
                <p className="text-xs sm:text-sm text-[#e4bdbc]/85 leading-relaxed">
                  {lang === 'zh'
                    ? '2017年8月，《法制晚报》卧底曝光海底捞北京劲松店与太阳宫店存在老鼠在后厨配料房爬行、洗碗机沾满油污污垢、下水管道疏通扫把清理餐具等极度恶劣的卫生违规事实。'
                    : 'In August 2017, investigative reporters exposed rats in food preparation zones, greasy dishwashers, and floor brushes used to clean utensils in two Beijing outlets.'}
                </p>
                <div className="pt-2 mt-auto border-t border-[#e8e2d8]/5 font-mono text-[11px] text-[#cf2335]">
                  {lang === 'zh' ? '事实铁证如山 · 媒体暗访实锤' : 'Undeniable undercover evidence'}
                </div>
              </div>

              {/* Card 2: Main Communication Challenge */}
              <div className="p-6 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-full bg-[#891b25] text-[#ffe8e6] flex items-center justify-center font-mono text-xs font-bold">
                  02
                </div>
                <h4 className="font-headline font-bold text-lg text-[#e8e2d8]">
                  {lang === 'zh' ? '公关沟通死局 (The Challenge)' : 'Core Communication Challenge'}
                </h4>
                <p className="text-xs sm:text-sm text-[#e4bdbc]/85 leading-relaxed">
                  {lang === 'zh'
                    ? '作为以“无微不至的神级服务”享誉全国的餐饮标杆，食品安全正是其安身立命的最核心底线。一旦安全人设崩塌，任何狡辩或推诿都可能瞬间招致全网毁灭性信任崩盘。'
                    : 'Renowned for gold-standard hospitality, food safety is the non-negotiable baseline. In the face of visual evidence, any deflection would trigger consumer betrayal.'}
                </p>
                <div className="pt-2 mt-auto border-t border-[#e8e2d8]/5 font-mono text-[11px] text-[#cf2335]">
                  {lang === 'zh' ? '高品牌溢价下的脆弱信任' : 'High brand expectation vs reality'}
                </div>
              </div>

              {/* Card 3: Reputational Implications */}
              <div className="p-6 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-full bg-[#891b25] text-[#ffe8e6] flex items-center justify-center font-mono text-xs font-bold">
                  03
                </div>
                <h4 className="font-headline font-bold text-lg text-[#e8e2d8]">
                  {lang === 'zh' ? '商誉威胁与监管风暴 (Implications)' : 'Reputational Implications'}
                </h4>
                <p className="text-xs sm:text-sm text-[#e4bdbc]/85 leading-relaxed">
                  {lang === 'zh'
                    ? '食药监局迅速介入立案调查，两家门店被勒令停业整顿；全网舆情如火山喷发，消费者恐慌与愤怒情绪急剧蔓延，全球1,000多家门店商誉面临系统性倾覆风险。'
                    : 'Immediate regulatory intervention, mandatory store shutdowns, and nationwide public outrage threatened systemic reputational collapse.'}
                </p>
                <div className="pt-2 mt-auto border-t border-[#e8e2d8]/5 font-mono text-[11px] text-[#cf2335]">
                  {lang === 'zh' ? '监管执法介入 · 毁灭性商誉威胁' : 'Systemic threat to 1,000+ stores'}
                </div>
              </div>
            </div>
          </section>

          {/* C. SCCT CRISIS CLASSIFICATION (PDF Page 3) */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#cf2335] uppercase font-bold tracking-widest">
                  SECTION C // SCCT THEORETICAL CLASSIFICATION
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#e8e2d8]">
                {lang === 'zh' ? '情境危机传播理论（SCCT）学理定性图解' : 'SCCT Crisis Typology Framework'}
              </h3>
              <p className="text-xs sm:text-sm text-[#e4bdbc]/80">
                {lang === 'zh'
                  ? '源自PDF第3页：运用Coombs（2007）情境危机传播理论，建立可视化的危机属性传导链。'
                  : 'Visualized framework from PDF Page 3 applying Coombs (2007) Situational Crisis Communication Theory.'}
              </p>
            </div>

            {/* Visual Connected Diagram */}
            <div className="rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 p-6 sm:p-8 flex flex-col gap-6">
              {/* Top Banner: Crisis Type */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-[#891b25]/20 border border-[#cf2335]/40 gap-3">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="w-6 h-6 text-[#cf2335]" />
                  <div>
                    <span className="text-[11px] font-mono text-[#ffb3b1] uppercase font-bold">
                      {lang === 'zh' ? '危机类型归属 (SCCT Classification)' : 'Crisis Type Classification'}
                    </span>
                    <h4 className="font-headline text-xl sm:text-2xl font-bold text-[#e8e2d8]">
                      {lang === 'zh' ? '可预防型危机 (Preventable Crisis)' : 'Preventable Crisis'}
                    </h4>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#cf2335] text-[#ffe8e6] font-mono text-xs font-bold self-start sm:self-auto">
                  {lang === 'zh' ? '最高危机定级' : 'Highest Crisis Severity'}
                </span>
              </div>

              {/* Two-Column Mapping: Characteristics vs Haidilao Reality */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left: Theoretical Characteristics */}
                <div className="p-5 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-3">
                  <span className="font-mono text-xs uppercase text-[#ffb3b1] font-bold">
                    {lang === 'zh' ? '【SCCT理论核心特征】' : '【SCCT Theoretical Attributes】'}
                  </span>
                  <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#e4bdbc]/90">
                    <div className="p-2.5 rounded-lg bg-[#1e1b15] flex items-center justify-between">
                      <span>• {lang === 'zh' ? '组织负有直接责任 (Organisation is responsible)' : 'Organisation is fully responsible'}</span>
                      <span className="text-[#cf2335] font-mono font-bold">100%</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#1e1b15] flex items-center justify-between">
                      <span>• {lang === 'zh' ? '危机本完全可以避免 (Crisis could have been avoided)' : 'Crisis could have been avoided'}</span>
                      <span className="text-[#cf2335] font-mono font-bold">Preventable</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#1e1b15] flex items-center justify-between">
                      <span>• {lang === 'zh' ? '商誉面临极高毁灭威胁 (High reputational threat)' : 'High reputational threat'}</span>
                      <span className="text-[#cf2335] font-mono font-bold">Critical</span>
                    </div>
                  </div>
                </div>

                {/* Right: Corresponding Haidilao Actions */}
                <div className="p-5 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-3">
                  <span className="font-mono text-xs uppercase text-[#ffb3b1] font-bold">
                    {lang === 'zh' ? '【对应海底捞违规事实】' : '【Corresponding Haidilao Realities】'}
                  </span>
                  <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#e4bdbc]/90">
                    <div className="p-2.5 rounded-lg bg-[#1e1b15]">
                      <span className="text-[#cf2335] font-bold">→ </span>
                      <span>{lang === 'zh' ? '卫生管理流程全面失守 (Hygiene management failures)' : 'Systemic hygiene management breakdown'}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#1e1b15]">
                      <span className="text-[#cf2335] font-bold">→ </span>
                      <span>{lang === 'zh' ? '内部日常监督考核形同虚设 (Poor internal supervision)' : 'Lax internal supervisory audits & inspection loopholes'}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#1e1b15]">
                      <span className="text-[#cf2335] font-bold">→ </span>
                      <span>{lang === 'zh' ? '重大食品安全违规发酵于组织内部' : 'Food safety breaches occurred within operational core'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Conclusion Arrow Card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#cf2335]/20 via-[#891b25]/30 to-[#cf2335]/20 border border-[#cf2335]/50 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#cf2335] text-[#ffe8e6] flex items-center justify-center font-bold">
                    ↓
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#ffb3b1] uppercase">
                      {lang === 'zh' ? '理论推导必然归宿' : 'Theoretical Mandate'}
                    </span>
                    <h5 className="font-headline text-base sm:text-lg font-bold text-[#e8e2d8]">
                      {lang === 'zh' ? '必须承担“最高等级责任 (High Responsibility)”' : 'High Responsibility — Zero Deflection Stance'}
                    </h5>
                  </div>
                </div>
                <p className="text-xs text-[#e4bdbc]/80 max-w-md">
                  {lang === 'zh'
                    ? '根据Coombs理论，可预防型危机彻底封死了任何“否认”、“辩解”或“找替罪羊”的公关通路，企业唯一的生路是彻底承认错误、诚恳道歉并承担完全责任。'
                    : 'Under Coombs’ SCCT, preventable crises eliminate denial or excuse strategies. The sole viable route is radical accountability and tangible restitution.'}
                </p>
              </div>
            </div>
          </section>

          {/* D. ORGANISATIONAL COMMUNICATION RESPONSE (PDF Pages 4–5) */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#cf2335] uppercase font-bold tracking-widest">
                  SECTION D // ORGANISATIONAL CRISIS RESPONSE
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#e8e2d8]">
                {lang === 'zh' ? '公关应答文本与“这锅我背”核心策略拆解' : 'Communication Response & The "Accountability" Doctrine'}
              </h3>
              <p className="text-xs sm:text-sm text-[#e4bdbc]/80">
                {lang === 'zh'
                  ? '源自PDF第4–5页：展示海底捞两份具有公关里程碑意义的官方通报与致歉信原始影印件，提炼其高阶应对动作。'
                  : 'Archival official statement document gallery from PDF Pages 4–5, analyzing Haidilao’s landmark accountability posture.'}
              </p>
            </div>

            {/* Core Famous Stance Quote */}
            <div className="p-6 rounded-2xl bg-[#891b25]/25 border-l-4 border-[#cf2335] border-y border-r border-[#e8e2d8]/10 flex flex-col gap-2">
              <span className="font-mono text-xs text-[#ffb3b1] uppercase font-bold">
                {lang === 'zh' ? '海底捞公关经典名句（源自通报第6条）：' : 'Core Crisis Response Doctrine:'}
              </span>
              <p className="font-headline text-lg sm:text-2xl font-bold text-[#e8e2d8] italic leading-snug">
                {lang === 'zh'
                  ? '“涉事两家门店的干部和职工无需恐慌……该类事件的发生，更多的是公司深层次的管理问题，主要责任由董事会承担！”'
                  : '“The responsibility lies with the company rather than individual employees.”'}
              </p>
              <span className="text-xs font-mono text-[#e4bdbc]/60">
                — Haidilao International Holding Ltd. Official Notification, August 25, 2017
              </span>
            </div>

            {/* Document Gallery + Action List Side-by-Side */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Statements Gallery (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <span className="font-mono text-xs uppercase text-[#ffb3b1] font-semibold flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#cf2335]" />
                  {lang === 'zh' ? '官方公关声明原始文献（点击放大检视）' : 'Official Statements Dossier (Click to Inspect)'}
                </span>

                <div className="grid grid-cols-2 gap-3">
                  {/* Statement 1: Handling Notification */}
                  <div 
                    onClick={() => onOpenLightbox && onOpenLightbox('/assets/strategy/haidilao/statement_handling.png', 'Haidilao Event Handling Notification', 'Official Document 1: August 25, 2017')}
                    className="group relative rounded-xl overflow-hidden bg-black aspect-[3/4] border border-[#e8e2d8]/20 cursor-pointer shadow-lg hover:border-[#cf2335] transition-all"
                  >
                    <img 
                      src="/assets/strategy/haidilao/statement_handling.png" 
                      alt="Haidilao Handling Statement" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[11px] font-mono text-[#e8e2d8] line-clamp-2">
                        {lang === 'zh' ? '《事件处理通报》（7项硬核整改）' : 'Event Handling Notice (7 Actions)'}
                      </span>
                    </div>
                    <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-[#ffe8e6] opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Statement 2: Apology Letter */}
                  <div 
                    onClick={() => onOpenLightbox && onOpenLightbox('/assets/strategy/haidilao/statement_apology.png', 'Haidilao Official Apology Statement', 'Official Document 2: August 25, 2017')}
                    className="group relative rounded-xl overflow-hidden bg-black aspect-[3/4] border border-[#e8e2d8]/20 cursor-pointer shadow-lg hover:border-[#cf2335] transition-all"
                  >
                    <img 
                      src="/assets/strategy/haidilao/statement_apology.png" 
                      alt="Haidilao Apology Statement" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[11px] font-mono text-[#e8e2d8] line-clamp-2">
                        {lang === 'zh' ? '《致广大顾客的致歉信》' : 'Official Apology Letter'}
                      </span>
                    </div>
                    <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-[#ffe8e6] opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-[#e4bdbc]/60">
                  {lang === 'zh' ? '源自真实PDF第4页提取：声明出台仅历时4小时，公关界称为“黄金4小时答卷”' : 'Issued within 4 hours of media expose—the famous "Golden 4-Hour" benchmark.'}
                </span>
              </div>

              {/* 5 Response Actions Checklist (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col gap-3">
                <span className="font-mono text-xs uppercase text-[#ffb3b1] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {lang === 'zh' ? '公关应答行动清单（PDF Page 5）' : '5 Concrete Response Actions Checklist (PDF Page 5)'}
                </span>

                <div className="flex flex-col gap-2.5">
                  <div className="p-3.5 rounded-xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm text-[#e8e2d8] block">
                        {lang === 'zh' ? '1. 快速公开发表诚挚致歉 (Issued a Public Apology)' : 'Issued an unreserved public apology'}
                      </strong>
                      <span className="text-xs text-[#e4bdbc]/80">
                        {lang === 'zh'
                          ? '媒体报道后4小时内立即通过官方微博及全渠道官网致歉，不拖延、不装聋作哑。'
                          : 'Immediate statement within 4 hours; no public communication vacuum.'}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm text-[#e8e2d8] block">
                        {lang === 'zh' ? '2. 无保留承担全部责任 (Accepted Full Responsibility)' : 'Accepted 100% full institutional responsibility'}
                      </strong>
                      <span className="text-xs text-[#e4bdbc]/80">
                        {lang === 'zh'
                          ? '明确表示问题暴露了管理深层次漏洞，愿承担全部经济损失与法律责任，绝不推诿。'
                          : 'Board explicitly took complete legal and economic accountability.'}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm text-[#e8e2d8] block">
                        {lang === 'zh' ? '3. 明确不甩锅一线员工与媒体 (Did Not Blame Employees or Media)' : 'Did not blame frontline workers or whistleblowers'}
                      </strong>
                      <span className="text-xs text-[#e4bdbc]/80">
                        {lang === 'zh'
                          ? '破天荒声明“涉事员工无需恐慌，责任在董事会”，感谢媒体暗访帮助企业发现顽疾，树立担当形象。'
                          : 'Instructed frontline staff not to panic and thanked media for exposing flaws.'}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm text-[#e8e2d8] block">
                        {lang === 'zh' ? '4. 宣布硬核停业整改措施 (Announced Corrective Actions)' : 'Announced tangible corrective overhaul'}
                      </strong>
                      <span className="text-xs text-[#e4bdbc]/80">
                        {lang === 'zh'
                          ? '涉事门店主动停业整顿，聘请第三方权威专业机构全店无死角消杀，向公众提供公开查询通道。'
                          : 'Suspended operations at exposed stores, commissioned third-party pest control, opened public tracking hotline.'}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm text-[#e8e2d8] block">
                        {lang === 'zh' ? '5. 承诺全面升级可视化监控 (Promised Greater Supervision)' : 'Promised upgraded visual kitchen supervision'}
                      </strong>
                      <span className="text-xs text-[#e4bdbc]/80">
                        {lang === 'zh'
                          ? '推行后厨网络化监控“明厨亮灶”工程升级，主动邀请顾客、媒体与监管部门进店无门槛突击检查。'
                          : 'Accelerated open-kitchen video livestreaming and invited customer walk-ins.'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* E. STRENGTHS VS WEAKNESSES (PDF Page 6) */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#cf2335] uppercase font-bold tracking-widest">
                  SECTION E // CRITICAL EVALUATION
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#e8e2d8]">
                {lang === 'zh' ? '公关成效与局限性双轨复盘（Strengths vs Weaknesses）' : 'Findings: Strengths vs Weaknesses'}
              </h3>
              <p className="text-xs sm:text-sm text-[#e4bdbc]/80">
                {lang === 'zh'
                  ? '源自PDF第6页：客观辩证审视海底捞应对中的卓越亮点与长期维度的沟通盲区。'
                  : 'Two-column comparative evaluation from PDF Page 6 analyzing strategic strengths alongside critical communicative failings.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Strengths Column */}
              <div className="p-6 rounded-2xl bg-[#1e1b15] border border-emerald-500/30 flex flex-col gap-5">
                <div className="flex items-center gap-2.5 pb-3 border-b border-[#e8e2d8]/10">
                  <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-headline font-bold text-lg text-[#e8e2d8]">
                      {lang === 'zh' ? '应对亮点 (Strengths)' : 'Strategic Strengths'}
                    </h4>
                    <span className="text-[11px] font-mono text-emerald-400">
                      {lang === 'zh' ? '平息短期负面舆论' : 'Immediate Crisis Containment'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-[#15130e] flex flex-col gap-1">
                    <span className="font-mono text-xs text-emerald-400 font-bold">
                      ⚡ {lang === 'zh' ? '响应极为迅速 (Fast Response)' : 'Rapid 4-Hour Response'}
                    </span>
                    <p className="text-[#e4bdbc]/85 leading-relaxed">
                      {lang === 'zh'
                        ? '第一时间发声极大压缩了谣言滋生空间与信息真空期，化被动为主动。'
                        : 'Quick acknowledgement drastically reduced public uncertainty and curbed rumor propagation.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#15130e] flex flex-col gap-1">
                    <span className="font-mono text-xs text-emerald-400 font-bold">
                      🛡️ {lang === 'zh' ? '高度担当负责 (Responsible)' : 'Radical Accountability'}
                    </span>
                    <p className="text-[#e4bdbc]/85 leading-relaxed">
                      {lang === 'zh'
                        ? '高管以董事会名义承担全责，不仅没有推脱，反而保护了涉事员工，博得公众敬佩。'
                        : 'Accepted institutional blame instead of denying fault or scapegoating employees.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#15130e] flex flex-col gap-1">
                    <span className="font-mono text-xs text-emerald-400 font-bold">
                      🔍 {lang === 'zh' ? '整改全程透明 (Transparency)' : 'Actionable Transparency'}
                    </span>
                    <p className="text-[#e4bdbc]/85 leading-relaxed">
                      {lang === 'zh'
                        ? '公开发布整改通报、具体责任人电话与第三方消杀方案，展现解决问题的诚意。'
                        : 'Publicly shared granular corrective measures and opened monitoring hotlines.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Weaknesses Column */}
              <div className="p-6 rounded-2xl bg-[#1e1b15] border border-[#cf2335]/30 flex flex-col gap-5">
                <div className="flex items-center gap-2.5 pb-3 border-b border-[#e8e2d8]/10">
                  <span className="w-8 h-8 rounded-full bg-[#cf2335]/20 text-[#cf2335] flex items-center justify-center font-bold">
                    ✕
                  </span>
                  <div>
                    <h4 className="font-headline font-bold text-lg text-[#e8e2d8]">
                      {lang === 'zh' ? '策略局限与不足 (Failings & Weaknesses)' : 'Strategic Failings & Limitations'}
                    </h4>
                    <span className="text-[11px] font-mono text-[#cf2335]">
                      {lang === 'zh' ? '长效沟通机制欠缺' : 'Long-term Dialogic Gaps'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-[#15130e] flex flex-col gap-1">
                    <span className="font-mono text-xs text-[#cf2335] font-bold">
                      ⚠️ {lang === 'zh' ? '被动型沟通机制 (Reactive Communication)' : 'Reactive Communication'}
                    </span>
                    <p className="text-[#e4bdbc]/85 leading-relaxed">
                      {lang === 'zh'
                        ? '公司是在卧底媒体长篇深度曝光后才被迫沟通，此前内部并无主动自查发现或预警机制。'
                        : 'The company communicated only after the media exposed the crisis; lacking proactive risk auditing.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#15130e] flex flex-col gap-1">
                    <span className="font-mono text-xs text-[#cf2335] font-bold">
                      📉 {lang === 'zh' ? '后续持续跟踪不足 (Limited Ongoing Updates)' : 'Limited Ongoing Communication'}
                    </span>
                    <p className="text-[#e4bdbc]/85 leading-relaxed">
                      {lang === 'zh'
                        ? '公关风暴平息后，关于涉事门店整改进展、重新开业审查的持续跟踪通报稀少。'
                        : 'Few follow-up updates were provided during the subsequent multi-month recovery and reopening.'}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#15130e] flex flex-col gap-1">
                    <span className="font-mono text-xs text-[#cf2335] font-bold">
                      👥 {lang === 'zh' ? '缺乏双向对话互动 (Limited Stakeholder Engagement)' : 'Limited Stakeholder Engagement'}
                    </span>
                    <p className="text-[#e4bdbc]/85 leading-relaxed">
                      {lang === 'zh'
                        ? '主要以自上而下的单向企业公文发布为主，缺乏在社媒与公众消费者直接双向互动的机制。'
                        : 'Communication remained largely static one-way broadcasts with limited two-way dialogic interaction.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* F. STRATEGIC RECOMMENDATIONS (PDF Page 7) */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#cf2335] uppercase font-bold tracking-widest">
                  SECTION F // ACADEMIC THEORETICAL RECOMMENDATIONS
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#e8e2d8]">
                {lang === 'zh' ? '学术理论支撑下的双重建议框架' : 'Two-Step Theoretical Recommendation Framework'}
              </h3>
              <p className="text-xs sm:text-sm text-[#e4bdbc]/80">
                {lang === 'zh'
                  ? '源自PDF第7页：分别链接Coombs SCCT理论与Kent & Taylor对话理论（Dialogic Theory），提出系统化治理建议。'
                  : 'Derived from PDF Page 7 pairing crisis theory with practical recommendations for sustainable trust restoration.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Step 1: Regular Crisis Updates */}
              <div className="p-6 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#891b25] text-[#ffe8e6] font-mono text-sm font-bold flex items-center justify-center shrink-0">
                    01
                  </span>
                  <div>
                    <h4 className="font-headline font-bold text-lg text-[#e8e2d8]">
                      {lang === 'zh' ? '建立常态化透明进展播报机制' : 'Provide Regular & Transparent Crisis Updates'}
                    </h4>
                    <span className="text-xs font-mono text-blue-400">
                      Supported by SCCT (Coombs, 2007)
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-2 text-xs sm:text-sm text-[#e4bdbc]/90">
                  <p>
                    {lang === 'zh'
                      ? '• 定期通过官方渠道公开整顿调查进展与实验室水质检测数据。'
                      : '• Share investigation and lab test progress regularly through verified official channels.'}
                  </p>
                  <p>
                    {lang === 'zh'
                      ? '• 在整个危机修复周期内保持利益相关者知情权，杜绝舆情冷却后不了了之。'
                      : '• Keep stakeholders informed throughout the multi-month recovery to prevent rumor resurfacing.'}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#891b25]/20 border border-[#cf2335]/30 text-xs text-[#ffb3b1] font-mono">
                  {lang === 'zh'
                    ? '【学理支撑】：及时、持续的危机信息披露是保护与修复组织长期声誉的必要防护栏。'
                    : '【Theory Support】: Timely, continuous crisis communication is vital to protect organizational reputation.'}
                </div>
              </div>

              {/* Step 2: Dialogic Social Engagement */}
              <div className="p-6 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#cf2335] text-[#ffe8e6] font-mono text-sm font-bold flex items-center justify-center shrink-0">
                    02
                  </span>
                  <div>
                    <h4 className="font-headline font-bold text-lg text-[#e8e2d8]">
                      {lang === 'zh' ? '深化社媒双向对话与公众互动' : 'Strengthen Stakeholder Engagement on Social Media'}
                    </h4>
                    <span className="text-xs font-mono text-emerald-400">
                      Supported by Dialogic Theory (Kent & Taylor, 2002)
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#15130e] border border-[#e8e2d8]/5 flex flex-col gap-2 text-xs sm:text-sm text-[#e4bdbc]/90">
                  <p>
                    {lang === 'zh'
                      ? '• 设立社媒专项应答小组，对消费者的尖锐质疑给予即时、透明、真诚的答复。'
                      : '• Respond to public concerns promptly rather than relying solely on static broadcast releases.'}
                  </p>
                  <p>
                    {lang === 'zh'
                      ? '• 鼓励并常态化推行“后厨开放日”与线上直播互动答疑，让单向公关转为双向信任共建。'
                      : '• Encourage two-way communication: open-kitchen visits, live Q&A, and genuine dialogic feedback loops.'}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 font-mono">
                  {lang === 'zh'
                    ? '【学理支撑】：基于对话理论，平等的双向互动交流是后危机时代重建公众信任的核心基石。'
                    : '【Theory Support】: Dialogic Theory confirms symmetrical two-way communication is the core engine to rebuild trust.'}
                </div>
              </div>
            </div>
          </section>

          {/* G. KEY TAKEAWAYS (PDF Page 8) */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#cf2335] uppercase font-bold tracking-widest">
                  SECTION G // CASE STUDY CONCLUSIONS
                </span>
                <span className="h-px w-8 bg-[#37342e]" />
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#e8e2d8]">
                {lang === 'zh' ? '案例总结启示 (Key Takeaways)' : 'Core Case Study Takeaways'}
              </h3>
              <p className="text-xs sm:text-sm text-[#e4bdbc]/80">
                {lang === 'zh'
                  ? '源自PDF第8页：总结企业危机公关应对的核心启示，遵循学术真实，不虚构统计数字。'
                  : 'Three qualitative takeaway cards derived from PDF Page 8 conclusion.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1] uppercase font-bold">
                  <ShieldAlert className="w-4 h-4 text-[#cf2335]" />
                  <span>{lang === 'zh' ? '启示 01 // 责任担当高于公关话术' : 'Takeaway 1 // Sincere Apology'}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#e4bdbc]/90 leading-relaxed">
                  {lang === 'zh'
                    ? '2017海底捞事件是一起典型的可预防型危机。海底捞之所以未被舆论吞没，核心在于以道歉（Apology）、全责承担（Accountability）与扎实纠正（Corrective Action）三位一体切断了次生声誉风险。'
                    : 'The 2017 incident was a preventable crisis. Haidilao successfully avoided total collapse by leading with genuine apology, total board accountability, and immediate corrective action.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1] uppercase font-bold">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'zh' ? '启示 02 // 战略性沟通阻断不可逆损害' : 'Takeaway 2 // Strategic Containment'}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#e4bdbc]/90 leading-relaxed">
                  {lang === 'zh'
                    ? '战略性公关不是掩盖真相，而是展现企业解决问题的决心。快速承认管理问题，极大缓解了消费者的被欺骗感，显著降低了不可逆的商誉损害。'
                    : 'Strategic crisis communication is not deflection, but demonstrating resolve to fix systemic flaws, significantly mitigating reputational damage.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#1e1b15] border border-[#e8e2d8]/10 flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ffb3b1] uppercase font-bold">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span>{lang === 'zh' ? '启示 03 // 危机公关需走向长效对话' : 'Takeaway 3 // Continuous Dialogue'}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#e4bdbc]/90 leading-relaxed">
                  {lang === 'zh'
                    ? '单靠首日4小时答卷并不能一劳永逸。建立常态化预防预警与社媒双向对话沟通机制，才是企业构筑长期免疫力的根本所在。'
                    : 'A 4-hour response is not the finish line. More proactive and continuous dialogic engagement remains essential for enduring trust.'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#100e09] border border-[#e8e2d8]/10 text-center font-mono text-xs text-[#e4bdbc]/60">
              {lang === 'zh'
                ? '学术课程结课分析 · 纽卡斯尔大学 CMNS2530 · 俞伊倩 (c3588114)'
                : 'UON CMNS2530 Public Relations Case Audit · Frankie Yu (c3588114)'}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
