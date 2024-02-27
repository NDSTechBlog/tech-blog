const CONFIG = {
  // profile setting (required)
  profile: {
    name: "NDS Tech Blog",
    image: "/logo.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "NDS",
    bio: "NDS는 농심 그룹의 정보시스템을 개발∙운영해온 전산실을 모태로 설립하였으며, 다양한 프로젝트 경험과 축적된 기술 및 노하우를 바탕으로 최적의 IT서비스를 제공하는 기업입니다.",
    email: "nds37371@gmail.com",
    linkedin: "",
    github: "nds37371@gmail.com",
    instagram: "",
  },
  projects: [
    {
      name: `NDS 홈페이지`,
      href: "https://nds.nongshim.co.kr/main.do",
    },
  ],
  // blog setting (required)
  blog: {
    title: "NDS Tech Blog",
    description: "NDS는 농심 그룹의 정보시스템을 개발∙운영해온 전산실을 모태로 설립하였으며, 다양한 프로젝트 경험과 축적된 기술 및 노하우를 바탕으로 최적의 IT서비스를 제공하는 기업입니다.",
  },

  // CONFIG configration (required)
  link: "https://nds-tech-blog.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
