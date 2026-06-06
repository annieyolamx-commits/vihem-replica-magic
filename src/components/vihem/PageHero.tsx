import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const PageHero = ({ title, crumbs = [] }: { title: string; crumbs?: { label: string; to?: string }[] }) => (
  <section className="relative bg-card border-b border-border overflow-hidden">
    <div className="absolute inset-0 industrial-grid opacity-60" />
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand via-gold to-brand" />
    <div className="container-wide relative py-14 md:py-20">
      <span className="section-tag">{crumbs[crumbs.length - 1]?.label ?? "Trang"}</span>
      <h1 className="mt-4 font-display text-5xl md:text-7xl tracking-wide uppercase text-foreground">{title}</h1>
      <nav className="mt-5 flex items-center text-xs flex-wrap gap-1 text-muted-foreground font-condensed tracking-widest uppercase">
        <Link to="/" className="flex items-center gap-1 hover:text-brand"><Home className="h-3 w-3" /> Trang chủ</Link>
        {crumbs.map((c, i) => (
          <span key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3 w-3" />
            {c.to ? <Link to={c.to} className="hover:text-brand">{c.label}</Link> : <span className="text-foreground">{c.label}</span>}
          </span>
        ))}
      </nav>
    </div>
  </section>
);

export default PageHero;