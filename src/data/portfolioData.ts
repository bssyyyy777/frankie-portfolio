import { VideoProject, FilmProject, StoryboardProject, StrategyCaseStudy, BilingualText, FilmProductionProcess } from '../types';

export const PERSONAL_INFO = {
  nameEn: 'FRANKIE YU',
  nameZh: '俞伊倩',
  monikerEn: '',
  monikerZh: '',
  tagline: {
    en: '“Creative Ideas. Engaging Stories.”',
    zh: '“创意构想，叙事共鸣。”',
  },
  status: {
    en: 'Available for Creative Internships',
    zh: '开放创意与影视实习',
  },
  bio: {
    en: 'Media & Communications student at the University of Newcastle specializing in short-form video content creation, content planning, and video production (filming & editing). Hands-on experience across scriptwriting, visual storyboarding, on-set camera blocking, mobile video creation for Xiaohongshu and Douyin, and cross-platform communication strategy.',
    zh: '纽卡斯尔大学传媒专业在读，专注于短视频内容创作、内容策划、视频拍摄与剪辑。具备从故事构思、分镜绘制、现场掌镜到后期剪辑调色的全流程制作经验，深耕小红书与抖音生态，兼具电影感视听叙事张力与数字社媒传播敏锐度。',
  },
  email: 'Frankie110221@outlook.com',
  altEmail: 'frankie.yu.media@gmail.com',
  phone: '+86 13429485674',
  linkedin: 'https://www.linkedin.com/in/yiqian-yu-213967420',
  location: {
    en: 'Singapore & Greater China',
    zh: '新加坡 / 中国',
  },
  education: {
    institution: {
      en: 'University of Newcastle (Australia)',
      zh: '纽卡斯尔大学（澳大利亚）',
    },
    degree: {
      en: 'Bachelor of Media & Communications (In Progress)',
      zh: '传媒与传播学士（在读）',
    },
    period: '2025.06 – Present',
    courses: {
      en: ['Media Production', 'Creative Collaborations & Cultural Production', 'Digital Media Participation', 'Multiplatform Journalism'],
      zh: ['媒体制作', '创意协作与文化生产', '数字媒体参与', '多平台新闻学'],
    },
  },
  skills: {
    creative: {
      en: ['Directing & Screenwriting', 'Storyboard Design', 'On-Set Camera Blocking', 'Short-form Video Ideation', 'Creative Problem Solving', 'Social Strategy'],
      zh: ['编导创作与剧本构思', '专业分镜绘制', '现场掌镜与机位调度', '短视频选题策划', '现场应变与问题解决', '社媒传播策略'],
    },
    technical: {
      en: ['CapCut / Jianying (Advanced)', 'Adobe Premiere Pro', 'DaVinci Resolve (Color & Mix)', 'Adobe Photoshop', 'AI Visual Generation & Prompting', 'Sound Recording & Mic Rigging'],
      zh: ['剪映 (高阶精剪与调色)', 'Adobe Premiere Pro', 'DaVinci Resolve 调色混音', 'Adobe Photoshop 专业修图', 'AI 视觉辅助与提示词设计', '现场收音与降噪麦克风架设'],
    },
    platforms: {
      en: ['Xiaohongshu (RED)', 'Douyin / TikTok', 'Weibo', 'Instagram', 'Bilibili', 'YouTube'],
      zh: ['小红书', '抖音 / TikTok', '微博', 'Instagram', '哔哩哔哩', 'YouTube'],
    },
    languages: {
      en: ['Chinese (Native Speaker)', 'English (Professional Working Proficiency)'],
      zh: ['中文（母语）', '英语（工作熟练）'],
    },
  },
  experience: [
    {
      role: {
        en: 'Director / Cinematographer / Lead Editor',
        zh: '短片导演 / 摄影 / 主剪辑',
      },
      project: {
        en: 'ARTS1004 Narrative Short Films (The Chase & Blind Spot)',
        zh: '课程短片微电影创作（《追逐》与《盲区》）',
      },
      period: '2026',
      details: {
        en: [
          'Led a 5-person production crew to direct two distinct short films: a 90-second high-tempo chase thriller and a 180-second atmospheric Neo-Noir mystery.',
          'Conceived scripts, drew full panoramic storyboard sequences, and planned camera blocking across multiple indoor and public locations.',
          'Overcame difficult public mall foot traffic and low-light night challenges, completing full picture cut, color grading, and audio post-production.',
        ],
        zh: [
          '作为导演带领5人团队完成2部课程短片：《The Chase》（追逐类型）与《Blind Spot》（Neo-Noir风格），独立完成剧本与分镜。',
          '设计多个场景的镜头调度与机位，运用低调光、强对比构图营造冷峻悬疑感；追逐戏通过运动镜头与快切强化紧迫感。',
          '独立完成粗剪至精剪、AI抠像合成飞行动画、调色与多轨混音。',
        ],
      },
    },
    {
      role: {
        en: 'Director & Content Creator',
        zh: '微综艺编导 / 拍摄 / 剪辑',
      },
      project: {
        en: 'Campus Variety Challenge & Food Discovery Series',
        zh: '高校趣味微综艺与城市美食探店系列',
      },
      period: '2025 – 2026',
      details: {
        en: [
          'Designed game rules, scripted comedic hooks, and directed high-energy multi-participant challenges for Douyin.',
          'Produced sensory food exploration content utilizing macro close-ups, ASMR audio, and fast rhythmic editing.',
        ],
        zh: [
          '自主策划选题并设计多个互动游戏规则与悬念反转点，负责脚本撰写、现场多机位拍摄与快节奏剪辑包装。',
          '打造微距市井美食系列短视频，结合清脆ASMR音效与高饱和调色，实现爆款播放与互动。',
        ],
      },
    },
    {
      role: {
        en: 'Interviewer & Cinematographer',
        zh: '纪实采访 / 摄影',
      },
      project: {
        en: 'SCWO (Singapore Council of Women’s Organisations) Documentary',
        zh: 'SCWO 新加坡妇女组织公益纪实微访谈',
      },
      period: '2025',
      details: {
        en: [
          'Conducted deep interviews with NGO volunteers and organizational leadership.',
          'Filmed 4+ hours of raw interview footage and atmospheric B-roll, emphasizing sensitive framing and authentic human empathy.',
        ],
        zh: [
          '深入访谈SCWO组织骨干与一线志愿者，系统拍摄累计4小时采访与环境B-roll素材。',
          '运用细腻温润的自然光构图与双机位切换，呈现非营利社群真实的温暖与韧性。',
        ],
      },
    },
    {
      role: {
        en: 'Photographer & Visual Retoucher',
        zh: '摄影师 / 后期精修 / 私域运营',
      },
      project: {
        en: 'KACHA Travel & Portrait Photography Studio',
        zh: 'KACHA 旅行与日常摄影工作室',
      },
      period: '2025',
      details: {
        en: [
          'Completed nearly 100 on-location photography sessions with 90%+ client satisfaction rate.',
          'Guided natural posing and emotional expression while executing high-end Photoshop portrait retouching.',
          'Assisted in streamlining client conversion SOP from social platforms into private client pools.',
        ],
        zh: [
          '完成近百场户外旅拍与人像定制，负责构图光影设计与动作情绪引导，客户交付好评率超90%。',
          '运用Photoshop进行专业胶片感精修与影调统一，并参与梳理平台公域转私域客群留存SOP。',
        ],
      },
    },
  ],
};

