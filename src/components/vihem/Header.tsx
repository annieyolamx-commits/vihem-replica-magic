import { Link, NavLink } from "react-router-dom";
import logoVihem from "@/assets/logo-vihem.png";
import logoEcowind from "@/assets/logo-ecowind.png";

const navItems: { label: string; to: string }[] = [
  { label: "Trang chủ", to: "/" },
  { label: "Quạt CN", to: "/quat-cong-nghiep" },
  { label: "Động cơ – Bơm", to: "/dong-co-bom" },
  { label: "Thông gió", to: "/he-thong-thong-gio" },
  { label: "Dịch vụ", to: "/dich-vu" },
  { label: "Tin tức", to: "/tin-tuc" },
  { label: "Liên hệ", to: "/lien-he" },
];

const Header = () => (
  <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/60">
    <div className="container-wide flex items-center justify-between gap-6 py-3">
      <Link to="/" className="flex items-center gap-3 group">
        <div className="bg-white rounded-sm p-1.5 flex items-center gap-2">
          <img src={logoVihem} alt="VIHEM1" className="h-9 md:h-10 w-auto object-contain" />
          <div className="h-8 w-px bg-border" />
          <img src={logoEcowind} alt="ECO'WIND" className="h-7 md:h-8 w-auto object-contain" />
        </div>
        <div className="hidden md:flex flex-col leading-none">
          <span className="font-display text-2xl tracking-[0.2em]">VIHEM<span className="text-brand">1</span></span>
          <span className="font-condensed text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Since 1978 · Đà Nẵng</span>
        </div>
      </Link>

      <nav className="hidden lg:flex items-center gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `font-condensed font-semibold text-[12px] tracking-[0.2em] uppercase px-3 py-2 transition-colors ${
                isActive ? "text-brand" : "text-foreground/70 hover:text-foreground"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Link
        to="/lien-he"
        className="hidden md:inline-flex bg-brand hover:bg-brand-dark text-brand-foreground px-5 py-2.5 font-condensed font-bold text-xs tracking-[0.25em] uppercase transition-colors"
      >
        Báo giá
      </Link>
    </div>
  </header>
);

export default Header;