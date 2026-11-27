import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoDark from '../../assets/whafox-logo-dark.png';
import { NAV_ITEMS } from '../../data/siteConfig';
import { Button } from '../ui/Button';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('home');

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px]"
      >
        <a
          href="#home"
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6002] focus-visible:ring-offset-4 rounded-md"
          aria-label="WHAFOX Home"
        >
          <img
            src={logoDark}
            alt="WHAFOX"
            decoding="sync"
            className="h-7 sm:h-8 w-auto object-contain select-none"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`relative py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6002] focus-visible:ring-offset-4 rounded-sm ${
                      isActive
                        ? 'text-[#FF6002]'
                        : 'text-[#17191D] hover:text-[#FF6002]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute inset-x-0 -bottom-[1px] h-0.5 rounded-full bg-[#FF6002]"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <Button href="#coming-soon" variant="primary" size="sm">
            Coming Soon
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-[10px] p-2 text-[#17191D] hover:bg-[#F5F5F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6002]"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden border-t border-[#E5E7EB] bg-white px-4 pb-5 pt-3 shadow-lg"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className={`block rounded-[10px] px-3.5 py-2.5 text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'bg-[#FFF0E8] text-[#FF6002]'
                        : 'text-[#17191D] hover:bg-[#F5F5F7]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-3 border-t border-[#E5E7EB]">
            <Button
              href="#coming-soon"
              variant="primary"
              size="md"
              className="w-full"
              onClick={handleNavClick}
            >
              Coming Soon
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
