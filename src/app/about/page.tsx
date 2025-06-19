import CTA from '@/components/HomeComponents/CTA';
import AboutComponent from '@/components/AboutComponents/About';
import Features from '@/components/AboutComponents/Features';
import Team from '@/components/AboutComponents/Team';
import Reviews from '@/components/AboutComponents/Reviews';
import Brands from '@/components/AboutComponents/Brands';

const About = () => {
  return (
    <div className='w-screen'>
      <AboutComponent />
      <Features />
      <Team />
      <Reviews />
      <Brands />
      <CTA />
    </div>
  );
};

export default About;