// Stitch Design Media Assets & Local Media
export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDvwKMsJQcgeDE7vqpGudg_TX6x4T1T0v6vCz6KWrFpK1fk0huf9NjjVCPFMR86QLioJbFR7IMFdXicBDf09Oyri3DwXL_soOtz2GSL2SVEWGVUpTfn3PBBBaJTiPIIO7IhlTlsOZiJNurGR6ykw5u88s-aVGilZi4i-GcEAR2i3nmOdBOzIaFWdpyke9a53tuEs91YA-qB5Ah4oEoLf5rM42Rd10WmILkkQN4dDV21CTzq7V-2ODZdw',
  portrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzlQNMJXJhggnWHD_lgoNBMMz6RnJOuMtFDn7J9gJhwj5ZPMLRX447CYCdIQ5aKZxlN339JOtcPG_df50c1E3zHZ0pR27ZWVhuBYIPRNICTLgxgC_lt40cbbAJihoHmJ_kUFEwdYpAfOlyvJ7tueaX885j4q1Wy4HsR-MnqyrmppyB5beBSONcO0dlM7ivbmoagBWXaVPFdMjOHC3hOokKDF2hmYmv2bo9Taye3JZXyVw5lIsYaZQptxugyErRP3_65mE',
  scwoStoryboard: '/storyboards/scwo_thrift_shop.jpg',
  coffeeStoryboard: '/storyboards/coffee_fountain_escape.jpg',

  // Local Project Covers (in public/covers/)
  theChaseCover: '/covers/publiccovers01_the_chase.jpg',
  blindSpotCover: '/covers/publiccovers02_blind_spot.jpg',
  scwoCover: '/covers/publiccovers03_scwo.jpg',
  varietyCover: '/covers/publiccovers04_variety.jpg',
  foodCover: '/covers/publiccovers05_food.jpg',
  vlogCover: '/covers/publiccovers06_vlog.jpg',

  // Local Project MP4 Videos (in public/videos/)
  theChaseVideo: '/videos/publicvideos01_the_chase.MP4',
  blindSpotVideo: '/videos/publicvideos02_blind_spot.MP4',
  scwoVideo: '/videos/publicvideos03_scwo.mp4',
  varietyVideo: '/videos/publicvideos04_variety.mp4',
  foodVideo: '/videos/publicvideos05_food.mp4',
  vlogVideo: '/videos/publicvideos06_vlog.mp4',

  // Fallback aliases
  theChaseStill: '/covers/publiccovers01_the_chase.jpg',
  blindSpotStill: '/covers/publiccovers02_blind_spot.jpg',
  cityVideo: '/covers/publiccovers06_vlog.jpg',
};

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: 'variety-campus',
    title: {
      en: 'Urban Rhythm: Campus Variety Challenge',
      zh: '城市律动：校园趣味微综艺挑战赛',
    },
    subtitle: {
      en: 'High-energy game mechanics with viral editing rhythm',
      zh: '快节奏爆款黄金开头设计，结合趣味音效与动效包装',
    },
    category: 'variety',
    duration: '02:18',
    platform: 'Douyin',
    collabType: {
      en: 'Solo Concept & Production',
      zh: '个人独立编导制作',
    },
    role: {
      en: 'Director, Camera, Lead Editor',
      zh: '编导 / 现场拍摄 / 剪辑',
    },
    thumbnailUrl: ASSETS.varietyCover,
    videoUrl: ASSETS.varietyVideo,
    summary: {
      en: 'An engaging campus variety episode featuring humorous game challenges, quick-cut timing, and interactive comedic hooks.',
      zh: '以高校青春日常为题材的趣味微综艺挑战，融入反转悬念、生动花字与逗趣音效设计。',
    },
    description: {
      en: 'Conceived and directed this independent campus variety project. Built around tight game rules, sudden comedic conflicts, and high-frequency punchlines. Edited with dynamic zooms, sound-synced memes, and viral retention hooks designed specifically for mobile short-form feeds.',
      zh: '自主策划选题并设计多个互动游戏规则与悬念反转点。负责全流程脚本撰写、现场多机位调动与快节奏剪辑包装。通过前3秒悬念抓手与密集的笑点卡点，大幅提高短视频完播率与二创裂变。',
    },
    highlights: [
      {
        en: 'Golden 3-second hook structure reducing initial drop-off rate.',
        zh: '黄金3秒吸睛抓手，有效降低滑走率。',
      },
      {
        en: 'Sound design synchronized with visual beats for heightened comedy.',
        zh: '精准音效与画面动作卡点，增强综艺喜剧节奏。',
      },
      {
        en: 'Designed on-screen animated graphics and typography overlays.',
        zh: '自制动态花字与综艺贴纸包装。',
      },
    ],
    keyTools: ['CapCut', 'Premiere Pro', 'Wireless Lav Mic', 'Gimbal'],
  },
  {
    id: 'scwo-documentary',
    title: {
      en: 'Voices of Resilience: SCWO Documentary',
      zh: '韧性之声：新加坡妇女组织公益纪实微访谈',
    },
    subtitle: {
      en: 'Empowering community stories through empathetic cinematography',
      zh: '深入对话记录真实社群力量，温润细腻的双机位构图',
    },
    category: 'documentary',
    duration: '03:45',
    platform: 'NGO Showcase / Vimeo',
    collabType: {
      en: 'Team Collaboration (Group of 3)',
      zh: '团队协作（3人创作组）',
    },
    role: {
      en: 'Cinematographer & Audio Recordist',
      zh: '采访 / 摄影 / 录音',
    },
    thumbnailUrl: ASSETS.scwoCover,
    videoUrl: ASSETS.scwoVideo,
    summary: {
      en: 'An authentic documentary interview highlighting community resilience, filmed with non-profit volunteers and leaders in Singapore.',
      zh: '深入新加坡妇女组织（SCWO）一线，通过真挚对话与细节特写展现基层公益力量。',
    },
    description: {
      en: 'Collaborated on this documentary piece for the Singapore Council of Women’s Organisations (SCWO). Personally conducted volunteer interviews and operated the primary camera and external directional sound rig. Focused on natural lighting, intimate framing, and conversational audio pacing to bring emotional honesty to the forefront.',
      zh: '参与新加坡妇女组织公益采访项目。实地采访组织负责人及基层志愿者，拍摄采访与B-roll素材共4小时。重点把握环境光线与近景人像构图，通过清晰无杂音的高保真原声录制，展现受访者的真挚情感与社群温情。',
    },
    highlights: [
      {
        en: 'Over 4 hours of on-location interviews and candid B-roll captured.',
        zh: '累计完成4小时现场深度访谈与纪实镜头拍摄。',
      },
      {
        en: 'Dual-camera setup ensuring smooth dialogue editing coverage.',
        zh: '双机位拍摄保障了对话剪辑的无缝衔接与视线逻辑。',
      },
      {
        en: 'Directional microphone isolation in noisy organizational headquarters.',
        zh: '使用指向性电容麦克风精准过滤环境背景杂音。',
      },
    ],
    keyTools: ['Sony FX3 / Alpha Rig', 'Rode Wireless Go II', 'DaVinci Resolve', 'Natural Diffused Lighting'],
  },
  {
    id: 'food-singapore',
    title: {
      en: 'Hidden Flavors: Singapore Hawker Discoveries',
      zh: '隐秘风味：狮城烟火探店志',
    },
    subtitle: {
      en: 'Sensory macro culinary shots and rhythmic ASMR editing',
      zh: '微距美食质感呈现，清脆节奏感音效与市井烟火文化探索',
    },
    category: 'lifestyle',
    duration: '01:30',
    platform: 'Xiaohongshu (RED)',
    collabType: {
      en: 'Solo Creation',
      zh: '个人独立创作',
    },
    role: {
      en: 'Scriptwriter, Filming & Producer',
      zh: '选题编导 / 摄影 / 制作人',
    },
    thumbnailUrl: ASSETS.foodCover,
    videoUrl: ASSETS.foodVideo,
    summary: {
      en: 'A high-impact culinary short exploring hidden gems in Singapore’s hawker centers with rich sizzling textures and cultural storytelling.',
      zh: '聚焦新加坡街头老字号小吃，用诱人微距与料理原生声音构建沉浸式美食体验。',
    },
    description: {
      en: 'Created tailored lifestyle content for Xiaohongshu’s culinary community. Leveraged macro lenses, high-shutter sizzle shots, and rich warm grading to evoke tactile appetite. Scripted with authentic cultural anecdotes rather than generic commercial promotion.',
      zh: '针对小红书年轻受众打造的高沉浸探店微视频。采用微距镜头捕捉食物烹调瞬间的油花升腾与细腻质感，配合高保真原声ASMR与温暖影调，拒绝生硬广告植入，用人文温度诠释南洋风味。',
    },
    highlights: [
      {
        en: 'Macro optical shots of food textures and steam vapor.',
        zh: '微距镜头捕捉食物肌理与滚烫热气。',
      },
      {
        en: 'ASMR sizzle audio design triggering sensory engagement.',
        zh: '料理声音ASMR环境音设计，提升视听代入感。',
      },
      {
        en: 'High-contrast warm tone curve suited for mobile feeds.',
        zh: '契合移动端屏幕呈现的暖色调与高食欲感调色。',
      },
    ],
    keyTools: ['Macro Lens', 'CapCut Pro', 'Lightroom Mobile', 'Directional Mic'],
  },
  {
    id: 'city-symphony',
    title: {
      en: 'City Symphony: 48H Singapore Cinematic Vlog',
      zh: '城市交响：48小时光影快剪',
    },
    subtitle: {
      en: 'Seamless match cuts, speed ramps, and twilight urban vibes',
      zh: '无缝匹配转场、速度曲线变速，与环境电子乐完美卡点',
    },
    category: 'lifestyle',
    duration: '01:15',
    platform: 'Douyin / RED',
    collabType: {
      en: 'Solo Production',
      zh: '全流程个人摄制',
    },
    role: {
      en: 'Cinematography, Direction & Color',
      zh: '全流程摄制 / 剪辑调色',
    },
    thumbnailUrl: ASSETS.vlogCover,
    videoUrl: ASSETS.vlogVideo,
    summary: {
      en: 'A fast-paced urban visual symphony contrasting Singapore’s futuristic architecture with rainy neon alleys.',
      zh: '穿梭于滨海湾摩登天际线与老街霓虹巷道之间的高能快剪，展现狮城动静相宜的现代感。',
    },
    description: {
      en: 'A technical demonstration of rhythm and visual momentum. Shot over 48 hours in Singapore across rain and twilight. Utilized velocity speed curves, seamless geometric whip pans, and ambient electronic synthesizer soundtrack to create an hypnotic editorial piece.',
      zh: '48小时密集穿梭狮城取景，通过精心设计的视线引导、几何对称构图与速度曲线变速，实现无缝衔接的转场体验。搭配低沉氛围电音与青红电影感色调，展现现代都市的呼吸感。',
    },
    highlights: [
      {
        en: 'Velocity ramp transitions aligning with electronic downbeats.',
        zh: '变速曲线配合音乐重音卡点转场。',
      },
      {
        en: 'Teal and crimson cinematic twilight grade.',
        zh: '冷青色与暗酒红的高阶电影感色彩分级。',
      },
      {
        en: 'Handheld dynamic tracking without stabilization artifacts.',
        zh: '手持稳定运镜与视线引导设计。',
      },
    ],
    keyTools: ['Sony Mirrorless', 'Gimbal', 'DaVinci Resolve Studio', 'Premiere Pro'],
  },
];

