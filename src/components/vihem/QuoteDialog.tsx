import { useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const COMPANY_EMAIL = "vihemdanang@gmail.com";
const COMPANY_ZALO = "0944177362";
const ZALO_URL = `https://zalo.me/${COMPANY_ZALO}`;

type Channel = "menu" | "email" | "zalo";

interface Props {
  productName?: string;
  trigger: ReactNode;
}

const QuoteDialog = ({ productName, trigger }: Props) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Channel>("menu");

  const reset = () => {
    setStep("menu");
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !phone) {
      toast.error("Vui lòng nhập họ tên và số điện thoại.");
      return;
    }
    const subject = `[Yêu cầu báo giá] ${productName || "Sản phẩm Vihem 1"}`;
    const body = [
      `Sản phẩm quan tâm: ${productName || "(chưa chọn)"}`,
      "",
      `Họ tên: ${name}`,
      `Số điện thoại: ${phone}`,
      `Email: ${email}`,
      "",
      "Nội dung:",
      message || "(không có)",
    ].join("\n");
    const mailto = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    toast.success("Đang mở email để gửi báo giá...");
    setOpen(false);
    setTimeout(reset, 300);
  };

  const handleZaloSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    if (!name || !phone) {
      toast.error("Vui lòng nhập họ tên và số điện thoại.");
      return;
    }
    window.open(ZALO_URL, "_blank", "noopener,noreferrer");
    toast.success("Đang chuyển sang Zalo của Vihem 1...");
    setOpen(false);
    setTimeout(reset, 300);
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) setTimeout(reset, 200); }}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {step === "menu" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-brand uppercase">Nhận báo giá</DialogTitle>
              <DialogDescription>
                {productName ? <>Sản phẩm: <strong>{productName}</strong>. </> : null}
                Bạn muốn nhận báo giá qua kênh nào?
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-3 mt-2">
              <button
                type="button"
                onClick={() => setStep("email")}
                className="flex items-center gap-3 border-2 border-border hover:border-brand rounded-lg p-4 text-left transition-colors"
              >
                <Mail className="h-6 w-6 text-brand" />
                <div>
                  <div className="font-semibold">Nhận qua Email</div>
                  <div className="text-xs text-muted-foreground">Gửi yêu cầu đến {COMPANY_EMAIL}</div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setStep("zalo")}
                className="flex items-center gap-3 border-2 border-border hover:border-brand rounded-lg p-4 text-left transition-colors"
              >
                <MessageCircle className="h-6 w-6 text-brand" />
                <div>
                  <div className="font-semibold">Nhận qua Zalo OA</div>
                  <div className="text-xs text-muted-foreground">Chat trực tiếp Zalo {COMPANY_ZALO}</div>
                </div>
              </button>
            </div>
          </>
        )}

        {step === "email" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-brand uppercase flex items-center gap-2">
                <button type="button" onClick={() => setStep("menu")} className="text-muted-foreground hover:text-brand"><ArrowLeft className="h-4 w-4" /></button>
                Báo giá qua Email
              </DialogTitle>
              <DialogDescription>Để lại thông tin, chúng tôi sẽ gửi báo giá trong 24h.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <Input name="name" placeholder="Họ và tên *" required maxLength={100} />
              <Input name="phone" placeholder="Số điện thoại *" required maxLength={20} />
              <Input name="email" type="email" placeholder="Email của bạn" maxLength={120} />
              <Textarea name="message" placeholder="Số lượng / yêu cầu kỹ thuật" rows={3} maxLength={1000} />
              <Button type="submit" className="w-full bg-brand hover:bg-brand-dark text-brand-foreground font-bold uppercase">
                Gửi yêu cầu
              </Button>
            </form>
          </>
        )}

        {step === "zalo" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-brand uppercase flex items-center gap-2">
                <button type="button" onClick={() => setStep("menu")} className="text-muted-foreground hover:text-brand"><ArrowLeft className="h-4 w-4" /></button>
                Báo giá qua Zalo
              </DialogTitle>
              <DialogDescription>Để lại thông tin, chúng tôi sẽ chủ động liên hệ Zalo của bạn.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleZaloSubmit} className="space-y-3">
              <Input name="name" placeholder="Họ và tên *" required maxLength={100} />
              <Input name="phone" placeholder="Số Zalo / điện thoại *" required maxLength={20} />
              <Textarea name="message" placeholder="Số lượng / yêu cầu kỹ thuật" rows={3} maxLength={1000} />
              <Button type="submit" className="w-full bg-brand hover:bg-brand-dark text-brand-foreground font-bold uppercase">
                Chat Zalo ngay
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDialog;