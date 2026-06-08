import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Globe, Compass, MousePointer2, ZoomIn } from "lucide-react";

type Area = {
  id: string;
  icon: string;
  label: string;
  caption: string;
  gradient: string;
  hotspots: { x: number; label: string; to?: string }[];
};

const AREAS: Area[] = [
  {
    id: "map",
    icon: "🗺️",
    label: "Bản đồ vị trí",
    caption: "KCN Hòa Khánh · Q. Liên Chiểu · Đà Nẵng",
    gradient: "from-[#2b3a55] via-[#3b5275] to-[#1f2a3d]",
    hotspots: [],
  },
  {
    id: "gate",
    icon: "🏭",
    label: "Cổng nhà máy",
    caption: "Cổng chính VIHEM 1 — Đường 6B, KCN Hòa Khánh",
    gradient: "from-[#5b6a7d] via-[#8a9bb0] to-[#3d4a5d]",
    hotspots: [
      { x: 25, label: "Bảo vệ" },
      { x: 60, label: "Vào xưởng SX", to: "workshop" },
      { x: 85, label: "Văn phòng", to: "office" },
    ],
  },
  {
    id: "workshop",
    icon: "⚙️",
    label: "Xưởng sản xuất",
    caption: "Dây chuyền quấn dây, ép vỏ stator – công suất đến 2700 kW",
    gradient: "from-[#6e5430] via-[#b08a4d] to-[#3a2c1a]",
    hotspots: [
      { x: 20, label: "Quấn dây" },
      { x: 50, label: "Ép vỏ" },
      { x: 78, label: "Sang lắp ráp", to: "assembly" },
    ],
  },
  {
    id: "assembly",
    icon: "🔧",
    label: "Khu lắp ráp",
    caption: "Lắp ráp động cơ – cân bằng động – test tải",
    gradient: "from-[#3a4f6e] via-[#5d7fa3] to-[#1f2c3f]",
    hotspots: [
      { x: 30, label: "Cân bằng động" },
      { x: 65, label: "Test tải" },
      { x: 88, label: "Kho thành phẩm", to: "warehouse" },
    ],
  },
  {
    id: "warehouse",
    icon: "📦",
    label: "Kho thành phẩm",
    caption: "Kho đóng gói – xuất xưởng đi toàn quốc",
    gradient: "from-[#4a4a4a] via-[#7a7a7a] to-[#2a2a2a]",
    hotspots: [
      { x: 40, label: "Đóng gói" },
      { x: 75, label: "Xuất hàng" },
    ],
  },
  {
    id: "office",
    icon: "🏢",
    label: "Văn phòng",
    caption: "Khối hành chính – kỹ thuật – kinh doanh",
    gradient: "from-[#3e5a4a] via-[#6a8c7a] to-[#22332a]",
    hotspots: [
      { x: 35, label: "Lễ tân" },
      { x: 70, label: "Phòng kỹ thuật" },
    ],
  },
];

