export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'code' | 'layers' | 'globe' | 'workflow';
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Custom software and application development.',
    iconName: 'code',
  },
  {
    id: 'saas-solutions',
    title: 'SaaS Solutions',
    description: 'Scalable software platforms for modern businesses.',
    iconName: 'layers',
  },
  {
    id: 'digital-solutions',
    title: 'Digital Solutions',
    description: 'Technology-driven business experiences.',
    iconName: 'globe',
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    description: 'Simplifying business processes with technology.',
    iconName: 'workflow',
  },
];
