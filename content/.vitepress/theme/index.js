import DefaultTheme from 'vitepress/theme'
import { theme } from 'vitepress-openapi/client'
import 'vitepress-openapi/dist/style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    theme.enhanceApp({ app })
  }
}