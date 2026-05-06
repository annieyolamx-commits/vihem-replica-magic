import { useState } from "react";

const data: Record<string, { name: string; img: string }[]> = {
  "QUẠT HỖN LƯU": [
    { name: "QUẠT HỖN LƯU – LOẠI CÓ CHÂN", img: "https://vihem1.com.vn/wp-content/uploads/2023/09/MVRA-300x217.png" },
    { name: "Quạt Hỗn Lưu Kiểu K13", img: "https://vihem1.com.vn/wp-content/uploads/2017/06/Quat-MIX-K13-300x217.jpg" },
  ],
  "Quạt ly tâm": [
    { name: "QUẠT LY TÂM CAO ÁP – CV.B", img: "https://vihem1.com.vn/wp-content/uploads/2023/11/quat-ly-tam-cao-ap-vihem-1-300x217.jpg" },
    { name: "QUẠT LY TÂM 2 MIỆNG", img: "https://vihem1.com.vn/wp-content/uploads/2023/09/quat-cong-nghiep-1-1-300x217.jpg" },
    { name: "QUẠT LY TÂM CVT20", img: "https://vihem1.com.vn/wp-content/uploads/2017/05/Quat-ly-tam-CV-T20-300x217.jpg" },
    { name: "QUẠT TẠO ÁP CẦU THANG", img: "https://vihem1.com.vn/wp-content/uploads/2017/05/Quat-tao-ap-cau-thang-300x217.jpg" },
    { name: "QUẠT LY TÂM CV.B", img: "https://vihem1.com.vn/wp-content/uploads/2017/05/Quat-CVP7-300x217.jpg" },
    { name: "QUẠT LY TÂM CVC 21", img: "https://vihem1.com.vn/wp-content/uploads/2017/05/Quat-ly-tam-CVC21-300x217.jpg" },
    { name: "QUẠT LY TÂM CV.C", img: "https://vihem1.com.vn/wp-content/uploads/2017/05/Quat-ly-tam-CVC-K1-300x217.jpg" },
    { name: "QUẠT LY TÂM CVP7", img: "https://vihem1.com.vn/wp-content/uploads/2017/05/Quat-CVP7-300x217.jpg" },
  ],
  "Quạt hướng trục": [
    { name: "QUẠT HƯỚNG TRỤC VỎ 2 NỬA", img: "https://vihem1.com.vn/wp-content/uploads/2023/11/quat-huong-truc-vihem-1-300x217.jpg" },
    { name: "QUẠT HƯỚNG TRỤC HẦM MỎ", img: "https://vihem1.com.vn/wp-content/uploads/2023/11/quat-huong-truc-vihem-1-01-300x217.jpg" },
    { name: "HƯỚNG TRỤC CHỊU NHIỆT", img: "https://vihem1.com.vn/wp-content/uploads/2023/09/quat-cong-nghiep-1-300x217.jpg" },
    { name: "AVR – GIÁN TIẾP", img: "https://vihem1.com.vn/wp-content/uploads/2023/08/AVR-K24-300x217.jpg" },
    { name: "HƯỚNG TRỤC VUÔNG", img: "https://vihem1.com.vn/wp-content/uploads/2023/08/quat-huong-truc-vuong-vihem-1-300x217.jpg" },
    { name: "AVR – TRỰC TIẾP", img: "https://vihem1.com.vn/wp-content/uploads/2023/08/AVR-K13-300x217.jpg" },
  ],
  "Động cơ điện": [
    { name: "Động cơ kiểu MB – CĐ", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/DONG-CO-DIEN-3FA-CD-MB-VIHEM-1-300x205.jpg" },
    { name: "ĐỘNG CƠ ĐIỆN 1 FA", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/DONG-CO-DIEN-1-FA-22-kw-VIHEM-300x205.jpg" },
    { name: "ĐỘNG CƠ ĐIỆN 3 PHA", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/DONG-CO-DIEN-3FA-002-VIHEM-300x205.jpg" },
    { name: "ĐỘNG CƠ PHÒNG NỔ", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/DONG-CO-PHONG-NO-02-VIHEM-300x205.jpg" },
    { name: "ĐỘNG CƠ MẶT BÍCH", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/DONG-CO-DIEN-3FA-MB-VIHEM-300x205.jpg" },
    { name: "Động cơ công suất lớn", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/DONG-CO-DIEN-001-VIHEM-300x205.jpg" },
  ],
  "Bơm công nghiệp": [
    { name: "BƠM HỖN LƯU HL 290-6", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/BOM-HL-290-6-300x205.jpg" },
    { name: "Bơm ly tâm nhiều cấp", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/BOM-LY-TAM-NHIEU-CAP-HAI-DUONG-300x205.jpg" },
    { name: "BƠM LY TÂM LTH", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/BOM-CHAT-SET-300x205.jpg" },
    { name: "BƠM BCK 29-510", img: "https://vihem1.com.vn/wp-content/uploads/2017/05/BOM-BCK-29-510-300x205.jpg" },
    { name: "BƠM PCCC", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/BOM-PCCC-1-300x205.jpg" },
    { name: "BƠM LY TÂM", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/BOM-LY-TAM-HAI-DUONG-300x205.jpg" },
  ],
  "Hộp giảm tốc - LIMING": [
    { name: "Giảm tốc kiểu UW", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/Giam-toc-UW-300x205.jpg" },
    { name: "Giảm tốc VHM", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/Giam-toc-VHM-300x205.jpg" },
    { name: "Giảm tốc HOM", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/Giam-toc-HOM-300x205.jpg" },
    { name: "Giảm tốc LMW", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/Giam-toc-LMW-300x205.jpg" },
    { name: "Giảm tốc HMW", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/Giam-toc-HMW-300x205.jpg" },
    { name: "Hộp giảm tốc VB", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/Giam-toc-MB-300x205.jpg" },
  ],
};

const ProductTabs = () => {
  const tabs = Object.keys(data);
  const [active, setActive] = useState(tabs[0]);
  return (
    <section className="py-14 bg-background">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand">SẢN PHẨM NỔI BẬT</h2>
          <div className="w-20 h-1 bg-brand mx-auto mt-3" />
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-border pb-1">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-4 py-2 text-sm font-semibold transition-colors border-b-2 -mb-[1px] ${
                active === t ? "border-brand text-brand" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data[active].map((p) => (
            <a key={p.name} href="#" className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-[4/3] bg-secondary flex items-center justify-center overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-brand line-clamp-2 min-h-[2.5rem]">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">Giá liên hệ</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;