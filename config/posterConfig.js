// 海报配置文件
window.posterConfig = {
  title: "全门派核心助战一览",
  titleFontSize: 32,
  isTitleBold: true,
  showBg: true,
  showTextEffect: true,
  titleBgStyle: "bg-none",
  titleTextStyle: "ts-blue-yellow",
  displayMode: "mode-tree", // 默认模式
  bgImage: "imgs/bg/1.jpg",
  bgCount: 6,
  avatarSize: 40, // 默认头像大小
  // 🌟 升级版数据结构：支持子级 children
  items: [
    {
      name: "四大输出门派",
      desc: "追求极致暴力美学",
      nameColor: "color-pink",
      subItemNameColor: "color-black",
      nameFontSize: 21,
      subItemNameFontSize: 14,
      cardCollapsed: true,
      avatar: null,
      children: [
        //不要动这里！先暂时注释！需要我自己会打开！
        // { name: "大唐官府 - 扫地僧" },
        // { name: "狮驼岭 - 青狮王" },
      ],
    },
    {
      name: "辅助系核心",
      desc: "稳住血线是第一要素",
      nameColor: "color-blue",
      subItemNameColor: "color-black",
      nameFontSize: 21,
      subItemNameFontSize: 14,
      cardCollapsed: true,
      avatar: null,
      children: [
        //不要动这里！先暂时注释！需要我自己会打开！
        // { name: "普陀山 - 观音姐姐" },
        // { name: "化生寺 - 空度禅师" },
      ],
    },
  ],
};

// ============================
// 梦幻西游手游 多版本海报配置
// 所有封面 = 一个对象包裹，干净整洁
// 使用：posterConfigs.v1 / posterConfigs.v2 ...
// ===========================

// ============================
// 使用示例：
// 1. 使用原始版本：window.posterConfigs.v1
// 2. 使用新版对比攻略：window.posterConfigsV2.v1
// 3. 混合使用：可以随机选择两个版本的配置
// ===========================

// 示例：随机选择配置版本
// const allConfigs = [...Object.values(window.posterConfigs), ...Object.values(window.posterConfigsV2)];
// const randomConfig = allConfigs[Math.floor(Math.random() * allConfigs.length)];=


