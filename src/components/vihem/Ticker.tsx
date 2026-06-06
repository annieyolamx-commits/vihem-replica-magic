const items = [
  "Động cơ điện 3 pha",
  "Quạt công nghiệp",
  "Máy biến áp",
  "Bơm nước công nghiệp",
  "Sửa chữa bảo trì",
  "Pin năng lượng mặt trời",
  "Động cơ phòng nổ",
  "Cân bằng động",
];

const Ticker = () => (
  <div className="bg-brand text-brand-foreground py-4 overflow-hidden border-y border-brand-dark">
    <div className="flex ticker-track whitespace-nowrap">
      {[...items, ...items, ...items].map((t, i) => (
        <span key={i} className="font-condensed font-semibold text-sm tracking-[0.3em] uppercase px-10 flex items-center gap-5">
          {t} <span className="text-[8px]">◆</span>
        </span>
      ))}
    </div>
  </div>
);

export default Ticker;