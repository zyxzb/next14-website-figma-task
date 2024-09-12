import Image from 'next/image';
import Link from 'next/link';

import Button from './Button';
import NavLinks from './NavLinks';
import OpenAsideButton from './OpenAsideButton';
import Wrapper from './Wrapper';
import logo from '../../public/logo.png';

const Nav = () => {
  return (
    <header className='py-4'>
      <Wrapper maxWidth='max-w-container'>
        <div className='flex h-[47px] flex-1 items-center justify-between'>
          <div>
            <Link href='/' className='flex items-center'>
              <Image src={logo} alt='logo' />
            </Link>
          </div>

          <nav className='hidden lg:block'>
            <NavLinks direction='horizontal' />
          </nav>

          <div className='hidden lg:block'>
            <Button variant='blue'>Zadzwoń do nas</Button>
          </div>

          <div className='block lg:hidden'>
            <OpenAsideButton />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Nav;
