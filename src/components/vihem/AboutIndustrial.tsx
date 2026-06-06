const timeline = [
  { y: "1978", t: "Thành lập với công nghệ viện trợ từ Chính phủ Hungary. Trang thiết bị đồng bộ chuyên chế tạo động cơ điện xoay chiều." },
  { y: "1979", t: "Chính thức đi vào hoạt động ngày 15/1/1979 — sản phẩm đầu tiên xuất xưởng phục vụ nền kinh tế quốc dân." },
  { y: "2000s", t: "Mở rộng sang quạt công nghiệp, máy biến áp, bơm nước. Khách hàng trải rộng mọi ngành công nghiệp Việt Nam." },
  { y: "Nay", t: "Nhà máy tại KCN Hòa Khánh, Đà Nẵng. Sửa chữa động cơ 0.3–10,000kW. Lắp đặt pin năng lượng mặt trời." },
];

const AboutIndustrial = () => (
  <section className="bg-card py-24 md:py-32">
    <div className="container-wide grid lg:grid-cols-2 gap-16 items-start">
      {/* Left: timeline card */}
      <div className="relative">
        <div className="relative bg-background border border-brand/20 p-10">
          <div className="absolute -top-px left-12 w-20 h-0.5 bg-brand" />
          <div className="flex gap-2 mb-6">
            <span className="w-12 h-1.5 rounded-sm" style={{ background: "linear-gradient(90deg,#DA251D 33%,#FFCD00 33% 67%,#009639 67%)" }} />
            <span className="w-12 h-1.5 rounded-sm" style={{ background: "linear-gradient(90deg,#CE2939 33%,#FFFFFF 33% 67%,#477050 67%)" }} />
          </div>
          <h3 className="font-display text-3xl tracking-wider uppercase">Hành trình phát triển</h3>
          <div className="mt-8 space-y-5">
            {timeline.map((it) => (
              <div key={it.y} className="flex gap-5">
                <span className="font-display text-xl text-brand min-w-[60px]">{it.y}</span>
                <p className="text-sm text-foreground/60 leading-relaxed">{it.t}</p>
              </div>
            ))}
          </div>
          <span className="absolute bottom-0 right-4 font-display text-[110px] leading-none text-brand/[0.08] pointer-events-none select-none">
            1978
          </span>
        </div>
      </div>

      {/* Right: copy */}
      <div>
        <span className="section-tag">Về chúng tôi</span>
        <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-wide uppercase leading-[0.95]">
          Doanh nghiệp<br />
          <span className="text-brand">Tiên phong</span><br />
          Máy điện
        </h2>
        <p className="mt-7 text-foreground/75 text-lg leading-relaxed font-light">
          VIHEM 1 là thành viên của Công ty Cổ phần Chế tạo Máy điện Việt Nam – Hungari, doanh nghiệp duy nhất tại Việt Nam được nước ngoài chuyển giao công nghệ hoàn thiện trong lĩnh vực sản xuất máy điện quay.
        </p>
        <blockquote className="mt-6 bg-brand/10 border-l-[3px] border-brand px-5 py-4 italic text-foreground/85 leading-relaxed">
          "Cơ sở vật chất kỹ thuật, thiết kế và công nghệ do Chính phủ Hungary viện trợ — với trang thiết bị đồng bộ chuyên thiết kế, chế tạo các loại động cơ điện xoay chiều phục vụ nền kinh tế quốc dân và xuất khẩu."
        </blockquote>
        <p className="mt-6 text-foreground/70 leading-relaxed">
          Hơn 46 năm phấn đấu và trưởng thành, VIHEM 1 không ngừng đổi mới — từ sản xuất truyền thống đến cung cấp giải pháp năng lượng tổng thể, bao gồm lắp đặt hệ thống pin mặt trời và dịch vụ cân bằng động hiện đại.
        </p>
      </div>
    </div>
  </section>
);

export default AboutIndustrial;