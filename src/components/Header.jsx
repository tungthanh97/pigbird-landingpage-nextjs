import Image from 'next/image';

export function Header() {
  return (
    <header>
      <div className='flex flex-row items-center justify-center bg-gray-100 h-1/6'>
        <Image
          src='/img/logo.png'
          alt='logo'
          objectFit='contain'
          height='80'
          width='60'
        />
        <Image
          src='/img/logo-name.png'
          alt='logo name'
          objectFit='contain'
          height='30'
          width='150'
        />
      </div>
    </header>
  );
}
