import { Button } from './Button';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 33rem;
  transition: all 0.8s;
  transform-origin: right bottom;
  &:hover {
    transform: scale(1.06);
  }
  &:hover ~ .animated-underline {
    background-size: 0 100%, 100% 100%;
  }
`;

export function SingleFeatureCard({ data }) {
  const { image, title, subtitle, description } = data;

  return (
    <div className='relative col-span-2 my-20 overflow-hidden text-left text-white cursor-pointer rounded-3xl'>
      <Background
        image={image}
        className='w-full h-full bg-center bg-no-repeat bg-cover'
      />
      <div className='absolute w-5/12 left-8 bottom-48'>
        <p className='mb-5 text-5xl font-bold break-words'>{subtitle}</p>
        <p className='text-xl font-semibold'>{description}</p>
      </div>
      <Button className='absolute px-4 py-1 text-xl bg-transparent rounded-3xl left-5 bottom-8'>
        {title}
      </Button>
    </div>
  );
}
