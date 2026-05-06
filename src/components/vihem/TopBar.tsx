import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground text-xs">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-2 py-2">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <a href="tel:0944177362" className="flex items-center gap-1 hover:underline">
          <Phone className="h-3 w-3" /> 0944 177 362 (Quạt CN, bơm, động cơ); 0944 177 321 (Ống gió, van gió)
        </a>
        <span className="hidden md:inline">|</span>
        <a href="mailto:vihemdanang@gmail.com" className="flex items-center gap-1 hover:underline">
          <Mail className="h-3 w-3" /> vihemdanang@gmail.com / Ecowind.duct@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a href="#" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
        <a href="#" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
        <a href="#" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
      </div>
    </div>
  </div>
);

export default TopBar;