import portfolioImage from "@/assets/images/portfolio-image.png";
import ethereumHomePageImage from "@/assets/images/Home-ethereum-org.png";
import wisesheetsImage from "@/assets/images/wisesheets-home-page.png";
import ladbrokesMockup from "@/assets/images/ladbrokes-mockup-mobile.png";
import nedsMockup from "@/assets/images/neds-mobile-mockup.png";
import nextJsPortfolioImage from "@/assets/images/next-portfolio.png";
import cryptoLotteryImage from "@/assets/images/Create-Wagmi.png";
import favCryptoTrackerImage from "@/assets/images/fav-crypto-tracker-ss.png";
import { StaticImageData } from "next/image";
import tabnzScreenshot from "@/assets/images/tabnz.png";
import shellScreenshot from "@/assets/images/shell-screenshot.png";
import nftScraperImage from "@/assets/images/nft-scraper.png";
import portalPalImage from "@/assets/images/portal-pal.png";
import chillsparkImage from "@/assets/images/chillspark.png";

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
    title: "Crafting Digital Experiences",
    subtitle:
      "I'm Alex, a passionate full-stack developer who transforms ideas into powerful, scalable solutions",
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
        title: "ChillSpark",
        siteUrl: "https://www.chillspark.app/",
        description:
          "AI-powered mental wellness companion revolutionizing digital journaling",
        longDescription:
          "An innovative mental health platform that transforms traditional journaling through conversational AI and personalized insights. ChillSpark features 'Mind Vibe,' an empathetic AI companion that remembers conversations, provides genuine support, and helps users understand their emotional patterns. With 5,000+ active users and a 4.9/5 rating, this platform combines mood tracking, streak building, and actionable insights to make mental wellness accessible and engaging. Privacy-first design ensures user data remains secure while delivering meaningful progress tracking and personalized guidance.",
        image: chillsparkImage,
        alt: "ChillSpark",
      },
      {
        title: "PortalPal",
        siteUrl: "https://www.portalpal.app/",
        description:
          "Professional client portal platform revolutionizing freelancer-client communication",
        longDescription:
          "A comprehensive SaaS solution that transforms how freelancers and agencies communicate with clients. PortalPal enables the creation of branded client portals in minutes, streamlining project updates, file sharing, and milestone tracking in a professional, organized environment. Trusted by 250+ freelancers, this platform eliminates scattered communication channels and enhances client relationships through centralized, branded experiences that boost professionalism and project transparency.",
        image: portalPalImage,
        alt: "PortalPal",
      },
      {
        title: "NFT Collection Scraper",
        siteUrl: "https://nft-scraper-two.vercel.app/",
        description:
          "Blockchain data extraction tool for NFT collections and metadata",
        longDescription:
          "A powerful Web3 utility that streamlines NFT collection analysis by extracting metadata and images directly from blockchain contracts and IPFS. Built with modern web technologies, this tool enables users to download entire NFT collections as organized ZIP files, supporting popular collections like Bored Ape Yacht Club and Moonbirds. Features batch processing, metadata parsing, and optimized performance for large-scale NFT data extraction.",
        image: nftScraperImage,
        alt: "NFT Collection Scraper",
      },
      {
        title: "Favourite Crypto Tracker",
        siteUrl: "https://fav-crypto-tracker.vercel.app/",
        description:
          "Real-time crypto portfolio management with interactive charts and market insights",
        longDescription:
          "A sophisticated cryptocurrency tracking platform built with Next.js and Supabase. Leveraging CoinGecko's API, this application provides real-time market data, interactive price charts, and a personalized dashboard for monitoring your favorite digital assets. Features include portfolio tracking, price alerts, and comprehensive market analytics.",
        image: favCryptoTrackerImage,
        github: "https://github.com/alex1092/fav-crypto-tracker",
        alt: "Favourite Crypto Tracker",
      },
      {
        title: "Crypto Lottery",
        siteUrl: "https://crypto-lottery-ffap.netlify.app/",
        description:
          "Decentralized lottery platform powered by blockchain technology",
        longDescription:
          "An innovative Web3 lottery application deployed on Base Chain, combining the excitement of traditional lotteries with the transparency and security of blockchain technology. Built with Next.js, Wagmi, and Solidity smart contracts, this dApp ensures provably fair gameplay and instant, trustless payouts.",
        image: cryptoLotteryImage,
        alt: "Crypto Lottery",
      },
      {
        title: "Modern Portfolio Showcase",
        siteUrl: "https://alex-portfolio-vue.netlify.app/",
        description:
          "Responsive portfolio built with cutting-edge Next.js architecture",
        longDescription:
          "A sleek, performance-optimized portfolio website showcasing modern web development practices. Built with Next.js 14, TailwindCSS, and TypeScript, featuring server-side rendering, optimized images, and seamless animations. This project demonstrates my expertise in creating fast, accessible, and visually stunning web applications.",
        image: nextJsPortfolioImage,
        github: "https://github.com/alex1092/vue-portfolio",
        alt: "Modern Portfolio Showcase",
      },
      {
        title: "Custom Shell Implementation",
        description:
          "Low-level systems programming: building a shell from the ground up",
        longDescription:
          "A custom command-line shell built entirely from scratch using Go, demonstrating deep understanding of systems programming, process management, and Unix-like operating systems. This project showcases proficiency in low-level programming concepts including process forking, signal handling, and command parsing.",

        image: shellScreenshot,
        alt: "Custom Shell Implementation",
        github: "https://github.com/alex1092/my-shell-go",
      },
      {
        title: "Vue.js Portfolio Experiment",
        siteUrl: "https://alex-portfolio-vue.netlify.app/",
        description:
          "Exploring Vue 3's Composition API and modern frontend patterns",
        longDescription:
          "An experimental portfolio built with Vue 3 to explore the framework's Composition API, reactivity system, and component architecture. This project served as a learning playground for comparing different frontend frameworks and understanding their unique approaches to state management and component composition.",
        image: portfolioImage,
        github: "https://github.com/alex1092/vue-portfolio",
        alt: "Vue.js Portfolio Experiment",
      },
      {
        title: "Ladbrokes Australia",
        siteUrl:
          "https://apps.apple.com/au/app/ladbrokes-online-betting/id710375963",
        description:
          "Enterprise-scale mobile platform serving millions of users",
        longDescription:
          "Led the architectural transformation of Australia's premier betting platform, serving millions of active users. Spearheaded the development of a comprehensive design system and white-label solution, enabling rapid deployment across multiple brands. This scalable architecture reduced development time by 60% while maintaining consistent user experiences across all platforms.",
        image: ladbrokesMockup,
        alt: "Ladbrokes Australia",
      },
      {
        title: "Neds",
        siteUrl:
          "https://apps.apple.com/au/app/neds-online-betting/id1263814273",
        description:
          "Core team leadership on Australia's fastest-growing betting app",
        longDescription:
          "As a core team member, I drove the technical evolution of Neds, one of Australia's most innovative sports betting platforms. My contributions shaped the app's architecture, user experience, and feature roadmap, directly impacting user engagement and platform scalability. Collaborated closely with product and design teams to deliver cutting-edge mobile experiences.",
        image: nedsMockup,
        alt: "Neds",
      },
      {
        title: "Tab New Zealand",
        siteUrl: "https://www.tab.co.nz/",
        description:
          "Cross-border platform integration and white-label architecture",
        longDescription:
          "Successfully orchestrated the complex integration of Tab New Zealand into our existing platform ecosystem. This challenging project involved adapting our white-label betting solution for New Zealand's unique regulatory environment and user preferences, demonstrating expertise in international platform scaling and regulatory compliance.",
        image: tabnzScreenshot,
        alt: "Tab New Zealand",
      },
      {
        title: "Ethereum.org",
        siteUrl: "https://ethereum.org/en/",
        github: "https://github.com/ethereum/ethereum-org-website",
        description:
          "Open source contributions to the world's leading blockchain ecosystem",
        longDescription: `Contributing to Ethereum's official website, I enhanced performance, user experience, and developer workflows for one of the most visited blockchain resources globally. My contributions included implementing new features, resolving critical bugs, and leading the migration to Chakra UI, directly impacting millions of developers and users in the Web3 ecosystem.`,
        image: ethereumHomePageImage,
        alt: "Ethereum.org",
      },
      {
        title: "Wisesheets",
        siteUrl: "https://www.wisesheets.io/",
        description:
          "Financial data platform revolutionizing investment analysis",
        longDescription:
          "Developed a sophisticated financial analytics platform that transforms how investors access and analyze market data. Wisesheets provides real-time financial metrics, custom stock screening capabilities, and advanced data modeling tools directly within spreadsheet environments. This SaaS solution streamlines complex financial analysis workflows for professional investors and analysts.",
        image: wisesheetsImage,
        alt: "Wisesheets",
      },
    ],
  },
};
