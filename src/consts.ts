// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// 网站配置
export const SITE_TITLE = "Mohammed Eshan";
export const SITE_DESCRIPTION = "No idea what i'm doing";
export const COPYRIGHT = "© 2025 ZeroQLi, All Rights Reserved";
export const ICP_NUMBER = "";

// 社交媒体链接, 留空或注释=不显示
export const SOCIAL_LINKS = {
  Github: "https://github.com/ZeroQLi",
  Twitter: "https://twitter.com/ZeroQLi",
LinkedIn: "https://www.linkedin.com/in/mohammed-eshan/",
  Instagram: "https://www.instagram.com/zer0ql",
};

// SEO 相关
export const SEO_CONFIG = {
  ogImage: "/hero-img.png", // 默认的社交媒体分享图片
  keywords: "blog, tech, programming", // 默认关键词
};

// 导航配置
export const NAV_ITEMS = [
  { text: "Home", link: "/" },
  { text: "Blog", link: "/blog" },
  { text: "Tags", link: "/tags" },
  { text: "About", link: "/about" },
];

// 博客配置
export const BLOG_CONFIG = {
  locale: "en-us", // 日期格式化语言
  profile: "https://github.com/churchTao",
  authorName: "Author Name", // 作者名称
  email: "mailto:your-email@example.com",
  tags: {
    title: "Tags", // 标签页面标题
    description: "All the tags used in posts.", // 标签页面描述
  },
};
