export type Integration = {
  id: string;
  name: string;
  category: string;
  description: string;
  logo: string;
  featured?: boolean;
};

export type Category = {
  name: string;
  count: number;
};

function buildCategories(items: Integration[]): Category[] {
  const countByCategory: Record<string, number> = {};
  let featuredCount = 0;

  for (const item of items) {
    countByCategory[item.category] = (countByCategory[item.category] || 0) + 1;
    if (item.featured) featuredCount++;
  }

  const categoryNames = Object.keys(countByCategory).sort();

  return [
    { name: "All", count: items.length },
    { name: "Featured", count: featuredCount },
    ...categoryNames.map((name) => ({ name, count: countByCategory[name] })),
  ];
}

export const integrations: Integration[] = [
  {
    id: "salesforce",
    name: "Salesforce",
    category: "CRM",
    description:
      "Salesforce is a CRM platform that allows you to manage customer relationships and sync data seamlessly between systems.",
    logo: "/images/eacf6e78-b2d5-4108-ba40-ec51f9c25b0b.png",
    featured: true,
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    category: "Calendar",
    description:
      "Google Calendar is a scheduling platform that helps you organize meetings, appointments, and events efficiently.",
    logo: "/images/3d5a6740-c4d3-4941-a73d-1af32d53c933.png",
    featured: true,
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    category: "Accounting",
    description:
      "Generates and sends sales receipt information to Intuit QuickBooks Online every night for paid inspections. Includes Customer info.",
    logo: "/images/aaafe7a2-3ff9-4dc1-934f-659092ca642f.png",
    featured: true,
  },
  {
    id: "repair-pricer",
    name: "Repair Pricer",
    category: "Inspector tools",
    description:
      "Repair Pricer turns your inspection report into an accurate repair estimate. Help your buyer negotiate the best possible price.",
    logo: "/images/d0d6e126-5882-4136-ac75-3c2eda075839.png",
    featured: true,
  },
  {
    id: "secure-24",
    name: "Secure 24",
    category: "Insurance",
    description:
      "Secure 24 is an authorized ADT dealer that pays inspectors $200 for every successful installation.",
    logo: "/images/b83e12d8-3505-4b89-8fda-74e9ad741663.png",
    featured: true,
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "Communications",
    description:
      "Mailchimp is a comprehensive marketing automation platform designed to send targeted mass emails effectively.",
    logo: "/images/3ec4b535-eb26-4c8e-a383-6ba78b056f45.png",
    featured: true,
  },
  {
    id: "inspector-call-center",
    name: "Inspector Call Center",
    category: "Call center",
    description:
      "Inspector Call Center is a call center that helps home inspectors get inspections scheduled every time.",
    logo: "/images/1ee8c1fd-6dfb-4c5a-b009-e4a6a9af7c9d.png",
  },
  {
    id: "simple-solutions",
    name: "Simple Solutions",
    category: "Call center",
    description:
      "Simple Solutions is a specialized call center that helps home inspectors book significantly more inspections.",
    logo: "/images/f5bd2c20-dcfd-4106-827c-7aaefb27940f.png",
  },
  {
    id: "ical-calendar",
    name: "iCal Calendar",
    category: "Calendar",
    description:
      "iCal is a universal calendar format that allows you to sync events across different calendar applications.",
    logo: "/images/ab7da4d9-efa7-4348-aeb6-3697cf77fd66.png",
  },
  {
    id: "zendesk",
    name: "Zendesk",
    category: "CRM",
    description:
      "Zendesk is a customer service platform that helps you manage support tickets, live chat, and customer interactions.",
    logo: "/images/0f394a0a-4447-4fce-86d2-30714eba1a37.png",
  },
  {
    id: "zoho-crm",
    name: "Zoho CRM",
    category: "CRM",
    description:
      "Zoho CRM helps you manage your sales pipeline, automate workflows, and build lasting customer relationships.",
    logo: "/images/c99481f7-b26b-4506-b1d6-304b415d78cb.png",
  },
  {
    id: "monday",
    name: "monday.com",
    category: "CRM",
    description:
      "monday.com is a work management platform that helps teams plan, track, and deliver projects collaboratively.",
    logo: "/images/dfcbba60-a40b-458a-9344-4c611a23fddd.png",
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365",
    category: "CRM",
    description:
      "Microsoft 365 integrates productivity tools with CRM capabilities to streamline your business workflows.",
    logo: "/images/0b496568-57be-4283-a0b7-3b975f977f79.png",
  },
  {
    id: "sage",
    name: "Sage",
    category: "CRM",
    description:
      "Sage provides business management software to help you manage customers, finances, and operations in one place.",
    logo: "/images/0136ae42-5767-457e-ab44-dbecf2e233c0.png",
  },
  {
    id: "brevo",
    name: "Brevo",
    category: "CRM",
    description:
      "Brevo is an all-in-one marketing platform with CRM, email campaigns, and automation for growing businesses.",
    logo: "/images/77117cc4-d88e-48b5-911e-b6452d0701d3.png",
  },
  {
    id: "copper",
    name: "Copper",
    category: "CRM",
    description:
      "Copper is a CRM built for Google Workspace that helps you manage relationships and automate sales processes.",
    logo: "/images/4e9524cd-b918-457e-becf-00343bdea84e.png",
  },
  {
    id: "nutshell",
    name: "Nutshell",
    category: "CRM",
    description:
      "Nutshell is a user-friendly CRM that helps small businesses manage contacts, track leads, and close more deals.",
    logo: "/images/b3114b65-e35e-4ea7-ac9f-4d427fad861c.png",
  },
  {
    id: "freshworks",
    name: "Freshworks",
    category: "CRM",
    description:
      "Freshworks provides modern CRM software to help your sales team engage leads and close deals faster.",
    logo: "/images/72ff1e23-eefd-4aaa-a30b-a4b867f8c68c.png",
  },
  {
    id: "netsuite",
    name: "NetSuite",
    category: "CRM",
    description:
      "NetSuite is an enterprise cloud ERP and CRM platform for managing financials, customers, and operations.",
    logo: "/images/a4eaa184-6645-487f-a0ef-826459e3b92c.png",
  },
];

export const categories: Category[] = buildCategories(integrations);
