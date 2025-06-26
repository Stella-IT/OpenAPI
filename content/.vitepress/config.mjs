import { defineConfig } from 'vitepress'
import { useSidebar } from 'vitepress-openapi'
import spec from '../openapi/console-api.json' with { type: 'json' }

const sidebar = useSidebar({
  spec,
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Stella IT OpenAPI",
  description: "API를 활용하여 나만의 프로젝트 구축하기",
  ignoreDeadLinks: true,
  cleanUrls: true,

  themeConfig: {
    logo: {
      light: '/logo_black.svg',
      dark: '/logo_white.svg',
    },
    siteTitle: false,

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '홈', link: '/' },
      { text: '시작하기', link: '/getting-started' },
      { text: 'Console API', link: '/console-api' },
    ],

    sidebar: {
      '/console-api/': [
        {
          text: 'Console API',
          items: [
            { text: '소개', link: '/console-api/' },
          ]
        },
        ...sidebar.generateSidebarGroups({
          linkPrefix: '/console-api/',
        })
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Stella-IT' },
      { icon: 'discord', link: 'https://stella-it.com/discord' },
    ],

    footer: {
      message: `상호명: 스텔라아이티 주식회사
대표자: 홍윤석
주소: 서울특별시 금천구 디지털로9길 32, 비동 504-2호 (가산동, 갑을그레이트밸리)
사업자등록번호: 832-86-02374
전화번호: 1533-7848
이메일주소: contact@stella-it.com
통판업신고번호: 2024-서울금천-1834`.replace(/\n/g, '<br>'),
      copyright: 'Copyright © 2025 Stella IT. All rights reserved.',
    }
  }
})
