import { Hero } from '@/components/home/Hero';
import { Presentation } from '@/components/home/Presentation';
import { Certifications } from '@/components/home/Certifications';
import { FeaturedFormations } from '@/components/home/FeaturedFormations';
import { LatestNews } from '@/components/home/LatestNews';
import { PartnersStrip } from '@/components/home/PartnersStrip';
import { InteractiveMap } from '@/components/home/InteractiveMap';
import { CallToAction } from '@/components/home/CallToAction';

export function Home() {
  return (
    <>
      <Hero />
      <Presentation />
      <Certifications />
      <FeaturedFormations />
      <LatestNews />
      <PartnersStrip />
      <InteractiveMap />
      <CallToAction />
    </>
  );
}
