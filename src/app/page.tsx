import { Container } from "@/components/templates/container";
import { HeaderHome } from "@/modules/home/header";
import { HeroSection } from "@/modules/home/hero";
import { FeatureSection } from "@/modules/home/feature";
import { HomeCta } from "@/modules/home/cta";
import { Footer } from "@/modules/home/footer";

export default function Home() {
  return (
    <Container>
      <HeaderHome />

      <HeroSection />

      <FeatureSection />

      <HomeCta />

      <Footer />
    </Container>
  );
}
