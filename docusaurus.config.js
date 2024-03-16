// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Crime and Justice Paper',
  tagline: 'Paper submission for CJS 270 at Drexel University - by Zohair ul Hasan',
  favicon: 'img/cjs-logo.webp',

  // Set the production url of your site here
  url: 'https://cjs.zohair.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Zohair-coder', // Usually your GitHub org/user name.
  projectName: 'cjs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/cjs-logo.webp',
      navbar: {
        title: 'CJS 270',
        logo: {
          alt: 'My Site Logo',
          src: 'img/cjs-logo.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'paperSidebar',
            position: 'left',
            label: 'Paper',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Paper',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Website',
                href: 'https://zohair.dev',
              },
              {
                label: 'Email',
                href: 'mailto:zohair.ul.hasan@gmail.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/zohair01/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Zohair-coder',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub Repo',
                href: 'https://github.com/Zohair-coder/cjs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CJS 270 - Zohair ul Hasan`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