export const FILM_PROJECTS: FilmProject[] = [
  {
    id: 'the-chase',
    title: {
      en: 'THE CHASE',
      zh: '追逐 · THE CHASE',
    },
    genre: {
      en: 'Action Thriller / Chase Short (90 Seconds)',
      zh: '动作悬疑 / 追逐微电影（90秒）',
    },
    duration: '01:30',
    year: '2026',
    course: {
      en: 'ARTS1004: Creative Collaborations, University of Newcastle',
      zh: 'ARTS1004：创意协作与影视制作，纽卡斯尔大学',
    },
    roles: {
      en: 'Director, Camera Operator, Lead Editor',
      zh: '导演、摄影操作、主剪辑',
    },
    cameraSpecs: 'Sony Mirrorless Cinema Rig · 16:9 widescreen · Handheld & Tracking',
    colorGrade: {
      en: 'High-contrast vibrant chase tone with dynamic lighting',
      zh: '高反差动作影调，冷暖光影冲撞与紧凑节奏',
    },
    heroImage: ASSETS.theChaseCover,
    videoUrl: ASSETS.theChaseVideo,
    logline: {
      en: 'A high-stakes pursuit erupts through a crowded shopping mall over a stolen wallet, culminating in an unexpected comedic twist.',
      zh: '在熙攘的购物中心内，一场因失窃钱包引发的生死狂奔极限展开，最终却以意想不到的黑色幽默反转收场。',
    },
    concept: {
      en: 'Originally brainstormed around a stolen USB drive containing university coursework, the team quickly realized a tiny USB drive lacked visual punch on camera. Frankie guided the transition to a bold leather wallet to provide clear visual cues for audiences. Designed with a climactic twist to elevate it beyond standard chase tropes, showing that creative filmmaking hinges on balancing wild ideas with practical visual execution.',
      zh: '项目初期，团队曾构思同窗之间盗取存有课程作业U盘的故事。但在现场演练时，大家发现U盘体积过小、镜头表现力弱，且缺乏戏剧爆发点。俞伊倩主导调整剧本，决定使用视觉辨识度极高的“钱包”作为核心道具，并将取景地定在空间多变的商场。同时加入荒诞反转结尾，使90秒短片兼备悬疑紧迫感与戏剧记忆点。',
    },
    preProduction: {
      storyboarding: {
        en: 'Drew comprehensive scene-by-scene storyboard panels mapping character movement paths, visual sightlines, and sudden perspective shifts before shooting.',
        zh: '绘制细致到每个镜头的分镜脚本，规划商场内奔跑动线、视线交错与主观视角切换，确保现场拍摄条理分明。',
      },
      shotList: {
        en: 'Prepared a rigorous shot list covering establishing wide shots, fast-tracking medium frames, and extreme close-ups of footfalls and prop handoffs.',
        zh: '整理严谨的机位镜头清单，涵盖远景空间建立、跟随中景，以及脚步特写与关键道具交接镜头。',
      },
      scheduling: {
        en: 'Divided clear responsibilities among 5 group members (directing, filming, audio, acting, continuity) to maximize efficiency in a time-restricted location.',
        zh: '对5人团队进行明确分工（导演执行、掌镜、同期声录音、演员表演与场记），在有限拍摄窗口期内高效推进。',
      },
      scouting: {
        en: 'Visited the shopping mall beforehand to evaluate ambient lighting conditions, escalators, pedestrian traffic peaks, and escape stairwells.',
        zh: '提前实地踏勘商场环境，评估自动扶梯、人流动线高峰期、光线照度与安全通道空间。',
      },
    },
    production: {
      challenges: {
        en: 'Filming in an active public shopping mall brought unpredictable crowds, passers-by walking into frame, and camera vibrations during high-speed running takes.',
        zh: '在公共商业中心拍摄面临极大不确定性：背景常有路人穿行入镜，高速跟拍过程中镜头产生不可控剧烈抖动，需要多次反复重拍。',
      },
      audioRecording: {
        en: 'The cavernous shopping center produced loud ambient chatter and echoing air conditioning. Fixed by rigging a dedicated external directional microphone to isolate key vocal reactions and running footfalls.',
        zh: '商场中庭环境回声杂乱、背景嘈杂，收音难度极大。团队及时调整策略，架设外接专业指向性麦克风近距离拾音，确保关键呼吸与踏步声清晰扎实。',
      },
      cinematography: {
        en: 'Employed fluid gimbal tracking combined with quick handheld Dutch angles to amplify speed and disorientation.',
        zh: '采用稳定器跟拍与低机位手持微倾斜构图相结合的手法，营造奔跑中强烈的失衡感与压迫感。',
      },
      solutions: {
        en: 'Adapted angles quickly to avoid crowds, re-blocked actors into less congested corridors, and shot extra coverage takes to guarantee seamless editing options.',
        zh: '灵活调整机位规避拥挤人流，在侧廊补拍多角度覆盖镜头，培养了极强的现场应变与团队协作力。',
      },
    },
    postProduction: {
      editing: {
        en: 'Pacing was rigorously sculpted using rapid cuts, jump cuts on action beats, and rhythmic pauses to sustain viewer adrenaline.',
        zh: '在剪辑台上反复推敲时间轴，通过动作卡点跳剪与急停骤起的气口设计，使追逐张力拉满。',
      },
      vfxTechnique: {
        en: 'Engineered the standout "flying wallet" slow-motion sequence using AI masking, picture-in-picture layering, and custom keyframe bezier curves in editing software.',
        zh: '创新运用剪映/后期软件的AI智能抠像、画中画多轨道叠加与贝塞尔关键帧动画，成功打造出钱包在半空中慢镜头回旋飞行的招牌视觉特效。',
      },
      soundDesign: {
        en: 'Built an escalating audio bed with accelerating percussion, whooshes, and heightened heartbeat drops.',
        zh: '叠加心跳低音轰鸣、气流呼啸与疾速打击乐，在反转瞬间骤停音轨，强化幽默反差。',
      },
      colorWork: {
        en: 'Enhanced fluorescent mall tones into high-energy action vibrancy with crisp whites and punchy shadow saturation.',
        zh: '矫正商场杂乱色温，压暗多余环境杂光，强化高光与暗部反差，呈现清脆利落的商业动感。',
      },
    },
    reflections: {
      en: '“Looking back, I am proud of what our group achieved within a limited timeframe. Although there were several challenges during filming and editing, we successfully produced a short film that effectively told a story through visual storytelling. If I had the opportunity to revisit this project, I would capture more wide shots and experiment with a greater variety of camera angles. The Chase was a valuable learning experience that strengthened my skills in directing, filming, and editing while teaching me the importance of collaboration and adaptability.”',
      zh: '“回望这次创作，我对团队在有限时间里交出的答卷感到骄傲。虽然在现场摄制与后期遇到了人流、收音和剪辑节奏的诸多挑战，但我们成功通过纯粹的视听语言讲述了一个完整且引人入胜的故事。若能重拍，我会补充更多全景交代镜头并探索更丰富的构图角度。《追逐》切实锤炼了我的编导、摄影与剪辑实战能力，更让我深刻体会到团队协作与即时应变的核心价值。”',
    },
    pullQuote: {
      en: '“Creativity requires both vision and practicality — small production decisions transform storytelling.”',
      zh: '“创作不仅需要天马行空的灵感，更需要脚踏实地的执行力 —— 微小的道具抉择往往决定故事的成败。”',
    },
  },
  {
    id: 'blind-spot',
    title: {
      en: 'BLIND SPOT (The Cover Up)',
      zh: '盲区 · BLIND SPOT',
    },
    genre: {
      en: 'Neo-Noir Psychological Short (180 Seconds)',
      zh: '新黑色电影 / 心理悬疑短片（180秒）',
    },
    duration: '03:00',
    year: '2026',
    course: {
      en: 'ARTS1004: Creative Collaborations, University of Newcastle',
      zh: 'ARTS1004：创意协作与影视制作，纽卡斯尔大学',
    },
    roles: {
      en: 'Director, Cinematographer, Lead Editor & Poster Designer',
      zh: '导演、摄影指导、主剪辑、海报设计',
    },
    cameraSpecs: 'Low-Light Cinema Setup · 2.39:1 CinemaScope · Low-key lighting',
    colorGrade: {
      en: 'Arri LogC3 Emulation · Shadow-rich Noir tones transitioning to warm sunrise',
      zh: '暗部细节层次、低调冷色光影，结尾转为破晓晨光',
    },
    heroImage: ASSETS.blindSpotCover,
    videoUrl: ASSETS.blindSpotVideo,
    logline: {
      en: 'In a rain-slicked city at night, a woman who appears to be an accomplice in criminal deals is secretly tracking down evidence to avenge her deceased friend and expose a syndicate.',
      zh: '雨夜都市中，一名看似与罪恶交易有染的冷面女子，暗中搜集关键铁证，只为查明好友猝然离世的真相，将毒贩绳之以法。',
    },
    concept: {
      en: 'Inspired by classic film noir and modern neo-noir conventions studied in class, the creative vision centered around deceptive appearances and moral ambiguity. Frankie designed a non-linear flashback structure where the audience initially assumes the protagonist is a villain, only for clues to recontextualize her courage. Concluding with the arrest and a poetic weather transition from gloomy clouds to radiant sunshine symbolizing justice and renewed hope.',
      zh: '灵感源于课程对黑色电影（Film Noir）与新黑色电影美学的系统学习。故事紧扣“眼见非实，真相隐匿”的母题，采用非线性闪回与碎片化剪辑，先让观众误以为主角是冷血反派，再层层剥茧反转揭晓其卧底复仇的崇高动机。全片以毒贩落网、乌云散尽化作暖阳破晓为终章，隐喻正义与希望的破土而出。',
    },
    preProduction: {
      storyboarding: {
        en: 'Because Blind Spot was conceived with ZERO dialogue, storyboarding was the lifeblood of the film. Frankie hand-drew every lighting setup, silhouette angle, and facial micro-expression to guarantee the story communicated entirely through visual semiotics.',
        zh: '本片最为严苛的艺术要求是“全片无对白”。分镜绘制成为整个创作的生命线。俞伊倩亲手绘制全套光影、剪影与人物视线动线，确保纯粹依赖视觉符号与道具细节就能准确传达复杂剧情。',
      },
      shotList: {
        en: 'Curated low-angle compositions, heavy shadow blocking, and over-the-shoulder perspectives to heighten suspicion and noir tension.',
        zh: '定制低角度仰拍、大面积阴影遮蔽与主观过肩构图，最大化压抑感与悬疑张力。',
      },
      scheduling: {
        en: 'Coordinated complex night shooting schedules across 5 crew members, balancing actor availability with strict city location permits.',
        zh: '严密协调5名剧组成员的夜间拍摄档期，妥善平衡通宵拍摄节奏与场地许可。',
      },
      scouting: {
        en: 'Scouted concrete industrial stairwells, rainy street alleys, and minimal studio rooms that would provide stark shadow contrasts under directional lamps.',
        zh: '踩点精选具有工业质感的冷峻楼道、雨夜暗巷与极简内景，便于运用强束单点光切割暗部。',
      },
    },
    production: {
      challenges: {
        en: 'Significantly more demanding than The Chase due to multi-location night cinematography, maintaining continuity across flashbacks, and shooting in extreme low light without digital noise.',
        zh: '相比前作挑战大幅跃升：多场景夜戏辗转拍摄、复杂的非线性闪回场记连贯性，以及极暗光线下控制画面纯净度与噪点的难度。',
      },
      audioRecording: {
        en: 'With no dialogue, Foley sound effects (rain drizzle, shoe soles on asphalt, rustling jackets, heavy breath) had to be recorded pristine on location and enriched in post.',
        zh: '在无对白设定下，动效（雨水滴落、脚步摩挲、衣物擦拭、压抑呼吸）成为情绪驱动器，现场高精度拾取各类环境微声音。',
      },
      cinematography: {
        en: 'Strict adherence to low-key lighting ratios. Chiaroscuro shadows sliced across actors’ faces, utilizing practical neon signs and rain puddle reflections.',
        zh: '恪守新黑色电影的低调光（Low-key Lighting）法度，明暗对比强烈，善用现场霓虹与积水倒影营造迷离光晕。',
      },
      solutions: {
        en: 'Refilmed key ambiguous encounters multiple times to fine-tune subtle eyelines and timing. Maintained disciplined crew communication throughout cold night sessions.',
        zh: '对多处关键微表情与视线交汇镜头进行反复微调实拍，剧组全员高默契协同，克服寒夜疲惫如期杀青。',
      },
    },
    postProduction: {
      editing: {
        en: 'Non-linear editing with smooth temporal cross-dissolves and subtle audio pre-laps linking past memories to present investigations.',
        zh: '非线性时空剪辑，运用音画错位（J-Cut/L-Cut）与淡入淡出转场，将过去记忆与当下调查完美缝合。',
      },
      vfxTechnique: {
        en: 'Created a customized weather changeover transition from gloomy thunderstorm clouds into warm golden rays at the climax.',
        zh: '在结尾高潮处，细致打磨从暴雨阴云平滑过渡至金色晨曦的动态转场，极具视觉隐喻冲击力。',
      },
      soundDesign: {
        en: 'Composed an atmospheric neo-noir ambient score blending deep drone bass with solo cello and metallic reverb to anchor psychological tension.',
        zh: '混音构建了由低频氛围Drone低鸣、单簧独奏与金属回声交织的配乐空间，深层牵引观众心理起伏。',
      },
      colorWork: {
        en: 'Meticulous color grading using cool slate-cyan blacks, restrained crimson highlights, and a radiant warm bloom in the final frames.',
        zh: '精心设计冷青与玄黑基调的调色方案，点缀暗红示警光，最终在正义伸张之际爆发破晓暖调。',
      },
    },
    poster: {
      imageUrl: ASSETS.blindSpotStill,
      tagline: {
        en: '“What you see is not always the truth.”',
        zh: '“眼见非实，真相隐匿。”',
      },
      visualAnalysis: {
        en: 'The poster for Blind Spot was designed to visually embody the core thesis: appearances can deceive. The protagonist stands at the center of the frame with a guarded expression, deliberately evoking suspicions of her criminality. In her hand, the smartphone represents the hard digital evidence that will expose the drug ring, while the camera slung around her neck symbolizes her hidden duty as an investigator uncovering the truth.',
        zh: '《盲区》电影海报由俞伊倩亲自构思设计，直击“表象往往极具欺骗性”的主旨。女主角神情冷峻立于画幅正中，刻意营造反派压迫感；其手中的智能手机实则是记录毒品交易的决定性铁证，而颈间悬挂的相机则象征其追寻真相的记录者天职。',
      },
      symbolism: [
        {
          en: 'Central Protagonist: Serious demeanor challenging viewer assumptions about guilt and innocence.',
          zh: '居中主角：冷峻对峙姿态，彻底瓦解观众对善恶角色的刻板预设。',
        },
        {
          en: 'Smartphone & Camera: Dual props encoding investigation, evidence gathering, and digital testimony.',
          zh: '手机与相机：双重视觉符号，暗合暗中取证与揭露真相的行动线索。',
        },
        {
          en: 'Background Police Silhouettes: Two figures foreshadowing the climactic arrival of lawful justice.',
          zh: '背景警影：暗夜远处警员轮廓剪影，预示正义法网虽迟必到。',
        },
        {
          en: 'Rainy Noir Atmosphere: Deep crimson and obsidian palette establishing moral complexity.',
          zh: '雨夜Noir质感：暗红与玄黑夜色浸润，烘托扑朔迷离的叙事氛围。',
        },
      ],
    },
    reflections: {
      en: '“Blind Spot was the most challenging and rewarding project I completed this semester. I am particularly proud of the film’s neo-noir style, non-linear narrative, and use of visual symbolism to communicate themes of justice and hope. Throughout the project, I faced several challenges, including coordinating filming schedules, shooting in low-light environments, and managing the editing process. However, these experiences helped me improve my problem-solving skills and become more confident as a director and editor. Blind Spot was the highlight of my semester and marked an important step in my development as a filmmaker.”',
      zh: '“《盲区》是我本学期完成的最具挑战性也最有成就感的作品。我尤为自豪于全片沉浸的Neo-Noir质感、精巧的非线性叙事，以及用视觉隐喻表达正义与希望的深度探索。面对夜戏调度、暗光噪点与复杂剪辑等现实阻碍，我在即时排障中真正树立起作为导演和主剪辑的信心。《盲区》是我学期的高光之作，更是我通往专业影像创作者道路上的坚实里程碑。”',
    },
    pullQuote: {
      en: '“In visual storytelling, what remains unsaid is often what speaks the loudest.”',
      zh: '“在纯粹的视听语言中，未曾开口的沉默往往最能震耳欲聋。”',
    },
  },
];

