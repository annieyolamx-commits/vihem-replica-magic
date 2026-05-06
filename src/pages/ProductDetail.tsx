import { useParams, Link } from "react-router-dom";
import Layout from "@/components/vihem/Layout";
import PageHero from "@/components/vihem/PageHero";
import { findProduct, findCategory, productsByCategory } from "@/data/catalog";
import { Phone, Mail } from "lucide-react";

const ProductDetail = () => {
  const { slug = "" } = useParams();
  const p = findProduct(slug);
  if (!p) return <Layout><div className="container py-20 text-center">Không tìm thấy sản phẩm</div></Layout>;
  const cat = findCategory(p.category);
  const related = productsByCategory(p.category).filter((x) => x.slug !== p.slug).slice(0, 4);
  return (
    <Layout>
      <PageHero title={p.name} crumbs={[{ label: cat?.name || "Sản phẩm", to: `/danh-muc/${p.category}` }, { label: p.name }]} />
      <section className="py-12 container">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-secondary rounded-lg p-6 flex items-center justify-center">
            <img src={p.img} alt={p.name} className="max-h-[460px] object-contain" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-brand uppercase">{p.name}</h1>
            <p className="mt-2 text-muted-foreground">Mã danh mục: <span className="text-foreground font-medium">{cat?.name}</span></p>
            <div className="mt-4 inline-block px-4 py-2 bg-brand/10 text-brand font-bold rounded">Giá: Liên hệ</div>
            <div className="mt-6 space-y-3 text-sm leading-relaxed">
              <p>Sản phẩm <strong>{p.name}</strong> do Vihem 1 sản xuất theo tiêu chuẩn Việt Nam – Hungari, ứng dụng rộng rãi trong các nhà máy, hầm mỏ, công trình thông gió và các hệ thống công nghiệp.</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Vật liệu cao cấp, độ bền cao, vận hành ổn định.</li>
                <li>Tiết kiệm điện năng, độ ồn thấp.</li>
                <li>Bảo hành 12 tháng, hỗ trợ kỹ thuật trọn đời.</li>
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:0944177362" className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-5 py-3 rounded font-semibold hover:bg-brand-dark"><Phone className="h-4 w-4" /> 0944 177 362</a>
              <Link to="/lien-he" className="inline-flex items-center gap-2 border-2 border-brand text-brand px-5 py-3 rounded font-semibold hover:bg-brand hover:text-brand-foreground"><Mail className="h-4 w-4" /> Yêu cầu báo giá</Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold text-brand mb-6">SẢN PHẨM LIÊN QUAN</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((r) => (
                <Link key={r.slug} to={`/san-pham/${r.slug}`} className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all">
                  <div className="aspect-[4/3] bg-secondary flex items-center justify-center overflow-hidden">
                    <img src={r.img} alt={r.name} loading="lazy" className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-sm font-semibold group-hover:text-brand line-clamp-2 min-h-[2.5rem]">{r.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};
export default ProductDetail;