import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import { withMermaid } from "vitepress-plugin-mermaid"

const docPath = 'markdown'
const iOSPath = '/1-iOS'
const nodePath = '/2-note'
export default withMermaid({
  title: "TkJacky",
  description: "good good study, day day up",
  lang: 'zh-CN',
  lastUpdated: true,
  srcDir: docPath, 
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // logo: '/tk.png',
    outline: {
      level: [1,2,3],
      label: '目录',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/627969687' }
    ],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'iOS', link: iOSPath + '/1-OC/1-对象'},
      { text: 'note', link: nodePath + '/1-Obsidian/1-基本搭建' },
    ],
    sidebar: generateSidebar([
      {
      // 白名单
      // excludePattern: ['vitepress-how-to']
        documentRootPath: docPath + iOSPath,
        basePath: '',
        resolvePath: iOSPath + '/',
      },
      {
        documentRootPath: docPath + nodePath,
        basePath: '',
        resolvePath: nodePath + '/',
      },
    ]),
  }
})
