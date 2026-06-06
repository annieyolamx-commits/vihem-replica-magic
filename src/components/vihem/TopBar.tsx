import { Facebook, Mail, Phone } from "lucide-react";

const TopBar = () => (
  <div className="bg-black text-foreground/70 text-[11px] border-b border-border/40">
    <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-2 py-2 font-condensed tracking-widest uppercase">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
        <a href="tel:0944177362" className="flex items-center gap-1.5 hover:text-brand transition-colors">
          <Phone className="h-3 w-3 text-brand" /> 0944 177 362
        </a>
        <span className="hidden md:inline text-border">|</span>
        <a href="mailto:vihemdanang@gmail.com" className="flex items-center gap-1.5 hover:text-brand transition-colors">
          <Mail className="h-3 w-3 text-brand" /> vihemdanang@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-foreground/50">Thành lập 1978 · Đà Nẵng · VN</span>
        <a href="#" aria-label="Facebook" className="hover:text-brand transition-colors"><Facebook className="h-3.5 w-3.5" /></a>
      </div>
    </div>
  </div>
);

export default TopBar;