window.posterConfigsV2 = {
  // ============================
  // 梦幻西游手游 攻略对比版 V2
  // 专为抖音图文设计 - 对比类内容，激发评论讨论
  // 不要白色字体！强调对比和争议性内容
  // ============================

  // v1：门派强度排行榜（争议性话题）
  v1: {
    title: "🔥梦幻门派强度榜 你认同吗？",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-fire",
    titleTextStyle: "ts-bold-black",
    displayMode: "mode-grid",
    bgImage: "imgs/bg/1.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "T0 版本答案",
        desc: "氪金天花板 竞技场霸主",
        subItemNameColor: "color-black",
        nameColor: "color-gold",
        nameFontSize: 21,
        children: [
          { name: "大唐官府 - 单体爆发天花板" },
          { name: "龙宫 - 群体伤害永不过时" },
          { name: "普陀山 - 没有普陀的队不配打高难" }
        ],
      },
      {
        name: "T1 强势选择",
        desc: "万金油 适合大部分玩家",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [
          { name: "方寸山 - 封印流核心 先手必胜" },
          { name: "化生寺 - 群体治疗 团队必备" },
          { name: "狮驼岭 - 面伤爆炸 清场机器" }
        ],
      },
      {
        name: "T2 特色玩法",
        desc: "特定阵容 娱乐性拉满",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [
          { name: "女儿村 - 毒伤流 磨死人不偿命" },
          { name: "魔王寨 - 法爆流 脸好直接起飞" },
          { name: "阴曹地府 - 毒+减疗 战术大师" }
        ],
      },
      {
        name: "T3 情怀选择",
        desc: "老玩家信仰 实战略显尴尬",
        subItemNameColor: "color-black",
        nameColor: "color-gray",
        nameFontSize: 21,
        children: [
          { name: "天宫 - 曾经的神 现在的回忆" },
          { name: "五庄观 - 封印+输出 定位尴尬" },
          { name: "神木林 - 法系备胎 出场率低" }
        ],
      },
    ],
  },

  // v2：助战选择终极对比（引发争论）
  v2: {
    title: "⚔️ 助战选择困难症？终极对比！",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-metal",
    titleTextStyle: "ts-tech-glow",
    displayMode: "mode-card-group",
    bgImage: "imgs/bg/2.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "物理队 VS 法系队",
        desc: "到底哪个更强？",
        subItemNameColor: "color-black",
        nameColor: "color-red",
        nameFontSize: 21,
        children: [
          { name: "物攻优势：点杀能力强 克制脆皮" },
          { name: "法攻优势：群体伤害 清场快" },
          { name: "PVP推荐：物攻单点突破" },
          { name: "PVE推荐：法攻效率第一" }
        ],
      },
      {
        name: "治疗 VS 封印",
        desc: "队伍第5人选择难题",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [
          { name: "治疗优势：续航稳定 容错率高" },
          { name: "封印优势：先手控制 改变战局" },
          { name: "新手推荐：治疗保命优先" },
          { name: "高手推荐：封印打节奏" }
        ],
      },
      {
        name: "纯输出 VS 半辅助",
        desc: "伤害还是功能？",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        children: [
          { name: "纯输出：伤害爆炸 但脆皮" },
          { name: "半辅助：伤害稍低 但能保命" },
          { name: "地煞紫薇：半辅助更稳" },
          { name: "日常任务：纯输出更快" }
        ],
      },
      {
        name: "氪金 VS 白嫖",
        desc: "平民玩家出路在哪？",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [
          { name: "氪金助战：属性碾压 技能豪华" },
          { name: "平民助战：培养得当 也能一战" },
          { name: "推荐搭配：2氪金+3平民" },
          { name: "核心思路：扬长避短 发挥特色" }
        ],
      },
    ],
  },

  // v3：宠物技能性价比排行（实用向）
  v3: {
    title: "💰 宠物技能性价比排行！血泪总结",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-gold",
    titleTextStyle: "ts-fire",
    displayMode: "mode-step",
    bgImage: "imgs/bg/3.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "S级 必打技能",
        desc: "没有这些技能别想毕业！",
        subItemNameColor: "color-black",
        nameColor: "color-gold",
        nameFontSize: 21,
        children: [
          { name: "高级神佑：保命神技 所有宠通用" },
          { name: "高级偷袭：物攻核心 免反震+增伤" },
          { name: "高级魔心：法系必备 稳定增伤20%" }
        ],
      },
      {
        name: "A级 强烈推荐",
        desc: "性价比超高 强烈推荐！",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [
          { name: "高级必杀：物攻暴击+20% 爆发拉满" },
          { name: "高级法爆：法系天花板 暴击率翻倍" },
          { name: "高级强壮：气血+10% 所有宠受益" }
        ],
      },
      {
        name: "B级 实用选择",
        desc: "特定场合很强 但不是必须",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [
          { name: "高级吸血：续航必备 但PVP被禁" },
          { name: "高级连击：55%概率连击 性价比高" },
          { name: "高级法连：21%概率二连 清场利器" }
        ],
      },
      {
        name: "C级 可有可无",
        desc: "锦上添花 优先级最低",
        subItemNameColor: "color-black",
        nameColor: "color-gray",
        nameFontSize: 21,
        children: [
          { name: "高级毒：磨血用 但伤害太低" },
          { name: "高级幸运：抗暴击 实际效果一般" },
          { name: "高级反震：战术技能 使用率低" }
        ],
      },
    ],
  },

  // v4：阵法克制关系详解（策略向）
  v4: {
    title: "🎯 阵法克制全解析！胜负关键在这里",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-ice",
    titleTextStyle: "ts-ice-crystal",
    displayMode: "mode-timeline",
    bgImage: "imgs/bg/4.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "天覆阵 VS 地载阵",
        desc: "攻击 VS 防御 谁更胜一筹？",
        subItemNameColor: "color-black",
        nameColor: "color-red",
        nameFontSize: 21,
        children: [
          { name: "天覆：伤害+25% 速度-25% 暴力首选" },
          { name: "地载：伤害-25% 防御+25% 铁桶阵" },
          { name: "克制关系：天覆克地载 伤害+5%" },
          { name: "实战建议：输出队选天覆 辅助队选地载" }
        ],
      },
      {
        name: "风扬阵 VS 云垂阵",
        desc: "速度 VS 防御 节奏掌控者",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [
          { name: "风扬：1号位伤害+20% 速度+15%" },
          { name: "云垂：1号位伤害-20% 防御+30%" },
          { name: "克制关系：风扬克云垂 伤害+5%" },
          { name: "实战建议：封印队选风扬 持久战选云垂" }
        ],
      },
      {
        name: "虎翼阵 VS 龙飞阵",
        desc: "物攻 VS 法攻 专精路线",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        children: [
          { name: "虎翼：1号位物伤+30% 其他+10%" },
          { name: "龙飞：1号位法伤+30% 其他+10%" },
          { name: "克制关系：虎翼克龙飞 伤害+5%" },
          { name: "实战建议：物攻队选虎翼 法攻队选龙飞" }
        ],
      },
      {
        name: "鸟翔阵 VS 蛇蟠阵",
        desc: "全速 VS 法防 极端选择",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [
          { name: "鸟翔：全速+20% 先手必胜" },
          { name: "蛇蟠：法防+20% 抗法神器" },
          { name: "克制关系：鸟翔克蛇蟠 速度+5%" },
          { name: "实战建议：抢速选鸟翔 抗法选蛇蟠" }
        ],
      },
    ],
  },

  // v5：装备打造优先级争议（引发讨论）
  v5: {
    title: "⚒️ 装备打造优先级！萌新最容易踩的坑",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-metal",
    titleTextStyle: "ts-bold-black",
    displayMode: "mode-waterfall",
    bgImage: "imgs/bg/5.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "武器 VS 衣服",
        desc: "哪个优先级更高？争议最大！",
        subItemNameColor: "color-black",
        nameColor: "color-red",
        nameFontSize: 21,
        children: [
          { name: "武器优势：直接影响伤害 提升明显" },
          { name: "衣服优势：双防+气血 生存保障" },
          { name: "输出门派：优先武器 伤害就是一切" },
          { name: "辅助门派：优先衣服 活着才能治疗" }
        ],
      },
      {
        name: "头盔 VS 鞋子",
        desc: "法防 VS 速度 选择困难症",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [
          { name: "头盔优势：法防提升 抗法系利器" },
          { name: "鞋子优势：速度决定 先手必胜" },
          { name: "PVP玩家：鞋子优先 速度就是生命" },
          { name: "PVE玩家：头盔优先 法防更实用" }
        ],
      },
      {
        name: "项链 VS 腰带",
        desc: "法伤 VS 气血 法系纠结",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        children: [
          { name: "项链优势：法伤直接提升 输出核心" },
          { name: "腰带优势：气血增加 生存提升" },
          { name: "暴力法系：项链优先 追求极限伤害" },
          { name: "稳健法系：腰带优先 保证存活率" }
        ],
      },
      {
        name: "灵饰选择",
        desc: "星辉石投资重点！",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [
          { name: "戒指：主属性最重要 直接加伤害" },
          { name: "耳饰：法伤法爆 法系核心" },
          { name: "手镯：气血法防 生存关键" },
          { name: "配饰：速度封印 功能性选择" }
        ],
      },
    ],
  },

  // v6：日常活动收益对比（实用攻略）
  v6: {
    title: "⏰ 日常活动收益对比！时间花在哪最值？",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-emerald",
    titleTextStyle: "ts-matcha",
    displayMode: "mode-column",
    bgImage: "imgs/bg/6.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "银币收益排行",
        desc: "缺银币看这里！",
        subItemNameColor: "color-black",
        nameColor: "color-gold",
        nameFontSize: 21,
        children: [
          { name: "1. 押镖：稳定收益 每日必做" },
          { name: "2. 师门：简单快捷 奖励丰厚" },
          { name: "3. 宝图：看脸时代 可能暴富" },
          { name: "4. 副本：综合收益 但耗时较长" }
        ],
      },
      {
        name: "经验收益排行",
        desc: "冲级玩家必看！",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [
          { name: "1. 主线任务：经验海量 优先完成" },
          { name: "2. 捉鬼：稳定挂机 适合上班族" },
          { name: "3. 副本：经验+物品 一举两得" },
          { name: "4. 日常任务：细水长流 积少成多" }
        ],
      },
      {
        name: "金币获取方式",
        desc: "土豪玩家的秘密",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [
          { name: "1. 摆摊：倒卖物品 需要眼光" },
          { name: "2. 工坊：专业技能 稳定收入" },
          { name: "3. 活动：限时奖励 错过等一周" },
          { name: "4. 充值：最快方式 但不推荐" }
        ],
      },
      {
        name: "时间投入建议",
        desc: "不同玩家的选择",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        children: [
          { name: "上班族：师门+押镖 1小时内搞定" },
          { name: "学生党：捉鬼+副本 时间充裕" },
          { name: "土豪：直接购买 省时省力" },
          { name: "平民：精打细算 细水长流" }
        ],
      },
    ],
  },

  // v7：门派加点方案对比（争议话题）
  v7: {
    title: "📊 门派加点方案大对比！哪个最适合你？",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-purple",
    titleTextStyle: "ts-aurora",
    displayMode: "mode-list",
    bgImage: "imgs/bg/1.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "大唐官府加点",
        desc: "暴力还是生存？世纪难题！",
        subItemNameColor: "color-black",
        nameColor: "color-red",
        nameFontSize: 21,
        children: [
          { name: "5力：极致暴力 一刀999" },
          { name: "4力1耐：平衡发展 适合PVP" },
          { name: "2敏3力：抢速输出 先手必胜" },
          { name: "争议点：没有最完美 只有最适合" }
        ],
      },
      {
        name: "龙宫加点",
        desc: "法伤还是生存？法系的选择",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [
          { name: "5魔：法伤天花板 脆皮玻璃大炮" },
          { name: "4魔1耐：经典搭配 攻守兼备" },
          { name: "3魔1耐1体：生存法系 持久作战" },
          { name: "争议点：5魔党 VS 生存党 永无止境" }
        ],
      },
      {
        name: "普陀山加点",
        desc: "治疗还是辅助？奶妈的定位",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        children: [
          { name: "3耐2体：钢板普陀 生存第一" },
          { name: "2耐2体1敏：速度治疗 先手加血" },
          { name: "1耐2体2敏：极速普陀 但太脆" },
          { name: "争议点：活着才能治疗 VS 速度决定一切" }
        ],
      },
      {
        name: "方寸山加点",
        desc: "速度还是生存？封印师的两难",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [
          { name: "4敏1耐：极速封印 先手必胜" },
          { name: "3敏1耐1体：平衡封印 攻守兼备" },
          { name: "2敏2耐1体：生存封印 持久作战" },
          { name: "争议点：速度就是一切 VS 活着才能封印" }
        ],
      },
    ],
  },

  // v8：宝宝培养路线对比（新手指导）
  v8: {
    title: "🐾 宝宝培养路线对比！平民VS土豪",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-sunset",
    titleTextStyle: "ts-star",
    displayMode: "mode-tree",
    bgImage: "imgs/bg/2.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "平民培养路线",
        desc: "0氪玩家如何逆袭？",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [
          { name: "过渡选择：海毛虫泡泡 够用到55级" },
          { name: "中期目标：吸血鬼 技能好就够用" },
          { name: "后期追求：鬼将 资质优秀 性价比高" },
          { name: "核心思路：技能搭配合理 白板也能打" }
        ],
      },
      {
        name: "土豪培养路线",
        desc: "有钱就能为所欲为？",
        subItemNameColor: "color-black",
        nameColor: "color-gold",
        nameFontSize: 21,
        children: [
          { name: "起步选择：神兽 资质爆炸 技能豪华" },
          { name: "进阶选择：多技能珍兽 翻页不是梦" },
          { name: "终极目标：全红技能 属性拉满" },
          { name: "核心思路：用钱解决一切问题" }
        ],
      },
      {
        name: "技能选择对比",
        desc: "红书 VS 蓝书 如何选择？",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [
          { name: "红书优势：效果强力 一步到位" },
          { name: "蓝书优势：价格便宜 容易获取" },
          { name: "平民推荐：蓝书过渡 关键技能红书" },
          { name: "土豪推荐：全红技能 追求完美" }
        ],
      },
      {
        name: "争议话题",
        desc: "哪个路线更适合？",
        subItemNameColor: "color-black",
        nameColor: "color-red",
        nameFontSize: 21,
        children: [
          { name: "平民党观点：游戏是长期投资 慢慢来" },
          { name: "土豪党观点：用钱节省时间 值得" },
          { name: "中立观点：根据经济情况 理性选择" },
          { name: "终极答案：开心最重要 量力而行" }
        ],
      },
    ],
  },
};

