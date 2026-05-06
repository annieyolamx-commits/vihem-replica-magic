import hero from "@/assets/hero-industrial.jpg";

const Hero = () => (
  <section className="relative">
    <img src={hero} alt="Sản phẩm công nghiệp Vihem 1" width={1920} height={768} className="w-full h-[280px] md:h-[520px] object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
    <div className="absolute inset-0 flex items-center">
      <div className="container">
        <div className="max-w-xl">
          <p className="text-brand font-bold uppercase tracking-widest text-sm">Vihem 1 — Eco'Wind</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-black text-foreground drop-shadow-sm">
            Quạt công nghiệp · Động cơ · Ống gió
          </h1>
          <p className="mt-3 text-foreground/80 hidden md:block">
            Chất lượng tạo nên giá trị — Nhà sản xuất máy điện quay hàng đầu Việt Nam từ 1978.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;