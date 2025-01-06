import{_ as n,c as a,a2 as e,o as p}from"./chunks/framework.DZuLV8wC.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"02-note/02-Vitepress/02-插件：自动侧边栏.md","filePath":"02-note/02-Vitepress/02-插件：自动侧边栏.md","lastUpdated":1736176804000}'),l={name:"02-note/02-Vitepress/02-插件：自动侧边栏.md"};function i(r,s,t,c,b,o){return p(),a("div",null,s[0]||(s[0]=[e(`<p><a href="https://vitepress-sidebar.cdget.com/guide/getting-started" target="_blank" rel="noreferrer">官方文档</a></p><ol><li>安装方法比较简单，阅读官方文档即可，个人倾向于用<code>yarn</code>的方式</li><li>官方推荐使用<code>withSidebar</code>，个人喜欢<code>generateSidebar</code></li><li>案例演示的是多级侧边栏跟导航栏联动</li><li><a href="https://vitepress-sidebar.cdget.com/advanced-usage/multi-level-sidebar-with-indents" target="_blank" rel="noreferrer">解决缩进问题</a></li></ol><p>案例：</p><div class="language-node.js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">node.js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { defineConfig } from &#39;vitepress&#39;</span></span>
<span class="line"><span>import { generateSidebar } from &#39;vitepress-sidebar&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自定义的一些常量</span></span>
<span class="line"><span>const docPath = &#39;markdown&#39; // 扫描路径</span></span>
<span class="line"><span>const iOSPath = &#39;/01-iOS&#39; // 导航栏iOS目录路径</span></span>
<span class="line"><span>const nodePath = &#39;/02-note&#39; // 导航栏note目录路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  title: &quot;TkJacky&quot;,</span></span>
<span class="line"><span>  description: &quot;good good study, day day up&quot;,</span></span>
<span class="line"><span>  lang: &#39;zh-CN&#39;,</span></span>
<span class="line"><span>  lastUpdated: true,</span></span>
<span class="line"><span>  srcDir: docPath, // 我的笔记仓库存于自定义的子仓库，所以需要重新定义md扫描路径</span></span>
<span class="line"><span>  themeConfig: {</span></span>
<span class="line"><span>	// 配置导航栏，需要根据导航栏的路径去配置侧边栏的判断路径</span></span>
<span class="line"><span>    nav: [</span></span>
<span class="line"><span>      { text: &#39;iOS&#39;, link: iOSPath + &#39;/01-OC/01-对象&#39;},</span></span>
<span class="line"><span>      { text: &#39;note&#39;, link: nodePath + &#39;/01-Obsidian/01-基本搭建&#39; },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    // 配置侧边栏，generateSidebar方法</span></span>
<span class="line"><span>    sidebar: generateSidebar([</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        documentRootPath: docPath + iOSPath, // 递归该路径下的所有md生成侧边栏目录</span></span>
<span class="line"><span>        resolvePath: iOSPath + &#39;/&#39;, // 判断当前阅读的md是否处于该路径下，如果是则加载该侧边栏</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        documentRootPath: docPath + nodePath,</span></span>
<span class="line"><span>        resolvePath: nodePath + &#39;/&#39;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ]),</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,4)]))}const u=n(l,[["render",i]]);export{m as __pageData,u as default};
