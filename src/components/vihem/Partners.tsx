const logos = [
  "https://vihem1.com.vn/wp-content/uploads/2022/09/Logo-BSR.png",
  "https://vihem1.com.vn/wp-content/uploads/2022/09/unnamed.png",
  "https://vihem1.com.vn/wp-content/uploads/2017/04/logokhaikhoangA.jpg",
  "https://vihem1.com.vn/wp-content/uploads/2017/04/VICEMA.png",
  "https://vihem1.com.vn/wp-content/uploads/2017/04/LOGOTLA.jpg",
  "https://vihem1.com.vn/wp-content/uploads/2017/04/fbalogoA.jpg",
  "https://vihem1.com.vn/wp-content/uploads/2024/09/logo-1.jpg",
];

const Partners = () => (
  <section className="py-12 bg-background border-t border-border">
    <div className="container">
      <h2 className="text-center text-2xl font-extrabold text-brand mb-8">ĐỐI TÁC</h2>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {logos.map((l) => (
          <img key={l} src={l} alt="Đối tác" loading="lazy" className="h-14 object-contain grayscale hover:grayscale-0 transition-all" />
        ))}
      </div>
    </div>
  </section>
);

export default Partners;