require('dotenv').config();
const footnotes = require('remark-footnotes');
const math = require('remark-math');
const katex = require('rehype-katex');
module.exports = {
  title: 'USC Philosophy Club',
  tagline: 'Philosophy is for Everyone',
  url: 'https://usc.philclub.org',
  baseUrl: '/',
  favicon: '/img/p-icon-64x64.png',
  organizationName: 'philclub', // Usually your GitHub org/user name.
  projectName: 'usc', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  themeConfig: {
    announcementBar: {
      id: 'disclaimer-1',
      content:
        '👋🏼 This website is unofficial and may be incorrect, inaccurate, or outdated. Please read our <a href="/about/#disclaimer">disclaimer</a>. For the most up-to-date information, visit the <a target="_blank" rel="noopener noreferrer" href="https://dornsife.usc.edu/phil/">official Dornsife website</a>. 👋🏼',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    hideableSidebar: true,
    image: '/img/p-icon-512x512.png',
    navbar: {
      hideOnScroll: true,
      title: 'USC Philosophy Club',
      logo: {
        alt: 'My Site Logo',
        src: '/img/p-icon-64x64.png',
      },
      items: [
        {
          label: 'Resources',
          position: 'left',
          items: [
            { to: '/resources/', label: 'General' },
            { to: '/reading/', label: 'Reading' },
            { to: '/writing/', label: 'Writing' },
            { to: '/advisors/', label: 'Advisors' },
            { to: '/faculty/', label: 'Faculty' },
            { to: '/syllabi/', label: 'Syllabi' },
          ],
        },
        {
          label: 'Advice',
          position: 'left',
          items: [
            { to: '/advice/', label: 'General' },
            { to: '/skills/', label: 'Skills' },
            { to: '/careers/', label: 'Careers' },
            {
              to: '/applying-to-graduate-school-gps/',
              label: 'Applying to Graduate School',
            },
          ],
        },
        { to: 'blog/', label: 'Blog', position: 'right' },
        {
          href: 'https://dornsife.usc.edu/phil/',
          label: 'Dornsife',
          position: 'right',
        },
        {
          href: 'https://github.com/philclub/usc',
          //label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          title: 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'General',
              to: '/resources/',
            },
            {
              label: 'Reading',
              to: '/reading/',
            },
            {
              label: 'Writing',
              to: '/writing/',
            },
          ],
        },
        {
          title: 'Advice',
          items: [
            {
              label: 'General',
              to: '/advice/',
            },
            {
              label: 'Skills',
              to: '/skills/',
            },
            {
              label: 'Careers',
              to: '/careers/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Participate', to: '/participate/' },
            {
              label: 'Discord',
              href: 'https://usc.philclub.org/discord/',
            },
            {
              label: 'Campus Labs',
              href:
                'https://usc.campuslabs.com/engage/organization/philosophyclub',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'About',
              href: '/about/',
            },
            {
              label: 'Contact',
              href: '/contact/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/philclub/usc/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="/about/">USC Philosophy Club.</a> 👋🏼 Read the <a href="/about/">Disclaimer and License</a>. 🙂`,
    },
  },
  stylesheets: [
    {
      href: '/katex/v0.12.0/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  scripts: [
    {
      'data-domain': 'usc.philclub.org',
      src: 'https://plausiblewebanalytics.philclub.org/js/index.js',
      async: true,
      defer: true,
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/philclub/usc/edit/main/',
          routeBasePath: '/',
          remarkPlugins: [[footnotes, { inlineNotes: true }], math],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/resources/',
            from: ['/general-resources/'],
          },
          { to: '/participate/', from: ['/get-involved/'] },
          { to: '/advice/', from: ['/guides/'] },
          {
            to: '/applying-to-graduate-school-gps/',
            from: [
              '/applying-to-graduate-school-before/',
              '/applying-to-graduate-school/',
              '/applying-to-graduate-school-after/',
            ],
          },
        ],
      },
    ],
    'docusaurus-plugin-sass',
  ],
};
