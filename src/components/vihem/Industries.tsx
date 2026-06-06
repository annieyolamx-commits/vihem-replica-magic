const industries = [
  "Dầu khí", "Khai thác mỏ", "Sản xuất xi măng", "Thép & Luyện kim",
  "Chế biến giấy", "Nông lâm hải sản", "Xây dựng", "Hóa chất",
  "Điện lực", "Cấp thoát nước",
];

const warranty = [
  "Bảo hành 18 tháng kể từ ngày mua hàng",
  "Miễn phí với lỗi của nhà sản xuất",
  "Hỗ trợ sửa chữa ngoài bảo hành có tính phí",
  "Kỹ thuật viên hỗ trợ toàn quốc",
];

const Industries = () => (
  <section className="bg-card py-24 md:py-32">
    <div className="container-wide">
      <span className="section-tag">Ngành phục vụ</span>
      <h2 className="mt-4 font-display text-5xl md:text-7xl tracking-wide uppercase leading-[0.95]">
        Khách hàng<br /><span className="text-brand">Đa ngành</span>
      </h2>

      <div className="mt-12 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-foreground/70 mb-6 leading-relaxed">
            Sản phẩm VIHEM 1 phục vụ hầu hết các ngành kinh tế trọng điểm của Việt Nam:
          </p>
          <div className="grid grid-cols-2 gap-3">
            {industries.map((i) => (
              <span key={i} className="bg-brand/10 border border-brand/20 hover:bg-brand/20 transition-colors px-4 py-3 font-condensed font-semibold text-sm tracking-wider text-foreground/85 flex items-center gap-2.5">
                <span className="text-brand text-xs">▸</span> {i}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-foreground/70 leading-relaxed">
            VIHEM 1 tự hào là đối tác cung cấp thiết bị điện cơ tin cậy cho hàng trăm doanh nghiệp lớn tại Việt Nam — từ các nhà máy nhiệt điện, xi măng đến khu công nghiệp chế xuất.
          </p>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Đội ngũ kỹ thuật viên được đào tạo chuyên sâu, sẵn sàng tư vấn lựa chọn thiết bị phù hợp và hỗ trợ lắp đặt, vận hành tại chỗ.
          </p>

          <div className="mt-8 bg-background border border-gold/30 p-6">
            <h4 className="font-condensed font-bold text-base tracking-[0.25em] uppercase text-gold mb-4 flex items-center gap-2">
              ★ Chế độ bảo hành VIHEM 1
            </h4>
            <ul className="space-y-2.5">
              {warranty.map((w) => (
                <li key={w} className="text-sm text-foreground/70 flex gap-3 pb-2 border-b border-border/40 last:border-0">
                  <span className="text-gold shrink-0">✓</span> {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Industries;