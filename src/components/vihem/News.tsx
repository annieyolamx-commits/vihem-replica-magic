const news = [
  { title: "Cung cấp Ống gió tại Huế", img: "https://vihem1.com.vn/wp-content/uploads/2026/03/18101ct-220x165.jpg", excerpt: "Bạn đang tìm kiếm đơn vị cung cấp ống gió tại Huế uy tín cho công trình nhà xưởng, chung cư hay trung tâm thương mại?" },
  { title: "Ống gió tiêu âm tại Đà Nẵng", img: "https://vihem1.com.vn/wp-content/uploads/2026/02/tieu-am-co-tem-2-220x165.jpg", excerpt: "Giải pháp giảm thiểu tiếng ồn cho hệ thống thông gió tại Đà Nẵng — duy trì không gian yên tĩnh." },
  { title: "Bản Vẽ Shop Thi Công Hệ Thống Hút Khói", img: "https://vihem1.com.vn/wp-content/uploads/2026/01/Capture-260x98.jpg", excerpt: "Bản vẽ shop thi công hệ thống hút khói nhà xưởng — quy chuẩn và lưu ý quan trọng." },
  { title: "ỐNG GIÓ CHỐNG CHÁY EI45", img: "https://vihem1.com.vn/wp-content/uploads/2026/02/hh3-ct2-220x165.jpg", excerpt: "Thành phần cốt lõi trong hệ thống thông gió và hút khói sự cố tại các công trình hiện đại." },
];

const News = () => (
  <section className="py-14 bg-secondary">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand">TIN TỨC</h2>
        <div className="w-20 h-1 bg-brand mx-auto mt-3" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((n) => (
          <article key={n.title} className="bg-card rounded-lg overflow-hidden shadow hover:shadow-xl transition-all border border-border">
            <div className="aspect-video overflow-hidden bg-background">
              <img src={n.img} alt={n.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-foreground hover:text-brand line-clamp-2">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{n.excerpt}</p>
              <a href="#" className="inline-block mt-3 text-sm font-semibold text-brand hover:text-brand-dark">Đọc thêm →</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default News;