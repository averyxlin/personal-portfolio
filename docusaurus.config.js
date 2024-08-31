// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'avery lin',
  tagline: 'personal portfolio',
  favicon: 'img/logo.png',
  url: 'https://averyxlin.me',
  baseUrl: '/',
  organizationName: 'averyxlin', 
  projectName: 'portfolio', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'avery lin',
        logo: {
          alt: 'lin',
          src: 'img/logo.png',
          srcDark: 'img/logodark.png'
        },
        items: [
          {to: '/resume', label: 'experience', position: 'left'},
          // {to: '/projects', label: 'projects', position: 'left'},
          {to: '/blog', label: 'blog', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'notes',
          },
         
        ],
      },
      footer: {
        links: [
          {
            title: 'discover',
            items: [
              {
                label: 'about me',
                to: '/',
              },
              {
                label: 'projects',
                to: '/projects',
              },
              {
                label: 'blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'connect',
            items: [
              {
                label: 'email',
                href: 'mailto:xinyan.lin@uwaterloo.ca',
              },
              {
                label: 'linkedin',
                href: 'https://github.com/averyxlin',
              },
              {
                label: 'github',
                href: 'https://github.com/averyxlin',
              },
            ],
          },
        ],
        copyright: `copyright © ${new Date().getFullYear()} avery lin`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
