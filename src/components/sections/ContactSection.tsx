import { useState, type FormEvent } from 'react';
import { Check, Copy, Info, Send } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [previewText, setPreviewText] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const bodyLines = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      ...(form.company.trim() ? [`Company: ${form.company.trim()}`] : []),
      '',
      'Message:',
      form.message.trim(),
    ];
    const formattedBody = bodyLines.join('\n');

    if (SITE_CONFIG.contact.enquiryEmail) {
      const subject = encodeURIComponent(
        `${SITE_CONFIG.contact.mailSubjectPrefix} — ${form.name.trim()}`
      );
      const body = encodeURIComponent(formattedBody);
      window.location.href = `mailto:${SITE_CONFIG.contact.enquiryEmail}?subject=${subject}&body=${body}`;
      return;
    }

    setPreviewText(formattedBody);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!previewText) return;
    try {
      await navigator.clipboard.writeText(previewText);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-white py-20 sm:py-24 lg:py-28 border-t border-[#E5E7EB]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact"
              title="Let's Build Something Together."
              subtitle="Have an enquiry about WHAFOX or our upcoming software platforms? Prepare your message below."
            />

            <div className="mt-8 rounded-[16px] bg-[#F5F5F7] border border-[#E5E7EB] p-5 text-sm text-[#6B7280] leading-relaxed">
              <div className="flex items-start gap-3">
                <Info
                  className="h-5 w-5 text-[#FF6002] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-[#17191D]">
                    Pre-Launch Notice
                  </p>
                  <p className="mt-1">
                    Our official website is currently in its pre-launch phase.
                    Direct corporate contact channels will be published here upon
                    launch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-[18px] bg-white border border-[#E5E7EB] p-6 sm:p-8 shadow-[0_4px_20px_rgba(23,25,29,0.04)] space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[#17191D] mb-1.5"
                  >
                    Name <span className="text-[#FF6002]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Your full name"
                    className="w-full rounded-[10px] border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#17191D] placeholder:text-[#9CA3AF] focus:border-[#FF6002] focus:outline-none focus:ring-2 focus:ring-[#FF6002]/20 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[#17191D] mb-1.5"
                  >
                    Email <span className="text-[#FF6002]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="you@company.com"
                    className="w-full rounded-[10px] border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#17191D] placeholder:text-[#9CA3AF] focus:border-[#FF6002] focus:outline-none focus:ring-2 focus:ring-[#FF6002]/20 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-company"
                  className="block text-sm font-medium text-[#17191D] mb-1.5"
                >
                  Company <span className="text-[#6B7280] font-normal">(optional)</span>
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, company: e.target.value }))
                  }
                  placeholder="Your organization"
                  className="w-full rounded-[10px] border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#17191D] placeholder:text-[#9CA3AF] focus:border-[#FF6002] focus:outline-none focus:ring-2 focus:ring-[#FF6002]/20 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[#17191D] mb-1.5"
                >
                  Message <span className="text-[#FF6002]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="Tell us about your enquiry..."
                  className="w-full rounded-[10px] border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#17191D] placeholder:text-[#9CA3AF] focus:border-[#FF6002] focus:outline-none focus:ring-2 focus:ring-[#FF6002]/20 transition-colors resize-y"
                />
              </div>

              <div className="pt-1 flex flex-wrap items-center justify-between gap-4">
                <Button type="submit" variant="primary" size="md">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>Send Enquiry</span>
                </Button>
                <span className="text-xs text-[#6B7280]">
                  Frontend preview — no data is transmitted to a server.
                </span>
              </div>

              {previewText && (
                <div
                  role="status"
                  className="mt-5 rounded-[12px] border border-[#E5E7EB] bg-[#F5F5F7] p-4"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#17191D]">
                      Enquiry Draft Ready (Frontend-Only Demo)
                    </p>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 rounded-md bg-white border border-[#E5E7EB] px-2.5 py-1 text-xs font-medium text-[#17191D] hover:border-[#FF6002] cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-[#FF6002]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-[#6B7280] mb-2.5">
                    No backend email endpoint is connected yet. Your formatted
                    enquiry is shown below for your records:
                  </p>
                  <pre className="whitespace-pre-wrap rounded-lg bg-white border border-[#E5E7EB] p-3 text-xs font-mono text-[#17191D]">
                    {previewText}
                  </pre>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
