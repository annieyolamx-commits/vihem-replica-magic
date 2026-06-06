import { useState } from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { toast } from "sonner";

const ContactCTA = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Đã gửi yêu cầu! Chúng tôi sẽ liên hệ trong 24h.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section className="grid lg:grid-cols-2 bg-background">
      {/* Info side */}
      <div className="relative bg-brand text-brand-foreground p-12 md:p-20 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-black/15 pointer-events-none" />
        <div className="relative">
          <span className="font-condensed font-semibold text-xs tracking-[0.3em] uppercase text-white/70 inline-flex items-center gap-3">
            <span className="block w-8 h-0.5 bg-white/50" /> Liên hệ
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl tracking-wide uppercase leading-[0.95]">
            Nhận báo<br />giá ngay
          </h2>

          <div className="mt-10 space-y-6">
            {[
              { Icon: MapPin, label: "Địa chỉ nhà máy", value: "Đường 6B, KCN Hòa Khánh, P. Hòa Khánh Bắc, Q. Liên Chiểu, Đà Nẵng" },
              { Icon: Phone, label: "Điện thoại", value: "0236 3680 068 · 0944 177 362" },
              { Icon: Mail, label: "Email", value: "vihemdanang@gmail.com" },
              { Icon: Globe, label: "Website", value: "vihem1.com.vn" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-white/15 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-condensed font-semibold text-[11px] tracking-[0.25em] uppercase text-white/70">{label}</div>
                  <p className="mt-1 font-medium leading-snug">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form side */}
      <div className="bg-card p-12 md:p-20">
        <span className="section-tag">Báo giá</span>
        <h3 className="mt-4 font-display text-4xl md:text-5xl tracking-wide uppercase leading-[0.95]">
          Gửi yêu cầu<br /><span className="text-brand">báo giá</span>
        </h3>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Họ và tên *" name="name" required maxLength={100} placeholder="Nguyễn Văn A" />
            <Field label="Điện thoại *" name="phone" required maxLength={20} placeholder="09xx xxx xxx" />
          </div>
          <Field label="Email" name="email" type="email" maxLength={120} placeholder="email@company.com" />
          <Field label="Công ty / Đơn vị" name="company" maxLength={150} />
          <div>
            <label className="font-condensed font-semibold text-[11px] tracking-[0.25em] uppercase text-muted-foreground block mb-2">
              Sản phẩm quan tâm
            </label>
            <select name="product" className="w-full bg-background border border-border focus:border-brand outline-none px-4 py-3.5 text-sm text-foreground transition-colors">
              <option>-- Chọn sản phẩm --</option>
              <option>Động cơ điện 3 pha</option>
              <option>Động cơ phòng nổ</option>
              <option>Quạt công nghiệp</option>
              <option>Máy biến áp</option>
              <option>Bơm nước công nghiệp</option>
              <option>Sửa chữa động cơ</option>
              <option>Lắp đặt pin mặt trời</option>
              <option>Khác</option>
            </select>
          </div>
          <div>
            <label className="font-condensed font-semibold text-[11px] tracking-[0.25em] uppercase text-muted-foreground block mb-2">
              Nội dung yêu cầu
            </label>
            <textarea name="message" rows={4} maxLength={1500} className="w-full bg-background border border-border focus:border-brand outline-none px-4 py-3.5 text-sm text-foreground transition-colors resize-y" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand hover:bg-brand-dark text-brand-foreground py-5 font-condensed font-bold text-sm tracking-[0.3em] uppercase transition-colors disabled:opacity-60"
          >
            {loading ? "Đang gửi..." : "Gửi yêu cầu →"}
          </button>
        </form>
      </div>
    </section>
  );
};

const Field = ({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label className="font-condensed font-semibold text-[11px] tracking-[0.25em] uppercase text-muted-foreground block mb-2">
      {label}
    </label>
    <input
      {...props}
      className="w-full bg-background border border-border focus:border-brand outline-none px-4 py-3.5 text-sm text-foreground transition-colors"
    />
  </div>
);

export default ContactCTA;