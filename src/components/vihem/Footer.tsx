import { Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-brand-dark text-brand-foreground">
    <div className="container py-12 grid md:grid-cols-3 gap-8">
      <div>
        <div className="font-black text-2xl">VIHEM 1 · ECO'WIND</div>
        <p className="mt-3 text-sm opacity-90">Công ty Cổ phần Chế tạo máy điện Việt Nam – Hungari 1. Chất lượng tạo nên giá trị từ 1978.</p>
      </div>
      <div>
        <h4 className="font-bold uppercase mb-3">Liên hệ</h4>
        <ul className="space-y-2 text-sm opacity-90">
          <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> 0944 177 362 / 0944 177 321</li>
          <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> vihemdanang@gmail.com</li>
          <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Đà Nẵng, Việt Nam</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold uppercase mb-3">Theo dõi</h4>
        <a href="#" className="inline-flex items-center gap-2 bg-background/10 hover:bg-background/20 px-4 py-2 rounded transition-colors">
          <Facebook className="h-4 w-4" /> Fanpage Facebook
        </a>
      </div>
    </div>
    <div className="border-t border-brand-foreground/20 py-4 text-center text-xs opacity-80">
      Bản quyền thuộc về Công ty Cổ phần Chế tạo máy điện Việt Nam – Hungari 1 © 2016
    </div>
  </footer>
);

export default Footer;