import portfolioImage from "@/assets/images/portfolio-image.png";
import ethereumHomePageImage from "@/assets/images/Home-ethereum-org.png";
import wisesheetsImage from "@/assets/images/wisesheets-home-page.png";
import ladbrokesMockup from "@/assets/images/ladbrokes-mockup-mobile.png";
import nedsMockup from "@/assets/images/neds-mobile-mockup.png";
import nextJsPortfolioImage from "@/assets/images/next-portfolio.png";
import cryptoLotteryImage from "@/assets/images/Create-Wagmi.png";
import favCryptoTrackerImage from "@/assets/images/fav-crypto-tracker-ss.png"
import { StaticImageData } from "next/image";
import tabnzScreenshot from "@/assets/images/tabnz.png"
import shellScreenshot from "@/assets/images/shell-screenshot.png"

interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
}

interface PortfolioProject {
  title: string;
  siteUrl?: string;
  description: string;
  longDescription: string;
  image: string | StaticImageData;
  github?: string;
  alt: string;
}

interface PortfolioConfig {
  projects: PortfolioProject[];
}

interface HomePageConfig {
  title: string;
  subtitle: string;
}

interface Config {
  homePage: HomePageConfig;
  socials: SocialLinks;
  avatar: string;
  portfolio: PortfolioConfig;
}

export const config: Config = {
  homePage: {
    title: "Welcome to my portfolio",
    subtitle: "My name is Alex & I am a full stack developer",
  },

  socials: {
    github: "https://github.com/alex1092",
    linkedin: "https://www.linkedin.com/in/alex-little-5772b51a0/",
    twitter: "https://twitter.com/alittle1092",
  },
  avatar: "./assets/images/avatar.jpeg",

  portfolio: {
    projects: [
      {
        title: "Favourite Crypto Tracker",
        siteUrl: 'https://fav-crypto-tracker.vercel.app/',
        description: 'A crypto tracker built with next js and supabase',
        longDescription: "Using coingeckos api I created a market tracker for your favourite crypto currencies. This includes charts and a dashboard to view your favourite crypto currencies",
        image: favCryptoTrackerImage,
        github: "https://github.com/alex1092/fav-crypto-tracker",
        alt: "Favourite Crypto Tracker",
      },
      {
        title: "Crypto Lottery",
        siteUrl: "https://crypto-lottery-ffap.netlify.app/",
        description: "Built with Next.js wagmi and solidity",
        longDescription: "A crypto lottery i built on base chain",
        image: cryptoLotteryImage,
        alt: "Crypto Lottery",
      },
      {
        title: "This NextJS Portfolio",
        siteUrl: "https://alex-portfolio-vue.netlify.app/",
        description: "Built with Next.js",
        longDescription:
          "I built this portfolio using Next.js, TailwindCSS and TypeScript",
        image: nextJsPortfolioImage,
        github: "https://github.com/alex1092/vue-portfolio",
        alt: "My Vue Portfolio",
      },
      {
        title: "$My Shell go",
        description: 'I built my own shell from scratch using golang',
        longDescription: 'I built my own shell from scratch using golang, it is a very basic shell that allows you to run built in commands',

        image: shellScreenshot,
        alt: "My Shell go",
        github: "https://github.com/alex1092/my-shell-go",
      },
      {
        title: "My Vue Portfolio",
        siteUrl: "https://alex-portfolio-vue.netlify.app/",
        description: "Built with Vue3",
        longDescription:
          "I built this portfolio using vue 3, just for fun and to learn vue",
        image: portfolioImage,
        github: "https://github.com/alex1092/vue-portfolio",
        alt: "My Vue Portfolio",
      },
      {
        title: "Ladbrokes Australia",
        siteUrl:
          "https://apps.apple.com/au/app/ladbrokes-online-betting/id710375963",
        description: "Native Core Develoer",
        longDescription:
          "Ladbrokes is one of Australia's largest betting platforms, I spearheaded the development and creation of their design system, essentially creating a white label betting solution and making it possible for us to create multiple brands under one codebase",
        image: ladbrokesMockup,
        alt: "Ladbrokes Australia",
      },
      {
        title: "Neds",
        siteUrl:
          "https://apps.apple.com/au/app/neds-online-betting/id1263814273",
        description: "Native Core Develoer",
        longDescription:
          "Neds is a mobile app that allows users to bet on their favourite sports. I worked on the core team and had major influence over the app and its future",
        image: nedsMockup,
        alt: "Neds",
      },
      {
        title: "Tab New Zealand",
        siteUrl: "https://www.tab.co.nz/",
        description: "Native Core Develoer",
        longDescription:
          "I lead the merger of Tab New Zealand into our codebase and managed to create a white label betting solution for my company",
        image: tabnzScreenshot,
        alt: "Tab New Zealand",
      },
      {
        title: "Ethereum Org",
        siteUrl: "https://ethereum.org/en/",
        github: "https://github.com/ethereum/ethereum-org-website",
        description: "Open Source Contributor",
        longDescription: `As an Open Source Contributor to Ethereum, I enhanced the website's performance, UX, and workflow by implementing features, resolving bugs, and migrating to Chakra UI, demonstrating expertise in React, JavaScript, and modern web development.`,
        image: ethereumHomePageImage,
        alt: "Ethereum Org",
      },
      {
        title: "Wise sheets",
        siteUrl: "https://www.wisesheets.io/",
        description: "Full stack developer",
        longDescription:
          "Wisesheets is a powerful spreadsheet add-on that provides instant access to comprehensive financial data and stock metrics, enabling custom stock screening, real-time data modeling, and effortless stock comparison to streamline financial analysis for investors.",
        image: wisesheetsImage,
        alt: "Wise sheets",
      },
    ],
  },
};
