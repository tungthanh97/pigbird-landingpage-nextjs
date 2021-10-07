import {
  Seo,
  BodyHeader,
  Header,
  FeatureIntro,
  SingleFeatureCard,
} from '@/components/index';
import {} from '@/components/SingleFeatureCard';
import { FeatureData } from 'constants/FeatureData';

export default function Home() {
  return (
    <>
      <Seo templateTitle='Home' />
      <Header />

      <main className='container min-w-full min-h-screen bg-top bg-no-repeat bg-contain bg-hero-banner'>
        <div className='grid max-w-screen-lg min-h-full grid-cols-2 gap-5 px-3 mx-auto'>
          <BodyHeader />
          <FeatureIntro data={FeatureData[0].intro} />
          <SingleFeatureCard data={FeatureData[0].cardMeta[0]} />
        </div>
      </main>
    </>
  );
}
