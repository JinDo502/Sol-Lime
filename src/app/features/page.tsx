import FAQ from '@/components/FeaturesComponents/FAQ';
import UseCases from '@/components/FeaturesComponents/UseCases';
import CTA from '@/components/HomeComponents/CTA';

const Features = () => {
  return (
    <div className='w-screen'>
      <UseCases />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Features;
