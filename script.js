const works = [
  {
    id: "01",
    title: {
      zh: "几何切片中的双重面孔",
      en: "A Double Face in Geometric Slices",
    },
    caption: {
      zh: "在粉色大色域中，面孔和身体被切开并重新缝合，人物像被多个视角同时审视。",
      en: "Within a wide pink field, face and body are cut apart and stitched back together, as if the figure were being examined from several viewpoints at once.",
    },
    motif: {
      zh: "位移 / 切片 / 双重视角",
      en: "Displacement / Slicing / Split View",
    },
    focus: {
      zh: "人物被拆开，又在画面中心重新站立。十字与几何分区构成精神结构的隐喻。",
      en: "The figure is broken apart and made to stand again at the center. Crosses and geometric partitions become metaphors for a fractured mental structure.",
    },
    image: "assets/works/work-01.jpg",
    alt: {
      zh: "林东作品 01：粉色背景中的变形人物与切分人脸",
      en: "Lindong work 01: a distorted figure and segmented faces against a pink field",
    },
  },
  {
    id: "02",
    title: {
      zh: "黑域中的异形叙事",
      en: "Mutant Narrative in a Black Field",
    },
    caption: {
      zh: "黑色背景像一块无法穿透的剧场幕布，人物、器物与动物化形体在其前方生成异托邦叙事。",
      en: "The black background acts like an impenetrable stage curtain, while figures, objects, and animal-like forms generate a heterotopic narrative in front of it.",
    },
    motif: {
      zh: "压迫 / 剧场 / 生物化",
      en: "Pressure / Theater / Animalization",
    },
    focus: {
      zh: "明亮的蓝、粉、黄与深黑对撞，使人物像在占领一个不稳定的新秩序。",
      en: "Bright blues, pinks, and yellows collide with dense black, making the figure appear to seize an unstable new order.",
    },
    image: "assets/works/work-02.jpg",
    alt: {
      zh: "林东作品 02：黑色背景中的异形人物与物件",
      en: "Lindong work 02: mutant figures and objects in a black theatrical space",
    },
  },
  {
    id: "03",
    title: {
      zh: "支离躯干与潜意识空间",
      en: "Fragmented Torso and Subconscious Space",
    },
    caption: {
      zh: "躯干、肢体和局部面孔互相穿插，画面像一个由潜意识推动的内部房间。",
      en: "Torso, limbs, and partial faces interweave, turning the painting into an interior room driven by the subconscious.",
    },
    motif: {
      zh: "躯干 / 潜意识 / 断裂",
      en: "Torso / Subconscious / Rupture",
    },
    focus: {
      zh: "笔触更松动，人物的边界被冲散，情绪从结构内部渗出。",
      en: "The brushwork loosens, the figure’s boundaries dissolve, and emotion seeps outward from inside the structure.",
    },
    image: "assets/works/work-03.jpg",
    alt: {
      zh: "林东作品 03：支离躯干与多处异形肢体",
      en: "Lindong work 03: fragmented torso with multiple distorted limbs",
    },
  },
  {
    id: "04",
    title: {
      zh: "被切开的身体",
      en: "The Body Cut Open",
    },
    caption: {
      zh: "人物站在大面积黑色留空与高亮绿色的交界处，像刚刚从切面中穿出。",
      en: "The figure stands at the boundary between a vast black void and an intense green field, as if emerging through a cut surface.",
    },
    motif: {
      zh: "占领 / 切面 / 留空",
      en: "Occupation / Section / Void",
    },
    focus: {
      zh: "压缩的构图强化了被观看感，也让身体像一块正在夺取位置的色彩装置。",
      en: "The compressed composition heightens the sense of being watched and turns the body into a color structure claiming territory.",
    },
    image: "assets/works/work-04.jpg",
    alt: {
      zh: "林东作品 04：黑绿背景中的变形人物",
      en: "Lindong work 04: distorted figure against black and green fields",
    },
  },
  {
    id: "05",
    title: {
      zh: "站立者与前景残片",
      en: "Standing Figure with Foreground Fragments",
    },
    caption: {
      zh: "一位孤立的站立者被置于橙色光场前方，前景零散的碎片像失去归属的器官。",
      en: "An isolated standing figure is placed before an orange field of light, while scattered fragments in the foreground resemble organs that have lost their home.",
    },
    motif: {
      zh: "站立 / 光场 / 残片",
      en: "Standing / Light Field / Fragments",
    },
    focus: {
      zh: "人物的孤绝与前景的漂浮形成强烈距离，像在新世界门槛上的暂停。",
      en: "The figure’s solitude and the floating debris in front create a charged distance, like a pause on the threshold of a new world.",
    },
    image: "assets/works/work-05.jpg",
    alt: {
      zh: "林东作品 05：橙色光场前的黑衣站立者",
      en: "Lindong work 05: a black-clad standing figure before an orange light field",
    },
  },
  {
    id: "06",
    title: {
      zh: "区块中的行走者",
      en: "Walker in a Blocked Terrain",
    },
    caption: {
      zh: "绿色区域成为新的生长平面，人物与十字、几何符号一起在其中移动。",
      en: "The green zone becomes a new plane of growth, and the figure moves within it alongside crosses and geometric signs.",
    },
    motif: {
      zh: "区块自由 / 十字 / 行走",
      en: "Block Freedom / Cross / Movement",
    },
    focus: {
      zh: "人物不再完整闭合，而是与环境、符号和杂草一样处于持续变形的状态。",
      en: "The figure no longer closes into a stable form, but remains in continuous mutation with the environment, symbols, and weeds around it.",
    },
    image: "assets/works/work-06.jpg",
    alt: {
      zh: "林东作品 06：绿色空间中的人物与十字符号",
      en: "Lindong work 06: figure and cross motifs in a green landscape",
    },
  },
  {
    id: "07",
    title: {
      zh: "展场中的画中画",
      en: "Painting Within the Exhibition Space",
    },
    caption: {
      zh: "现场记录让作品离开纯平面叙事，画布、空间与观看关系被再次纳入创作。",
      en: "The installation record moves the work beyond flat pictorial narration and brings canvas, space, and spectatorship back into the work itself.",
    },
    motif: {
      zh: "展场 / 现场 / 观看",
      en: "Exhibition / Site / Spectatorship",
    },
    focus: {
      zh: "荧光绿色覆盖了空间气氛，让作品像从现场中长出，而不是被挂在墙上。",
      en: "A fluorescent green atmosphere makes the work feel as though it grows out of the site rather than simply hanging on a wall.",
    },
    image: "assets/works/work-07.jpg",
    alt: {
      zh: "林东作品 07：展场空间中的作品现场记录",
      en: "Lindong work 07: installation view within the exhibition space",
    },
  },
  {
    id: "08",
    title: {
      zh: "倒置的人物与色域剧场",
      en: "Inverted Figure in a Color-Field Theater",
    },
    caption: {
      zh: "倒置的绿色面孔与大面积红、粉、黄、蓝色域相互牵制，人物像在失重中重新建立秩序。",
      en: "An inverted green face is held in tension by broad red, pink, yellow, and blue fields, as if the figure were rebuilding order in weightlessness.",
    },
    motif: {
      zh: "倒置 / 色域 / 失重",
      en: "Inversion / Color Field / Weightlessness",
    },
    focus: {
      zh: "倒置处理强化了去中心感，也让身体不再服从现实重力与常规观看方式。",
      en: "The inversion intensifies the sense of decentralization and frees the body from ordinary gravity and conventional viewing habits.",
    },
    image: "assets/works/work-08.jpg",
    alt: {
      zh: "林东作品 08：倒置人物与大色域构成",
      en: "Lindong work 08: inverted figure within a broad color-field composition",
    },
  },
];