export const STORYBOARD_PROJECTS: StoryboardProject[] = [
  {
    id: 'storyboard-scwo-new2u',
    title: {
      en: 'SCWO × New2U: Shop With Purpose',
      zh: 'SCWO × New2U：《Shop With Purpose》公益二手店',
    },
    filmTitle: {
      en: 'SCWO × New2U Thrift Shop',
      zh: 'SCWO × New2U 二手店宣传片',
    },
    shotRange: {
      en: '8 shots · 00:00–01:00 · 60-second social video',
      zh: '8个镜头 · 00:00–01:00 · 60秒公益短片',
    },
    technique: {
      en: 'Documentary storyboard · 16:9 + 9:16 delivery',
      zh: '纪实分镜设计 · 16:9 横版 + 9:16 竖版交付',
    },
    storyboardImageUrl: ASSETS.scwoStoryboard,
    aspectRatio: '16:9 + 9:16',
    formatNote: {
      en: 'Live-action documentary · client approval storyboard',
      zh: '实拍纪实项目 · 客户审批版分镜',
    },
    timelineLabels: [
      { en: '00:00 Establishing', zh: '00:00 建立场景' },
      { en: '00:20 Interview', zh: '00:20 人物采访' },
      { en: '00:37 Why it matters', zh: '00:37 公益意义' },
      { en: '01:00 Call to action', zh: '01:00 行动号召' },
    ],
    description: {
      en: 'A complete eight-shot storyboard for SCWO’s New2U thrift shop campaign, moving from the storefront and volunteer work to interviews, donations, shopping, and a clear call to action. The board locks the 60-second structure, interview coverage, B-roll rhythm, and dual-format delivery before filming.',
      zh: 'SCWO New2U 二手店公益宣传片的完整八镜头分镜。从店铺建立、志愿者工作、人物采访，到捐赠流程、顾客购物和最终行动号召，提前锁定60秒叙事结构、采访机位、B-roll节奏与横竖双端交付规格。',
    },
    directorNotes: {
      en: '“The story starts with a place, becomes human through the interviews, and ends with a simple invitation: shop, donate, and volunteer with purpose.”',
      zh: '“故事从一间店开始，通过采访变得真实，最后落到清晰而温暖的邀请：带着公益目的去购物、捐赠与参与志愿服务。”',
    },
    continuityDetails: [
      {
        beat: { en: 'Shot 1 — Intro / Establishing', zh: '镜头1 — 开场 / 店铺建立' },
        camera: { en: 'Wide exterior · Handheld 48fps', zh: '外景远景 · 手持48fps' },
        action: { en: 'Introduce the New2U by SCWO storefront and establish the welcoming, purposeful atmosphere.', zh: '展示SCWO旗下New2U店铺外观，建立明亮、友善且具有公益目的的整体氛围。' },
      },
      {
        beat: { en: 'Shot 2 — Volunteer at work', zh: '镜头2 — 志愿者工作' },
        camera: { en: 'Medium shot · Handheld 48fps', zh: '中景 · 手持48fps' },
        action: { en: 'Show a volunteer folding and organising donated clothes inside the thrift shop.', zh: '记录志愿者在店内整理、折叠和分类捐赠衣物的工作状态。' },
      },
      {
        beat: { en: 'Shot 3 — Interview 1', zh: '镜头3 — 第一段采访' },
        camera: { en: 'Medium interview · Tripod 24fps', zh: '采访中景 · 三脚架24fps' },
        action: { en: 'Capture a volunteer introducing their role at New2U with clear, warm dialogue audio.', zh: '通过清晰、温暖的采访原声，让志愿者介绍自己在New2U的工作与参与方式。' },
      },
      {
        beat: { en: 'Shot 4 — Donations process', zh: '镜头4 — 捐赠流程' },
        camera: { en: 'Close-up / medium · Handheld 48fps', zh: '特写 / 中景 · 手持48fps' },
        action: { en: 'Focus on hands and donated items as the voice-over explains how contributions support the organisation.', zh: '聚焦双手与捐赠物品，用采访旁白解释捐赠如何支持SCWO的公益工作。' },
      },
      {
        beat: { en: 'Shot 5 — Customers shopping', zh: '镜头5 — 顾客购物' },
        camera: { en: 'Medium / close-up · Handheld 48fps', zh: '中景 / 特写 · 手持48fps' },
        action: { en: 'Follow customers browsing pre-loved clothes and show the human, sustainable value of second-hand shopping.', zh: '跟拍顾客浏览二手衣物，呈现循环消费、可持续生活和真实购物体验。' },
      },
      {
        beat: { en: 'Shot 6 — Interview 2 / Why it matters', zh: '镜头6 — 第二段采访 / 公益意义' },
        camera: { en: 'Medium interview · Tripod 24fps', zh: '采访中景 · 三脚架24fps' },
        action: { en: 'Let the interview subject explain how the money raised supports SCWO’s work.', zh: '让受访者说明店铺筹得的资金如何支持SCWO的公益工作与女性服务。' },
      },
      {
        beat: { en: 'Shot 7 — Final message', zh: '镜头7 — 最终寄语' },
        camera: { en: 'Medium interview · Tripod 24fps', zh: '采访中景 · 三脚架24fps' },
        action: { en: 'Deliver a direct, positive message that connects the viewer’s choice with a wider social impact.', zh: '以直接、积极的寄语，把观众的消费选择与更广泛的社会影响连接起来。' },
      },
      {
        beat: { en: 'Shot 8 — Call to action / End card', zh: '镜头8 — 行动号召 / 结尾卡' },
        camera: { en: 'Static store sign or graphic · Handheld or tripod', zh: '静态店铺招牌或图形 · 手持或三脚架' },
        action: { en: 'End on “Shop With Purpose” with clear shop, donate, and volunteer actions plus location and web details.', zh: '以“Shop With Purpose”收尾，清晰呈现购物、捐赠、志愿服务、地址和网站信息。' },
      },
    ],
  },
  {
    id: 'storyboard-coffee-fountain-escape',
    title: {
      en: 'The Coffee Fountain Escape',
      zh: '《咖啡喷泉大逃脱》',
    },
    filmTitle: {
      en: 'Luckin Coffee 3D Animation',
      zh: '瑞幸咖啡3D动画短片',
    },
    shotRange: {
      en: '7 shots · 00:00–00:07 · 3D animated short',
      zh: '7个镜头 · 00:00–00:07 · 3D动画短片',
    },
    technique: {
      en: '3D animation storyboard · 16:9 horizontal · blue-to-coffee palette',
      zh: '3D动画分镜 · 16:9横版 · 蓝色至咖啡色情绪调色',
    },
    storyboardImageUrl: ASSETS.coffeeStoryboard,
    aspectRatio: '16:9',
    formatNote: {
      en: '3D animation · character and environment continuity board',
      zh: '3D动画项目 · 角色与环境连续性分镜板',
    },
    timelineLabels: [
      { en: '00.0s Sinking', zh: '00.0秒 下沉' },
      { en: '02.2s Coffee impact', zh: '02.2秒 坠入咖啡' },
      { en: '04.0s Fountain rise', zh: '04.0秒 咖啡喷泉' },
      { en: '07.0s Toward light', zh: '07.0秒 飞向光亮' },
    ],
    description: {
      en: 'A seven-shot 3D animation sequence that turns a student’s sinking homework anxiety into an energetic coffee-powered escape. The board tracks the character’s fall, transformation, reunion with the Luckin deer mascot, and final movement toward the light.',
      zh: '一段七镜头的3D动画分镜，将学生被作业淹没的焦虑转化为咖啡驱动的高能逃脱。分镜完整记录角色下沉、坠入咖啡、与瑞幸鹿吉吉汇合，以及最终向光亮上升的情绪变化。',
    },
    directorNotes: {
      en: '“The visual arc moves from deep blue pressure to warm coffee energy, then opens into bright hope. The upward camera movement is the emotional release.”',
      zh: '“视觉情绪从深蓝色的压力出发，进入温暖的咖啡能量，最后打开成明亮的希望。持续向上的镜头运动就是情绪释放。”',
    },
    continuityDetails: [
      {
        beat: { en: 'Shot 1 — Sinking in the homework ocean', zh: '镜头1 — 下沉于作业海洋' },
        camera: { en: 'Close-up · Slight downward movement', zh: '近景特写 · 轻微向下移动' },
        action: { en: 'The chibi student sinks slowly among floating homework pages, reaching out in helpless exhaustion.', zh: 'Q版学生在漂浮的作业纸张中缓慢下沉，疲惫而无助地伸手求助。' },
      },
      {
        beat: { en: 'Shot 2 — Fall into the coffee', zh: '镜头2 — 坠入咖啡' },
        camera: { en: 'Top-down follow · Close-up on impact', zh: '俯拍跟随 · 坠落冲击特写' },
        action: { en: 'The student falls directly into a giant Luckin coffee cup; coffee splashes around the character.', zh: '学生直接坠入巨大的瑞幸咖啡杯，咖啡液体随着冲击向四周飞溅。' },
      },
      {
        beat: { en: 'Shot 3 — Inside the coffee', zh: '镜头3 — 沉入咖啡内部' },
        camera: { en: 'Close-up · Swirling motion around character', zh: '近景特写 · 咖啡液体环绕旋转' },
        action: { en: 'The student is surrounded by swirling coffee and bubbles, moving from dizziness toward anticipation.', zh: '学生被旋转的咖啡液体与气泡包围，从头晕失重逐渐转向期待。' },
      },
      {
        beat: { en: 'Shot 4 — Coffee fountain', zh: '镜头4 — 咖啡喷泉' },
        camera: { en: 'Low-angle shot · Follow upward movement', zh: '低机位仰拍 · 跟随向上运动' },
        action: { en: 'The coffee erupts like a fountain and launches the student upward, changing shock into excitement.', zh: '咖啡像喷泉一样爆发，将学生向上托起，情绪从惊吓转为兴奋。' },
      },
      {
        beat: { en: 'Shot 5 — Ride the coffee', zh: '镜头5 — 乘上咖啡浪潮' },
        camera: { en: 'Dynamic tracking · Front / side angle', zh: '动态跟拍 · 正面 / 侧面视角' },
        action: { en: 'The student rides the coffee cup at speed, holding the rim while moving upward with new energy.', zh: '学生抓住咖啡杯边缘高速上升，带着新的能量在咖啡浪潮中前进。' },
      },
      {
        beat: { en: 'Shot 6 — Together with the Luckin deer', zh: '镜头6 — 与瑞幸鹿吉吉同行' },
        camera: { en: 'Medium-wide · Moving upward together', zh: '中远景 · 两个角色同步向上' },
        action: { en: 'The Luckin deer mascot joins from the side; both characters swim and rise together.', zh: '瑞幸鹿吉吉从侧面加入，学生与吉吉一起在咖啡液体中向上游动。' },
      },
      {
        beat: { en: 'Shot 7 — Toward the light', zh: '镜头7 — 向光亮前进' },
        camera: { en: 'Wide shot · Looking up toward the surface', zh: '广角远景 · 仰望明亮水面' },
        action: { en: 'The student and deer ride the coffee cup toward the bright surface, ending on hope, uplift, and freedom.', zh: '学生与吉吉乘着咖啡杯驶向明亮的水面，以希望、上扬与自由结束。' },
      },
    ],
  },
];

