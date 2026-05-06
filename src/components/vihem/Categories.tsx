const cats = [
  { name: "QUẠT HỖN LƯU", count: 2, img: "https://vihem1.com.vn/wp-content/uploads/2023/09/MVRA.png" },
  { name: "Quạt ly tâm", count: 9, img: "https://vihem1.com.vn/wp-content/uploads/2023/09/DANH-MUC-QLT.jpg" },
  { name: "Quạt hướng trục", count: 10, img: "https://vihem1.com.vn/wp-content/uploads/2023/09/AVR-K13.jpg" },
  { name: "Động cơ điện", count: 6, img: "https://vihem1.com.vn/wp-content/uploads/2017/04/Dong-Co-Dienz.png" },
  { name: "Bơm công nghiệp", count: 8, img: "https://vihem1.com.vn/wp-content/uploads/2017/04/BomCongNghiepz.png" },
  { name: "Hộp giảm tốc - LIMING", count: 7, img: "https://vihem1.com.vn/wp-content/uploads/2017/04/HopGiamTocz.png" },
];

const Categories = () => (
  <section className="py-14 bg-secondary">
    <div className="container">
      <div className="text-center mb-10">
        <p className="text-sm text-muted-foreground uppercase tracking-widest">Sản phẩm</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-brand">DANH MỤC SẢN PHẨM</h2>
        <div className="w-20 h-1 bg-brand mx-auto mt-3" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {cats.map((c) => (
          <a key={c.name} href="#" className="group bg-card rounded-lg shadow hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden border border-border">
            <div className="aspect-square bg-background p-4 flex items-center justify-center">
              <img src={c.img} alt={c.name} loading="lazy" className="max-h-full object-contain group-hover:scale-105 transition-transform" />
            </div>
            <div className="p-3 text-center border-t border-border">
              <h3 className="font-semibold text-sm text-foreground group-hover:text-brand line-clamp-2">{c.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{c.count} Products</p>
            </div>
          </a>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="#" className="inline-block border-2 border-brand text-brand hover:bg-brand hover:text-brand-foreground px-8 py-2 rounded font-semibold transition-colors">
          Xem thêm
        </a>
      </div>
    </div>
  </section>
);

export default Categories;