const FactoryTour = () => {
  const [active, setActive] = useState<string>("gate");
  const [rot, setRot] = useState(0);
  const [zoom, setZoom] = useState(1);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const area = AREAS.find((a) => a.id === active)!;

  useEffect(() => {
    setRot(0);
    setZoom(1);
  }, [active]);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    lastX.current = e.clientX;
    (e.target as Element).setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    setRot((r) => r + dx * 0.4);
  };
  const onUp = () => (dragging.current = false);
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((z) => Math.min(2, Math.max(1, z - e.deltaY * 0.001)));
  };

  return (
    <section className="relative bg-card border-t border-border">
      <div className="absolute inset-0 industrial-grid opacity-40 pointer-events-none" />
      <div className="container-wide relative py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="section-tag">Tour 360°</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-wide uppercase">
              Khám phá <span className="text-brand">nhà máy</span>
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground text-sm md:text-base">
              Tham quan khuôn viên VIHEM 1 tại KCN Hòa Khánh — kéo chuột để xoay
              toàn cảnh 360°, cuộn để zoom, click hotspot để di chuyển giữa các khu vực.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-condensed tracking-widest uppercase text-muted-foreground">
            <span className="flex items-center gap-1.5"><MousePointer2 className="h-3.5 w-3.5 text-brand" /> Kéo xoay</span>
            <span className="flex items-center gap-1.5"><ZoomIn className="h-3.5 w-3.5 text-brand" /> Cuộn zoom</span>
            <span className="flex items-center gap-1.5"><Compass className="h-3.5 w-3.5 text-brand" /> 360°</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-5">
          {/* Area list */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            <div className="hidden lg:block font-condensed font-bold text-[11px] tracking-[0.25em] uppercase text-muted-foreground px-2 mb-1">
              Khu vực
            </div>
            {AREAS.map((a) => (
              <button
                key={a.id}
                onClick={() => setActive(a.id)}
                className={`shrink-0 lg:w-full text-left px-4 py-3 border transition-colors flex items-center gap-3 font-condensed font-semibold text-[12px] tracking-[0.15em] uppercase ${
                  active === a.id
                    ? "bg-brand text-brand-foreground border-brand"
                    : "bg-background border-border hover:border-brand/60 text-foreground/80"
                }`}
              >
                <span className="text-lg">{a.icon}</span>
                <span>{a.label}</span>
              </button>
            ))}
          </div>

          {/* Panorama viewer */}
          <div className="relative">
            <div
              className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden border border-border bg-foreground/90 select-none"
              onPointerDown={area.id !== "map" ? onDown : undefined}
              onPointerMove={area.id !== "map" ? onMove : undefined}
              onPointerUp={onUp}
              onPointerLeave={onUp}
              onWheel={area.id !== "map" ? onWheel : undefined}
              style={{ cursor: area.id === "map" ? "default" : "grab" }}
            >
              {area.id === "map" ? (
                <iframe
                  title="VIHEM 1 Map"
                  src="https://www.google.com/maps?q=KCN+Hoa+Khanh,+Lien+Chieu,+Da+Nang&output=embed"
                  className="absolute inset-0 w-full h-full grayscale-[20%]"
                  loading="lazy"
                />
              ) : (
                <>
                  {/* Panorama strip */}
                  <div
                    className={`absolute inset-y-0 -left-1/2 -right-1/2 bg-gradient-to-r ${area.gradient}`}
                    style={{
                      transform: `translateX(${rot}px) scale(${zoom})`,
                      transformOrigin: "center",
                      transition: dragging.current ? "none" : "transform 0.25s ease-out",
                    }}
                  >
                    {/* faux horizon + structures */}
                    <div className="absolute inset-x-0 top-1/2 h-px bg-white/15" />
                    <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                    {/* Silhouette buildings */}
                    <div className="absolute bottom-[33%] inset-x-0 flex items-end justify-around opacity-70">
                      {Array.from({ length: 14 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-black/60"
                          style={{
                            width: `${30 + (i % 5) * 18}px`,
                            height: `${60 + ((i * 37) % 110)}px`,
                          }}
                        />
                      ))}
                    </div>
                    {/* Hotspots */}
                    {area.hotspots.map((h, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (h.to) setActive(h.to);
                        }}
                        className="absolute top-1/2 -translate-y-1/2 group"
                        style={{ left: `${h.x}%` }}
                      >
                        <span className="block w-6 h-6 rounded-full bg-brand text-brand-foreground border-2 border-white shadow-lg animate-pulse" />
                        <span className="absolute left-1/2 -translate-x-1/2 -top-9 px-2 py-1 text-[10px] font-condensed font-bold tracking-widest uppercase bg-foreground text-background whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          {h.label} {h.to && "→"}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Overlay UI */}
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between text-background pointer-events-none">
                    <div className="bg-black/60 backdrop-blur px-3 py-1.5 font-condensed font-bold text-[11px] tracking-[0.2em] uppercase">
                      {area.icon} {area.label}
                    </div>
                    <div className="bg-black/60 backdrop-blur px-3 py-1.5 font-condensed text-[10px] tracking-widest uppercase flex items-center gap-2">
                      <Compass className="h-3 w-3 text-brand" />
                      {Math.round((((rot * -0.5) % 360) + 360) % 360)}°
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-background pointer-events-none">
                    <div className="bg-black/60 backdrop-blur px-3 py-2 max-w-md">
                      <p className="font-condensed text-[11px] tracking-widest uppercase opacity-80">Hiện tại</p>
                      <p className="text-sm font-medium">{area.caption}</p>
                    </div>
                    <div className="hidden sm:block bg-black/60 backdrop-blur px-3 py-1.5 font-condensed text-[10px] tracking-widest uppercase">
                      Zoom {zoom.toFixed(2)}×
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Info bar */}
            <div className="grid sm:grid-cols-4 gap-px bg-border mt-px">
              {[
                { Icon: MapPin, label: "Địa chỉ", value: "Đường 6B, KCN Hòa Khánh, Liên Chiểu, Đà Nẵng" },
                { Icon: Phone, label: "Điện thoại", value: "0236 3680 068" },
                { Icon: Mail, label: "Email", value: "vihemdanang@gmail.com" },
                { Icon: Globe, label: "Website", value: "vihem1.com.vn" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="bg-background p-4 flex items-start gap-3">
                  <Icon className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <div className="font-condensed font-bold text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{label}</div>
                    <div className="text-xs mt-1 truncate">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryTour;