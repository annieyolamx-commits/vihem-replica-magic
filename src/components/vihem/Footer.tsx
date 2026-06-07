import { Link } from "react-router-dom";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-topbar text-topbar-foreground border-t border-brand/30">
    <div className="container-wide pt-16 pb-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-3xl tracking-[0.15em]">VIHEM<span className="text-brand">1</span></div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-[280px]">
            Công ty Cổ phần Chế tạo Máy điện Việt Nam – Hungari 1. Nhà máy tại KCN Hòa Khánh, Đà Nẵng. Tiên phong sản xuất máy điện quay từ 1978.
          </p>
        </div>
        <div>
          <h5 className="font-condensed font-bold text-xs tracking-[0.3em] uppercase mb-5">Sản phẩm</h5>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/quat-cong-nghiep" className="hover:text-brand transition-colors">Quạt công nghiệp</Link></li>
            <li><Link to="/dong-co-bom" className="hover:text-brand transition-colors">Động cơ – Bơm</Link></li>
            <li><Link to="/he-thong-thong-gio" className="hover:text-brand transition-colors">Hệ thống thông gió</Link></li>
            <li><Link to="/dich-vu" className="hover:text-brand transition-colors">Dịch vụ kỹ thuật</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-condensed font-bold text-xs tracking-[0.3em] uppercase mb-5">Liên hệ</h5>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand" /> 0944 177 362</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand" /> vihemdanang@gmail.com</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand" /> KCN Hòa Khánh, Đà Nẵng</li>
          </ul>
        </div>
        <div>
          <h5 className="font-condensed font-bold text-xs tracking-[0.3em] uppercase mb-5">Theo dõi</h5>
          <a href="#" className="inline-flex items-center gap-2 bg-card hover:bg-brand hover:text-brand-foreground px-4 py-2 transition-colors text-sm font-condensed tracking-wider uppercase">
            <Facebook className="h-4 w-4" /> Fanpage
          </a>
          <div className="mt-6 flex gap-2">
            <span className="bg-brand/10 border border-brand/30 px-2.5 py-1 font-condensed font-semibold text-[10px] tracking-[0.2em] uppercase text-brand">ISO</span>
            <span className="bg-brand/10 border border-brand/30 px-2.5 py-1 font-condensed font-semibold text-[10px] tracking-[0.2em] uppercase text-brand">HVNCLC</span>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-condensed tracking-widest uppercase">
        <p>© {new Date().getFullYear()} VIHEM 1 – Việt Nam Hungari. All rights reserved.</p>
        <p>Since 1978 · Đà Nẵng · Việt Nam</p>
      </div>
    </div>
  </footer>
);

export default Footer;