export const STRATEGY_CASE_STUDIES: StrategyCaseStudy[] = [
  {
    id: 'esther-yu-audit',
    title: {
      en: 'Esther Yu (虞书欣) — Digital Media Strategy Audit',
      zh: '虞书欣 — 数字媒体传播策略审计',
    },
    badge: {
      en: 'IP Strategy & Content Virality',
      zh: '明星个人IP与传播裂变审计',
    },
    course: 'CMNS2000: Digital Media Participation, University of Newcastle',
    year: '2024',
    leadStudent: 'Yu Yiqian (俞伊倩)',
    teamMembers: ['Qu Zixing', 'Ling Zixin', 'Cao Huihan', 'Wang Lujia', 'Chen Kenuo'],
    challenge: {
      en: 'New-generation female idols face hyper-intense market competition, audience aesthetic fatigue, and homogenizing digital personas. The challenge was evaluating how Esther Yu maintained massive engagement and converted social visibility into long-term commercial value without alienating fans through hard-selling promotions.',
      zh: '新生代青年女艺人赛道竞争白热化，同质化偶像人设极易引发受众审美疲劳。本研究针对虞书欣在多渠道平台中的数字媒体矩阵，审计其如何平衡商业带货与真实个人人设，破解纯广告导致的用户流失难题。',
    },
    methodology: {
      en: 'Executed quantitative content analysis and audience engagement tracking across Weibo (28.5M), Douyin (20.3M), Xiaohongshu (10.3M), and Instagram (5.4M). Conducted comparative benchmarking with peers Zhao Lusi, Bai Lu, and Yang Chaoyue.',
      zh: '采用定量内容分析法与跨平台受众互动追踪，系统采集微博（2850万粉）、抖音（2032万粉）、小红书（1032万粉）与Instagram（537万粉）核心数据，并与赵露思、白鹿、杨超越进行多维度横向竞品对标。',
    },
    theoreticalFramework: {
      en: 'Grounded in Parasocial Interaction Theory (Horton & Wohl, 1956), Microcelebrity & Self-Branding Frameworks (Marwick & boyd, 2011; Duffy & Wissinger, 2017), and Platform Culture & Connectivity (van Dijck, 2013).',
      zh: '基于霍顿与沃尔的“准社交互动理论”（Parasocial Interaction, 1956）、马维克的“微名人与自我品牌化理论”（Microcelebrity, 2011）以及范戴克的“连接文化与平台特性理论”（2013）。',
    },
    platforms: [
      {
        platform: 'Weibo',
        followers: '28,495,000',
        role: { en: 'Official announcements, drama promotion & fandom mobilizations', zh: '官方通告宣发、影视剧宣传与核心粉丝沉淀' },
      },
      {
        platform: 'Douyin',
        followers: '20,322,000',
        role: { en: 'Viral short videos, trending sound synchronization & dance challenges', zh: '爆款趣味短视频、热门神曲合拍与魔性舞蹈挑战' },
      },
      {
        platform: 'Xiaohongshu',
        followers: '10,315,000',
        role: { en: 'Aesthetic selfies, lifestyle micro-vlogs & fashion styling', zh: '高审美自拍、治愈日常微Vlog与穿搭美妆灵感' },
      },
      {
        platform: 'Instagram',
        followers: '5,370,000',
        role: { en: 'Travel journals, editorial fashion spreads & global audience reach', zh: '海外旅行画报、高阶时尚大片与全球化国际受众触达' },
      },
    ],
    contentDistribution: [
      { category: { en: 'Selfies & Casual Portraits', zh: '自拍与生活随拍' }, percentage: 30 },
      { category: { en: 'Lifestyle & Daily Vlogs', zh: '日常生活与微Vlog' }, percentage: 25 },
      { category: { en: 'Fashion & Aesthetic Outfits', zh: '时尚穿搭与美妆' }, percentage: 20 },
      { category: { en: 'Drama & Project Promotion', zh: '影视剧宣发与花絮' }, percentage: 15 },
      { category: { en: 'Commercial Brand Collaborations', zh: '商业品牌硬广合作' }, percentage: 10 },
    ],
    engagementComparison: [
      {
        type: { en: 'Native Daily Content (Vlog)', zh: '原生日常内容（日常微Vlog）' },
        avgLikes: '125,000',
        avgComments: '18,000',
        avgReposts: '22,000',
        total: '165,000',
        highlight: true,
      },
      {
        type: { en: 'Film & TV Behind-the-Scenes', zh: '影视剧幕后花絮' },
        avgLikes: '98,000',
        avgComments: '12,000',
        avgReposts: '15,000',
        total: '125,000',
      },
      {
        type: { en: 'Emotional & Thoughtful Posts', zh: '真挚长文与情绪共鸣' },
        avgLikes: '86,000',
        avgComments: '28,000',
        avgReposts: '11,000',
        total: '125,000',
      },
      {
        type: { en: 'Repetitive Promotional Posts', zh: '重复性通稿宣发' },
        avgLikes: '28,000',
        avgComments: '4,500',
        avgReposts: '5,500',
        total: '38,000',
      },
      {
        type: { en: 'Hard Brand Advertisements', zh: '纯商业硬广发布' },
        avgLikes: '22,000',
        avgComments: '3,200',
        avgReposts: '4,800',
        total: '30,000',
      },
    ],
    keyInsights: [
      {
        en: 'Native daily content achieves 165,000 total engagement — 5.5x higher than hard brand advertisements (30,000). Audiences actively reject overt commercial noise.',
        zh: '原生日常内容的总互动量高达16.5万，是纯商业硬广（3万）的整整5.5倍！当代受众对生硬推销呈现出天然抵触机制。',
      },
      {
        en: 'Emotional long-form text posts generate the highest comment ratio (28,000 comments, 3x ads), proving that genuine self-disclosure fuels deep parasocial reciprocity.',
        zh: '真挚情感长文的评论量最高（达2.8万条，是硬广的近9倍），证明真情实感的准社交自我暴露能极大激活粉丝的双向奔赴。',
      },
      {
        en: 'Differentiated "Friend Vibe" positioning: While competitors lean heavily on untouchable glamour, Esther Yu succeeds through de-idolization, cute candidness, and self-deprecating humor.',
        zh: '独特的“朋友感”心智占位：区别于传统高高在上的冰冷偶像，虞书欣通过“去偶像化”、真实微瑕反差萌与逗趣幽默，建立极具亲和力的情感羁绊。',
      },
    ],
    swot: {
      strengths: [
        { en: 'High fan loyalty, active engagement rate (18% active fan index), multi-platform synergy.', zh: '极高粉丝忠诚度与粘性，活跃粉丝指数达18%，多平台协同效应显著。' },
        { en: 'Distinctive "celebrity as a friend" persona reducing social distance.', zh: '鲜明的“朋友型艺人”定位，大幅消解心理距离感。' },
      ],
      weaknesses: [
        { en: 'Over-reliance on a single cute persona risks long-term aesthetic fatigue.', zh: '过度依赖单一“甜妹/可爱”标签，存在潜在审美疲劳风险。' },
        { en: 'Repetitive promotional templates during drama press periods cause engagement drops.', zh: '剧宣期间部分宣发模板高度重复，导致互动数据骤降。' },
      ],
      opportunities: [
        { en: 'Untapped blue ocean in TikTok global short-form video ecosystem.', zh: 'TikTok海外全球短视频短剧蓝海市场潜力巨大。' },
        { en: 'Expanding high-end fashion authority through artistic editorial collaborations.', zh: '通过高级时装与艺术电影跨界合作，提升专业质感。' },
      ],
      threats: [
        { en: 'Fierce competition from rising young actresses (Zhao Lusi, Bai Lu) with established posting cadences.', zh: '同赛道新生代小花（赵露思、白鹿等）高频更新与稳定运营的竞争夹击。' },
        { en: 'Public volatility around commercial endorsements and authenticity scrutiny.', zh: '公众对商业化代言与真实性人设的审视日益严苛。' },
      ],
    },
    recommendations: [
      {
        title: { en: 'Diversify Multi-Theme Content Matrix', zh: '拓展多元化内容主题矩阵' },
        description: {
          en: 'Shift from single "cute" tropes into career behind-the-scenes, script table reads, and professional creative disciplines to build a resilient, multi-dimensional persona.',
          zh: '由单一甜美向剧组专业研读剧本、职业技能修炼等硬核向纪实拓展，构建立体多元的复合人设。',
        },
        theorySupport: { en: 'Edwards (2020) Persona Longevity Framework', zh: 'Edwards (2020) 艺人人设生命周期模型' },
      },
      {
        title: { en: 'Launch Dedicated Global TikTok Strategy', zh: '推进TikTok全球化定制运营' },
        description: {
          en: 'Capitalize on East Asian cultural interest by producing bilingual trending challenge videos tailored for Southeast Asian and Western TikTok demographics.',
          zh: '针对东南亚与欧美受众定制双语轻幽默挑战视频，捕获海外微名人的破圈增量。',
        },
        theorySupport: { en: 'Jin & Yoon (2020) Transnational Microcelebrity Theory', zh: 'Jin & Yoon (2020) 跨国微名人传播理论' },
      },
      {
        title: { en: 'Implement 80/20 Authentic Content Ratio', zh: '恪守80/20原生内容黄金配比' },
        description: {
          en: 'Strictly cap hard commercial posts below 20% of total output; seamlessly weave brand endorsements into organic lifestyle vlogs to preserve fan goodwill.',
          zh: '将商业推广严格控制在20%以内，将合作品牌巧妙有机地融入日常微Vlog，杜绝消耗粉丝好感。',
        },
        theorySupport: { en: 'Li & Wang (2023) Gen Z Advertising Avoidance Model', zh: 'Li & Wang (2023) Z世代广告规避与接纳模型' },
      },
    ],
    references: [
      'Marwick, A., & boyd, d. (2011). I tweet honestly, I tweet passionately: Twitter users, context collapse, and the imagined audience. New Media & Society, 13(1), 114–133.',
      'Horton, D., & Wohl, R. R. (1956). Mass communication and para-social interaction. Psychiatry, 19(3), 215–229.',
      'van Dijck, J. (2013). The culture of connectivity: A critical history of social media. Oxford University Press.',
      'Zhang, L., & Lin, S. (2022). Multi-platform content differentiation of Chinese female idols: A comparative analysis. Chinese Journal of Communication, 15(3), 312–330.',
    ],
  },
  {
    id: 'haidilao-crisis-audit',
    title: {
      en: 'Haidilao — Strategic Crisis Communication & Brand Resilience',
      zh: '海底捞 — 危机公关与品牌韧性机制分析',
    },
    badge: {
      en: 'Crisis PR & Coombs SCCT Theory',
      zh: '公关复盘与情境危机传播理论',
    },
    course: 'CMNS2530: Principles of Public Relations, University of Newcastle',
    year: '2024',
    leadStudent: 'Yu Yiqian (俞伊倩)',
    challenge: {
      en: 'In August 2017, investigative media exposed severe sanitary and rodent violations across two prominent Haidilao restaurants in Beijing. Classified under SCCT as a "Preventable Crisis" with severe organizational culpability, this incident threatened to destroy the very foundation of Haidilao’s world-renowned reputation for premium customer care.',
      zh: '2017年8月，权威媒体卧底暗访曝光海底捞北京两家门店严重的食品安全与后厨鼠患卫生问题。根据SCCT理论，此属于组织负有极高直接过错的“可防范型危机”，对以极致服务著称的火锅巨头带来毁灭性商誉冲击。',
    },
    methodology: {
      en: 'Evaluated official press statements, media sentiment cycles, and remediation milestones through Coombs’ Situational Crisis Communication Theory (SCCT, 2007) and Kent & Taylor’s Dialogic Theory (2002).',
      zh: '运用库姆斯的情境危机传播理论（SCCT, 2007）与肯特&泰勒的双向对话理论（2002），深度拆解海底捞官方应对公告、舆情拐点曲线与后续治理举措。',
    },
    theoreticalFramework: {
      en: 'Situational Crisis Communication Theory (Coombs, 2007): Matching crisis responsibility with appropriate crisis response strategies (rebuild vs. deny). Dialogic Communication Theory (Kent & Taylor, 2002): Restoring public legitimacy through two-way authentic engagement.',
      zh: '情境危机传播理论（SCCT）：将危机责任归因与组织应对策略严谨配对；双向对称对话理论（Dialogic Theory）：通过诚恳对话与信息对称重构组织合法性。',
    },
    scctFramework: {
      crisisType: {
        en: 'Preventable Crisis (可防范型危机) — Failures in internal supervision and food safety regulations.',
        zh: '可防范型危机（Preventable Crisis）— 内部管理失职与食品安全规程失控。',
      },
      responsibilityLevel: {
        en: 'High Organizational Responsibility (最高组织责任) — Reputational threat level: Critical.',
        zh: '最高组织归责度 — 声誉危机威胁等级：极度严重。',
      },
      companyResponse: [
        { en: 'Immediate Public Apology issued within hours acknowledging all facts.', zh: '数小时内火速发布致歉信，对媒体曝光事实全盘认领。' },
        { en: 'Accepted full corporate institutional liability: “The responsibility lies with the company rather than individual employees.”', zh: '确立全集团法人兜底原则：“责任在公司高层，严禁把锅甩给一线普通员工”。' },
        { en: 'Refrained from blaming whistleblowers, media reporters, or frontline staff.', zh: '坚决不攻击媒体、不封杀舆论、不上推下卸。' },
        { en: 'Immediate shutdown of affected stores and introduction of live-streamed "Sunshine Kitchens" (明厨亮灶).', zh: '涉事门店立即停业整顿，并火速上线后厨24小时实时监控直播。' },
      ],
      critique: {
        strengths: [
          { en: 'Fast Acknowledgement: Minimized uncertainty during golden 4-hour window.', zh: '黄金4小时快速认责，有力遏制次生谣言滋生。' },
          { en: 'Radical Accountability: Took the heat off vulnerable employees, reversing public outrage.', zh: '极度罕见的“护短一线、高层领罪”担当，极大逆转公众对立情绪。' },
          { en: 'Transparent Remediation: Publicly livestreamed inspection and kitchen renovations.', zh: '“明厨亮灶”工程彻底将后厨推向阳光化，用机制消除疑虑。' },
        ],
        weaknesses: [
          { en: 'Purely Reactive: The company only communicated after investigative journalism broke.', zh: '被动式应对：仅在媒体重磅曝光后才发声，缺乏常态化主动自查公示。' },
          { en: 'Limited Ongoing Updates: Few continuous progress reports during long-term remediation.', zh: '长期追踪沟通不足：在后续整改进度上缺少阶段性常态化简报。' },
          { en: 'One-way Broadcast: Relied predominantly on written static statements rather than two-way dialogue.', zh: '单向声明式传播居多：缺少与公众及消费者的交互式双向答疑对话。' },
        ],
      },
    },
    keyInsights: [
      {
        en: 'Coombs’ "Rebuild Strategy" executed impeccably: By accepting full organizational responsibility without scapegoating, Haidilao preserved core customer empathy.',
        zh: '完美践行了库姆斯的“重构策略”（Rebuild Strategy）：通过诚恳道歉与绝不转嫁责任，成功保全了核心消费者的情感容忍底线。',
      },
      {
        en: 'Speed and sincerity converted a potential corporate catastrophe into a celebrated benchmark in Chinese public relations history.',
        zh: '速度与真诚将一场足以毁灭品牌的公关灾难，逆势转化为中国公共关系史上经典的危机公关范本。',
      },
      {
        en: 'However, true brand resilience requires transitioning from "Crisis Response" to "Proactive Dialogic Transparency".',
        zh: '然而，真正的品牌韧性不能仅依赖危难时刻的灭火，必须转型为制度化、常态化的双向透明对话机制。',
      },
    ],
    recommendations: [
      {
        title: { en: 'Establish Regular Milestone Audits', zh: '建立定期食安公开审计机制' },
        description: {
          en: 'Provide scheduled monthly hygiene transparency reports across digital channels to maintain verifiable trust rather than reactive assurances.',
          zh: '在全媒体官方平台建立月度食品安全公开透明巡检专栏，用日常透明化代替突发危机应对。',
        },
        theorySupport: { en: 'Coombs (2007) Ongoing Crisis Communication', zh: 'Coombs (2007) 持续危机沟通机制' },
      },
      {
        title: { en: 'Strengthen Two-Way Social Listening', zh: '强化社媒双向对话与客诉即时响应' },
        description: {
          en: 'Replace formal broadcast PR statements with interactive customer dialogue, responsive comment desks, and open kitchen consumer tours.',
          zh: '摒弃冰冷的单向公关通稿，开通社交平台即时交互式客诉通道并组织消费者后厨监督团。',
        },
        theorySupport: { en: 'Kent & Taylor (2002) Dialogic Theory in Public Relations', zh: 'Kent & Taylor (2002) 公关双向对话理论' },
      },
    ],
    references: [
      'Coombs, W. T. (2007). Protecting organization reputations during a crisis: The development and application of situational crisis communication theory. Corporate Reputation Review, 10(3), 163–176.',
      'Kent, M. L., & Taylor, M. (2002). Toward a dialogic theory of public relations. Public Relations Review, 28(1), 21–37.',
      'Zhao, X. (2017). Case analysis of Haidilao crisis communication in the digital era. Journal of Media and Communication Studies, 9(4), 45–52.',
    ],
  },
];

