import { Phone, Mail, MessageCircle, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const FloatingTools = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { href: "tel:0944177362", icon: Phone, label: "Hotline", color: "bg-brand text-brand-foreground" },
    { href: "https://zalo.me/0944177362", icon: MessageCircle, label: "Zalo", color: "bg-accent text-accent-foreground" },
    { href: "mailto:vihemdanang@gmail.com", icon: Mail, label: "Email", color: "bg-topbar text-topbar-foreground" },
  ];

  return (
    <div className="fixed top-1/3 right-3 z-50 flex flex-col gap-2">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target={it.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={it.label}
          className={`group relative h-11 w-11 rounded-full shadow-lg flex items-center justify-center ${it.color} hover:scale-110 transition-transform`}
        >
          <it.icon className="h-5 w-5" />
          <span className="absolute right-full mr-2 px-2 py-1 text-[11px] font-condensed font-semibold uppercase tracking-widest bg-foreground text-background rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
            {it.label}
          </span>
        </a>
      ))}
      <Link
        to="/lien-he"
        className="h-11 px-3 rounded-full shadow-lg flex items-center justify-center bg-brand text-brand-foreground hover:bg-brand-dark transition-colors font-condensed font-bold text-[11px] tracking-[0.2em] uppercase"
      >
        Báo giá
      </Link>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Lên đầu trang"
          className="h-11 w-11 rounded-full shadow-lg flex items-center justify-center bg-secondary text-foreground hover:bg-steel-2 transition-colors"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default FloatingTools;