export type CustomIntegration = {
  id: string;
  name: string;
  description: string;
  icon: "webhook" | "grid" | "message";
};

export type Resource = {
  id: number;
  title: string;
};

export const customIntegrations: CustomIntegration[] = [
  {
    id: "contact-sync",
    name: "Contact Sync",
    description:
      "Lorem ipsum dolor sit amet consectetur. Varius posuere quam vulputate elit suspendisse. Varius posuere quam vulputate elit.",
    icon: "webhook",
  },
  {
    id: "crm-connection",
    name: "CRM Connection",
    description:
      "Lorem ipsum dolor sit amet consectetur. Varius posuere quam vulputate elit suspendisse. Varius posuere quam vulputate elit.",
    icon: "grid",
  },
  {
    id: "internal-communications",
    name: "Internal Communications",
    description:
      "Lorem ipsum dolor sit amet consectetur. Varius posuere quam vulputate elit suspendisse. Varius posuere quam vulputate elit.",
    icon: "message",
  },
];

export const resources: Resource[] = [
  { id: 1, title: "Spectora Public API & Dev Portal" },
  { id: 2, title: "Generating & Managing your API Keys" },
  { id: 3, title: "Configure Event Webhooks" },
];
