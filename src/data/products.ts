export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  plannedUrl: string;
  status: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'whafox-chat',
    name: 'WHAFOX Chat',
    category: 'Business Communication & SaaS',
    description:
      'An intelligent WhatsApp Business communication platform designed to help businesses manage customer conversations, automate communication and improve team productivity.',
    features: [
      'WhatsApp Business API integration',
      'Shared Team Inbox',
      'Customer Management',
      'Message Campaigns',
      'Automation',
      'Multi-agent communication',
    ],
    plannedUrl: 'https://whafox.com/chat',
    status: 'Coming Soon',
  },
];
