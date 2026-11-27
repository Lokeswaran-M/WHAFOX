import { motion } from 'framer-motion';
import logoLight from '../../assets/whafox-logo-light.png';

export function VisionSection() {
  return (
    <section className="bg-[#17191D] text-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center mb-8">
            <img
              src={logoLight}
              alt="WHAFOX"
              loading="lazy"
              decoding="sync"
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.025em] leading-[1.16] text-white">
            Built Around Innovation. Driven by Technology.
          </h2>

          <div
            className="mx-auto mt-6 h-1 w-14 rounded-full whafox-gradient-bg"
            aria-hidden="true"
          />

          <p className="mx-auto mt-7 max-w-2xl text-base sm:text-lg text-[#D1D5DB] leading-[1.7]">
            Our vision is to create meaningful technology solutions that empower
            businesses, improve productivity and make digital transformation
            accessible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