window.posterConfigs = {
  // ============================
  // 梦幻西游手游 海报配置合集 v1~v20
  // 已修复：subItemNameColor + 随机布局模式
  // 直接复制到你的 posterConfigs 对象中
  // ============================

  // v1：简约通用版（居中对称）
  v1: {
    title: "梦幻西游手游 核心攻略",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-scroll",
    titleTextStyle: "ts-gold-emboss",
    displayMode: "mode-center",
    bgImage: "imgs/bg/1.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "门派养成",
        desc: "从零到大神",
        subItemNameColor: "color-black",
        nameColor: "color-pink",
        nameFontSize: 21,
        avatar: null,
        children: [],
      },
      {
        name: "助战搭配",
        desc: "最强组合推荐",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        avatar: null,
        children: [],
      },
      {
        name: "装备打造",
        desc: "极品毕业指南",
        subItemNameColor: "color-black",
        nameColor: "color-red",
        nameFontSize: 21,
        avatar: null,
        children: [],
      },
      {
        name: "宠物选择",
        desc: "实用宠物排行",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        avatar: null,
        children: [],
      },
      {
        name: "日常玩法",
        desc: "高效收益路线",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        avatar: null,
        children: [],
      },
    ],
  },

  // v2：巅峰竞技场（网格布局）
  v2: {
    title: "巅峰竞技场 阵容指南",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-metal",
    titleTextStyle: "ts-tech-glow",
    displayMode: "mode-grid",
    bgImage: "imgs/bg/2.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "物攻阵容",
        desc: "暴力速推流",
        subItemNameColor: "color-black",
        nameColor: "color-red",
        nameFontSize: 21,
        avatar: null,
        children: [],
      },
      {
        name: "法攻阵容",
        desc: "群体爆炸流",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        avatar: null,
        children: [],
      },
      {
        name: "辅助阵容",
        desc: "稳健续航流",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        avatar: null,
        children: [],
      },
      {
        name: "封印阵容",
        desc: "控制先手流",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        avatar: null,
        children: [],
      },
    ],
  },

  // v3：核心助战精选（阶梯对齐）
  v3: {
    title: "门派核心助战 精选",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-ice",
    titleTextStyle: "ts-ice-crystal",
    displayMode: "mode-step",
    bgImage: "imgs/bg/3.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "物理输出",
        desc: "单点爆发核心",
        subItemNameColor: "color-black",
        nameColor: "color-pink",
        nameFontSize: 21,
        children: [{ name: "首选：孙悟空" }],
      },
      {
        name: "法术输出",
        desc: "群体清场核心",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [{ name: "首选：西海龙王" }],
      },
      {
        name: "治疗辅助",
        desc: "团队续航核心",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        children: [{ name: "首选：唐僧" }],
      },
      {
        name: "封印控制",
        desc: "先手限制核心",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [{ name: "首选：菩提祖师" }],
      },
    ],
  },

  // v4：助战搭配大全（卡片分组）
  v4: {
    title: "全门派助战 搭配大全",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-gold",
    titleTextStyle: "ts-fire",
    displayMode: "mode-card-group",
    bgImage: "imgs/bg/4.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "大唐官府",
        desc: "物理一哥",
        subItemNameColor: "color-black",
        nameColor: "color-red",
        nameFontSize: 21,
        children: [{ name: "孙悟空" }, { name: "杨戬" }],
      },
      {
        name: "龙宫",
        desc: "法系一哥",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [{ name: "西海龙王" }, { name: "红孩儿" }],
      },
      {
        name: "普陀山",
        desc: "治疗一姐",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        children: [{ name: "观音姐姐" }, { name: "紫霞仙子" }],
      },
      {
        name: "方寸山",
        desc: "控制一哥",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [{ name: "菩提祖师" }, { name: "镇元大仙" }],
      },
    ],
  },

  // v5：萌新入门指南（时间轴）
  v5: {
    title: "萌新必看 入门指南",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-mint",
    titleTextStyle: "ts-matcha",
    displayMode: "mode-timeline",
    bgImage: "imgs/bg/5.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "升级路线",
        desc: "快速冲级",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 26,
        children: [{ name: "主线优先" }, { name: "日常必做" }],
      },
      {
        name: "银币获取",
        desc: "稳定收入",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 26,
        children: [{ name: "押镖" }, { name: "师门" }],
      },
      {
        name: "金币获取",
        desc: "大额收益",
        subItemNameColor: "color-black",
        nameColor: "color-gold",
        nameFontSize: 26,
        children: [{ name: "摆摊" }, { name: "活动" }],
      },
      {
        name: "伙伴选择",
        desc: "新手首选",
        subItemNameColor: "color-black",
        nameColor: "color-pink",
        nameFontSize: 26,
        children: [{ name: "系统赠送" }, { name: "免费解锁" }],
      },
      {
        name: "宠物培养",
        desc: "过渡够用",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 26,
        children: [{ name: "海毛虫" }, { name: "泡泡" }],
      },
    ],
  },

  // v6：高难度副本（瀑布流）
  v6: {
    title: "高难度副本 通关攻略",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-metal",
    titleTextStyle: "ts-bold-black",
    displayMode: "mode-waterfall",
    bgImage: "imgs/bg/6.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "地煞星",
        desc: "高阶挑战",
        subItemNameColor: "color-black",
        nameColor: "color-red",
        nameFontSize: 21,
        children: [{ name: "封印优先" }, { name: "保辅助" }],
      },
      {
        name: "紫薇大帝",
        desc: "团队配合",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [{ name: "解封" }, { name: "加血" }],
      },
      {
        name: "神器任务",
        desc: "机制详解",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [{ name: "破招" }, { name: "集火" }],
      },
    ],
  },

  // v7：梦幻门派全解（侧边分栏）
  v7: {
    title: "梦幻门派 全解析",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-emerald",
    titleTextStyle: "ts-ink",
    displayMode: "mode-column",
    bgImage: "imgs/bg/1.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "输出门派",
        desc: "伤害担当",
        subItemNameColor: "color-black",
        nameColor: "color-red",
        nameFontSize: 21,
        children: [{ name: "大唐" }, { name: "狮驼" }],
      },
      {
        name: "法系门派",
        desc: "群伤担当",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [{ name: "龙宫" }, { name: "魔王" }],
      },
      {
        name: "治疗门派",
        desc: "续航担当",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        children: [{ name: "普陀" }, { name: "化生" }],
      },
      {
        name: "封印门派",
        desc: "控制担当",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [{ name: "方寸" }, { name: "女儿村" }],
      },
    ],
  },

  // v8：少女游玩手册（简约目录）
  v8: {
    title: "梦幻少女 游玩手册",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-purple",
    titleTextStyle: "ts-strawberry",
    displayMode: "mode-list",
    bgImage: "imgs/bg/2.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "时装搭配",
        desc: "绝美穿搭",
        subItemNameColor: "color-black",
        nameColor: "color-pink",
        nameFontSize: 21,
        children: [{ name: "限定" }, { name: "日常" }],
      },
      {
        name: "坐骑收集",
        desc: "可爱坐骑",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [{ name: "飞行" }, { name: "陆地" }],
      },
      {
        name: "家园布置",
        desc: "温馨小屋",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        children: [{ name: "家具" }, { name: "装饰" }],
      },
      {
        name: "萌宠养成",
        desc: "可爱宠物",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [{ name: "珍兽" }, { name: "神兽" }],
      },
    ],
  },

  // v9：武神坛巅峰对决（树状分级）
  v9: {
    title: "武神坛 巅峰对决",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-sunset",
    titleTextStyle: "ts-gaming",
    displayMode: "mode-tree",
    bgImage: "imgs/bg/3.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "首发阵容",
        desc: "开局压制",
        subItemNameColor: "color-black",
        nameColor: "color-red",
        nameFontSize: 21,
        children: [{ name: "物攻" }, { name: "法攻" }],
      },
      {
        name: "替补阵容",
        desc: "战局反转",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [{ name: "治疗" }, { name: "封印" }],
      },
      {
        name: "阵法选择",
        desc: "属性克制",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        children: [{ name: "天覆阵" }, { name: "虎翼阵" }],
      },
      {
        name: "战术思路",
        desc: "胜负关键",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [{ name: "速攻" }, { name: "防守" }],
      },
    ],
  },

  // v10：助战图鉴（居中对称）
  v10: {
    title: "梦幻西游手游 助战图鉴",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-none",
    titleTextStyle: "ts-blue-yellow",
    displayMode: "mode-center",
    bgImage: "imgs/bg/4.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "甲级助战",
        desc: "顶级品质",
        subItemNameColor: "color-black",
        nameColor: "color-gold",
        nameFontSize: 21,
        avatar: null,
        children: [],
      },
      {
        name: "乙级助战",
        desc: "优质品质",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        avatar: null,
        children: [],
      },
      {
        name: "丙级助战",
        desc: "新手过渡",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        avatar: null,
        children: [],
      },
    ],
  },

  // v11：物攻宠物技能（网格布局）
  v11: {
    title: "召唤灵普通技能 物攻篇",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-red",
    titleTextStyle: "ts-fire",
    displayMode: "mode-grid",
    bgImage: "imgs/bg/5.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "必杀",
        desc: "物攻暴击+10%",
        subItemNameColor: "color-black",
        nameColor: "color-red",
        nameFontSize: 21,
        children: [{ name: "核心输出技" }, { name: "百搭易获取" }],
      },
      {
        name: "连击",
        desc: "45%概率连打2次",
        subItemNameColor: "color-black",
        nameColor: "color-red",
        nameFontSize: 21,
        children: [{ name: "伤害降25%" }, { name: "清宠神技" }],
      },
      {
        name: "偷袭",
        desc: "免反震反击+5%伤",
        subItemNameColor: "color-black",
        nameColor: "color-red",
        nameFontSize: 21,
        children: [{ name: "攻坚必备" }, { name: "无负面效果" }],
      },
      {
        name: "突进",
        desc: "忽视敌方少量物防",
        subItemNameColor: "color-black",
        nameColor: "color-red",
        nameFontSize: 21,
        children: [{ name: "打高防目标" }, { name: "稳定增伤" }],
      },
    ],
  },

  // v12：法攻宠物技能（阶梯对齐）
  v12: {
    title: "召唤灵普通技能 法攻篇",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-blue",
    titleTextStyle: "ts-ocean",
    displayMode: "mode-step",
    bgImage: "imgs/bg/6.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "法术暴击",
        desc: "法攻暴击+10%",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [{ name: "法系核心" }, { name: "触发即爆发" }],
      },
      {
        name: "魔之心",
        desc: "法伤结果+10%",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [{ name: "稳定增伤" }, { name: "无触发概率" }],
      },
      {
        name: "法术连击",
        desc: "20%概率二次攻击",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [{ name: "二次伤50%" }, { name: "清场实用" }],
      },
      {
        name: "会心",
        desc: "忽视等级*0.3法防",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [{ name: "打高法防目标" }, { name: "等级越高越强" }],
      },
    ],
  },

  // v13：高级物攻技能（卡片分组）
  v13: {
    title: "召唤灵高级技能 物攻篇",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-metal",
    titleTextStyle: "ts-steel",
    displayMode: "mode-card-group",
    bgImage: "imgs/bg/1.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "高级必杀",
        desc: "物攻暴击+20%",
        subItemNameColor: "color-black",
        nameColor: "color-gold",
        nameFontSize: 21,
        children: [{ name: "顶级输出技" }, { name: "爆发拉满" }],
      },
      {
        name: "高级连击",
        desc: "55%概率连打2次",
        subItemNameColor: "color-black",
        nameColor: "color-gold",
        nameFontSize: 21,
        children: [{ name: "仅降伤20%" }, { name: "性价比超高" }],
      },
      {
        name: "高级偷袭",
        desc: "免反震+10%伤",
        subItemNameColor: "color-black",
        nameColor: "color-gold",
        nameFontSize: 21,
        children: [{ name: "物攻必带" }, { name: "全方位强化" }],
      },
    ],
  },

  // v14：高级法攻技能（时间轴）
  v14: {
    title: "召唤灵高级技能 法攻篇",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-purple",
    titleTextStyle: "ts-aurora",
    displayMode: "mode-timeline",
    bgImage: "imgs/bg/2.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "高级法爆",
        desc: "法攻暴击+15%",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [{ name: "法系天花板" }, { name: "暴击率翻倍" }],
      },
      {
        name: "高级魔心",
        desc: "法伤结果+20%",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [{ name: "稳定增伤翻倍" }, { name: "百搭核心" }],
      },
      {
        name: "高级法连",
        desc: "21%概率二次攻击",
        subItemNameColor: "color-black",
        nameColor: "color-purple",
        nameFontSize: 21,
        children: [{ name: "触发概率提升" }, { name: "清场效率拉满" }],
      },
    ],
  },

  // v15：宠物生存技能（瀑布流）
  v15: {
    title: "召唤灵核心技能 生存篇",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-emerald",
    titleTextStyle: "ts-matcha",
    displayMode: "mode-waterfall",
    bgImage: "imgs/bg/3.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "神佑复生",
        desc: "20%概率复活回60%血",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        children: [{ name: "保命神技" }, { name: "忌与鬼魂共存" }],
      },
      {
        name: "吸血",
        desc: "吸收物攻伤害20%气血",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        children: [{ name: "续航必备" }, { name: "物攻宠专属" }],
      },
      {
        name: "再生",
        desc: "每回合回等级*0.8气血",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        children: [{ name: "持续回血" }, { name: "无触发条件" }],
      },
      {
        name: "强壮",
        desc: "气血上限直接+10%",
        subItemNameColor: "color-black",
        nameColor: "color-green",
        nameFontSize: 21,
        children: [{ name: "面板提升" }, { name: "所有宠通用" }],
      },
    ],
  },

  // v16：治疗水系器灵（侧边分栏）
  v16: {
    title: "治疗系 水系器灵全解析",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-ice",
    titleTextStyle: "ts-ice-crystal",
    displayMode: "mode-column",
    bgImage: "imgs/bg/4.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "柳岸花明",
        desc: "残血增疗最高25%",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [{ name: "全治疗通用" }, { name: "团队救场" }],
      },
      {
        name: "天降甘霖",
        desc: "首目标疗暴+35%",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [{ name: "普陀化生优选" }, { name: "单体强保" }],
      },
      {
        name: "固本培元",
        desc: "21%疗量转护盾",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [{ name: "阴曹地府专属" }, { name: "防打蓝战术" }],
      },
      {
        name: "妙手回春",
        desc: "直接提升治疗强度",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [{ name: "普陀天花板" }, { name: "面板直加" }],
      },
    ],
  },

  // v17：物攻主动技能（简约目录）
  v17: {
    title: "召唤灵主动技能 物攻篇",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-choco",
    titleTextStyle: "ts-bold-black",
    displayMode: "mode-list",
    bgImage: "imgs/bg/5.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "力劈华山",
        desc: "敌方物攻越低伤越高",
        subItemNameColor: "color-black",
        nameColor: "color-brown",
        nameFontSize: 21,
        children: [{ name: "点杀神技" }, { name: "克制法系" }],
      },
      {
        name: "壁垒击破",
        desc: "附加力量*0.75伤害",
        subItemNameColor: "color-black",
        nameColor: "color-brown",
        nameFontSize: 21,
        children: [{ name: "克制防御目标" }, { name: "物攻核心" }],
      },
      {
        name: "善恶有报",
        desc: "概率双倍伤或回血",
        subItemNameColor: "color-black",
        nameColor: "color-brown",
        nameFontSize: 21,
        children: [{ name: "爆发看脸" }, { name: "清宠高效" }],
      },
    ],
  },

  // v18：法攻主动技能（树状分级）
  v18: {
    title: "召唤灵主动技能 法攻篇",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-sunset",
    titleTextStyle: "ts-star",
    displayMode: "mode-tree",
    bgImage: "imgs/bg/6.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "八凶法阵",
        desc: "群体法攻引燃降法防",
        subItemNameColor: "color-black",
        nameColor: "color-orange",
        nameFontSize: 21,
        children: [{ name: "60级打3目标" }, { name: "持续掉血" }],
      },
      {
        name: "燃夜狐火",
        desc: "积3层必暴击",
        subItemNameColor: "color-black",
        nameColor: "color-orange",
        nameFontSize: 21,
        children: [{ name: "越打越强" }, { name: "群体法攻" }],
      },
      {
        name: "鹿影生花",
        desc: "21%概率三段式攻击",
        subItemNameColor: "color-black",
        nameColor: "color-orange",
        nameFontSize: 21,
        children: [{ name: "伤害递增" }, { name: "敦煌专属" }],
      },
    ],
  },

  // v19：召唤灵特色技能（居中对称）
  v19: {
    title: "召唤灵 特色专属技能",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-gold",
    titleTextStyle: "ts-gold-emboss",
    displayMode: "mode-center",
    bgImage: "imgs/bg/1.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "破竹",
        desc: "激怒状态2-6次连击",
        subItemNameColor: "color-black",
        nameColor: "color-gold",
        nameFontSize: 21,
        children: [{ name: "非激怒减伤20%" }, { name: "物攻天花板" }],
      },
      {
        name: "风舞",
        desc: "积3层疾风打3目标",
        subItemNameColor: "color-black",
        nameColor: "color-gold",
        nameFontSize: 21,
        children: [{ name: "每层加伤" }, { name: "清场神技" }],
      },
      {
        name: "捞月",
        desc: "物攻偷取敌方增益",
        subItemNameColor: "color-black",
        nameColor: "color-gold",
        nameFontSize: 21,
        children: [{ name: "附加等级*1伤" }, { name: "战术性拉满" }],
      },
      {
        name: "遗志",
        desc: "出场增12%双伤5回合",
        subItemNameColor: "color-black",
        nameColor: "color-gold",
        nameFontSize: 21,
        children: [{ name: "瞬召爆发" }, { name: "所有宠通用" }],
      },
    ],
  },

  // v20：召唤灵基础分类（网格布局）
  v20: {
    title: "召唤灵 基础分类与获取",
    titleFontSize: 32,
    isTitleBold: true,
    showBg: true,
    showTextEffect: true,
    titleBgStyle: "bg-scroll",
    titleTextStyle: "ts-ink",
    displayMode: "mode-grid",
    bgImage: "imgs/bg/2.jpg",
    bgCount: 6,
    avatarSize: 40,
    items: [
      {
        name: "野生召唤灵",
        desc: "资质成长低",
        subItemNameColor: "color-black",
        nameColor: "color-gray",
        nameFontSize: 21,
        children: [{ name: "花香香购买" }, { name: "迷宫捕捉" }],
      },
      {
        name: "普通宝宝",
        desc: "0级初始易培养",
        subItemNameColor: "color-black",
        nameColor: "color-blue",
        nameFontSize: 21,
        children: [{ name: "迷宫捕捉" }, { name: "宝宝幼儿园" }],
      },
      {
        name: "变异宝宝",
        desc: "资质优秀超稀有",
        subItemNameColor: "color-black",
        nameColor: "color-pink",
        nameFontSize: 21,
        children: [{ name: "宝宝幼儿园" }, { name: "低概率变异" }],
      },
    ],
  },
};