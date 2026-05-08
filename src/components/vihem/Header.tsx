import { Link, NavLink } from "react-router-dom";
import logoVihem from "@/assets/logo-vihem.png";
import logoEcowind from "@/assets/logo-ecowind.png";

const navItems: { label: string; to: string }[] = [
  { label: "TRANG CHỦ", to: "/" },
  { label: "QUẠT CÔNG NGHIỆP", to: "/quat-cong-nghiep" },
  { label: "ĐỘNG CƠ – BƠM", to: "/dong-co-bom" },
  { label: "HỆ THỐNG THÔNG GIÓ", to: "/he-thong-thong-gio" },
  { label: "DỊCH VỤ", to: "/dich-vu" },
  { label: "TIN TỨC", to: "/tin-tuc" },
  { label: "LIÊN HỆ", to: "/lien-he" },
];

const Header = () => (
  <header className="sticky top-0 z-40 shadow-md">
    {/* Logo bar */}
    <div className="bg-white border-b border-border">
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link to="/" className="flex items-center gap-4 group">
          <img
            src={logoVihem}
            alt="VIHEM1 - Chất lượng tạo nên giá trị"
            className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="hidden sm:block h-12 w-px bg-border" />
          <img
            src={logoEcowind}
            alt="ECO'WIND - Chất lượng tạo nên giá trị"
            className="hidden sm:block h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>
        <div className="hidden md:flex flex-col items-end text-right">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Hotline</span>
          <a href="tel:0944177362" className="text-xl font-black text-brand leading-tight">
            0944 177 362
          </a>
        </div>
      </div>
    </div>

    {/* Nav bar */}
    <div className="bg-brand text-brand-foreground">
      <nav className="container hidden lg:flex items-center gap-1 py-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                isActive ? "bg-brand-dark" : "hover:bg-brand-dark"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="container lg:hidden py-2 text-sm font-semibold uppercase">Menu</div>
    </div>
  </header>
);

export default Header;