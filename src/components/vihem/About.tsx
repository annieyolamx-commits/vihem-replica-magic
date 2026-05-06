import about from "@/assets/about-fan.jpg";

const About = () => (
  <section className="py-14 bg-background">
    <div className="container grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-sm text-muted-foreground uppercase tracking-widest">Giới thiệu</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-brand">VỀ CHÚNG TÔI</h2>
        <div className="w-20 h-1 bg-brand mt-3" />
        <p className="mt-5 text-foreground/80 leading-relaxed">
          Công ty Cổ phần Chế tạo máy điện Việt Nam – Hungari 1 là Công ty thành viên của Công ty Cổ phần Chế tạo máy điện Việt Nam – Hungari, được thành lập từ năm 1978. Cơ sở vật chất kỹ thuật, thiết kế, công nghệ ban đầu do Chính phủ Hungari viện trợ với trang thiết bị đồng bộ chuyên thiết kế, chế tạo các loại động cơ điện xoay chiều phục vụ cho nhu cầu của ngành kinh tế quốc dân và xuất khẩu.
        </p>
        <p className="mt-3 text-foreground/80 leading-relaxed">
          Công ty là doanh nghiệp duy nhất tại Việt Nam được nước ngoài chuyển giao công nghệ hoàn thiện trong lĩnh vực sản xuất máy điện quay.
        </p>
        <a href="#" className="inline-block mt-6 bg-brand text-brand-foreground hover:bg-brand-dark px-6 py-3 rounded font-semibold transition-colors">
          Tìm hiểu thêm →
        </a>
      </div>
      <div className="relative">
        <img src={about} alt="Quạt công nghiệp Vihem" loading="lazy" width={800} height={600} className="rounded-lg shadow-xl w-full" />
        <div className="absolute -bottom-4 -left-4 bg-brand text-brand-foreground px-6 py-3 rounded shadow-lg font-bold hidden md:block">
          Từ 1978
        </div>
      </div>
    </div>
  </section>
);

export default About;