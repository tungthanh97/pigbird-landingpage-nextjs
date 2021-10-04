import Image from 'next/image';
import logo from '@assets/img/logo.png';
import logoName from '@assets/img/logo-name.png';

function Header() {
  return (
    <header>
      <div className='flex flex-row items-center justify-center bg-gray-100 h-1/6'>
        <Image
          src={logo}
          alt='logo'
          objectFit='contain'
          height='80'
          width='60'
        />
        <Image
          src={logoName}
          alt='logo name'
          objectFit='contain'
          height='30'
          width='150'
        />
      </div>
    </header>
  );
}

export default Header;
