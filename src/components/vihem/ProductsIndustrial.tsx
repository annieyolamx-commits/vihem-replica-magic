import { Link } from "react-router-dom";
import { Zap, Flame, Wind, Settings, Droplet, Sun } from "lucide-react";

const items = [
  { icon: Zap, title: "Động cơ điện 3 pha", desc: "Động cơ xoay chiều 3 pha hiệu suất cao, ứng dụng rộng trong công nghiệp nặng và nhẹ.", range: "0.37 – 315 kW", to: "/dong-co-bom" },
  { icon: Flame, title: "Động cơ phòng nổ", desc: "Động cơ đặc chủng cho môi trường nguy hiểm: dầu khí, hầm mỏ, hóa chất — tiêu chuẩn quốc tế.", range: "Khai thác mỏ · Dầu khí", to: "/dong-co-bom" },
  { icon: Wind, title: "Quạt công nghiệp", desc: "Quạt hướng trục, ly tâm, hỗn lưu, JetFan — giải pháp thông gió cho mọi công trình.", range: "Hướng trục · Ly tâm", to: "/quat-cong-nghiep" },
  { icon: Settings, title: "Máy biến áp", desc: "Thiết kế và chế tạo máy biến áp tiêu chuẩn kỹ thuật cao, phục vụ hệ thống điện công nghiệp.", range: "Hạ thế · Trung thế", to: "/he-thong-thong-gio" },
  { icon: Droplet, title: "Bơm nước công nghiệp", desc: "Bơm hiệu suất cao cho xây dựng, công nghiệp chế biến, cấp thoát nước đô thị.", range: "Công nghiệp · Dân dụng", to: "/dong-co-bom" },
  { icon: Sun, title: "Dịch vụ & Năng lượng", desc: "Sửa chữa động cơ 0.3–10,000kW · Cân bằng động · Lắp đặt pin năng lượng mặt trời toàn diện.", range: "Sửa chữa · Solar", to: "/dich-vu" },
];

const ProductsIndustrial = () => (
  <section className="bg-secondary py-24 md:py-32">
    <div className="container-wide">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
        <div>
          <span className="section-tag">Danh mục sản phẩm</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl tracking-wide uppercase leading-[0.95]">
            Giải pháp<br /><span className="text-brand">Toàn diện</span>
          </h2>
        </div>
        <p className="max-w-md text-foreground/65 leading-relaxed">
          Từ động cơ điện công suất nhỏ đến hệ thống máy công nghiệp nặng — VIHEM 1 cung cấp đầy đủ giải pháp điện cơ cho mọi ngành.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-border">
        {items.map(({ icon: Icon, title, desc, range, to }) => (
          <Link
            key={title}
            to={to}
            className="group relative bg-card hover:bg-card/80 p-10 transition-all overflow-hidden"
          >
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand to-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <div className="w-14 h-14 bg-brand/10 border border-brand/30 group-hover:bg-brand/20 flex items-center justify-center transition-colors">
              <Icon className="h-6 w-6 text-brand" />
            </div>
            <h3 className="mt-6 font-condensed font-bold text-xl tracking-wider uppercase">{title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            <p className="mt-4 font-display text-xl text-brand tracking-wider">{range}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsIndustrial;