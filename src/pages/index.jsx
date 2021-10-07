import { Seo, BodyHeader, Header, FeatureDisplay } from '@/components/index';
import { FeatureData } from 'constants/FeatureData';

export default function Home() {
  return (
    <>
      <Seo templateTitle='Home' />
      <Header />

      <main className='container min-w-full min-h-screen bg-top bg-no-repeat bg-contain bg-hero-banner'>
        <div className='grid max-w-screen-lg min-h-full grid-cols-2 gap-5 px-3 mx-auto'>
          <BodyHeader />
          {FeatureData.map((featureData, index) => (
            <FeatureDisplay key={index} featureData={featureData} />
          ))}
        </div>
      </main>
    </>
  );
}
