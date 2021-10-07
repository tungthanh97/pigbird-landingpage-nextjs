export function FeatureIntro({ data }) {
  const { title, subtitle, description } = data;
  return (
    <div className='col-span-2 px-20 my-20 text-center '>
      <p className='text-xl font-semibold text-gray-500'>{subtitle}</p>
      <p className='mb-3 text-6xl font-bold leading-tight '>{title}</p>
      <p className='text-xl font-medium leading-8'>{description}</p>
    </div>
  );
}
