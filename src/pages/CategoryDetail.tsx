import { useParams, Link } from "react-router-dom";
import Layout from "@/components/vihem/Layout";
import PageHero from "@/components/vihem/PageHero";
import { categories, findCategory, productsByCategory } from "@/data/catalog";
import QuoteDialog from "@/components/vihem/QuoteDialog";

const CategoryDetail = () => {
  const { slug = "" } = useParams();
  const cat = findCategory(slug);
  if (!cat) return <Layout><div className="container py-20 text-center">Không tìm thấy danh mục</div></Layout>;
  const items = productsByCategory(slug);
  return (
    <Layout>
      <PageHero title={cat.name} crumbs={[{ label: "Sản phẩm" }, { label: cat.name }]} />
      <section className="py-12 container">
        <div className="grid lg:grid-cols-[240px_1fr] gap-8">
          <aside className="space-y-2">
            <h2 className="font-bold text-brand uppercase border-b-2 border-brand pb-2 mb-3">Danh mục</h2>
            {categories.map((c) => (
              <Link key={c.slug} to={`/danh-muc/${c.slug}`} className={`block px-3 py-2 rounded text-sm font-medium ${c.slug === slug ? "bg-brand text-brand-foreground" : "hover:bg-secondary"}`}>
                {c.name}
              </Link>
            ))}
          </aside>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {items.map((p) => (
              <Link key={p.slug} to={`/san-pham/${p.slug}`} className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all">
                <div className="aspect-[4/3] bg-secondary flex items-center justify-center overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-sm font-semibold group-hover:text-brand line-clamp-2 min-h-[2.5rem]">{p.name}</h3>
                  <QuoteDialog
                    productName={p.name}
                    trigger={
                      <button
                        type="button"
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        className="mt-2 text-xs font-bold text-brand hover:text-brand-dark uppercase border border-brand rounded px-3 py-1"
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
    </Layout>
  );
};
export default CategoryDetail;