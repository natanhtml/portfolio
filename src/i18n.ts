type Dict = Record<string, string>;

const STORAGE_KEY = "nl_ed_lang";

type Lang = "pt" | "en" | "ja";

const en: Dict = {
  "nav.about": "About",
  "nav.work": "Work",
  "nav.stack": "Stack",
  "nav.contact": "Contact",
  "hero.intro":
    "Natan Lopes is a full-stack developer and systems analyst from Brasília, building type-safe products and AI automation that blur the line between idea and shipped software.",
  "about.w1": "ABOUT",
  "about.w2": "ME",
  "about.body":
    "I'm a junior developer and systems analyst based in Brasília. Since 2024 I've worked at Pronto Saúde Digital on full-stack development, automation and AI integration. I'm studying Systems Analysis & Development at IESB (2026), driven by technical curiosity — always testing new tools and shipping my own projects. I like solving problems end to end: from a type-safe architecture to automating the repetitive with AI.",
  "cap1.k": "01",
  "cap1": "Brasília, Brazil",
  "cap2.k": "02",
  "cap2": "Bateia · live product",
  "fct.role.k": "Role",
  "fct.role": "Full-stack Dev & Analyst",
  "fct.focus.k": "Focus",
  "fct.focus": "Type-safe · AI · Automation",
  "fct.since.k": "Since",
  "fct.since": "2024 · Pronto Saúde Digital",
  "fct.edu.k": "Education",
  "fct.edu": "Systems Analysis · IESB · 2026",
  "do.label": "// what i do",
  "do.statement":
    "I build <span class='red'>type-safe full-stack applications</span> and automate the repetitive with AI — from architecture to deploy. Modern, accessible interfaces backed by solid engineering. Here is some of <span class='red'>what I've shipped so far.</span>",
  "do.cta": "Explore work",
  "t1": "Tentra",
  "t1.r": "Full-stack",
  "t2": "Bateia",
  "t2.r": "AI catalog",
  "t3": "Pronto Saúde",
  "t3.r": "Telemedicine",
  "stack.label": "// stack",
  "stack.statement":
    "From <span class='red'>type-safe front ends</span> to data pipelines, real-time backends and AI integrations — a toolkit built to ship <span class='red'>products that scale.</span>",
  "stack.cta": "Let's talk",
  "w1.tag": "Full-stack App · tentra.com.br",
  "w1.d":
    'Type-safe full-stack app with advanced routing (TanStack Start), SSR and high scalability. Modern dashboards plus an AI-powered automatic client "Match Score" via deep scraping and LLMs.',
  "w1.link": "Visit",
  "w2.tag": "Product · AI catalog · bateia.app.br",
  "w2.d":
    "Turns the chaos of WhatsApp groups into a searchable deal catalog for electronics resellers — AI extracts product, price and condition from each message, with price history and smart search.",
  "w2.link": "Visit",
  "w3.tag": "Telemedicine · B2B SaaS",
  "w3.d":
    "Multi-tenant B2B telemedicine SaaS: doctors, nurses and psychologists on demand for client clinics, with video consults, live walk-in queues and white-label portals.",
  "w3.status": "In progress",
  "contact.big": "Let's work together.",
  "contact.sub":
    "Open to projects, collaborations and a good technical conversation. Pick whatever's easiest.",
  "contact.email": "Email me",
  "contact.cv": "Download CV",
  "f.menu": "Menu",
  "f.social": "Social",
  "f.note": "Made with care in Brasília.",
  "f.role": "Full-stack Developer",
};

