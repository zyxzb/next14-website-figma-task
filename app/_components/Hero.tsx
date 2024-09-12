import Image from 'next/image';
import React from 'react';

import Button from './Button';
import Wrapper from './Wrapper';
import cars from '../../public/cars.png';

// fix hero and paddings

const Hero = () => {
  return (
    <section className='py-10 lg:py-[120px]'>
      <div className='relative mx-auto max-w-[1440px]'>
        <Wrapper maxWidth='max-w-container'>
          <div className='flex flex-col gap-10 md:gap-12 lg:mb-40'>
            <div>
              <h1 className='text-left font-bebas text-[76.29px] uppercase leading-[83.92px] tracking-[-0.04em]'>
                Sprzedajemy samochody <br /> z europy
              </h1>
            </div>
            <div className='flex flex-col gap-10'>
              <p className='font-robotoCondensed leading-6'>
                Kup komfortowy pojazd, aby każda podróż <br /> była wyjątkowym
                przeżyciem.
              </p>
              <div className='relative left-layout-padding lg:hidden'>
                <Image src={cars} alt='samochody z europy' priority={true} />
              </div>
              <div className='absolute right-0 hidden lg:block'>
                <Image src={cars} alt='samochody z europy' priority={true} />
              </div>
            </div>
            <div className='z-10 flex flex-wrap gap-6'>
              <Button variant='blue'>Zobacz zdjęcia</Button>
              <Button variant='transparent'>Zadzwoń do nas</Button>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className='absolute -top-[50px] right-0 -z-10 h-[668.05px] w-[671.83px] bg-hero-pattern bg-no-repeat lg:-top-[12.83px] lg:left-1/2 lg:right-auto' />
    </section>
  );
};

export default Hero;
