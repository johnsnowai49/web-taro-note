import { withBase } from "./utils/helpers";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    eyebrowText?: string;
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
};

export type Blog = {
    description?: string;
};

export type ContactInfo = {
    title?: string;
    text?: string;
    email?: {
        text?: string;
        href?: string;
        email?: string;
    };
    socialProfiles?: {
        text?: string;
        href?: string;
    }[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    contactInfo?: ContactInfo;
    subscribe?: Subscribe;
    blog?: Blog;
    postsPerPage?: number;
    recentPostLimit: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://web-taro-note.pages.dev',
    title: 'Taro H',
    description: 'A collection of Japanese learning notes and articles.',
    image: {
        src: '/space-ahead-preview.jpeg',
        alt: 'Space Ahead ✨ - A minimal space-inspired personal blog template, created by Siddhesh Thadeshwar.'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: withBase('/')
        },
        {
            text: 'Blog',
            href: withBase('/blog')
        },

        {
            text: 'About',
            href: withBase('/about')
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'RSS Feed',
            href: withBase('/rss.xml')
        },
    ],
    socialLinks: [
        {
            text: 'Threads',
            href: 'https://www.threads.com/@taroai49'
        }
    ],
    hero: {
        eyebrowText: "Weekly Update ✨",
        title: "Taro's Journey",
        text: "一起透過有趣的日本新聞學習日文吧！",
        image: {
            src: '/assets/images/pixeltrue-space-discovery.svg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        // actions: [
        //     {
        //         text: 'Read Now',
        //         href: withBase('/blog')
        //     },
        //     {
        //         text: 'Subscribe',
        //         href: '#subscribe'
        //     }
        // ]
    },
    about: {
        title: 'About Me',
        text: '大家好，我是 Taro。目前正走在學習日語的旅程上。這個網站用來記錄並分享我感興趣的日本時下流行內容與學習筆記。希望能透過這些分享，與大家一起探索日本文化的魅力，共同進步！',
    },
    contactInfo: {
        title: 'Contact',
        text: "Hi! Whether you have a question, a suggestion, or just want to share your thoughts, I'm all ears. Feel free to get in touch through any of the methods below:",
        email: {
            text: "Drop me an email and I’ll do my best to respond as soon as possible.",
            href: "mailto:example@example.com",
            email: "example@example.com"
        },
        socialProfiles: [
            {
                text: "LinkedIn",
                href: "https://www.linkedin.com/"
            },
            {
                text: "Peerlist",
                href: "https://www.peerlist.io/"
            },
            {
                text: "GitHub",
                href: "https://github.com/"
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Space Ahead',
    //     text: 'One update per week. All the latest stories in your inbox.',
    //     formUrl: '#'
    // },
    blog: {
        // description: ""
    },
    postsPerPage: 2,
    recentPostLimit: 2
};

export default siteConfig;