export const PRODUCTION_PROCESSES: FilmProductionProcess[] = [
  {
    filmId: 'the-chase',
    filmTitle: {
      en: 'THE CHASE',
      zh: '追逐 · THE CHASE',
    },
    genre: {
      en: 'Action Chase Short (90 Seconds)',
      zh: '动作追逐微电影（90秒）',
    },
    overview: {
      en: 'Complete 5-stage production breakdown of The Chase, documenting how Frankie Yu steered idea incubation, prop pivoting, on-set crowd mitigation, external audio capture, and AI keyframe animation.',
      zh: '《追逐》全流程5阶段真实影视制作复盘：完整记录俞伊倩在编导构思、核心道具迭代、商场人流危机处理、同期抗噪收音与AI关键帧动画特效中的具体主导执行。',
    },
    stages: [
      {
        id: 'development',
        phaseNumber: '01',
        phase: { en: 'Development', zh: '前期创意孵化' },
        title: {
          en: 'Idea Brainstorming & Prop Pivoting',
          zh: '剧本头脑风暴与核心道具迭代',
        },
        description: {
          en: 'Initial brainstorming revolved around a rival student stealing a USB drive from the protagonist’s desk. However, test framing revealed that a tiny USB drive lacked visual impact on camera. Frankie led the creative pivot to a leather wallet as the central prop for immediate audience recognition and set the action in a dynamic, multi-level shopping mall.',
          zh: '最初剧本构思围绕同窗偷窃存有作业的U盘展开。但在实景试拍中，俞伊倩敏锐发现U盘在运动镜头中体积过小、视觉辨识度极低。她果断主导修改剧本，将核心道具替换为极具质感与视听冲击力的皮革钱包，并将取景地定在具备扶梯与回廊纵深感的现代化商业中心。',
        },
        frankieRole: {
          en: 'Scriptwriter, Director & Production Feasibility Lead',
          zh: '剧本主笔、导演执导、摄制可行性评估',
        },
        decisionsAndChallenges: [
          { en: 'Identified that small digital props (USB drives) create visual ambiguity on screen.', zh: '发现小型数码道具（U盘）在快速追逐画面中无法有效建立视觉焦点。' },
          { en: 'Decided to introduce an unexpected comedic twist ending to elevate viewer retention.', zh: '在剧本末尾构思意料之外的戏剧性反转，打破传统追逐套路。' },
          { en: 'Selected a public commercial shopping center to provide organic architectural obstacles.', zh: '选定商场作为核心场景，利用自动扶梯、人行动线构成天然阻碍。' },
        ],
        solutionsAndOutcomes: [
          { en: 'Switched main prop to a quilted leather wallet, maximizing camera readability.', zh: '将主道具确立为绗缝皮革钱包，大幅提高观众在动态奔跑中的视线追踪效率。' },
          { en: 'Drafted complete step-outline titled "ARTS1004 - The Missing Wallet (90s Chase Scene Storyboard)".', zh: '撰写完整剧本大纲《ARTS1004 - 失窃的钱包（90秒追逐场面分镜）》。' },
        ],
        visuals: [
          {
            url: '/assets/bts/chase_wallet_prop.png',
            caption: { en: 'Key Prop: Quilted leather wallet selected for maximum camera recognition', zh: '核心道具实拍：具有高视觉辨识度的皮质钱包' },
            type: 'props',
          },
          {
            url: '/assets/bts/chase_script_draft.png',
            caption: { en: 'First draft of the script: 3-Act structure (Misunderstanding, Chase, Twist)', zh: '第一版剧本手稿：三幕式结构（误会起因、狂奔追逐、结局反转）' },
            type: 'script',
          },
          {
            url: '/assets/bts/page_04.png',
            caption: { en: 'Reflective Journal Page 4: Project 1 Development slide', zh: '反思档案第4页：第一项目前期开发幻灯片' },
            type: 'slide',
          },
        ],
      },
      {
        id: 'pre-production',
        phaseNumber: '02',
        phase: { en: 'Pre-production', zh: '前期筹备与分镜统筹' },
        title: {
          en: 'Storyboard List, Role Allocation & Location Scouting',
          zh: '分镜镜头清单制定、人员分工与场地实勘',
        },
        description: {
          en: 'Frankie created a comprehensive shot list detailing shot sizes, angles, and lens types. Roles were formally assigned across the 5 crew members (directing, filming, audio, acting, continuity). Equipment was pre-tested, and an advance scouting trip to the mall was made to analyze lighting conditions, space dimensions, and pedestrian traffic patterns.',
          zh: '俞伊倩主导制定了详尽的镜头清单（Shot List），明确标注景别、机位角度与预估时长。对5人团队进行严密分工，确保拍摄日各司其职。器材提前调试完毕，并实地前往商场踩点，摸清自然采光、照明盲区、拍摄空间与高峰人流动向。',
        },
        frankieRole: {
          en: 'Director, Storyboard Artist & Production Coordinator',
          zh: '导演、分镜师、制片统筹',
        },
        decisionsAndChallenges: [
          { en: 'Ensuring smooth temporal continuity across 5 distinct acts within 90 seconds.', zh: '在90秒有限时长内确保5幕戏的镜头动作与时空连续。' },
          { en: 'Coordinating student schedules and managing heavy camera accessories on location.', zh: '协调学生团队档期，统筹外带脚架、稳定器及备用电池等器材。' },
        ],
        solutionsAndOutcomes: [
          { en: 'Engineered a bilingual Scene & Shot Table (Scenes 1-5, Shots 1-56 with exact durations).', zh: '整理制作双语场次镜头表（涵盖第1-5幕，精确到每一秒时长与机位要求）。' },
          { en: 'Pre-production planning dramatically cut confusion and allowed the team to film rapidly on set.', zh: '周密的前期规划彻底消除了现场沟通混乱，极大提升实拍效率。' },
        ],
        visuals: [
          {
            url: '/assets/bts/chase_shotlist_table.png',
            caption: { en: 'Detailed Storyboard Shot List table mapping scene beats and shot timings', zh: '分镜清单实拍：包含景别、动作描述与拍摄秒数' },
            type: 'storyboard',
          },
          {
            url: '/assets/bts/page_05.png',
            caption: { en: 'Reflective Journal Page 5: Pre-production photographic apparatus & scouting', zh: '反思档案第5页：前期摄制设备筹备与场地规划' },
            type: 'slide',
          },
        ],
      },
      {
        id: 'production',
        phaseNumber: '03',
        phase: { en: 'Production', zh: '现场实拍与抗噪排障' },
        title: {
          en: 'Public Mall Filming, Dynamic Tracking & External Audio Rig',
          zh: '商场公共空间跟拍、动态运镜与指向性麦克风收音',
        },
        description: {
          en: 'Filming in an active commercial mall presented severe real-world challenges: persistent bystander interference, sudden pedestrian crossings, camera shake during fast running tracking, and echoing mall acoustics. Frankie directed multiple camera angles, adjusted actor paths away from congested corridors, and deployed an external microphone to ensure crisp, clean audio capture.',
          zh: '在运营中的公共商业综合体拍摄面临严酷挑战：背景路人频繁穿镜入画、高速奔跑导致画面抖动剧烈、中庭高挑空间产生严重混响回声。俞伊倩现场迅速应变，指导演员避开主通道转向侧廊，亲自调整跟拍机位，并紧急部署外接专业指向性麦克风，强力隔离环境杂音。',
        },
        frankieRole: {
          en: 'On-Set Director & Camera Operator',
          zh: '现场执导、掌机摄影',
        },
        decisionsAndChallenges: [
          { en: 'Uncontrollable mall crowds and background passers-by ruining takes.', zh: '商场顾客意外入镜导致成片穿帮。' },
          { en: 'High running velocity causing severe handheld shake.', zh: '高速追逐跟拍下镜头出现不可控剧烈抖动。' },
          { en: 'Noisy public mall acoustics drowning out vital sound cues.', zh: '商场广播与人声嘈杂，难以收录清晰的原声细节。' },
        ],
        solutionsAndOutcomes: [
          { en: 'Rigged external directional condenser microphone, isolating clean footsteps and heavy panting.', zh: '架设外接收音设备，精准采集沉重喘息声与踏步声等关键拟音。' },
          { en: 'Switched to low-angle Dutch tilts and gimbal stabilization, shooting multiple extra takes for editorial safety.', zh: '改用低机位倾斜构图与稳定器辅助，补拍大量安全覆盖镜头。' },
        ],
        visuals: [
          {
            url: '/assets/bts/chase_mall_shoot.png',
            caption: { en: 'On-set production photographs: Escalator tracking and mall corridor chase', zh: '实拍现场花絮：商场扶梯追逐、长廊俯仰运镜与剧组调度' },
            type: 'photo',
          },
          {
            url: '/assets/bts/page_06.png',
            caption: { en: 'Reflective Journal Page 6: Production challenges, audio recording & problem solving', zh: '反思档案第6页：现场挑战、现场收音与应变排障' },
            type: 'slide',
          },
        ],
      },
      {
        id: 'post-production',
        phaseNumber: '04',
        phase: { en: 'Post-production', zh: '后期剪辑与视效调色' },
        title: {
          en: 'Pacing Sculpting & AI Flying Wallet Keyframe Animation',
          zh: '节奏打磨与AI抠像飞行动画特效合成',
        },
        description: {
          en: 'In post-production, Frankie tackled pacing issues stemming from a lack of wide shots. She experimented with rhythm cuts and escalating tension music. A major technical highlight was creating the slow-motion "flying wallet" effect using AI masking, picture-in-picture multi-tracking, and bezier keyframe animation.',
          zh: '后期制作中，面对前期全景交代镜头略显不足的局限，俞伊倩通过调整剪辑节奏与重音卡点化解难题。她为追逐段落铺设层层递进的紧张声效，并创新运用AI智能抠像、画中画多轨道叠加与贝塞尔关键帧动画，成功打造出钱包在半空中慢镜头回旋飞行的招牌视效。',
        },
        frankieRole: {
          en: 'Lead Picture Editor, Sound Designer & VFX Artist',
          zh: '主剪辑师、声音设计、视效合成',
        },
        decisionsAndChallenges: [
          { en: 'Transitions felt abrupt due to scarce wide coverage.', zh: '前期全景不足导致部分切镜转场较为突兀。' },
          { en: 'Needed an arresting visual climax for the wallet toss.', zh: '反转高潮需要一个极具视觉冲击力的钱包滞空特写。' },
        ],
        solutionsAndOutcomes: [
          { en: 'Sculpted dynamic cut pacing with jump cuts and action matches.', zh: '采用动作匹配剪辑（Match Cut）与跳剪强化速度快感。' },
          { en: 'Mastered advanced AI masking and multi-track keyframing in CapCut/Jianying.', zh: '熟练掌握并落地剪映AI抠像与多轨关键帧动画技术，极大提升后期制作自信。' },
        ],
        visuals: [
          {
            url: '/assets/bts/chase_capcut_edit.png',
            caption: { en: 'Jianying / CapCut timeline screenshots: Multi-track audio and flying wallet animation', zh: '剪映工程多轨道时间线截图：音画同步、多轨调色与AI动画特效' },
            type: 'timeline',
          },
          {
            url: '/assets/bts/page_07.png',
            caption: { en: 'Reflective Journal Page 7: Post-production editing challenges and new techniques', zh: '反思档案第7页：后期挑战与AI特效技术学习' },
            type: 'slide',
          },
        ],
      },
      {
        id: 'reflection',
        phaseNumber: '05',
        phase: { en: 'Reflection', zh: '结案反思与学术手记' },
        title: {
          en: 'Critical Takeaways & Collaborative Mastery',
          zh: '导演自省复盘与团队协同收获',
        },
        description: {
          en: '“Looking back, I am proud of what our group achieved within a limited timeframe. Although there were several challenges during filming and editing, we successfully produced a short film that effectively told a story through visual storytelling. If I had the opportunity to revisit this project, I would capture more wide shots and experiment with a greater variety of camera angles. Overall, The Chase strengthened my skills in directing, filming, and editing while teaching me the importance of collaboration and adaptability.”',
          zh: '“回望这次创作，我对团队在有限时间里交出的答卷感到骄傲。虽然在现场摄制与后期遇到了人流、收音和剪辑节奏的诸多挑战，但我们成功通过纯粹的视听语言讲述了一个完整且引人入胜的故事。若能重拍，我会补充更多全景交代镜头并探索更丰富的构图角度。《追逐》切实锤炼了我的编导、摄影与剪辑实战能力，更让我深刻体会到团队协作与即时应变的核心价值。”',
        },
        frankieRole: {
          en: 'Director / Group Leader',
          zh: '导演 / 组长',
        },
        decisionsAndChallenges: [
          { en: 'Synthesizing team ideas under a rigid production deadline.', zh: '在严格的课业截止期内汇聚并统一全组创意。' },
        ],
        solutionsAndOutcomes: [
          { en: 'Delivered an engaging 90-second action comedy short with full visual credits.', zh: '成功交付一部叙事完整的高质量90秒追逐微电影，并完整列入主创成员学分名单。' },
        ],
        visuals: [
          {
            url: '/assets/bts/chase_title_still.png',
            caption: { en: 'The Missing Wallet title card and full crew credit roll', zh: '成片《失窃的钱包》片名标题卡与主创成员演职员表' },
            type: 'slide',
          },
          {
            url: '/assets/bts/page_08.png',
            caption: { en: 'Reflective Journal Page 8: Project 1 Reflection slide', zh: '反思档案第8页：第一项目学术反思总结' },
            type: 'slide',
          },
        ],
      },
    ],
  },
  {
    filmId: 'blind-spot',
    filmTitle: {
      en: 'BLIND SPOT',
      zh: '盲区 · BLIND SPOT',
    },
    genre: {
      en: 'Neo-Noir Short Film (180 Seconds)',
      zh: '新黑色电影 / 悬疑短片（180秒）',
    },
    overview: {
      en: 'Complete 5-stage production breakdown of Blind Spot ("The Cover Up"), documenting Frankie Yu’s neo-noir directing, zero-dialogue visual planning, night parking garage cinematography, and symbolic weather transition VFX.',
      zh: '《盲区》（The Cover Up）全流程5阶段影视制作复盘：完整记录俞伊倩在新黑色电影美学执导、零对白视觉构思、通宵地下车库暗光调度、色彩分级与象征正义的阴晴转场特效中的全案实操。',
    },
    stages: [
      {
        id: 'development',
        phaseNumber: '01',
        phase: { en: 'Development', zh: '前期创意孵化' },
        title: {
          en: 'Neo-Noir Conventions & Dual Identity Narrative',
          zh: '新黑色电影类型确立与双重身份叙事',
        },
        description: {
          en: 'Inspired by class lectures on film noir and neo-noir, the team explored the premise of "concealing a truth". Frankie crafted a narrative around a female protagonist with a dual identity: viewers initially suspect she is involved in criminal transactions, only to uncover that she is a brave undercover investigator exposing a drug dealer to avenge her friend’s death. Designed with non-linear flashbacks and a poetic weather shift.',
          zh: '灵感源于对经典黑色电影与新黑色电影（Neo-Noir）类型特质的系统研读。俞伊倩主导构思以“隐瞒真相”为核心主旨，打造具有双重身份的复杂女性主角：起初观众误以为她是冷酷的反派罪犯，随着叙事层层推进，才揭晓她实为孤身卧底取证、告慰亡友的正义使者。融入非线性闪回与阴雨转晴的象征性结局。',
        },
        frankieRole: {
          en: 'Concept Originator, Screenwriter & Director',
          zh: '概念主创、编剧构想、导演执导',
        },
        decisionsAndChallenges: [
          { en: 'Embraced the strict artistic rule of ZERO spoken dialogue, demanding 100% visual storytelling.', zh: '确立“全片无台词”的高难度艺术规约，全盘依靠纯视觉符号推动情节。' },
          { en: 'Structured non-linear temporal flashbacks to create misdirection and suspense.', zh: '设计碎片化非线性倒叙与闪回，巧妙误导受众预设。' },
          { en: 'Conceptualized a weather transition from gloomy rain to radiant sunshine at the climax.', zh: '构思结局由暴雨阴霾平滑化作暖阳破晓的视觉转折，隐喻正义与希望。' },
        ],
        solutionsAndOutcomes: [
          { en: 'Finalized complete script outline "Project 2: The Cover Up (Blind Spot)".', zh: '敲定完整剧本大纲《Project 2: The Cover Up（盲区）》。' },
          { en: 'Locked in the moral ambiguity theme: "Appearances can be deceiving."', zh: '锁定“表象往往极具欺骗性”的核心哲学母题。' },
        ],
        visuals: [
          {
            url: '/assets/bts/page_09.png',
            caption: { en: 'Reflective Journal Page 9: The Making of Blind Spot development slide', zh: '反思档案第9页：《盲区》前期概念演进幻灯片' },
            type: 'slide',
          },
        ],
      },
      {
        id: 'pre-production',
        phaseNumber: '02',
        phase: { en: 'Pre-production', zh: '前期筹备与分镜统筹' },
        title: {
          en: 'Zero-Dialogue Storyboard Blueprint & Low-Key Lighting Tests',
          zh: '零对白视觉分镜长卷绘制与低调光测试',
        },
        description: {
          en: 'Because Blind Spot had zero dialogue, Frankie’s storyboard and shot list carried the entire burden of visual communication. She drafted structured scene breakdowns: Scene 1 Misdirection (0:00-0:35), Scene 2 Truth Surfaces (0:35-1:05), Scene 3 Flashback (1:05-1:35). Props like phones, cameras, and overcoats were selected to support the neo-noir atmosphere.',
          zh: '由于全片摒弃任何台词，分镜设计成为本片成败的命门。俞伊倩亲手梳理出三大核心序列：第1幕开场误导（0:00-0:35）、第2幕真相开始浮现（0:35-1:05）、第3幕真相闪回（1:05-1:35）。严格规划机位、光斑与大衣、智能手机、相机等关键道具的隐喻交互。',
        },
        frankieRole: {
          en: 'Lead Storyboard Artist, Director & Lighting Coordinator',
          zh: '主分镜师、导演执导、灯光测试统筹',
        },
        decisionsAndChallenges: [
          { en: 'Every character reaction, eyeline, and lighting shadow had to be storyboarded beforehand.', zh: '每一个微表情、视线方向与阴影切割位置都必须提前在纸面精准规划。' },
          { en: 'Coordinating night shoot schedules and actor costumes for low-key noir lighting.', zh: '协调多位演员通宵夜戏档期，并针对暗调冷光挑选服化道。' },
        ],
        solutionsAndOutcomes: [
          { en: 'Constructed an exhaustive shot table with camera movements and actor actions.', zh: '建立严谨的分镜镜头清单（包含景别、时长与动作演练指引）。' },
          { en: 'Secured concrete basement and parking garage locations for authentic neo-noir mood.', zh: '锁定工业水泥质感的地下车库与街区暗巷作为核心拍摄点。' },
        ],
        visuals: [
          {
            url: '/assets/bts/blindspot_shotlist_table.png',
            caption: { en: 'Blind Spot Scene & Shot breakdown table (Scenes 1-3)', zh: '《盲区》分镜清单实拍：第1幕误导、第2幕真相浮现、第3幕闪回' },
            type: 'storyboard',
          },
          {
            url: '/assets/bts/page_10.png',
            caption: { en: 'Reflective Journal Page 10: Pre-production and storyboard list slide', zh: '反思档案第10页：前期筹备与分镜统筹幻灯片' },
            type: 'slide',
          },
        ],
      },
      {
        id: 'production',
        phaseNumber: '03',
        phase: { en: 'Production', zh: '现场实拍与暗光调度' },
        title: {
          en: 'Night Multi-Location Shooting & Parking Garage Cinematography',
          zh: '通宵多场景辗转实拍与地下车库暗光电影感运镜',
        },
        description: {
          en: 'Filming Blind Spot was far more complex than The Chase due to multi-location night filming, extreme low-light exposure control, and coordinating the schedules of all 5 team members. Frankie paid meticulous attention to lighting contrast, sharp directional silhouettes, and character movements around parked vehicles to build psychological suspense.',
          zh: '《盲区》现场摄制难度大幅攀升：需要在多个夜景地点连夜转场，攻克暗光噪点与低照度曝光，严密统筹5名组员的通宵配合。俞伊倩对现场照明对比度、硬光剪影与车辆掩映下的人物动线进行了细致雕琢，通过多次反复重拍打磨演员之间剑拔弩张的心理对峙。',
        },
        frankieRole: {
          en: 'Director of Photography (DP) & Director',
          zh: '摄影指导（DP）、导演执行',
        },
        decisionsAndChallenges: [
          { en: 'Operating cinema cameras in dark underground parking environments without noise.', zh: '在昏暗的地下车库环境中控制噪点并保持画质纯净度。' },
          { en: 'Refilming subtle gestures multiple times to ensure emotional ambiguity.', zh: '为了呈现扑朔迷离的善恶模糊感，对细微眼神与交接动作进行反复实测。' },
        ],
        solutionsAndOutcomes: [
          { en: 'Disciplined crew communication allowed the team to complete all night scenes on schedule.', zh: '团队保持严密协同沟通，克服寒夜疲惫，准时完成所有高难度夜戏剧本。' },
          { en: 'Mastered cinematic vehicle reflections and sodium lamp lighting setups.', zh: '精妙运用车身反光与钠灯光斑，营造纯正的电影感质感。' },
        ],
        visuals: [
          {
            url: '/assets/bts/blindspot_garage_crew.png',
            caption: { en: 'On-set production photo: Underground garage night shoot with white vehicle blocking', zh: '实拍现场花絮：地下车库夜戏剧组调度、车辆掩体与演员对峙排练' },
            type: 'photo',
          },
          {
            url: '/assets/bts/page_11.png',
            caption: { en: 'Reflective Journal Page 11: Production challenges and director reflection slide', zh: '反思档案第11页：现场拍摄挑战与团队协作心得' },
            type: 'slide',
          },
        ],
      },
      {
        id: 'post-production',
        phaseNumber: '04',
        phase: { en: 'Post-production', zh: '后期剪辑与视效调色' },
        title: {
          en: 'Neo-Noir Color Grading & Weather Metaphor Transition',
          zh: '冷峻电影感调色与阴晴转场象征视效',
        },
        description: {
          en: 'During post-production, Frankie color graded the footage into low-key neo-noir shadows using dark tones and controlled highlight rolloff. She added subtle fade transitions and tension-inducing score. Her favorite detail was the seamless weather transition from thunderstorm clouds into warm golden sunshine at the climax, symbolising hope, closure, and justice.',
          zh: '后期制作中，俞伊倩将调色重点锁定在冷峻压抑的新黑色电影影调上，压低暗部并精细还原皮肤反光。运用淡入淡出转场与悬疑配乐衔接时空。全片点睛之笔是在结尾高潮处，细致打磨从暴雨阴云平滑过渡至金色晨曦的动态转场，极具视觉隐喻冲击力。',
        },
        frankieRole: {
          en: 'Lead Colorist, Editor & Post-Production Designer',
          zh: '主调色师、主剪辑、后期视效设计',
        },
        decisionsAndChallenges: [
          { en: 'Balancing dark shadow details without crushing essential plot evidence on mobile screens.', zh: '平衡暗部细节与层次，防止屏幕呈现时关键物证被死黑吞没。' },
          { en: 'Seamlessly executing the cloudy-to-sunny weather changeover.', zh: '让乌云化作晴空的转场自然流畅，契合叙事终局。' },
        ],
        solutionsAndOutcomes: [
          { en: 'Applied Arri LogC3 emulation curves and before/after color correction adjustments.', zh: '应用Arri LogC3电影感调色曲线，完成了精细的校色与二级分级。' },
          { en: 'Proved that post-production is not merely technical, but an essential driver of visual storytelling.', zh: '深刻体悟到剪辑不仅是技术工种，更是视听叙事再创作的灵魂。' },
        ],
        visuals: [
          {
            url: '/assets/bts/blindspot_color_weather.png',
            caption: { en: 'Before/after color correction comparison & weather changeover process', zh: '调色前后对比时间线、标题卡与阴雨转晴动态视效过程' },
            type: 'timeline',
          },
          {
            url: '/assets/bts/page_12.png',
            caption: { en: 'Reflective Journal Page 12: Post-production color grading & sound design slide', zh: '反思档案第12页：后期调色、音效与视觉象征' },
            type: 'slide',
          },
        ],
      },
      {
        id: 'reflection',
        phaseNumber: '05',
        phase: { en: 'Reflection', zh: '结案反思与学术手记' },
        title: {
          en: 'Poster Semiotics & "What You See Is Not Always the Truth"',
          zh: '海报符号学解析与“眼见非实”主旨升华',
        },
        description: {
          en: '“Blind Spot was the most challenging and rewarding project I completed this semester. I am particularly proud of the film’s neo-noir style, non-linear narrative, and use of visual symbolism to communicate themes of justice and hope... Blind Spot was the highlight of my semester and marked an important step in my development as a filmmaker.”',
          zh: '“《盲区》是我本学期完成的最具挑战性也最有成就感的作品。我尤为自豪于全片沉浸的Neo-Noir质感、精巧的非线性叙事，以及用视觉隐喻表达正义与希望的深度探索。面对夜戏调度、暗光噪点与复杂剪辑等现实阻碍，我在即时排障中真正树立起作为导演和主剪辑的信心。《盲区》是我学期的高光之作，更是我通往专业影像创作者道路上的坚实里程碑。”',
        },
        frankieRole: {
          en: 'Director & Poster Designer',
          zh: '导演、海报视觉主创',
        },
        decisionsAndChallenges: [
          { en: 'Designing a compelling theatrical poster communicating deceptive appearances.', zh: '设计具有院线质感且深度暗藏剧情玄机的电影海报。' },
        ],
        solutionsAndOutcomes: [
          { en: 'Encoded key props into the poster: phone = digital evidence; camera = uncovering truth; background silhouettes = approaching police justice.', zh: '将核心道具融入海报符号：手机=关键铁证，挂颈相机=记录真相天职，背景两道暗影=警力法网。' },
          { en: 'Celebrated team achievements under the course theme: "Creativity stems from collaboration."', zh: '以“创意源自协作”为结案注脚，为学期创作画上圆满句号。' },
        ],
        visuals: [
          {
            url: '/assets/bts/blindspot_poster.png',
            caption: { en: 'Official theatrical poster: "What you see is not always the truth"', zh: '官方海报实拍：“眼见非实，真相隐匿”' },
            type: 'poster',
          },
          {
            url: '/assets/bts/team_reflection.png',
            caption: { en: 'Production crew behind-the-scenes and collaboration moments', zh: '剧组成员工作照与“创意源自协作”学术结案反思' },
            type: 'photo',
          },
          {
            url: '/assets/bts/page_13.png',
            caption: { en: 'Reflective Journal Page 13: Poster design & visual semiotics slide', zh: '反思档案第13页：海报设计与视觉符号解析' },
            type: 'slide',
          },
          {
            url: '/assets/bts/page_14.png',
            caption: { en: 'Reflective Journal Page 14: Project 2 Reflection slide', zh: '反思档案第14页：第二项目反思总结' },
            type: 'slide',
          },
        ],
      },
    ],
  },
];

