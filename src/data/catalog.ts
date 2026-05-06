export type Product = { slug: string; name: string; img: string; category: string };

export const categories = [
  { slug: "quat-hon-luu", name: "QUẠT HỖN LƯU", img: "https://vihem1.com.vn/wp-content/uploads/2023/09/MVRA.png" },
  { slug: "quat-ly-tam", name: "Quạt ly tâm", img: "https://vihem1.com.vn/wp-content/uploads/2023/09/DANH-MUC-QLT.jpg" },
  { slug: "quat-huong-truc", name: "Quạt hướng trục", img: "https://vihem1.com.vn/wp-content/uploads/2023/09/AVR-K13.jpg" },
  { slug: "dong-co-dien", name: "Động cơ điện", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/Dong-Co-Dienz.png" },
  { slug: "bom-cong-nghiep", name: "Bơm công nghiệp", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/BomCongNghiepz.png" },
  { slug: "hop-giam-toc", name: "Hộp giảm tốc - LIMING", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/HopGiamTocz.png" },
];

const slugify = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const raw: Record<string, { name: string; img: string }[]> = {
  "quat-hon-luu": [
    { name: "QUẠT HỖN LƯU – LOẠI CÓ CHÂN", img: "https://vihem1.com.vn/wp-content/uploads/2023/09/MVRA-300x217.png" },
    { name: "Quạt Hỗn Lưu Kiểu K13", img: "https://vihem1.com.vn/wp-content/uploads/2017/06/Quat-MIX-K13-300x217.jpg" },
  ],
  "quat-ly-tam": [
    { name: "QUẠT LY TÂM CAO ÁP – CV.B", img: "https://vihem1.com.vn/wp-content/uploads/2023/11/quat-ly-tam-cao-ap-vihem-1-300x217.jpg" },
    { name: "QUẠT LY TÂM 2 MIỆNG", img: "https://vihem1.com.vn/wp-content/uploads/2023/09/quat-cong-nghiep-1-1-300x217.jpg" },
    { name: "QUẠT LY TÂM CVT20", img: "https://vihem1.com.vn/wp-content/uploads/2017/05/Quat-ly-tam-CV-T20-300x217.jpg" },
    { name: "QUẠT TẠO ÁP CẦU THANG", img: "https://vihem1.com.vn/wp-content/uploads/2017/05/Quat-tao-ap-cau-thang-300x217.jpg" },
    { name: "QUẠT LY TÂM CV.B", img: "https://vihem1.com.vn/wp-content/uploads/2017/05/Quat-CVP7-300x217.jpg" },
    { name: "QUẠT LY TÂM CVC 21", img: "https://vihem1.com.vn/wp-content/uploads/2017/05/Quat-ly-tam-CVC21-300x217.jpg" },
    { name: "QUẠT LY TÂM CV.C", img: "https://vihem1.com.vn/wp-content/uploads/2017/05/Quat-ly-tam-CVC-K1-300x217.jpg" },
    { name: "QUẠT LY TÂM CVP7", img: "https://vihem1.com.vn/wp-content/uploads/2017/05/Quat-CVP7-300x217.jpg" },
  ],
  "quat-huong-truc": [
    { name: "QUẠT HƯỚNG TRỤC VỎ 2 NỬA", img: "https://vihem1.com.vn/wp-content/uploads/2023/11/quat-huong-truc-vihem-1-300x217.jpg" },
    { name: "QUẠT HƯỚNG TRỤC HẦM MỎ", img: "https://vihem1.com.vn/wp-content/uploads/2023/11/quat-huong-truc-vihem-1-01-300x217.jpg" },
    { name: "HƯỚNG TRỤC CHỊU NHIỆT", img: "https://vihem1.com.vn/wp-content/uploads/2023/09/quat-cong-nghiep-1-300x217.jpg" },
    { name: "AVR – GIÁN TIẾP", img: "https://vihem1.com.vn/wp-content/uploads/2023/08/AVR-K24-300x217.jpg" },
    { name: "HƯỚNG TRỤC VUÔNG", img: "https://vihem1.com.vn/wp-content/uploads/2023/08/quat-huong-truc-vuong-vihem-1-300x217.jpg" },
    { name: "AVR – TRỰC TIẾP", img: "https://vihem1.com.vn/wp-content/uploads/2023/08/AVR-K13-300x217.jpg" },
  ],
  "dong-co-dien": [
    { name: "Động cơ kiểu MB – CĐ", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/DONG-CO-DIEN-3FA-CD-MB-VIHEM-1-300x205.jpg" },
    { name: "ĐỘNG CƠ ĐIỆN 1 FA", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/DONG-CO-DIEN-1-FA-22-kw-VIHEM-300x205.jpg" },
    { name: "ĐỘNG CƠ ĐIỆN 3 PHA", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/DONG-CO-DIEN-3FA-002-VIHEM-300x205.jpg" },
    { name: "ĐỘNG CƠ PHÒNG NỔ", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/DONG-CO-PHONG-NO-02-VIHEM-300x205.jpg" },
    { name: "ĐỘNG CƠ MẶT BÍCH", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/DONG-CO-DIEN-3FA-MB-VIHEM-300x205.jpg" },
    { name: "Động cơ công suất lớn", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/DONG-CO-DIEN-001-VIHEM-300x205.jpg" },
  ],
  "bom-cong-nghiep": [
    { name: "BƠM HỖN LƯU HL 290-6", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/BOM-HL-290-6-300x205.jpg" },
    { name: "Bơm ly tâm nhiều cấp", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/BOM-LY-TAM-NHIEU-CAP-HAI-DUONG-300x205.jpg" },
    { name: "BƠM LY TÂM LTH", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/BOM-CHAT-SET-300x205.jpg" },
    { name: "BƠM BCK 29-510", img: "https://vihem1.com.vn/wp-content/uploads/2017/05/BOM-BCK-29-510-300x205.jpg" },
    { name: "BƠM PCCC", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/BOM-PCCC-1-300x205.jpg" },
    { name: "BƠM LY TÂM", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/BOM-LY-TAM-HAI-DUONG-300x205.jpg" },
  ],
  "hop-giam-toc": [
    { name: "Giảm tốc kiểu UW", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/Giam-toc-UW-300x205.jpg" },
    { name: "Giảm tốc VHM", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/Giam-toc-VHM-300x205.jpg" },
    { name: "Giảm tốc HOM", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/Giam-toc-HOM-300x205.jpg" },
    { name: "Giảm tốc LMW", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/Giam-toc-LMW-300x205.jpg" },
    { name: "Giảm tốc HMW", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/Giam-toc-HMW-300x205.jpg" },
    { name: "Hộp giảm tốc VB", img: "https://vihem1.com.vn/wp-content/uploads/2017/04/Giam-toc-MB-300x205.jpg" },
  ],
};

export const products: Product[] = Object.entries(raw).flatMap(([cat, list]) =>
  list.map((p) => ({ ...p, category: cat, slug: slugify(p.name) }))
);

export const productsByCategory = (slug: string) => products.filter((p) => p.category === slug);
export const findProduct = (slug: string) => products.find((p) => p.slug === slug);
export const findCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const newsArticles = [
  { slug: "ong-gio-hue", title: "Cung cấp Ống gió tại Huế", img: "https://vihem1.com.vn/wp-content/uploads/2026/03/18101ct-220x165.jpg", excerpt: "Bạn đang tìm kiếm đơn vị cung cấp ống gió tại Huế uy tín cho công trình nhà xưởng, chung cư hay trung tâm thương mại?", date: "12/03/2026" },
  { slug: "ong-gio-tieu-am-da-nang", title: "Ống gió tiêu âm tại Đà Nẵng", img: "https://vihem1.com.vn/wp-content/uploads/2026/02/tieu-am-co-tem-2-220x165.jpg", excerpt: "Giải pháp giảm thiểu tiếng ồn cho hệ thống thông gió tại Đà Nẵng — duy trì không gian yên tĩnh.", date: "20/02/2026" },
  { slug: "ban-ve-shop-hut-khoi", title: "Bản Vẽ Shop Thi Công Hệ Thống Hút Khói", img: "https://vihem1.com.vn/wp-content/uploads/2026/01/Capture-260x98.jpg", excerpt: "Bản vẽ shop thi công hệ thống hút khói nhà xưởng — quy chuẩn và lưu ý quan trọng.", date: "15/01/2026" },
  { slug: "ong-gio-chong-chay-ei45", title: "ỐNG GIÓ CHỐNG CHÁY EI45", img: "https://vihem1.com.vn/wp-content/uploads/2026/02/hh3-ct2-220x165.jpg", excerpt: "Thành phần cốt lõi trong hệ thống thông gió và hút khói sự cố tại các công trình hiện đại.", date: "05/02/2026" },
];

export const findArticle = (slug: string) => newsArticles.find((a) => a.slug === slug);