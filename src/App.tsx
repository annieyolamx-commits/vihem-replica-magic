import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import QuatCongNghiep from "./pages/QuatCongNghiep.tsx";
import DongCoBom from "./pages/DongCoBom.tsx";
import HeThongThongGio from "./pages/HeThongThongGio.tsx";
import DichVu from "./pages/DichVu.tsx";
import TinTuc from "./pages/TinTuc.tsx";
import NewsDetail from "./pages/NewsDetail.tsx";
import LienHe from "./pages/LienHe.tsx";
import CategoryDetail from "./pages/CategoryDetail.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import Catalogue2026 from "./pages/Catalogue2026.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quat-cong-nghiep" element={<QuatCongNghiep />} />
          <Route path="/dong-co-bom" element={<DongCoBom />} />
          <Route path="/he-thong-thong-gio" element={<HeThongThongGio />} />
          <Route path="/dich-vu" element={<DichVu />} />
          <Route path="/tin-tuc" element={<TinTuc />} />
          <Route path="/tin-tuc/:slug" element={<NewsDetail />} />
          <Route path="/lien-he" element={<LienHe />} />
          <Route path="/danh-muc/:slug" element={<CategoryDetail />} />
          <Route path="/san-pham/:slug" element={<ProductDetail />} />
          <Route path="/catalogue-2026" element={<Catalogue2026 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