const translations = {
  zh: {
    htmlLang: "zh-Hans",
    title: "林东 Lindong | Artist Website",
    description:
      "林东 Lindong 的艺术家网站。通过变形人物、几何切片与高饱和色域，描绘去中心化世界中的精神结构与生存状态。",
    navWorks: "作品",
    navStatement: "陈述",
    navExhibitions: "展览",
    navContact: "联系",
    heroEyebrow: "Painter / Escape to Occupy",
    heroAriaLabel: "返回首页",
    heroLede:
      "在“逃亡”与“占领”的过渡地带，林东通过变形人物、几何切片与高饱和色域，描绘去中心化世界中被自由裹挟的生物状态。",
    heroCtaPrimary: "进入作品",
    heroCtaSecondary: "阅读陈述",
    motifs: ["大脑位移", "肢体置换", "耳朵消失", "区块自由"],
    heroNoteLabel: "作品主题",
    heroNoteCopy:
      "“观念和潜意识引导前行，不对称的空气连接世界，支离的躯干寻找区块自由精神。”",
    practiceEyebrow: "Practice",
    practiceHeading: "从逃亡，到占领",
    practiceCard1Title: "简介",
    practiceCard1Copy:
      "从“逃亡”时期正在向“占领”时期开始过渡。去中心化世界的巴别塔尚未建立，根基未定，艺术家试图在其中寻找一块高地，并以“人性的反面丑”去表现被自由包裹的生物生活状态。",
    practiceCard2Title: "主题",
    practiceCard2Copy:
      "这组作品将中心枢纽的大脑位移，将平衡的肢体置换方位，将聪慧的耳朵消失，构建新的世界。人物不再是肖像，而是精神结构、矛盾关系与潜意识运动的可见痕迹。",
    worksEyebrow: "Selected Works",
    worksHeading: "作品现场",
    stageLabelMotif: "关键词",
    stageLabelFocus: "线索",
    stageOpen: "查看大图",
    stageOpenAria: "查看作品大图",
    statementEyebrow: "Statement",
    statementHeading: "艺术家陈述",
    statementMain1:
      "林东的创作正处在从“逃亡”走向“占领”的阶段。他以变形人物作为进入现实的入口，在去中心化的时代感受中不断拆解和重组面孔、躯干与肢体，使身体从被观看的对象转化为承载精神压力、欲望冲突与生存焦虑的现场。",
    statementMain2:
      "画面中反复出现的十字、几何切面、异形器官和高饱和色块，共同构成一种兼具结构意识、情绪强度与超现实叙事气质的个人语言。对林东而言，绘画不是对现实的再现，而是对失衡秩序的重新编排。",
    statementSideTitle: "创作线索",
    statementSideCopy:
      "人物在这里不是被塑造得更完整，而是被不断拆开、移动和重组。身体既是叙事对象，也是心理结构与时代感受的承载体。",
    exhibitionsEyebrow: "CV",
    exhibitionsHeading: "展览经历",
    exhibitions: [
      "自觉表现.当代艺术展",
      "幻想王国新锐艺术家提名展",
      "野生动物 WILD VOICES 摩登天空展",
      "798 表现当代艺术邀请展",
      "1897 厂艺术邀请展",
    ],
    contactEyebrow: "Contact",
    contactHeading: "联系与合作",
    contactCopy:
      "如需收藏咨询、展览合作或媒体联系，可在上线前将此处替换为你的真实邮箱、微信或社交账号。",
    contactLabelEmail: "邮箱",
    contactValueEmail: "待补充",
    contactLabelSocial: "微信 / Instagram",
    contactValueSocial: "待补充",
    footer: "© {year} Lindong. 基于艺术家作品 PDF 搭建。",
    modalCloseAria: "关闭作品大图",
    heroImageMainAlt: "林东作品 04",
    heroImageTopAlt: "林东作品 02",
    heroImageBottomAlt: "林东作品 08",
  },
  en: {
    htmlLang: "en",
    title: "Lindong | Artist Website",
    description:
      "The artist website of Lindong. Distorted figures, geometric slices, and saturated color fields describe psychic structures and states of survival in a decentralized world.",
    navWorks: "Works",
    navStatement: "Statement",
    navExhibitions: "Exhibitions",
    navContact: "Contact",
    heroEyebrow: "Painter / Escape to Occupy",
    heroAriaLabel: "Back to homepage",
    heroLede:
      "In the transitional zone between escape and occupation, Lindong uses distorted figures, geometric slicing, and saturated color fields to depict beings carried along by unstable freedom in a decentralized world.",
    heroCtaPrimary: "View Works",
    heroCtaSecondary: "Read Statement",
    motifs: ["Brain Displaced", "Limbs Reassigned", "Ears Removed", "Block Freedom"],
    heroNoteLabel: "Theme",
    heroNoteCopy:
      '"Ideas and the subconscious lead the way; asymmetrical air connects the world, and broken torsos search for a spirit of block-like freedom."',
    practiceEyebrow: "Practice",
    practiceHeading: "From Escape to Occupation",
    practiceCard1Title: "Context",
    practiceCard1Copy:
      "This body of work marks a transition from an “escape” phase toward one of “occupation.” The decentralized Babel of the world remains unfinished and unstable, so the artist searches for a piece of higher ground and occupies it by picturing the anti-human, ugly reverse of freedom.",
    practiceCard2Title: "Theme",
    practiceCard2Copy:
      "These works displace the brain as the central hub, reassign the balance of limbs, and erase the ears in order to construct a new world. The figure is no longer a portrait but visible evidence of mental structure, contradiction, and subconscious movement.",
    worksEyebrow: "Selected Works",
    worksHeading: "Works on View",
    stageLabelMotif: "Motif",
    stageLabelFocus: "Focus",
    stageOpen: "Open Full Image",
    stageOpenAria: "Open the full-size artwork image",
    statementEyebrow: "Statement",
    statementHeading: "Artist Statement",
    statementMain1:
      "Lindong’s practice is moving from a phase of “escape” toward one of “occupation.” Through distorted figures, faces, torsos, and limbs are repeatedly dismantled and reassembled, turning the body from an object of viewing into a site charged with psychic pressure, conflicted desire, and existential unease.",
    statementMain2:
      "Crosses, geometric cuts, hybrid organs, and saturated color fields recur throughout the paintings to form a personal language charged with structural awareness, emotional intensity, and surreal narrative force. For Lindong, painting is not a reproduction of reality but a reordering of an unstable world.",
    statementSideTitle: "Practice Note",
    statementSideCopy:
      "The figure here is not made more complete. It is repeatedly cut apart, shifted, and rebuilt. The body becomes both the subject of narration and the carrier of psychic structure and historical atmosphere.",
    exhibitionsEyebrow: "CV",
    exhibitionsHeading: "Exhibitions",
    exhibitions: [
      "Self-Conscious Expression: Contemporary Art Exhibition",
      "Fantasy Kingdom Emerging Artist Nomination Exhibition",
      "WILD VOICES Modern Sky Exhibition",
      "798 Expression Contemporary Art Invitational Exhibition",
      "1897 Factory Art Invitational Exhibition",
    ],
    contactEyebrow: "Contact",
    contactHeading: "Contact & Collaboration",
    contactCopy:
      "For collection inquiries, exhibition collaboration, or press contact, replace this section with your actual email, WeChat, or social media accounts before launch.",
    contactLabelEmail: "Email",
    contactValueEmail: "To be added",
    contactLabelSocial: "WeChat / Instagram",
    contactValueSocial: "To be added",
    footer: "© {year} Lindong. Built from the artist portfolio PDF.",
    modalCloseAria: "Close artwork image",
    heroImageMainAlt: "Lindong work 04",
    heroImageTopAlt: "Lindong work 02",
    heroImageBottomAlt: "Lindong work 08",
  },
};

