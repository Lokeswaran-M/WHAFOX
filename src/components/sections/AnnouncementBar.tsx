import { SITE_CONFIG } from '../../data/siteConfig';

export function AnnouncementBar() {
  return (
    <div className="w-full bg-[#F5F5F7] border-b border-[#E5E7EB]">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2.5 px-4 py-2 text-xs sm:text-[13px] font-medium text-[#17191D]">
        <span
          className="inline-block h-2 w-2 rounded-full bg-[#FF6002] shrink-0"
          aria-hidden="true"
        />
        <span>{SITE_CONFIG.announcementText}</span>
      </div>
    </div>
  );
}
