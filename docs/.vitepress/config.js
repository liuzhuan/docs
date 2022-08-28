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
    nav: [
      { text: "Foo", link: "/foo/" },
      {
        text: "Dropdown Menu",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", items: [{ text: "DEEP", link: "/deep" }] },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/liuzhuan/docs" }],

    // 边栏
    sidebar: [
      {
        text: "Guide",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Guide 2",
        items: [
          { text: "Introduction 2", link: "/introduction" },
          { text: "Getting Started 2", link: "/getting-started" },
        ],
      },
    ],

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
  },
};
