import Reviews from '@/components/AboutComponents/Reviews';
import CTA from '@/components/HomeComponents/CTA';
import UseCaseDetails from '@/components/HowToUseComponents/UseCaseDetails';

const HowToUse = () => {
  return (
    <div className='w-screen'>
      <UseCaseDetails />
      <Reviews />
      <CTA />
    </div>
  );
};

export default HowToUse;
