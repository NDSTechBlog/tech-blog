const CONFIG = {
  // profile setting (required)
  profile: {
    name: "NDS Tech Blog",
    image: "/nds_logo_fixed.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "NDS",
    bio: "IT로 건강한 미래를 만들어나갑니다.",
    email: "nds37371@gmail.com",
    linkedin: "",
    github: "nds37371@gmail.com",
    instagram: "",
  },
  projects: [
    {
      name: `NDS`,
      href: "https://nds.nongshim.co.kr/main.do",
    },
  ],
  // blog setting (required)
  blog: {
    title: "NDS Tech Blog",
    description: "IT로 건강한 미래를 만들어나갑니다.",
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
