import Link from 'next/link';
import React from 'react';

import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <footer className='border-t-[1px] border-white bg-grayDark py-6 text-white'>
      <Wrapper maxWidth='max-w-container'>
        <div className='flex justify-between'>
          <p className='font-robotoCondensed font-bold leading-6'>Car Spot</p>
          <Link href='#' className='leading-6 underline'>
            Polityka prywatności
          </Link>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
