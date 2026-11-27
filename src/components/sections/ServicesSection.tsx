import { Code2, Globe, Layers, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES, type ServiceItem } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';

function ServiceIcon({ name }: { name: ServiceItem['iconName'] }) {
  const props = { className: 'h-6 w-6 text-[#FF6002]', strokeWidth: 1.8, 'aria-hidden': true as const };
  switch (name) {
    case 'code':
      return <Code2 {...props} />;
    case 'layers':
      return <Layers {...props} />;
    case 'globe':
      return <Globe {...props} />;
    case 'workflow':
      return <Workflow {...props} />;
  }
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#F5F5F7] py-20 sm:py-24 lg:py-28 border-y border-[#E5E7EB]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Building Technology for a Smarter Future."
          align="center"
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 sm:p-7 shadow-[0_2px_10px_rgba(23,25,29,0.03)] hover:shadow-[0_10px_24px_rgba(23,25,29,0.06)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#FFF0E8] mb-5">
                <ServiceIcon name={service.iconName} />
              </div>
              <h3 className="text-lg font-bold text-[#17191D] tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm sm:text-[15px] text-[#6B7280] leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
