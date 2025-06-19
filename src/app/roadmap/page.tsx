import CTA from '@/components/HomeComponents/CTA';
import FAQ from '@/components/HomeComponents/FAQ';
import Pricing from '@/components/RoadmapComponents/Pricing';

const Roadmap = () => {
  return (
    <div className='w-screen'>
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Roadmap;
