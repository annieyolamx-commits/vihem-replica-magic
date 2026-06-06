import { Link } from "react-router-dom";

const HeroIndustrial = () => (
  <section className="relative h-[90vh] min-h-[640px] flex items-center overflow-hidden bg-background">
    {/* layered backgrounds */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--background) / 0.85) 0%, hsl(var(--card) / 0.7) 100%), repeating-linear-gradient(-45deg, transparent 0 40px, hsl(var(--brand) / 0.04) 40px 80px)",
      }}
    />
    <div className="absolute inset-0 industrial-grid" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 70% 60%, hsl(var(--brand) / 0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 50%, hsl(var(--gold) / 0.08) 0%, transparent 60%)",
      }}
    />

    <div className="container-wide relative z-10">
      <span className="section-tag">Thành lập 1978 · Đà Nẵng · Việt Nam</span>
      <h1 className="mt-6 font-display text-[clamp(56px,9vw,128px)] leading-[0.9] tracking-wide uppercase">
        Công ty cổ phần
        <span className="block text-brand">Chế tạo</span>
        Máy điện
        <span className="block text-gold text-[0.4em] tracking-[0.4em] mt-3">Việt Nam — Hungari</span>
      </h1>
      <p className="mt-7 max-w-[560px] text-base md:text-lg font-light text-foreground/70 leading-relaxed">
        Doanh nghiệp duy nhất tại Việt Nam được nước ngoài chuyển giao công nghệ hoàn thiện trong lĩnh vực sản xuất máy điện quay — với nền tảng công nghệ Hungary từ 1978.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          to="/quat-cong-nghiep"
          className="bg-brand hover:bg-brand-dark text-brand-foreground px-9 py-4 font-condensed font-bold text-sm tracking-[0.3em] uppercase transition-all hover:-translate-y-0.5"
        >
          Xem sản phẩm
        </Link>
        <Link
          to="/lien-he"
          className="border border-foreground/30 hover:border-foreground hover:bg-foreground/5 text-foreground px-9 py-4 font-condensed font-bold text-sm tracking-[0.3em] uppercase transition-all"
        >
          Liên hệ báo giá
        </Link>
      </div>
    </div>

    {/* stats */}
    <div className="hidden md:flex absolute bottom-12 right-12 gap-12 z-10">
      {[
        { num: "46", suffix: "+", label: "Năm kinh nghiệm" },
        { num: "10000", suffix: "kW", label: "Công suất tối đa" },
        { num: "18", suffix: "T", label: "Bảo hành" },
      ].map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-display text-5xl leading-none">
            {s.num}<span className="text-brand">{s.suffix}</span>
          </div>
          <div className="mt-1.5 font-condensed text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default HeroIndustrial;