const worksList = document.querySelector("#works-list");
const activeImage = document.querySelector("#active-work-image");
const activeIndex = document.querySelector("#active-work-index");
const activeTitle = document.querySelector("#active-work-title");
const activeCaption = document.querySelector("#active-work-caption");
const activeMotif = document.querySelector("#active-work-motif");
const activeFocus = document.querySelector("#active-work-focus");
const openModalButton = document.querySelector("#open-modal");
const modal = document.querySelector("#work-modal");
const modalImage = document.querySelector("#modal-image");
const modalIndex = document.querySelector("#modal-index");
const modalTitle = document.querySelector("#modal-title");
const modalCaption = document.querySelector("#modal-caption");
const modalFocus = document.querySelector("#modal-focus");
const langButtons = {
  zh: document.querySelector("#lang-zh"),
  en: document.querySelector("#lang-en"),
};
const metaDescription = document.querySelector('meta[name="description"]');
const rootElement = document.documentElement;

let currentWork = works[0];
let currentLanguage =
  window.localStorage.getItem("site-language") ||
  (navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");

if (!translations[currentLanguage]) {
  currentLanguage = "zh";
}

function renderWorks() {
  worksList.innerHTML = works
    .map(
      (work) => `
        <button class="work-item${work.id === currentWork.id ? " is-active" : ""}" type="button" data-work-id="${work.id}">
          <div class="work-thumb">
            <img src="${work.image}" alt="${work.alt[currentLanguage]}" loading="lazy" />
          </div>
          <div class="work-copy">
            <p class="stage-index">${currentLanguage === "zh" ? "作品" : "Work"} ${work.id}</p>
            <h3>${work.title[currentLanguage]}</h3>
            <p>${work.caption[currentLanguage]}</p>
          </div>
        </button>
      `
    )
    .join("");

  const buttons = worksList.querySelectorAll(".work-item");
  buttons.forEach((button) => {
    button.addEventListener("click", () => setActiveWork(button.dataset.workId));
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry) {
        setActiveWork(visibleEntry.target.dataset.workId, false);
      }
    },
    {
      rootMargin: "-20% 0px -35% 0px",
      threshold: [0.3, 0.55, 0.8],
    }
  );

  buttons.forEach((button) => observer.observe(button));
}

