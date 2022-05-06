import navbar from "./navbar";
import sidebar from "./sidebar";
import {hopeTheme} from "vuepress-theme-hope";

export default hopeTheme({
  hostname: "https://yzqdev.github.io/childhood",

  author: {
    name: "yzqdev",
    url: "http://www.yzqdev.top",
  },

  iconPrefix: "iconfont icon-",

  logo: "/images/ayaka.jpg",

  repo: "https://github.com/yzqdev/childhood",

  docsDir: "docs",

  navbar: navbar,

  sidebar: sidebar,

  footer: `powered by <a href='https://vuepress-theme-hope.github.io/v2/'>vuepress-theme-home</a>`,

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  // blog: {
  //   description: "一个前端开发者",
  //   intro: "/intro.html",
  //   medias: {
  //     Baidu: "https://example.com",
  //     Bitbucket: "https://example.com",
  //     Dingding: "https://example.com",
  //     Discord: "https://example.com",
  //     Dribbble: "https://example.com",
  //     Email: "https://example.com",
  //     Evernote: "https://example.com",
  //     Facebook: "https://example.com",
  //     Flipboard: "https://example.com",
  //     Gitee: "https://example.com",
  //     GitHub: "https://example.com",
  //     Gitlab: "https://example.com",
  //     Gmail: "https://example.com",
  //     Instagram: "https://example.com",
  //     Lines: "https://example.com",
  //     Linkedin: "https://example.com",
  //     Pinterest: "https://example.com",
  //     Pocket: "https://example.com",
  //     QQ: "https://example.com",
  //     Qzone: "https://example.com",
  //     Reddit: "https://example.com",
  //     Rss: "https://example.com",
  //     Steam: "https://example.com",
  //     Twitter: "https://example.com",
  //     Wechat: "https://example.com",
  //     Weibo: "https://example.com",
  //     Whatsapp: "https://example.com",
  //     Youtube: "https://example.com",
  //     Zhihu: "https://example.com",
  //   },
  // },

  // encrypt: {
  //   config: {
  //     "/guide/encrypt.html": ["1234"],
  //   },
  // },

  plugins: {
    blog: true,

    // 你也可以使用 Waline
    comment: {
      type: "waline",
      serverURL: "https://waline-childhood-yzqdev.vercel.app/",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
