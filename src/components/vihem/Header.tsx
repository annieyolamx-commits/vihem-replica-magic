import { Link, NavLink } from "react-router-dom";

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
  <header className="bg-brand text-brand-foreground sticky top-0 z-40 shadow-md">
    <div className="container flex items-center gap-6 py-3">
      <Link to="/" className="flex items-center gap-2 bg-background rounded-md px-3 py-2">
        <div className="font-black text-brand text-2xl tracking-tight">VIHEM<span className="text-brand-dark">1</span></div>
        <div className="hidden md:block border-l border-border pl-2 text-[10px] text-foreground/70 leading-tight">
          <div className="font-semibold text-brand">ECO'WIND</div>
          <div>Chất lượng tạo nên giá trị</div>
        </div>
      </Link>
      <nav className="hidden lg:flex items-center gap-1 ml-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-semibold uppercase tracking-wide rounded transition-colors ${
                isActive ? "bg-brand-dark" : "hover:bg-brand-dark"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;