const roadmap = [
  {
    title: 'Q1 2025',
    description: 'Project Launch',
    features: ['Pump.fun platform token launch', 'Basic social features online', 'Community building initiation', 'Whitepaper release'],
  },
  {
    title: 'Q2 2025',
    description: 'Feature Enhancement',
    features: ['Meme creation tools launch', 'NFT minting integration', 'Mobile app release', 'Gamification mechanism upgrade'],
  },
  {
    title: 'Q3 2025',
    description: 'Ecosystem Expansion',
    features: ['Full DeFi functionality integration', 'Community governance system launch', 'Partnership ecosystem development', 'AI functionality upgrade'],
  },
  {
    title: 'Q4 2025',
    description: 'Globalization',
    features: ['Cross-chain bridge functionality', 'International multi-language support', 'Global market expansion', 'Enterprise-level features launch'],
  },
];

const Pricing = () => {
  return (
    <section className='pt-20 pb-10 px-8 md:px-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center gap-4 mb-10'>
          <p className='text-[var(--primary)]'>Roadmap</p>
          <h1 className=' text-3xl md:text-4xl font-bold mb-5 text-center'>
            Our Goals <br />
            Our Plans
          </h1>
          <p className='text-center text-gray-500 text-sm'>
            Understand <span className='text-[var(--primary)]'>Sol Lime</span> roadmap and start involve today!
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
          {roadmap.map((item, index) => (
            <div key={index} className='col-md-6 col-lg-4 border border-[var(--divider)] rounded-lg p-6'>
              <h3 className='text-[var(--primary)] text-2xl md:text-3xl font-bold mb-0'>{item?.title}</h3>
              <p className=' lead fw-normal mt-4 mb-0'>{item?.description}</p>
              <ul className='list-disc list-outside text-gray-500 text-sm mt-4'>
                {item?.features.map((feature) => (
                  <li className='my-2 ml-4' key={feature}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
