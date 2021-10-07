import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  min-height: 32.75rem;
  background-image: url(../../public/feature-background.jpg);
  background-repeat: repeat;
  background-size: auto;
  display: block;
  border: 1px solid #000;
`;

export function SingleFeatureCard({ data }) {
  const { image, title, subtitle, description } = data;

  return (
    <div style={{ backgroundImage: 'url(' + `${image}` }}>
      <p>{subtitle}</p>
      <p>{description}</p>
      <p>{title}</p>
    </div>
  );
}
