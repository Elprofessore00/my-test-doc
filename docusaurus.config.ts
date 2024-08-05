import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ابریمنت داک',
  tagline: 'مستندات ابریمنت',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.abriment.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'abriment', // Usually your GitHub org/user name.
  projectName: 'abriment-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fa',
    locales: ['en', 'fa'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      fa: {
        label: 'فارسی',
        direction: 'rtl',
        htmlLang: 'fa-IR',
        calendar: 'persian',
        path: 'fa',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'آخرین پست‌ها',
          blogTitle: 'بلاگ',
          blogDescription: 'بلاگ ابریمنت',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'release-note',
        routeBasePath: 'release-note',
        path: './release-note',
        showReadingTime: false,
        blogTitle: 'آخرین تغییرات',
        blogSidebarTitle: 'آخرین تغییرات',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ابریمنت داک',
      logo: {
        alt: 'Abriment-Logo',
        src: 'img/abriment-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'مستندات',
        },
        {to: '/blog', label: 'بلاگ', position: 'left'},
        {to: '/release-note', label: 'آخرین تغییرات', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'راهنمای داشبورد',
          items: [
            {
              label: 'مستندات',
              to: '/docs/intro',
            },
            {
              label: 'بلاگ',
              to: '/blog',
            },
            {
              label: 'آخرین تغییرات',
              to: '/release-note',
            },
          ],
        },
        {
          title: 'شبکه‌های اجتماعی',
          items: [
            {
              label: 'لینکدین',
              href: 'https://linkedin.com/company/abriment',
            },
            {
              label: 'تلگرام',
              href: 'https://t.me/abriment',
            },
            {
              label: 'سروش پلاس',
              href: 'https://splus.ir/joingroup/AI1-NFJFwFgTkkkKTcYp6w',
            },
          ],
        },
        {
          title: 'بیشتر',
          items: [
            {
              label: 'ساخت ماشین ابری',
              to: 'https://abriment.com/dashboard/iaas/servers/launch',
            },
            {
              label: 'ساخت اپلیکیشن',
              to: 'https://abriment.com/dashboard/paas/applications/create',
            },
            {
              label: 'ساخت دیتابیس ابری',
              to: 'https://abriment.com/dashboard/dbaas/database/create',
            },
            {
              label: 'پشتیبانی',
              to: 'https://abriment.com/dashboard/support',
            },
          ],
        },
      ],
      // copyright: `ساخته شده در ابریمنت با ❤ به کمک Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
