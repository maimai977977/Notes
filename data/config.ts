import setupImage from "@/assets/setup.png";
import type { SidebarNavigation } from "@/lib/docs/types";
import type {
    ContentConfig,
    HeaderFeatures,
    LocaleConfig,
    NavItem,
    SiteConfig,
    SocialObjects,
    TableOfContentsConfig,
} from "@/lib/types";

// ---------------------------------------------------------------------------
// System-wide configuration
// ---------------------------------------------------------------------------
export const LOCALE: LocaleConfig = {
    lang: "en",
};

export const CONTENT: ContentConfig = {
    systems: [
        {
            id: "docs",
            dir: "content/docs",
            defaultDocRedirect: "/docs/introduction",
            route: "/docs",
        },
        {
            id: "funnydocs",
            dir: "content/funnydocs",
            defaultDocRedirect: "/funnydocs/getting-started",
            route: "/funnydocs",
        },
    ],
};

export const SITE: SiteConfig = {
    website: "https://www.cnblogs.com/maimaimai",
    author: "maimai",
    authorUrl: "https://www.cnblogs.com/maimaimai",
    repo: "https://maimai977977.github.io",
    title: "MaimaiNote",
    description:
        "A modern, flexible documentation system built with Astro featuring hierarchical navigation, hybrid content generation, and multi-collection support",
    image: setupImage,
    imageAlt: "CelestialDocs - Modern documentation system with Astro",
    twitterHandle: "",
};

// ---------------------------------------------------------------------------
// Header-specific configuration
// ---------------------------------------------------------------------------
export const HEADER_FEATURES: HeaderFeatures = {
    enableGitHubButton: false,
    starCountThreshold: 0,
    enableLayoutWidthToggle: true,
};

export const HEADER_NAV_ITEMS: NavItem[] = [
    { href: "/docs", label: "文件夹" },
    { href: "/funnydocs", label: "心情" },
];

export const HEADER_SOCIAL_LINKS: SocialObjects[] = [
    {
        name: "github",
        href: "https://github.com/HYP3R00T/",
        linkTitle: `Checkout my GitHub profile`,
        active: false,
    },
];

// ---------------------------------------------------------------------------
// Header-specific configuration
// ---------------------------------------------------------------------------

//右下角link
export const FOOTER_SOCIAL_LINKS: SocialObjects[] = [
    /**    {
            name: "github",
            href: "https://github.com/HYP3R00T/",
            linkTitle: `Checkout my GitHub profile`,
            active: true,
        },
        {
            name: "linkedin",
            href: "https://linkedin.com/in/rajesh-kumar-das",
            linkTitle: `Follow me on LinkedIn`,
            active: true,
        },
        {
            name: "youtube",
            href: "https://youtube.com/@HYP3R00T",
            linkTitle: `Watch on YouTube`,
            active: true,
        },
        {
            name: "mail",
            href: "mailto:rajesh@hyperoot.dev",
            linkTitle: `Email the maintainers`,
            active: true,
        }, */
    {
        name: "mail",
        href: "//mail.qq.com",
        linkTitle: `Email the maintainers`,
        active: true,
    },

];

// ---------------------------------------------------------------------------
// Sidebar navigation structure for docs content
// ---------------------------------------------------------------------------


export const SIDEBAR_NAVIGATION: SidebarNavigation = {
    docs: {
        defaultTab: {
            label: "about",
            icon: "📚",
        },
        groups: [
            { slug: "test" },
            {
                id: "heimaccy",
                label: "黑马",
                icon: "🚀",
                tab: true,
                entries: [
                    { slug: "heimaccy/h黑" },
                    { slug: "heimaccy/he" },
                    { slug: "heimaccy/hei" },
                ],
            },
            {
                id: "jquery",
                label: "JQuery学习",
                icon: "🚀",
                tab: true,
                entries: [
                    { slug: "jquery/目标与目录" },
                    { slug: "jquery/素材地址" },
                    { slug: "jquery/jquery常用API" },
                ],
            },





        ],
    },
    funnydocs: {
        defaultTab: {
            label: "Learn",
            icon: "🤡",
        },
        groups: [
            { slug: "getting-started" },
            { slug: "concepts" },
            { slug: "configuration" },
            { slug: "deployment" },
        ],
    },
};

// ---------------------------------------------------------------------------
// Right-side table of contents configuration
// ---------------------------------------------------------------------------
export const TABLE_OF_CONTENTS: TableOfContentsConfig = {
    enableExtra: true,
};
