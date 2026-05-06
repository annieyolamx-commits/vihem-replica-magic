import { useParams, Link } from "react-router-dom";
import Layout from "@/components/vihem/Layout";
import PageHero from "@/components/vihem/PageHero";
import { findArticle, newsArticles } from "@/data/catalog";
import { Calendar } from "lucide-react";

const NewsDetail = () => {
  const { slug = "" } = useParams();
  const a = findArticle(slug);
  if (!a) return <Layout><div className="container py-20 text-center">Không tìm thấy bài viết</div></Layout>;
  const others = newsArticles.filter((x) => x.slug !== slug).slice(0, 3);
  return (
    <Layout>
      <PageHero title={a.title} crumbs={[{ label: "Tin tức", to: "/tin-tuc" }, { label: a.title }]} />
      <section className="py-12 container grid lg:grid-cols-[1fr_320px] gap-10">
        <article>
          <p className="text-sm text-muted-foreground flex items-center gap-1 mb-4"><Calendar className="h-4 w-4" /> {a.date}</p>
          <img src={a.img} alt={a.title} className="w-full rounded-lg mb-6" />
          <div className="prose prose-neutral max-w-none text-foreground space-y-4">
            <p className="text-lg font-medium">{a.excerpt}</p>
            <p>Vihem 1 với hơn 45 năm kinh nghiệm trong ngành chế tạo máy điện và thiết bị công nghiệp, tự hào là đối tác tin cậy của hàng ngàn công trình lớn nhỏ trên toàn quốc. Bài viết này chia sẻ thông tin chi tiết và giải pháp kỹ thuật phù hợp với nhu cầu thực tế của khách hàng.</p>
            <p>Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận báo giá tốt nhất cho công trình của bạn. Đội ngũ kỹ sư của Vihem 1 luôn sẵn sàng hỗ trợ 24/7.</p>
          </div>
        </article>
        <aside>
          <h3 className="font-bold uppercase text-brand border-b-2 border-brand pb-2 mb-4">Bài viết khác</h3>
          <div className="space-y-4">
            {others.map((o) => (
              <Link key={o.slug} to={`/tin-tuc/${o.slug}`} className="flex gap-3 group">
                <img src={o.img} alt={o.title} className="w-20 h-20 object-cover rounded shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm group-hover:text-brand line-clamp-2">{o.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{o.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </Layout>
  );
};
export default NewsDetail;