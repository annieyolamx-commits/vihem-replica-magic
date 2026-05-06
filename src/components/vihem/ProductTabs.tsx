import { useState } from "react";
import { Link } from "react-router-dom";
import { categories, productsByCategory } from "@/data/catalog";
import QuoteDialog from "./QuoteDialog";

const ProductTabs = () => {
  const tabs = categories;
  const [active, setActive] = useState(tabs[0].slug);
  const items = productsByCategory(active);
  return (
    <section className="py-14 bg-background">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand">SẢN PHẨM NỔI BẬT</h2>
          <div className="w-20 h-1 bg-brand mx-auto mt-3" />
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-border pb-1">
          {tabs.map((t) => (
            <button
              key={t.slug}
              onClick={() => setActive(t.slug)}
              className={`px-4 py-2 text-sm font-semibold transition-colors border-b-2 -mb-[1px] ${
                active === t.slug ? "border-brand text-brand" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((p) => (
            <Link key={p.slug} to={`/san-pham/${p.slug}`} className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-[4/3] bg-secondary flex items-center justify-center overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-brand line-clamp-2 min-h-[2.5rem]">{p.name}</h3>
                <QuoteDialog
                  productName={p.name}
                  trigger={
                    <button
                      type="button"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                      className="mt-2 text-xs font-bold text-brand hover:text-brand-dark uppercase tracking-wide border border-brand rounded px-3 py-1"
                    >
                      Giá liên hệ
                    </button>
                  }
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;