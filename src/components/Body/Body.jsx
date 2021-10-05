import BodyHeader from './BodyHeader';

export function Body() {
  return (
    <div className='container min-w-full min-h-screen bg-top bg-no-repeat bg-contain bg-hero-banner'>
      <div className='grid content-center justify-center grid-cols-2 gap-5 mx-auto h-body w-body'>
        <BodyHeader />
      </div>
    </div>
  );
}
