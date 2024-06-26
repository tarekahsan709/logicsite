// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'LeaseLogic24',
    tagline: 'Your Trusted Property Management Assistant',
    favicon: 'img/favicon.ico',
    url: 'https://leaselogic24.com',
    baseUrl: '/',
    organizationName: 'tarekahsan709',
    projectName: 'sitelogic',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],
    themeConfig: {
        image: 'img/hm.svg',
        navbar: {
            title: 'LeaseLogic24',
            logo: {
                alt: 'LeaseLogic24 Logo',
                src: 'img/logo.webp',
            },
            items: [
                {to: '/#features', label: 'Features', position: 'right'},
                {to: '/#price', label: 'Price', position: 'right'},
                {to: '/#about-us', label: 'About Us', position: 'right'},
                {to: '/#contact-us', label: 'Contact Us', position: 'right'},
                // {to: '/blog', label: 'Blog', position: 'right'},
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} LeaseLogic24, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        metadata: [
            {name: 'keywords', content: 'leasing, finance, software'},
            {name: 'twitter:card', content: 'summary_large_image'},
        ],
        colorMode: {
            // Disable the dark/light mode switch and set the default mode
            disableSwitch: true, // This removes the toggle switch from the navbar
            respectPrefersColorScheme: false, // Ignores the OS-level scheme
            defaultMode: 'light', // Set default mode to 'light'
        },
    },
    headTags: [
        {
            tagName: 'link',
            attributes: {
                rel: 'preconnect',
                href: 'https://example.com',
            },
        },
        {
            tagName: 'script',
            attributes: {
                type: 'application/ld+json',
            },
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org/',
                '@type': 'Organization',
                name: 'LeaseLogic24',
                url: 'https://leaselogic24.com',
                logo: 'https://leaselogic24.com/img/logo.webp',
            }),
        },
    ],
};

export default config;
