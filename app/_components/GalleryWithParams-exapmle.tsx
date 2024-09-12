'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import EmblaCarousel from './EmblaCarousel';
import { osobowe, dostawcze } from '../data/cars';

const Gallery = () => {
  const searchParams = useSearchParams();
  const samochody = searchParams.get('samochody') ?? null;

  const initialGallery = useMemo(() => {
    if (samochody === 'dostawcze') return dostawcze;
    else return osobowe;
  }, [samochody]);

  const [gallery, setGallery] = useState(initialGallery);

  useEffect(() => {
    if (samochody === 'dostawcze') setGallery(dostawcze);
    else setGallery(osobowe);
  }, [samochody]);

  return (
    <EmblaCarousel>
      {gallery.map((image, index) => (
        <div
          key={index}
          className='relative aspect-[600/466] min-w-[320px] select-none md:min-w-[400px] lg:min-w-[600px]'
        >
          <Image
            src={image.image}
            alt={image.alt}
            title={image.alt}
            className='h-full w-full object-cover'
            placeholder='blur'
            width={466}
            height={600}
          />
        </div>
      ))}
    </EmblaCarousel>
  );
};

export default Gallery;
