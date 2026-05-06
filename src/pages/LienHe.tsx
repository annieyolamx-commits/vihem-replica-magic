import Layout from "@/components/vihem/Layout";
import PageHero from "@/components/vihem/PageHero";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Page = () => {
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
    <Layout>
      <PageHero title="Liên hệ" crumbs={[{ label: "Liên hệ" }]} />
      <section className="py-12 container grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-extrabold text-brand uppercase">Thông tin liên hệ</h2>
          <div className="w-16 h-1 bg-brand mt-2 mb-6" />
          <p className="text-muted-foreground mb-6">Công ty Cổ phần Chế tạo máy điện Việt Nam – Hungari 1 (VIHEM 1). Chất lượng tạo nên giá trị từ 1978.</p>
          <ul className="space-y-4">
            <li className="flex gap-3"><MapPin className="h-5 w-5 text-brand mt-0.5 shrink-0" /><div><div className="font-semibold">Địa chỉ</div><div className="text-sm text-muted-foreground">Đà Nẵng, Việt Nam</div></div></li>
            <li className="flex gap-3"><Phone className="h-5 w-5 text-brand mt-0.5 shrink-0" /><div><div className="font-semibold">Hotline</div><div className="text-sm text-muted-foreground">0944 177 362 (Quạt, Bơm, Động cơ)<br />0944 177 321 (Ống gió, Van gió)</div></div></li>
            <li className="flex gap-3"><Mail className="h-5 w-5 text-brand mt-0.5 shrink-0" /><div><div className="font-semibold">Email</div><div className="text-sm text-muted-foreground">vihemdanang@gmail.com<br />Ecowind.duct@gmail.com</div></div></li>
            <li className="flex gap-3"><Clock className="h-5 w-5 text-brand mt-0.5 shrink-0" /><div><div className="font-semibold">Giờ làm việc</div><div className="text-sm text-muted-foreground">Thứ 2 – Thứ 7: 7:30 – 17:30</div></div></li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-extrabold text-brand uppercase">Gửi yêu cầu báo giá</h2>
          <div className="w-16 h-1 bg-brand mt-2 mb-6" />
          <form onSubmit={onSubmit} className="space-y-4">
            <Input name="name" placeholder="Họ và tên *" required maxLength={100} />
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="phone" placeholder="Số điện thoại *" required maxLength={20} />
              <Input name="email" type="email" placeholder="Email" maxLength={120} />
            </div>
            <Input name="subject" placeholder="Sản phẩm / Dịch vụ quan tâm" maxLength={150} />
            <Textarea name="message" placeholder="Nội dung yêu cầu *" rows={5} required maxLength={1500} />
            <Button type="submit" disabled={loading} className="w-full bg-brand hover:bg-brand-dark text-brand-foreground font-bold uppercase">
              {loading ? "Đang gửi..." : "Gửi yêu cầu"}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};
export default Page;