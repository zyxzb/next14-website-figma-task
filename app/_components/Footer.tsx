import Link from 'next/link';
import React from 'react';

import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <footer className='border-t-[1px] border-white bg-grayDark py-6 text-white'>
      <Wrapper maxWidth='max-w-container'>
        <div className='flex justify-between'>
          <p className='font-robotoCondensed font-bold leading-[24px]'>
            Car Spot
          </p>
          <Link href='#' className='leading-[24px] underline'>
            Polityka prywatności
          </Link>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
