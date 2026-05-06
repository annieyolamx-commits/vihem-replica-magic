import Layout from "@/components/vihem/Layout";
import PageHero from "@/components/vihem/PageHero";
import { Link } from "react-router-dom";

const services = [
  { title: "Ống gió tròn / vuông", desc: "Sản xuất và lắp đặt ống gió tôn mạ kẽm theo TCVN, đa dạng kích thước.", img: "https://vihem1.com.vn/wp-content/uploads/2026/03/18101ct-220x165.jpg" },
  { title: "Ống gió tiêu âm", desc: "Giảm thiểu tiếng ồn, đảm bảo môi trường làm việc yên tĩnh cho nhà máy, văn phòng.", img: "https://vihem1.com.vn/wp-content/uploads/2026/02/tieu-am-co-tem-2-220x165.jpg" },
  { title: "Ống gió chống cháy EI45", img: "https://vihem1.com.vn/wp-content/uploads/2026/02/hh3-ct2-220x165.jpg", desc: "Đáp ứng tiêu chuẩn PCCC – cốt lõi trong hệ thống thông gió và hút khói sự cố." },
  { title: "Hệ thống hút khói nhà xưởng", img: "https://vihem1.com.vn/wp-content/uploads/2026/01/Capture-260x98.jpg", desc: "Tư vấn – thiết kế – thi công trọn gói hệ thống hút khói cho nhà xưởng quy mô lớn." },
];

const Page = () => (
  <Layout>
    <PageHero title="Hệ thống thông gió" crumbs={[{ label: "Hệ thống thông gió" }]} />
    <section className="py-12 container">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-muted-foreground">ECO'WIND – Thương hiệu ống gió và phụ kiện thông gió thuộc Vihem 1, cung cấp giải pháp toàn diện từ thiết kế đến thi công cho nhà máy, chung cư, trung tâm thương mại.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <article key={s.title} className="bg-card border border-border rounded-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-all">
            <div className="md:w-48 aspect-video md:aspect-auto bg-secondary shrink-0">
              <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg text-brand">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <Link to="/lien-he" className="inline-block mt-3 text-sm font-semibold text-brand hover:text-brand-dark">Yêu cầu tư vấn →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);
export default Page;