function setActiveWork(workId, shouldScroll = true) {
  const selectedWork = works.find((work) => work.id === workId);

  if (!selectedWork) {
    return;
  }

  currentWork = selectedWork;
  activeImage.src = selectedWork.image;
  activeImage.alt = selectedWork.alt[currentLanguage];
  activeIndex.textContent = `${currentLanguage === "zh" ? "作品" : "Work"} ${selectedWork.id}`;
  activeTitle.textContent = selectedWork.title[currentLanguage];
  activeCaption.textContent = selectedWork.caption[currentLanguage];
  activeMotif.textContent = selectedWork.motif[currentLanguage];
  activeFocus.textContent = selectedWork.focus[currentLanguage];

  modalImage.src = selectedWork.image;
  modalImage.alt =
    currentLanguage === "zh"
      ? `${selectedWork.alt[currentLanguage]} 大图`
      : `${selectedWork.alt[currentLanguage]} full-size view`;
  modalIndex.textContent = `${currentLanguage === "zh" ? "作品" : "Work"} ${selectedWork.id}`;
  modalTitle.textContent = selectedWork.title[currentLanguage];
  modalCaption.textContent = selectedWork.caption[currentLanguage];
  modalFocus.textContent = selectedWork.focus[currentLanguage];

  document.querySelectorAll(".work-item").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.workId === workId);
  });

  if (shouldScroll) {
    document
      .querySelector(`.work-item[data-work-id="${workId}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setupModal() {
  openModalButton.addEventListener("click", openModal);

  document.querySelectorAll("[data-close-modal]").forEach((target) => {
    target.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

function setText(id, value) {
  const target = document.querySelector(`#${id}`);
  if (target) {
    target.textContent = value;
  }
}

function applyLanguage(language) {
  currentLanguage = language;
  const copy = translations[language];
  rootElement.lang = copy.htmlLang;
  document.title = copy.title;
  metaDescription.setAttribute("content", copy.description);
  window.localStorage.setItem("site-language", language);

  setText("nav-works", copy.navWorks);
  setText("nav-statement", copy.navStatement);
  setText("nav-exhibitions", copy.navExhibitions);
  setText("nav-contact", copy.navContact);
  setText("hero-eyebrow", copy.heroEyebrow);
  setText("hero-lede", copy.heroLede);
  setText("hero-cta-primary", copy.heroCtaPrimary);
  setText("hero-cta-secondary", copy.heroCtaSecondary);
  copy.motifs.forEach((motif, index) => setText(`motif-${index + 1}`, motif));
  setText("hero-note-label", copy.heroNoteLabel);
  setText("hero-note-copy", copy.heroNoteCopy);
  setText("practice-eyebrow", copy.practiceEyebrow);
  setText("practice-heading", copy.practiceHeading);
  setText("practice-card-1-title", copy.practiceCard1Title);
  setText("practice-card-1-copy", copy.practiceCard1Copy);
  setText("practice-card-2-title", copy.practiceCard2Title);
  setText("practice-card-2-copy", copy.practiceCard2Copy);
  setText("works-eyebrow", copy.worksEyebrow);
  setText("works-heading", copy.worksHeading);
  setText("stage-label-motif", copy.stageLabelMotif);
  setText("stage-label-focus", copy.stageLabelFocus);
  setText("open-modal", copy.stageOpen);
  setText("statement-eyebrow", copy.statementEyebrow);
  setText("statement-heading", copy.statementHeading);
  setText("statement-main-1", copy.statementMain1);
  setText("statement-main-2", copy.statementMain2);
  setText("statement-side-title", copy.statementSideTitle);
  setText("statement-side-copy", copy.statementSideCopy);
  setText("exhibitions-eyebrow", copy.exhibitionsEyebrow);
  setText("exhibitions-heading", copy.exhibitionsHeading);
  copy.exhibitions.forEach((exhibition, index) => setText(`exhibition-${index + 1}`, exhibition));
  setText("contact-eyebrow", copy.contactEyebrow);
  setText("contact-heading", copy.contactHeading);
  setText("contact-copy", copy.contactCopy);
  setText("contact-label-email", copy.contactLabelEmail);
  setText("contact-value-email", copy.contactValueEmail);
  setText("contact-label-social", copy.contactLabelSocial);
  setText("contact-value-social", copy.contactValueSocial);

  document.querySelector(".brand").setAttribute("aria-label", copy.heroAriaLabel);
  openModalButton.setAttribute("aria-label", copy.stageOpenAria);
  document.querySelector("#modal-close").setAttribute("aria-label", copy.modalCloseAria);
  document.querySelector("#hero-image-main").alt = copy.heroImageMainAlt;
  document.querySelector("#hero-image-top").alt = copy.heroImageTopAlt;
  document.querySelector("#hero-image-bottom").alt = copy.heroImageBottomAlt;

  setupFooterYear();
  renderWorks();
  setActiveWork(currentWork.id, false);

  Object.entries(langButtons).forEach(([key, button]) => {
    button.classList.toggle("is-active", key === language);
    button.setAttribute("aria-pressed", String(key === language));
  });
}

function setupLanguageSwitch() {
  Object.entries(langButtons).forEach(([language, button]) => {
    button.addEventListener("click", () => applyLanguage(language));
  });
}

function setupReveal() {
  const revealNodes = document.querySelectorAll("[data-reveal]");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealNodes.forEach((node) => revealObserver.observe(node));
}

function setupFooterYear() {
  const year = new Date().getFullYear();
  document.querySelector("#year").textContent = year;
  document.querySelector("#footer-copy").innerHTML = translations[currentLanguage].footer.replace(
    "{year}",
    `<span id="year">${year}</span>`
  );
}

setupLanguageSwitch();
applyLanguage(currentLanguage);
setupModal();
setupReveal();
