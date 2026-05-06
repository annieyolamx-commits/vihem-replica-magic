import Layout from "@/components/vihem/Layout";
import PageHero from "@/components/vihem/PageHero";
import { Wrench, Settings, Truck, ShieldCheck, HeadphonesIcon, ClipboardList } from "lucide-react";

const services = [
  { icon: ClipboardList, title: "Tư vấn – Thiết kế", desc: "Tư vấn lựa chọn quạt, động cơ, bơm phù hợp công năng và tối ưu chi phí vận hành." },
  { icon: Wrench, title: "Lắp đặt – Thi công", desc: "Đội ngũ kỹ sư giàu kinh nghiệm thi công ống gió, hệ thống thông gió trọn gói." },
  { icon: Settings, title: "Bảo trì – Sửa chữa", desc: "Bảo trì định kỳ, đại tu, quấn lại stator, thay vòng bi cho động cơ – quạt – bơm." },
  { icon: Truck, title: "Vận chuyển – Giao hàng", desc: "Giao hàng toàn quốc, hỗ trợ vận chuyển và lắp đặt tận chân công trình." },
  { icon: ShieldCheck, title: "Bảo hành chính hãng", desc: "Bảo hành 12 tháng, đổi mới 1-1 trong 7 ngày nếu lỗi do nhà sản xuất." },
  { icon: HeadphonesIcon, title: "Hỗ trợ kỹ thuật 24/7", desc: "Hotline kỹ thuật và đội phản ứng nhanh hỗ trợ khắc phục sự cố mọi lúc." },
];

const Page = () => (
  <Layout>
    <PageHero title="Dịch vụ" crumbs={[{ label: "Dịch vụ" }]} />
    <section className="py-14 container">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card border border-border rounded-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-4">
              <s.icon className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-lg text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);
export default Page;