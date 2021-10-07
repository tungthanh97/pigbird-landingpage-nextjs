import { Button } from '@/components/Button';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 37rem;
  color: ${(props) => (props.isLightTheme ? 'black' : 'white')};
  width: 100%;
  transition: background-size 0.8s;
  transform-origin: right bottom;
  background-size: 100% 100%;
  &:hover {
    background-size: 110% 110%;
    box-shadow: 0rem 0rem 1rem #edeae5;
  }
  &:hover .animated-underline {
    background-size: 0 100%, 100% 100%;
    color: white;
  }
`;

export function DoubleFeatureCard({ data }) {
  const { image, title, subtitle, isLightTheme } = data;

  return (
    <Background
      isLightTheme={isLightTheme}
      image={image}
      className='flex flex-col justify-between p-8 overflow-hidden text-left bg-center bg-no-repeat bg-cover cursor-pointer rounded-3xl'
    >
      <p className='mb-5 text-4xl font-bold'>{subtitle}</p>
      <div>
        <Button className='px-3 py-1 text-xl bg-transparent text-primary rounded-3xl'>
          {title}
        </Button>
      </div>
    </Background>
  );
}
