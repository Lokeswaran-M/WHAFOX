import { useState } from 'react';
import { Linkedin, Instagram, Facebook, X } from 'lucide-react';
import logoDark from '../../assets/whafox-logo-dark.png';
import { SITE_CONFIG } from '../../data/siteConfig';
import { PRODUCTS } from '../../data/products';

type LegalDoc = 'privacy' | 'terms' | null;

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case 'LinkedIn':
      return <Linkedin className="h-4 w-4" aria-hidden="true" />;
    case 'Instagram':
      return <Instagram className="h-4 w-4" aria-hidden="true" />;
    case 'Facebook':
      return <Facebook className="h-4 w-4" aria-hidden="true" />;
    default:
      return (
        <span className="text-xs font-bold leading-none" aria-hidden="true">
          𝕏
        </span>
      );
  }
}

export function Footer() {
  const [legalDoc, setLegalDoc] = useState<LegalDoc>(null);

  return (
    <footer className="bg-[#F5F5F7] border-t border-[#E5E7EB] text-[#17191D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: WHAFOX */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6002] rounded-sm"
              aria-label="WHAFOX Home"
            >
              <img
                src={logoDark}
                alt="WHAFOX"
                decoding="sync"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </a>
            <p className="mt-4 text-sm font-semibold text-[#17191D]">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-2 text-sm text-[#6B7280] leading-relaxed max-w-xs">
              Building modern software solutions and scalable technology platforms
              for businesses.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-[#17191D] tracking-tight">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#6B7280]">
              <li>
                <a href="#about" className="hover:text-[#FF6002] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#FF6002] transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF6002] transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF6002] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-[#17191D] tracking-tight">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#6B7280]">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <a
                    href="#products"
                    className="inline-flex items-center gap-2 hover:text-[#FF6002] transition-colors"
                  >
                    <span>{product.name}</span>
                    <span className="rounded-full bg-white border border-[#E5E7EB] px-2 py-0.5 text-[11px] font-medium text-[#6B7280]">
                      Coming Soon
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Social */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-[#17191D] tracking-tight">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#6B7280]">
              <li>
                <button
                  type="button"
                  onClick={() => setLegalDoc('privacy')}
                  className="hover:text-[#FF6002] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalDoc('terms')}
                  className="hover:text-[#FF6002] transition-colors cursor-pointer"
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17191D]">
                Social
              </h4>
              <div className="mt-3 flex items-center gap-2.5">
                {SITE_CONFIG.socialLinks.map((social) =>
                  social.href ? (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WHAFOX on ${social.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#E5E7EB] text-[#17191D] hover:border-[#FF6002] hover:text-[#FF6002] transition-colors"
                    >
                      <SocialIcon name={social.name} />
                    </a>
                  ) : (
                    <span
                      key={social.name}
                      title={`${social.name} — Coming Soon`}
                      aria-label={`${social.name} (Coming Soon)`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#E5E7EB] text-[#6B7280]/70 cursor-default"
                    >
                      <SocialIcon name={social.name} />
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>&copy; {SITE_CONFIG.copyrightYear} WHAFOX. All rights reserved.</p>
          <p>Official Website — Coming Soon</p>
        </div>
      </div>

      {/* Legal Notice Modal */}
      {legalDoc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          onClick={() => setLegalDoc(null)}
        >
          <div
            className="w-full max-w-lg rounded-[18px] bg-white p-6 sm:p-8 shadow-xl border border-[#E5E7EB]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-[#E5E7EB] pb-4">
              <h3 id="legal-modal-title" className="text-lg font-bold text-[#17191D]">
                {legalDoc === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalDoc(null)}
                aria-label="Close modal"
                className="rounded-lg p-1.5 text-[#6B7280] hover:bg-[#F5F5F7] hover:text-[#17191D]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 space-y-3 text-sm text-[#6B7280] leading-relaxed">
              <p>
                {legalDoc === 'privacy'
                  ? 'The official WHAFOX Privacy Policy is being finalized ahead of our full corporate website launch.'
                  : 'The official WHAFOX Terms & Conditions are being finalized ahead of our full corporate website launch.'}
              </p>
              <p>
                This pre-launch website is an informational overview of WHAFOX and does
                not collect or store personal data on any backend server.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalDoc(null)}
                className="rounded-[10px] bg-[#17191D] px-4 py-2 text-sm font-medium text-white hover:bg-[#2C3038] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
