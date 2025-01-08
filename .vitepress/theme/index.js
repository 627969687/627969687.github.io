import DefaultTheme from 'vitepress/theme'
// 点击图片放大
import { onMounted, watch, nextTick } from 'vue' 
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
// 侧边栏 css
import './sideBar.css'
// 点击图片放大css
import './imgZoom.css'

export default {
  extends: DefaultTheme,
  
  // 点击图片放大
  setup() {
    const route = useRoute()
    const initZoom = () => {
      // 为所有图片增加缩放功能
      // mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
        mediumZoom(".content-container p img", {
	        background: "var(--vp-c-bg)",
	        container: document.body,
		});
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}