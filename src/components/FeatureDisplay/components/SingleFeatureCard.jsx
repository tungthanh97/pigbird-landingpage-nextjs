import { Button } from '@/components/Button';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 33rem;
  width: 100%;
  transition: background-size 0.8s;
  transform-origin: right bottom;
  background-size: 100% 100%;
  &:hover {
    background-size: 110% 110%;
  }
  &:hover .animated-underline {
    background-size: 0 100%, 100% 100%;
  }
`;

export function SingleFeatureCard({ data }) {
  const { image, title, subtitle, description } = data;

  return (
    <Background
      image={image}
      className='relative col-span-2 mt-20 overflow-hidden text-left text-white bg-center bg-no-repeat bg-cover cursor-pointer rounded-3xl'
    >
      <div className='absolute w-5/12 left-8 bottom-48'>
        <p className='mb-5 text-5xl font-bold '>{subtitle}</p>
        <p className='text-xl font-semibold'>{description}</p>
      </div>
      <Button className='absolute px-4 py-1 text-xl bg-transparent rounded-3xl left-5 bottom-8'>
        {title}
      </Button>
    </Background>
  );
}
