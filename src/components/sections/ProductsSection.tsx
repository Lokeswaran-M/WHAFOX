import { PRODUCTS } from '../../data/products';
import { SectionHeading } from '../ui/SectionHeading';
import { ProductCard } from '../ui/ProductCard';

export function ProductsSection() {
  return (
    <section id="products" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="Products Built for Business Growth."
          subtitle="Discover the software solutions we're building to make everyday business operations smarter and simpler."
          align="center"
        />

        <div
          className={`mt-12 sm:mt-14 grid grid-cols-1 gap-7 lg:gap-8 ${
            PRODUCTS.length === 1
              ? 'max-w-3xl mx-auto'
              : 'lg:grid-cols-2'
          }`}
        >
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
