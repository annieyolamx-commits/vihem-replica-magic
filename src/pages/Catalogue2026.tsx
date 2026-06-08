import { useState } from "react";
import { Download, Wind, Cog, Factory, Gauge, Wrench, ChevronRight, Building2, Sparkles, FileText, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/vihem/Layout";
import PageHero from "@/components/vihem/PageHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const PDF_URL = "/catalogue/vihem1-catalogue-2026.pdf";

const highlights = [
  { icon: Factory, label: "Năm thành lập", value: "1978" },
  { icon: Wind, label: "Mẫu quạt CN", value: "400+" },
  { icon: Cog, label: "Loại động cơ", value: "300+" },
  { icon: Gauge, label: "Dải công suất", value: "0.18 – 2700 kW" },
];

const namingGuides = [
  {
    key: "axial",
    title: "Quạt hướng trục",
    code: "AVS.T2 / 8 / 600 / K11",
    parts: [
      { tag: "AVS", desc: "Axial fan Vihem – Square (vuông). AVR = tròn, AVT = đường hầm Jetfan." },
      { tag: "T2", desc: "Kiểu cánh thổi (T1–T5 thổi, H1–H5 hút – chiều gió ngược lại)." },
      { tag: "8", desc: "Số lá cánh trên guồng." },
      { tag: "600", desc: "Đường kính cánh (mm)." },
      { tag: "K11", desc: "Kiểu lắp đặt – trực tiếp, gián tiếp dây đai hoặc khớp nối mềm." },
    ],
  },
  {
    key: "mixed",
    title: "Quạt hỗn lưu",
    code: "MVR.A / 8 / 650 / K18",
    parts: [
      { tag: "MVR.A", desc: "Mixed fan Vihem – kiểu cánh A (hoặc C)." },
      { tag: "8", desc: "Có 8 lá cánh." },
      { tag: "650", desc: "Đường kính cánh (mm)." },
      { tag: "K18", desc: "Kiểu lắp K1 trực tiếp, K2 dây đai, K3 khớp nối mềm." },
    ],
  },
  {
    key: "centrifugal",
    title: "Quạt ly tâm",
    code: "CV.C21 / 620 / 100 / K21",
    parts: [
      { tag: "CV", desc: "Centrifugal fan Vihem." },
      { tag: "C21", desc: "Kiểu cánh: C – cong nghiêng sau, L – thẳng nghiêng sau, T – cong nghiêng trước, B – hướng tâm, X – mái chèo." },
      { tag: "620", desc: "Đường kính cánh (mm)." },
      { tag: "100", desc: "Chỉ số độ rộng cánh và buồng cánh." },
      { tag: "K21", desc: "Truyền động trực tiếp / dây đai / khớp nối; số cuối là số guồng cánh." },
    ],
  },
];

const mountingTypes = [
  { code: "K1", title: "Truyền động trực tiếp", desc: "Guồng cánh lắp trực tiếp lên trục động cơ. Bao gồm K11–K19 cho các kiểu chân/mặt bích, áp suất thấp đến cao và quạt hút mái." },
  { code: "K2", title: "Truyền động gián tiếp dây đai", desc: "Guồng cánh lắp gối đỡ, truyền động qua dây đai. K21–K25 phù hợp quạt áp suất thấp – trung bình." },
  { code: "K3", title: "Truyền động gián tiếp khớp nối mềm", desc: "Áp dụng cho quạt công suất rất lớn, vận hành ổn định, giảm rung." },
];

const families = [
  {
    key: "huong-truc",
    name: "Quạt hướng trục AVR/AVS/AVT",
    icon: Wind,
    image: "https://vihem1.com.vn/wp-content/uploads/2023/08/AVR-K13.jpg",
    specs: { "Đường kính cánh": "200 – 2.000 mm", "Áp suất": "30 – 400 Pa", "Lưu lượng": "300 – 60.000 m³/h", "Công suất": "0,2 – 11 kW" },
    desc: "Thông gió, cấp khí tươi, hút tầng hầm – kho – văn phòng. Cánh cân bằng động 2 mặt, sơn tĩnh điện, vận hành êm.",
    sample: [
      { model: "AVR.T2/6/650", power: "1.1 kW", rpm: "1430", flow: "9.200 – 17.500", ps: "200 – 50" },
      { model: "AVR.T3/10/1100", power: "7.5 kW", rpm: "980", flow: "35.500 – 55.900", ps: "360 – 110" },
      { model: "AVR.T3/14/1600", power: "22 kW", rpm: "735", flow: "81.700 – 128.500", ps: "540 – 180" },
    ],
  },
  {
    key: "hon-luu",
    name: "Quạt hỗn lưu MVR",
    icon: Sparkles,
    image: "https://vihem1.com.vn/wp-content/uploads/2023/09/MVRA.png",
    specs: { "Đường kính cánh": "300 – 1.400 mm", "Áp suất": "100 – 800 Pa", "Lưu lượng": "1.500 – 80.000 m³/h", "Công suất": "0,37 – 45 kW" },
    desc: "Kết hợp ưu điểm hướng trục và ly tâm: lưu lượng cao, áp suất trung bình, độ ồn thấp, gọn nhẹ.",
    sample: [
      { model: "MVR.A/8/500", power: "1.5 kW", rpm: "1440", flow: "6.000 – 9.500", ps: "250 – 120" },
      { model: "MVR.A/8/650", power: "4 kW", rpm: "1440", flow: "12.500 – 19.000", ps: "350 – 170" },
      { model: "MVR.A/8/900", power: "11 kW", rpm: "1450", flow: "24.000 – 34.000", ps: "3.400 – 1.500" },
    ],
  },
  {
    key: "ly-tam",
    name: "Quạt ly tâm CV (B/C/T/L)",
    icon: Gauge,
    image: "https://vihem1.com.vn/wp-content/uploads/2017/05/Quat-ly-tam-CV-T20-300x217.jpg",
    specs: { "Đường kính cánh": "120 – 1.800 mm", "Áp suất": "250 – 23.000 Pa", "Lưu lượng": "500 – 160.000 m³/h", "Công suất": "0,37 – 250 kW" },
    desc: "Cao áp – trung áp cho lò hơi, hút bụi, xi măng, hóa chất. Nhiều kiểu cánh: cong sau, thẳng sau, cong trước, hướng tâm, mái chèo.",
    sample: [
      { model: "CV.C21/620/100/K21", power: "11 kW", rpm: "1460", flow: "13.100 – 18.100", ps: "1.200 – 710" },
      { model: "CV.B2/8/1000", power: "55 kW", rpm: "1480", flow: "19.900 – 53.000", ps: "8.500 – 3.870" },
      { model: "CVP7/...", power: "75 kW", rpm: "2970", flow: "15.800 – 27.600", ps: "20.600 – 12.390" },
    ],
  },
  {
    key: "tang-ap",
    name: "Quạt tăng áp cầu thang & Jetfan",
    icon: Building2,
    image: "https://vihem1.com.vn/wp-content/uploads/2017/05/Quat-tao-ap-cau-thang-300x217.jpg",
    specs: { "Ứng dụng": "Cầu thang thoát hiểm, hầm xe, đường hầm", "Áp suất": "Đáp ứng QCVN 06", "Chế độ": "Hai chiều hút/thổi", "Phụ kiện": "Ống giảm thanh, chống cháy" },
    desc: "Đáp ứng tiêu chuẩn PCCC cho công trình cao tầng. Jetfan AVT một/hai tầng cánh có bộ giảm âm cho đường hầm giao thông.",
    sample: [],
  },
  {
    key: "dong-co-bom",
    name: "Động cơ điện & Bơm công nghiệp",
    icon: Cog,
    image: "https://vihem1.com.vn/wp-content/uploads/2017/04/Dong-Co-Dienz.png",
    specs: { "Công suất động cơ": "0,18 – 2.700 kW", "Loại": "1 pha, 3 pha, phòng nổ, mặt bích", "Bơm": "Ly tâm, hỗn lưu, PCCC, chất sệt", "Tiêu chuẩn": "TCVN, IEC, ISO 9001" },
    desc: "Danh mục hơn 300 model động cơ và đầy đủ các dòng bơm công nghiệp – cấp nước – PCCC.",
    sample: [],
  },
];

const services = [
  { icon: Wrench, title: "Tư vấn thiết kế", desc: "Lựa chọn quạt theo lưu lượng, áp suất, môi trường." },
  { icon: Gauge, title: "Cân bằng động – phân tích rung", desc: "Hiệu chỉnh tại xưởng và tại công trình." },
  { icon: Cog, title: "Sửa chữa & đại tu", desc: "Động cơ điện, bơm công nghiệp mọi công suất." },
  { icon: Factory, title: "Phụ kiện đồng bộ", desc: "Khớp giãn nở, giảm chấn, thùng giảm âm, tủ điện điều khiển." },
];

const projects = [
  "Nhà máy Xi măng Sông Gianh – Quạt ID 1.250 kW",
  "Hệ thống hút bụi Cyclone – KCN Hòa Khánh",
  "Khách sạn Phạm Gia – Tăng áp cầu thang",
  "Hầm giao thông – Jetfan AVT",
  "Nhà máy nhiệt điện – Quạt ly tâm cao áp",
  "Nhà xưởng dệt may – Hệ thống thông gió AVR",
];

const Catalogue2026 = () => {
  const [activeFamily, setActiveFamily] = useState(families[0].key);
  const current = families.find((f) => f.key === activeFamily)!;

  return (
    <Layout>
      <PageHero title="Catalogue 2026" crumbs={[{ label: "Catalogue 2026" }]} />

      {/* Intro + download */}
      <section className="border-b border-border bg-card/40">
        <div className="container-wide py-12 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <span className="section-tag">Ấn bản 2026</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl uppercase tracking-wide">
              Quạt công nghiệp · Động cơ điện · Bơm – Phụ kiện đồng bộ
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              Gần 50 năm chế tạo máy điện tại Đà Nẵng, VIHEM 1 cung cấp hơn 400 model quạt công nghiệp
              và 300 loại động cơ điện theo chuẩn ISO 9001. Catalogue 2026 tổng hợp hệ mã sản phẩm,
              kiểu lắp đặt, dải thông số kỹ thuật và các dự án tiêu biểu.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand hover:bg-brand-dark text-brand-foreground font-condensed tracking-widest uppercase">
                <a href={PDF_URL} download>
                  <Download className="mr-2 h-4 w-4" /> Tải catalogue PDF
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-condensed tracking-widest uppercase">
                <Link to="/lien-he"><Phone className="mr-2 h-4 w-4" /> Yêu cầu báo giá</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((h) => (
              <div key={h.label} className="border border-border bg-background p-5 hover:border-brand transition-colors">
                <h.icon className="h-5 w-5 text-brand" />
                <div className="mt-3 font-display text-3xl tracking-wide">{h.value}</div>
                <div className="text-[11px] font-condensed uppercase tracking-[0.2em] text-muted-foreground mt-1">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Naming code decoder */}
      <section className="border-b border-border">
        <div className="container-wide py-14">
          <span className="section-tag">Hệ mã sản phẩm</span>
          <h3 className="mt-3 font-display text-3xl md:text-4xl uppercase tracking-wide">Giải mã ký hiệu quạt VIHEM 1</h3>
          <p className="text-muted-foreground mt-2 max-w-2xl">Chọn nhóm sản phẩm để xem cấu trúc mã hiệu và ý nghĩa từng thành phần.</p>

          <Tabs defaultValue="axial" className="mt-8">
            <TabsList className="bg-muted/40">
              {namingGuides.map((g) => (
                <TabsTrigger key={g.key} value={g.key} className="font-condensed uppercase tracking-widest text-xs">{g.title}</TabsTrigger>
              ))}
            </TabsList>
            {namingGuides.map((g) => (
              <TabsContent key={g.key} value={g.key} className="mt-6">
                <div className="border border-border p-6 md:p-8 bg-card">
                  <div className="font-mono text-2xl md:text-3xl text-brand tracking-wider break-all">{g.code}</div>
                  <div className="mt-6 grid md:grid-cols-2 gap-3">
                    {g.parts.map((p, i) => (
                      <div key={i} className="flex gap-4 p-4 border border-border/60 bg-background hover:border-brand/60 transition">
                        <div className="font-display text-2xl text-brand min-w-[64px]">{p.tag}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Mounting types */}
      <section className="border-b border-border bg-card/40">
        <div className="container-wide py-14">
          <span className="section-tag">Kiểu lắp đặt</span>
          <h3 className="mt-3 font-display text-3xl md:text-4xl uppercase tracking-wide">K1 · K2 · K3 – Ba phương án truyền động</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {mountingTypes.map((m) => (
              <div key={m.code} className="group relative border border-border bg-background p-6 hover:border-brand transition overflow-hidden">
                <div className="absolute -right-4 -top-4 font-display text-[110px] leading-none text-brand/5 group-hover:text-brand/10 transition">{m.code}</div>
                <div className="relative">
                  <div className="font-display text-4xl text-brand">{m.code}</div>
                  <div className="font-condensed uppercase tracking-widest text-sm mt-2">{m.title}</div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product families interactive */}
      <section className="border-b border-border">
        <div className="container-wide py-14">
          <span className="section-tag">Danh mục sản phẩm</span>
          <h3 className="mt-3 font-display text-3xl md:text-4xl uppercase tracking-wide">Khám phá theo nhóm</h3>

          <div className="mt-8 grid lg:grid-cols-[280px_1fr] gap-6">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
              {families.map((f) => {
                const Icon = f.icon;
                const active = f.key === activeFamily;
                return (
                  <button
                    key={f.key}
                    onClick={() => setActiveFamily(f.key)}
                    className={`flex items-center gap-3 px-4 py-3 border text-left min-w-[220px] lg:min-w-0 transition ${active ? "border-brand bg-brand text-brand-foreground" : "border-border bg-background hover:border-brand/60"}`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="font-condensed uppercase tracking-widest text-xs">{f.name}</span>
                    <ChevronRight className={`h-4 w-4 ml-auto transition ${active ? "translate-x-0" : "-translate-x-1 opacity-50"}`} />
                  </button>
                );
              })}
            </div>

            <div className="border border-border bg-card">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="font-display text-2xl uppercase tracking-wide">{current.name}</h4>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{current.desc}</p>
                  <dl className="mt-5 grid grid-cols-2 gap-3">
                    {Object.entries(current.specs).map(([k, v]) => (
                      <div key={k} className="border border-border/60 p-3 bg-background">
                        <dt className="text-[10px] font-condensed uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                        <dd className="font-condensed font-semibold mt-1 text-sm">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {current.sample.length > 0 && (
                <div className="border-t border-border p-6 md:p-8">
                  <div className="font-condensed uppercase tracking-widest text-xs text-muted-foreground mb-3">Một số model tiêu biểu</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-muted/50">
                        <tr className="text-left font-condensed uppercase tracking-widest text-[11px]">
                          <th className="p-3">Mã quạt</th>
                          <th className="p-3">Công suất</th>
                          <th className="p-3">Tốc độ (rpm)</th>
                          <th className="p-3">Lưu lượng (m³/h)</th>
                          <th className="p-3">Áp suất tĩnh (Pa)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {current.sample.map((r) => (
                          <tr key={r.model} className="border-t border-border/60 hover:bg-muted/30">
                            <td className="p-3 font-mono text-brand">{r.model}</td>
                            <td className="p-3">{r.power}</td>
                            <td className="p-3">{r.rpm}</td>
                            <td className="p-3">{r.flow}</td>
                            <td className="p-3">{r.ps}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">Trích từ catalogue 2026 – liên hệ để nhận bảng đầy đủ và đường đặc tính.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services + Projects */}
      <section className="border-b border-border bg-card/40">
        <div className="container-wide py-14 grid lg:grid-cols-2 gap-10">
          <div>
            <span className="section-tag">Dịch vụ kỹ thuật</span>
            <h3 className="mt-3 font-display text-3xl uppercase tracking-wide">Đồng hành trọn vòng đời thiết bị</h3>
            <div className="mt-6 space-y-3">
              {services.map((s) => (
                <div key={s.title} className="flex gap-4 p-4 border border-border bg-background">
                  <s.icon className="h-5 w-5 text-brand mt-1 shrink-0" />
                  <div>
                    <div className="font-condensed uppercase tracking-widest text-sm font-semibold">{s.title}</div>
                    <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="section-tag">Dự án tiêu biểu</span>
            <h3 className="mt-3 font-display text-3xl uppercase tracking-wide">Công trình sử dụng VIHEM 1</h3>
            <Accordion type="single" collapsible className="mt-6 border border-border bg-background">
              {projects.map((p, i) => (
                <AccordionItem key={p} value={`p-${i}`} className="border-b border-border/60 last:border-0 px-4">
                  <AccordionTrigger className="font-condensed uppercase tracking-widest text-sm hover:no-underline">
                    <span className="text-brand mr-3 font-display">{String(i + 1).padStart(2, "0")}</span>{p}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Tham khảo chi tiết quy mô, model thiết bị và thông số vận hành tại trang catalogue PDF hoặc liên hệ phòng kỹ thuật VIHEM 1.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand text-brand-foreground">
        <div className="container-wide py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-condensed uppercase tracking-[0.3em] text-xs opacity-80">Catalogue 2026 · 24 trang</div>
            <h3 className="font-display text-3xl md:text-4xl uppercase tracking-wide mt-2">Tải bản đầy đủ – kèm đường đặc tính & bảng tra</h3>
          </div>
          <div className="flex gap-3">
            <Button asChild size="lg" variant="secondary" className="font-condensed tracking-widest uppercase">
              <a href={PDF_URL} download><FileText className="mr-2 h-4 w-4" /> Tải PDF</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-condensed tracking-widest uppercase bg-transparent border-brand-foreground text-brand-foreground hover:bg-brand-foreground hover:text-brand">
              <Link to="/lien-he">Liên hệ kỹ sư</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Catalogue2026;