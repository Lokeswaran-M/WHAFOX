export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const SITE_CONFIG = {
  companyName: 'WHAFOX',
  domain: 'https://whafox.com',
  tagline: 'Powering Businesses Through Technology.',
  statusLabel: 'OFFICIAL WEBSITE COMING SOON',
  announcementText: 'Something Innovative Is Coming.',
  /**
   * Configure verified corporate contact email and social URLs here when ready.
   * Empty strings render as unlinked/configured placeholders rather than invented links.
   */
  contact: {
    enquiryEmail: '',
    mailSubjectPrefix: 'WHAFOX Corporate Enquiry',
  },
  socialLinks: [
    { name: 'LinkedIn', href: '' },
    { name: 'Instagram', href: '' },
    { name: 'Facebook', href: '' },
    { name: 'X', href: '' },
  ],
  copyrightYear: 2026,
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'products', label: 'Our Products', href: '#products' },
  { id: 'services', label: 'What We Do', href: '#services' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
