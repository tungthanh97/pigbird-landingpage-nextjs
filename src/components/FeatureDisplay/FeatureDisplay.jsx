import {
  FeatureIntro,
  SingleFeatureCard,
  DoubleFeatureCard,
} from './components';

export function FeatureDisplay({ featureData }) {
  return (
    <>
      <FeatureIntro data={featureData.intro} />
      {featureData.cardMeta.map((card) => {
        const isBigFeatureCard = Boolean(card.description.length);
        if (isBigFeatureCard) {
          return <SingleFeatureCard data={card} />;
        } else {
          return <DoubleFeatureCard data={card} />;
        }
      })}
    </>
  );
}
