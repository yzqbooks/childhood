import { path } from "@vuepress/utils";
import theme  from "./themeConfig";
import {defineUserConfig} from "vuepress";
import {searchPlugin} from "@vuepress/plugin-search";
export default defineUserConfig({
  base: "/childhood/",

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "icon",

        href: `/childhood/images/ayaka.jpg`,
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],

    [
      "link",
      //我的vscodeiconfont库
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_3267094_0pfgirl8r8qg.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "童年",
      description: "我的童年",
    },
  },

  theme ,
  plugins: [
    searchPlugin({ locales: {
        "/": {
          placeholder: "搜索文档",

        },
      },})]
});
