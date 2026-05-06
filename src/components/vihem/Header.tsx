import { ChevronDown } from "lucide-react";

const navItems = [
  "TRANG CHỦ",
  "QUẠT CÔNG NGHIỆP",
  "ĐỘNG CƠ – BƠM CÔNG NGHIỆP",
  "HỆ THỐNG THÔNG GIÓ",
  "DỊCH VỤ",
  "TIN TỨC",
];

const Header = () => (
  <header className="bg-brand text-brand-foreground sticky top-0 z-40 shadow-md">
    <div className="container flex items-center gap-6 py-3">
      <div className="flex items-center gap-2 bg-background rounded-md px-3 py-2">
        <div className="font-black text-brand text-2xl tracking-tight">VIHEM<span className="text-brand-dark">1</span></div>
        <div className="hidden md:block border-l border-border pl-2 text-[10px] text-foreground/70 leading-tight">
          <div className="font-semibold text-brand">ECO'WIND</div>
          <div>Chất lượng tạo nên giá trị</div>
        </div>
      </div>
      <nav className="hidden lg:flex items-center gap-1 ml-auto">
        {navItems.map((label) => (
          <a
            key={label}
            href="#"
            className="px-3 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-brand-dark rounded transition-colors flex items-center gap-1"
          >
            {label}
            {label !== "TRANG CHỦ" && label !== "TIN TỨC" && <ChevronDown className="h-3 w-3" />}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;