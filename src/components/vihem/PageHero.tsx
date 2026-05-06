import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const PageHero = ({ title, crumbs = [] }: { title: string; crumbs?: { label: string; to?: string }[] }) => (
  <section className="bg-gradient-to-r from-brand to-brand-dark text-brand-foreground py-10">
    <div className="container">
      <h1 className="text-3xl md:text-4xl font-extrabold uppercase">{title}</h1>
      <nav className="mt-3 flex items-center text-sm flex-wrap gap-1 opacity-90">
        <Link to="/" className="flex items-center gap-1 hover:underline"><Home className="h-3 w-3" /> Trang chủ</Link>
        {crumbs.map((c, i) => (
          <span key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3 w-3" />
            {c.to ? <Link to={c.to} className="hover:underline">{c.label}</Link> : <span>{c.label}</span>}
          </span>
        ))}
      </nav>
    </div>
  </section>
);

export default PageHero;