export default {
  title: "Liuz Docs",
  description: "Docs for Offline Usage",
  base: "/docs/",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/site.png",

    // 顶部导航
    nav: [{ text: "Vite", link: "/vite/" }],
    socialLinks: [{ icon: "github", link: "https://github.com/liuzhuan/docs" }],

    // 边栏
    sidebar: {
      "/vite/": [
        {
          text: "指南",
          items: [
            { text: "起步", link: "/vite/guide/" },
            { text: "特性", link: "/vite/guide/features" },
          ],
        },
      ],
    },

    // 页脚
    footer: {
      message: "Released under the MIT License",
      copyright: "Copyright &copy; 2022-present Liu Zhuan",
    },

    // 编辑链接
    editLink: {
      pattern: "https://github.com/liuzhuan/docs/edit/main/docs/:path",
      text: "在 GitHub 编辑本页",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
};