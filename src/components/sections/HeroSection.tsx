import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../../data/siteConfig';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32"
    >
      {/* Subtle geometric X-inspired background accent */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-24 right-[-8%] h-[420px] w-[420px] rounded-full bg-[#FFF0E8]/60 blur-3xl" />
        <svg
          className="absolute right-[-6%] top-8 hidden md:block h-[460px] w-[460px] opacity-[0.06]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <defs>
            <linearGradient id="whafox-hero-x" x1="0" y1="0" x2="400" y2="400">
              <stop offset="0%" stopColor="#FFB000" />
              <stop offset="50%" stopColor="#FF6002" />
              <stop offset="100%" stopColor="#E32616" />
            </linearGradient>
          </defs>
          <path
            d="M64 64L336 336M336 64L64 336"
            stroke="url(#whafox-hero-x)"
            strokeWidth="44"
            strokeLinecap="round"
          />
        </svg>
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(#E5E7EB 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 80%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 80%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#E5E7EB] bg-[#F5F5F7] px-3.5 py-1.5 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-[#FF6002]" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-[#17191D]">
              {SITE_CONFIG.statusLabel}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#6B7280] mb-4"
          >
            INNOVATION · TECHNOLOGY · SOFTWARE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-[-0.035em] text-[#17191D] leading-[1.08]"
          >
            Powering Businesses Through{' '}
            <span className="whafox-gradient-text">Technology.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-base sm:text-lg lg:text-[19px] text-[#6B7280] leading-[1.68] max-w-2xl"
          >
            We build innovative software solutions that help businesses simplify
            operations, connect with customers and grow with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
          >
            <Button href="#products" variant="primary" size="lg">
              <span>Explore Our Products</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
