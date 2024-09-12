import Image from 'next/image';

import Wrapper from './Wrapper';
import arrow from '../../public/arrow.svg';

const Seo = () => {
  return (
    <section className='flex gap-20 bg-grayDark py-[88px] text-white'>
      <Wrapper maxWidth='max-w-container'>
        <div className='flex flex-col justify-between gap-16 md:flex-row'>
          <div className='flex flex-col gap-4'>
            <p className='font-bebas text-[25px] leading-[37.5px] tracking-[-0.03em]'>
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
              nulla commodo.
            </p>
            <div className='flex flex-col gap-6 font-robotoCondensed text-[14px]'>
              <p className='leading-[21px]'>
                Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
                Donec egestas, nisl vehicula feugiat ornare, diam turpis
                efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et
                [...]
              </p>
              <button className='flex max-w-max items-center gap-1.5 border-b-[1.5px] border-white pb-1.5'>
                Rozwiń <Image src={arrow} alt='arrow down' />
              </button>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <p className='font-bebas text-[25px] leading-[37.5px] tracking-[-0.03em]'>
              Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
              nulla commodo.
            </p>
            <div className='flex flex-col gap-6 font-robotoCondensed text-[14px]'>
              <p className='leading-[21px]'>
                Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
                Donec egestas, nisl vehicula feugiat ornare, diam turpis
                efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et
                [...]
              </p>
              <button className='flex max-w-max items-center gap-1.5 border-b-[1.5px] border-white pb-1.5'>
                Rozwiń <Image src={arrow} alt='arrow down' />
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Seo;
