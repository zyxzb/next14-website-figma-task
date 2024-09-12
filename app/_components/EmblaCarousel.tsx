import useEmblaCarousel from 'embla-carousel-react';

import { DotButton, useDotButton } from './EmblaCarouselDotButton';

type EmblaCarouselType = {
  children: React.ReactNode;
};

const EmblaCarousel = ({ children }: EmblaCarouselType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section>
      <div className='mx-auto max-w-[1440px] py-10 pl-layout-padding md:py-20 xl:pl-20'>
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex touch-pinch-zoom gap-8 lg:gap-10 xl:gap-16'>
            {children}
          </div>
        </div>
        <div className='mt-10 flex items-center justify-center'>
          <div className='embla__dots md:pr-20'>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? 'embla__dot--selected' : '',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