const ja: Dict = {
  "nav.about": "紹介",
  "nav.work": "制作",
  "nav.stack": "技術",
  "nav.contact": "連絡",
  "hero.intro":
    "ナタン・ロペスはブラジリア拠点のフルスタック開発者兼システムアナリスト。型安全なプロダクトと AI 自動化で、アイデアと完成したソフトの境界を曖昧にします。",
  "about.w1": "私に",
  "about.w2": "ついて",
  "about.body":
    "ブラジリアを拠点とするジュニア開発者兼システムアナリストです。2024年よりプロント・サウージ・デジタルで、フルスタック開発・自動化・AI連携を担当。IESB でシステム分析・開発を専攻（2026年卒業予定）。技術的好奇心が原動力で、常に新しいツールを試し、自分のプロジェクトを世に出しています。型安全な設計から AI による自動化まで、課題を最初から最後まで解決するのが好きです。",
  "cap1.k": "01",
  "cap1": "ブラジリア、ブラジル",
  "cap2.k": "02",
  "cap2": "Bateia · 稼働中",
  "fct.role.k": "職種",
  "fct.role": "フルスタック開発 & アナリスト",
  "fct.focus.k": "専門",
  "fct.focus": "型安全 · AI · 自動化",
  "fct.since.k": "在籍",
  "fct.since": "2024 · Pronto Saúde Digital",
  "fct.edu.k": "学歴",
  "fct.edu": "システム分析 · IESB · 2026",
  "do.label": "// できること",
  "do.statement":
    "<span class='red'>型安全なフルスタックアプリ</span>を構築し、繰り返し作業を AI で自動化 — 設計からデプロイまで。堅実なエンジニアリングに支えられた、モダンでアクセシブルな UI。<span class='red'>これまでに世に出したものの一部です。</span>",
  "do.cta": "制作を見る",
  "t1": "Tentra",
  "t1.r": "フルスタック",
  "t2": "Bateia",
  "t2.r": "AIカタログ",
  "t3": "Pronto Saúde",
  "t3.r": "遠隔医療",
  "stack.label": "// 技術",
  "stack.statement":
    "<span class='red'>型安全なフロント</span>から、データパイプライン、リアルタイムなバックエンド、AI連携まで — <span class='red'>スケールするプロダクト</span>を届けるための道具一式。",
  "stack.cta": "話しましょう",
  "w1.tag": "フルスタックアプリ · tentra.com.br",
  "w1.d":
    "高度なルーティング（TanStack Start）、SSR、高い拡張性を備えた型安全なフルスタックアプリ。モダンなダッシュボードに加え、深いスクレイピングと LLM による顧客の自動「マッチスコア」。",
  "w1.link": "見る",
  "w2.tag": "プロダクト · AIカタログ · bateia.app.br",
  "w2.d":
    "WhatsApp グループの混沌を、検索可能なオファーカタログへ。AI が各メッセージから商品・価格・状態を抽出し、価格履歴とスマート検索を提供。",
  "w2.link": "見る",
  "w3.tag": "遠隔医療 · B2B SaaS",
  "w3.d":
    "マルチテナント型の B2B 遠隔医療 SaaS。医師・看護師・心理士をオンデマンドで提供し、ビデオ診察・リアルタイム受付待ち行列・ホワイトラベルポータルを実現。",
  "w3.status": "進行中",
  "contact.big": "一緒に働きましょう。",
  "contact.sub":
    "プロジェクト、コラボ、良い技術的な会話を歓迎します。お好きな方法でどうぞ。",
  "contact.email": "メールする",
  "contact.cv": "履歴書をダウンロード",
  "f.menu": "メニュー",
  "f.social": "ソーシャル",
  "f.note": "ブラジリアで、丁寧に作りました。",
  "f.role": "フルスタック開発者",
};

export function initI18n(): void {
  const pt: Dict = {};

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key !== null) pt[key] = el.textContent ?? "";
  });
  document.querySelectorAll<HTMLElement>("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (key !== null) pt[key] = el.innerHTML;
  });

  const dicts: Record<Lang, Dict> = { pt, en, ja };

  function setLang(lang: Lang): void {
    const dict = dicts[lang];

    document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key !== null) el.textContent = dict[key] ?? pt[key] ?? el.textContent;
    });
    document.querySelectorAll<HTMLElement>("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key !== null) el.innerHTML = dict[key] ?? pt[key] ?? el.innerHTML;
    });

    document.documentElement.lang =
      lang === "ja" ? "ja" : lang === "en" ? "en" : "pt-BR";
    document.body.classList.toggle("lang-ja", lang === "ja");

    document.querySelectorAll<HTMLButtonElement>(".lang button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable */
    }
  }

  document.querySelectorAll<HTMLButtonElement>(".lang button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang === "pt" || lang === "en" || lang === "ja") setLang(lang);
    });
  });

  let saved: Lang = "pt";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "pt" || stored === "en" || stored === "ja") saved = stored;
  } catch {
    /* storage unavailable */
  }
  setLang(saved);
}
