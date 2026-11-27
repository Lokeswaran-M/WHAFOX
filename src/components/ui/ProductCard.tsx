import { Check, MessageSquareText, ReceiptText, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '../../data/products';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const isChat = product.id === 'whafox-chat';
  const Icon = isChat ? MessageSquareText : ReceiptText;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between h-full bg-white border border-[#E5E7EB] rounded-[18px] p-7 sm:p-8 shadow-[0_2px_12px_rgba(23,25,29,0.04)] hover:shadow-[0_12px_32px_rgba(23,25,29,0.08)] hover:-translate-y-1 transition-all duration-300"
    >
      <div>
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#FFF0E8] text-[#FF6002] border border-[#FF6002]/15">
              <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                {product.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#17191D] tracking-tight mt-0.5">
                {product.name}
              </h3>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 shrink-0 rounded-full bg-[#F5F5F7] border border-[#E5E7EB] px-3 py-1 text-xs font-medium text-[#17191D]">
            <Clock className="h-3 w-3 text-[#FF6002]" aria-hidden="true" />
            {product.status}
          </span>
        </div>

        <p className="text-[15px] sm:text-base text-[#6B7280] leading-[1.65] mb-6">
          {product.description}
        </p>

        <div className="border-t border-[#E5E7EB] pt-5 mb-7">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#17191D] mb-3.5">
            Key Capabilities
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-[#4B5563]"
              >
                <Check
                  className="h-4 w-4 shrink-0 text-[#FF6002] mt-0.5"
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#E5E7EB]">
        <span className="text-xs font-medium text-[#6B7280] font-mono">
          {product.plannedUrl.replace('https://', '')}
        </span>
        <Button
          href="#contact"
          variant="secondary"
          size="sm"
          aria-label={`${product.name} - ${product.status}, enquire for updates`}
        >
          {product.status}
        </Button>
      </div>
    </motion.article>
  );
}
