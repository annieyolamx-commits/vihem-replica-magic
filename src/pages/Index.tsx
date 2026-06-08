import Layout from "@/components/vihem/Layout";
import HeroIndustrial from "@/components/vihem/HeroIndustrial";
import Ticker from "@/components/vihem/Ticker";
import AboutIndustrial from "@/components/vihem/AboutIndustrial";
import ParallaxBand from "@/components/vihem/ParallaxBand";
import ProductsIndustrial from "@/components/vihem/ProductsIndustrial";
import Achievements from "@/components/vihem/Achievements";
import Industries from "@/components/vihem/Industries";
import FactoryTour from "@/components/vihem/FactoryTour";
import ContactCTA from "@/components/vihem/ContactCTA";

const Index = () => (
  <Layout>
    <HeroIndustrial />
    <Ticker />
    <AboutIndustrial />
    <ParallaxBand />
    <ProductsIndustrial />
    <Achievements />
    <Industries />
    <FactoryTour />
    <ContactCTA />
  </Layout>
);

export default Index;
