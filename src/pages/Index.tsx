import Layout from "@/components/vihem/Layout";
import Hero from "@/components/vihem/Hero";
import About from "@/components/vihem/About";
import Categories from "@/components/vihem/Categories";
import ProductTabs from "@/components/vihem/ProductTabs";
import News from "@/components/vihem/News";
import Partners from "@/components/vihem/Partners";

const Index = () => (
  <Layout>
    <Hero />
    <About />
    <Categories />
    <ProductTabs />
    <News />
    <Partners />
  </Layout>
);

export default Index;
