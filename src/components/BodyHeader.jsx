import { Button } from './Button';

export function BodyHeader() {
  return (
    <div className='flex flex-col justify-center col-span-2 h-body '>
      <div className='grid content-center w-2/3 gap-5 mx-auto text-center grid-rows-bodyHeader '>
        <div className='text-center'>
          <h1 className=' text-8xl'>One app, all things money</h1>
        </div>
        <div className='px-6 text-2xl text-center'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim ad
            minim veniam, quis nostrud exercitation u
          </p>
        </div>
        <div className='flex flex-wrap justify-center py-2 mx-auto h-9 w-29'>
          <Button className='px-3 py-2 text-sm text-white '>Get Started</Button>
        </div>
      </div>
    </div>
  );
}
