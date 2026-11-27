import { ArrowUpRight, Cpu, Layers, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#F5F5F7] py-20 sm:py-24 lg:py-28 border-y border-[#E5E7EB]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <SectionHeading
              eyebrow="About WHAFOX"
              title="Technology That Moves Businesses Forward."
            />

            <p className="mt-6 text-base sm:text-[17px] text-[#4B5563] leading-[1.7]">
              WHAFOX is a technology-driven company focused on building modern
              software solutions and digital experiences. We aim to simplify
              business processes through reliable, scalable and innovative
              technology.
            </p>

            <p className="mt-4 text-sm sm:text-[15px] text-[#6B7280] leading-[1.68]">
              Every platform we architect is designed around clarity, operational
              efficiency, and dependable engineering—helping organizations focus on
              what matters most.
            </p>

            <div className="mt-8">
              <Button href="#services" variant="primary" size="md">
                <span>Learn More</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </motion.div>

          {/* Right column: Abstract software architecture visual */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-[20px] bg-white border border-[#E5E7EB] p-6 sm:p-8 shadow-[0_8px_30px_rgba(23,25,29,0.05)]">
              {/* Top window chrome */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E5E7EB]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E5E7EB]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF6002]" />
                </div>
                <span className="text-xs font-mono text-[#6B7280]">
                  whafox.platform.core
                </span>
              </div>

              {/* Modular architecture blocks */}
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4 rounded-[14px] bg-[#F5F5F7] p-4 border border-[#E5E7EB]/80">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#FFF0E8] text-[#FF6002]">
                    <Layers className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#17191D]">
                      Unified SaaS Ecosystem
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#6B7280]">
                      Connected business applications built on modular, scalable
                      foundations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-[14px] bg-[#F5F5F7] p-4 border border-[#E5E7EB]/80">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#FFF0E8] text-[#FF6002]">
                    <Cpu className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#17191D]">
                      Intelligent Workflow Automation
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#6B7280]">
                      Streamlining repetitive operations into reliable digital
                      processes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-[14px] bg-[#F5F5F7] p-4 border border-[#E5E7EB]/80">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#FFF0E8] text-[#FF6002]">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#17191D]">
                      Dependable Architecture
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-[#6B7280]">
                      Engineered for clarity, maintainability, and modern business
                      demands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
