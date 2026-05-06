import TopBar from "@/components/vihem/TopBar";
import Header from "@/components/vihem/Header";
import Hero from "@/components/vihem/Hero";
import About from "@/components/vihem/About";
import Categories from "@/components/vihem/Categories";
import ProductTabs from "@/components/vihem/ProductTabs";
import News from "@/components/vihem/News";
import Partners from "@/components/vihem/Partners";
import Footer from "@/components/vihem/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <TopBar />
    <Header />
    <Hero />
    <About />
    <Categories />
    <ProductTabs />
    <News />
    <Partners />
    <Footer />
  </div>
);

export default Index;
