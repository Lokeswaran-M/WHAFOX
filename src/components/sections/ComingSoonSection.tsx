import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function ComingSoonSection() {
  return (
    <section id="coming-soon" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="rounded-[20px] bg-[#F5F5F7] border border-[#E5E7EB] px-6 py-14 sm:px-12 sm:py-16 lg:px-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E5E7EB] px-3.5 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#FF6002]" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#17191D]">
              WHAFOX · OFFICIAL LAUNCH COMING SOON
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-[#17191D]">
            Something Better Is on Its Way.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-[#6B7280] leading-[1.65]">
            We&apos;re preparing the next generation of business software
            experiences. Stay connected with WHAFOX.
          </p>

          <div className="mt-8 flex justify-center">
            <Button href="#contact" variant="primary" size="lg">
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
