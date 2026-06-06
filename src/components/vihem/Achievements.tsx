const stats = [
  { num: "46", suffix: "+", label: "Năm hoạt động", detail: "Thành lập từ 1978, hoạt động liên tục đến nay" },
  { num: "10000", suffix: "kW", label: "Công suất sửa chữa", detail: "Năng lực sửa chữa động cơ từ 0.3 đến 10,000 kW" },
  { num: "18", suffix: "T", label: "Bảo hành chính hãng", detail: "18 tháng bảo hành từ ngày mua cho mọi sản phẩm" },
  { num: "ISO", suffix: "", label: "Công nghệ chuyển giao", detail: "Duy nhất ở VN được chuyển giao công nghệ hoàn thiện về máy điện quay từ Hungary" },
];

const awards = [
  "Hàng Việt Nam Chất Lượng Cao",
  "Công Nghệ Hungary Chứng Nhận",
  "Tiêu Chuẩn Xuất Khẩu",
  "Nhà Máy KCN Hòa Khánh",
];

const Achievements = () => (
  <section className="relative bg-background py-24 md:py-32 overflow-hidden">
    <span className="hidden md:block absolute right-[-40px] top-1/2 -translate-y-1/2 font-display text-[300px] leading-none text-brand/[0.04] select-none pointer-events-none">
      VIHEM
    </span>

    <div className="container-wide relative">
      <span className="section-tag">Thành tựu & Con số</span>
      <h2 className="mt-4 font-display text-5xl md:text-7xl tracking-wide uppercase leading-[0.95]">
        Uy tín được khẳng định<br /><span className="text-brand">Qua hàng thập kỷ</span>
      </h2>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-border">
        {stats.map((s) => (
          <div key={s.label} className="bg-card p-8 border-t-2 border-brand/40 hover:border-brand transition-colors">
            <div className="font-display text-6xl leading-none">
              {s.num}<span className="text-brand">{s.suffix}</span>
            </div>
            <div className="mt-3 font-condensed font-bold text-sm tracking-[0.2em] uppercase text-foreground/80">{s.label}</div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="font-condensed font-bold text-base tracking-[0.25em] uppercase text-gold mb-5">★ Giải thưởng & Chứng nhận</h3>
        <div className="flex flex-wrap gap-3">
          {awards.map((a) => (
            <span key={a} className="border border-gold/30 bg-gold/5 text-gold/90 font-condensed text-xs tracking-[0.2em] uppercase px-4 py-2.5">
              ★ {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;