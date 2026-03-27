export type IntegrationDetail = {
  id: string;
  name: string;
  category: string;
  description: string;
  logoImage: string;
  logoBg: string;
  builtBy: string;
  pricing: string;
  supportUrl: string;
  resourceLinks: { label: string; url: string }[];
  basedIn: { country: string; flag: string };
  features: {
    title: string;
    description: string;
    image: string;
    imageBg: string;
    bgImage?: string;
    logoOverlay?: string;
  }[];
  useCases?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  useCaseIntro?: string;
  featureLogos?: {
    image: string;
    size: number;
    left: number;
    top: number;
    rounded?: boolean;
  }[];
  about: string;
  permissions: string[];
};

export const integrationDetails: Record<string, IntegrationDetail> = {
  mailchimp: {
    id: "mailchimp",
    name: "Mailchimp",
    category: "Communications",
    description:
      "Mailchimp is a comprehensive marketing automation platform designed to send targeted mass emails effectively.",
    logoImage:
      "/images/a4bb6ae1-a458-45f4-9661-3876a968f4d2.png",
    logoBg: "#FFE01B",
    builtBy: "Mailchimp",
    pricing: "Free",
    supportUrl: "#",
    resourceLinks: [
      { label: "Company Website", url: "#" },
      { label: "Documentation", url: "#" },
    ],
    basedIn: { country: "USA", flag: "🇺🇸" },
    features: [
      {
        title: "Share Your Content Everywhere",
        description:
          "Maximize your campaign's impact by distributing content across multiple channels with just a few clicks. With Mailchimp's integrated sharing tools, you can easily repurpose your email content and publish it to Facebook, Instagram, Twitter, and other social platforms. This multi-channel approach gives your message more visibility, increases engagement opportunities, and helps you reach your audience wherever they spend their time online. Whether you're promoting a product launch, sharing a newsletter, or announcing an event, Mailchimp makes cross-platform distribution seamless and efficient.",
        image:
          "/images/e5f53b12-e835-4aa0-a8eb-778dfed0ef92.png",
        imageBg: "white",
        bgImage:
          "/images/df2b8e19-37b0-4706-9386-488438c271a4.png",
        logoOverlay:
          "/images/78a5310e-63c5-406b-8944-d651e7c116f5.png",
      },
      {
        title: "Design Beautiful Emails in Minutes",
        description:
          "Create professional-looking campaigns in minutes, not hours, with Mailchimp's intuitive email builder. Choose from hundreds of expertly designed templates tailored to different industries and goals, or start with a blank canvas and build something completely custom. The drag-and-drop editor makes it easy to add images, text, buttons, and dynamic content blocks without any technical expertise. Customize colors, fonts, and layouts to match your brand perfectly, preview how your emails look across devices, and create mobile-responsive designs that look great everywhere.",
        image:
          "/images/f705ccc6-6e9e-4bff-8a9c-624081bacfb4.png",
        imageBg: "#fff5b2",
      },
    ],
    about:
      "Mailchimp is an all-in-one marketing platform that helps businesses grow their audience and build customer relationships. The platform specializes in email marketing, enabling companies to create, send, and analyze professional campaigns using intuitive tools and customizable templates. Mailchimp offers marketing automation that triggers personalized messages based on customer behavior and preferences. Beyond email, users can create landing pages, digital ads, and social media content all within the same platform.\n\nThe company provides detailed analytics to track campaign performance, open rates, and ROI. With integrations to hundreds of business tools and scalable pricing, Mailchimp serves millions of customers worldwide, from small businesses to large enterprises.",
    permissions: [
      "Access contact lists and subscriber data",
      "Create and send email campaigns",
      "View campaign performance and analytics",
      "Manage audience segments and tags",
      "Sync customer information automatically",
      "Create automated marketing workflows",
    ],
  },
  "contact-sync": {
    id: "contact-sync",
    name: "Contact Sync",
    category: "Custom Integration",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt vestibulum malesuada viverra senectus at tortor. Nulla quam eu vel libero.",
    logoImage:
      "/images/a4bb6ae1-a458-45f4-9661-3876a968f4d2.png",
    logoBg: "#f6f7f8",
    builtBy: "Multiple",
    pricing: "Free",
    supportUrl: "#",
    resourceLinks: [{ label: "Documentation", url: "#" }],
    basedIn: { country: "USA", flag: "🇺🇸" },
    features: [
      {
        title: "Keep contact information synchronized everywhere",
        description:
          "Lorem ipsum dolor sit amet consectetur. Non lectus aliquet eu sollicitudin amet risus adipiscing massa. Volutpat vitae non proin hendrerit. Donec nibh sed morbi justo consectetur volutpat. Urna ullamcorper aliquet et nec. Massa sit lacus urna non neque a lectus. Eget tristique risus dui enim ac egestas. Faucibus nibh ultricies lacinia sed amet id. Velit purus sed cursus fermentum sit a mauris. Amet nulla malesuada sit massa massa accumsan. Odio egestas felis urna viverra ac etiam sem amet velit. Sed malesuada at lectus aliquam ornare. Quam pretium dictum diam id lectus id quam. Bibendum tortor felis quisque gravida tortor. Molestie dolor placerat faucibus velit. Hendrerit ornare praesent nibh facilisis orci.",
        image: "",
        imageBg: "white",
      },
    ],
    featureLogos: [
      {
        image:
          "/images/5af10e44-2443-4e8c-94e8-f34a51fcb989.png",
        size: 85,
        left: 117,
        top: 82,
        rounded: false,
      },
      {
        image:
          "/images/203c29b2-a06e-4883-9b34-13a87408ab17.png",
        size: 50,
        left: 329,
        top: 46,
        rounded: false,
      },
      {
        image:
          "/images/fcdf7848-c2cf-4441-8863-1ccfebe4a8df.png",
        size: 65,
        left: 400,
        top: 156,
        rounded: true,
      },
      {
        image:
          "/images/41ece484-f84d-48c9-8f2d-14e552e7f803.png",
        size: 80,
        left: 219,
        top: 266,
        rounded: false,
      },
      {
        image:
          "/images/91e0e08a-e776-4054-bc7b-ad4d0f757233.png",
        size: 55,
        left: 560,
        top: 89,
        rounded: false,
      },
      {
        image:
          "/images/95384174-d483-4946-ad56-1d5da8e7c9e3.png",
        size: 100,
        left: 609,
        top: 226,
        rounded: true,
      },
      {
        image:
          "/images/3bc174c2-cca2-4f19-af79-21883c69104f.png",
        size: 75,
        left: 737,
        top: 53,
        rounded: true,
      },
    ],
    useCaseIntro:
      "Not sure where to start? Here are some common ways Spectora users leverage custom contact sync integrations to streamline their workflows and grow their business.",
    useCases: [
      {
        title: "Build targeted email lists from Spectora contacts",
        description:
          "Lorem ipsum dolor sit amet consectetur. Ipsum quam ultrices at risus facilisis in ipsum mattis proin. At massa vitae sit dis enim magna.",
      },
      {
        title: "Backup contacts to external systems",
        description:
          "Lorem ipsum dolor sit amet consectetur. Ipsum quam ultrices at risus facilisis in ipsum mattis proin. At massa vitae sit dis enim magna.",
      },
      {
        title: "Analyze customer data and engagement metrics",
        description:
          "Lorem ipsum dolor sit amet consectetur. Ipsum quam ultrices at risus facilisis in ipsum mattis proin. At massa vitae sit dis enim magna.",
      },
      {
        title: "Track customer transactions and payments",
        description:
          "Lorem ipsum dolor sit amet consectetur. Ipsum quam ultrices at risus facilisis in ipsum mattis proin. At massa vitae sit dis enim magna.",
      },
      {
        title: "Keep sales pipeline updated with Spectora contacts",
        description:
          "Lorem ipsum dolor sit amet consectetur. Ipsum quam ultrices at risus facilisis in ipsum mattis proin. At massa vitae sit dis enim magna.",
      },
      {
        title: "Create tasks when new contacts are added",
        description:
          "Lorem ipsum dolor sit amet consectetur. Ipsum quam ultrices at risus facilisis in ipsum mattis proin. At massa vitae sit dis enim magna.",
      },
    ],
    about:
      "Contact Sync is a custom integration template that enables automatic synchronization of your Spectora contacts with external platforms and services. Built to save time and reduce manual data entry, Contact Sync uses webhooks and the Spectora Public API to keep your customer information consistent across all the tools you use.\n\nWhether you need to sync contacts with your CRM, email marketing platform, accounting software, or any other service, Contact Sync provides a flexible foundation that can be customized to fit your specific workflow requirements.",
    permissions: [
      "Access contact lists and subscriber data",
      "Create and send email campaigns",
      "View campaign performance and analytics",
      "Manage audience segments and tags",
      "Sync customer information automatically",
      "Create automated marketing workflows",
    ],
  },
  salesforce: {
    id: "salesforce",
    name: "Salesforce",
    category: "CRM",
    description:
      "Salesforce is a comprehensive CRM platform designed to manage sales pipelines and customer data effectively.",
    logoImage:
      "/images/7905c995-94a3-46fb-a86e-8bbfcbedf1b8.png",
    logoBg: "#ffffff",
    builtBy: "Salesforce",
    pricing: "Paid",
    supportUrl: "#",
    resourceLinks: [
      { label: "Company Website", url: "#" },
      { label: "Documentation", url: "#" },
    ],
    basedIn: { country: "USA", flag: "🇺🇸" },
    features: [
      {
        title: "Track Your Sales Pipeline in Real-Time",
        description:
          "Monitor every deal from first contact to close with Salesforce's intuitive sales dashboard. Visualize opportunity stages, forecast revenue, and track team performance through customizable views and real-time updates. This centralized approach gives you complete visibility into your sales process, helps you identify bottlenecks before they impact revenue, and ensures your team stays focused on high-priority opportunities. Whether you're managing a handful of deals or hundreds of accounts, Salesforce provides the clarity and control you need to drive consistent growth and hit your sales targets.",
        image:
          "/images/cdfcbe6d-0984-4bbe-98b6-e0ca698157df.png",
        imageBg: "#f6f9f9",
        logoOverlay:
          "/images/eacf6e78-b2d5-4108-ba40-ec51f9c25b0b.png",
      },
      {
        title: "Get a Complete View of Every Lead and Customer",
        description:
          "Access all the information you need about your contacts in one organized profile with Salesforce's comprehensive CRM. View contact details, communication history, related opportunities, and recent activity through an intuitive, easy-to-navigate interface. The streamlined layout makes it simple to log calls and meetings, track engagement over time, assign follow-up tasks, and see exactly where each lead stands in your pipeline. Customize fields to capture information specific to your business, add detailed notes for team collaboration, preview interaction timelines across channels, and maintain the complete context your team needs to build lasting customer relationships.",
        image:
          "/images/dc6d33c0-201a-4f40-8196-c563cc0e2460.png",
        imageBg: "#f6f9f9",
      },
    ],
    about:
      "Salesforce is a leading customer relationship management (CRM) platform that helps businesses manage sales processes and build lasting customer relationships. The platform specializes in sales pipeline management, enabling companies to track leads, manage opportunities, and close deals using powerful automation and customizable workflows. Salesforce offers intelligent sales tools that provide real-time insights into customer interactions and buying behavior. Beyond sales, users can manage customer service, marketing campaigns, and business analytics all within the same ecosystem.\n\nThe company provides comprehensive reporting and dashboards to track performance, forecast revenue, and measure team productivity. With thousands of integrations, AI-powered features, and flexible deployment options, Salesforce serves businesses of all sizes across industries worldwide.",
    permissions: [
      "Access contact and account information",
      "Log activities and track interactions",
      "Read and update opportunity data",
      "Sync lead and customer records",
      "View sales pipeline and forecasts",
      "Access communication history",
    ],
  },
  "zoho-crm": {
    id: "zoho-crm",
    name: "Zoho CRM",
    category: "CRM",
    description:
      "Zoho CRM is a comprehensive CRM platform designed to manage sales pipelines and customer data effectively.",
    logoImage: "/images/c99481f7-b26b-4506-b1d6-304b415d78cb.png",
    logoBg: "#ffffff",
    builtBy: "Zoho CRM",
    pricing: "Paid",
    supportUrl: "#",
    resourceLinks: [
      { label: "Company Website", url: "#" },
      { label: "Documentation", url: "#" },
    ],
    basedIn: { country: "USA", flag: "🇺🇸" },
    features: [
      {
        title: "Track Your Sales Pipeline in Real-Time",
        description:
          "Monitor every deal from first contact to close with Zoho CRM's intuitive sales dashboard. Visualize opportunity stages, forecast revenue, and track team performance through customizable views and real-time updates. This centralized approach gives you complete visibility into your sales process, helps you identify bottlenecks before they impact revenue, and ensures your team stays focused on high-priority opportunities. Whether you're managing a handful of deals or hundreds of accounts, Zoho CRM provides the clarity and control you need to drive consistent growth and hit your sales targets.",
        image: "/images/zoho-feature-pipeline.png",
        imageBg: "white",
        logoOverlay: "/images/zoho-logo-wide.png",
      },
      {
        title: "Get a Complete View of Every Lead and Customer",
        description:
          "Access all the information you need about your contacts in one organized profile with Zoho CRM's comprehensive CRM. View contact details, communication history, related opportunities, and recent activity through an intuitive, easy-to-navigate interface. The streamlined layout makes it simple to log calls and meetings, track engagement over time, assign follow-up tasks, and see exactly where each lead stands in your pipeline. Customize fields to capture information specific to your business, add detailed notes for team collaboration, preview interaction timelines across channels, and maintain the complete context your team needs to build lasting customer relationships.",
        image: "/images/zoho-feature-contacts.png",
        imageBg: "#faf9f8",
      },
    ],
    about:
      "Zoho CRM is a leading customer relationship management (CRM) platform that helps businesses manage sales processes and build lasting customer relationships. The platform specializes in sales pipeline management, enabling companies to track leads, manage opportunities, and close deals using powerful automation and customizable workflows. Zoho CRM offers intelligent sales tools that provide real-time insights into customer interactions and buying behavior. Beyond sales, users can manage customer service, marketing campaigns, and business analytics all within the same ecosystem.\n\nThe company provides comprehensive reporting and dashboards to track performance, forecast revenue, and measure team productivity. With thousands of integrations, AI-powered features, and flexible deployment options, Zoho CRM serves businesses of all sizes across industries worldwide.",
    permissions: [
      "Access contact and account information",
      "Log activities and track interactions",
      "Read and update opportunity data",
      "Sync lead and customer records",
      "View sales pipeline and forecasts",
      "Access communication history",
    ],
  },
};
