import Hero from '@/components/HomeComponents/Hero';
import Features from '@/components/HomeComponents/Features';
import UseCases from '@/components/HomeComponents/UseCases';
import AppUsers from '@/components/HomeComponents/AppUsers';
import Reviews from '@/components/HomeComponents/Reviews';
import Pricing from '@/components/RoadmapComponents/Pricing';
import FAQ from '@/components/HomeComponents/FAQ';
import CTA from '@/components/HomeComponents/CTA';

export default function Home() {
  return (
    <div className='w-screen'>
      <Hero />
      <Features />
      <UseCases />
      <AppUsers />
      <Reviews />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
