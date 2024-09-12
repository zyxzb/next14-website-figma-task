'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import EmblaCarousel from './EmblaCarousel';
import useGallery from '../hooks/useGallery';

const Gallery = () => {
  const { gallery, currentType } = useGallery();

  return (
    <EmblaCarousel>
      {gallery.map((image, index) => (
        <motion.div
          initial={{ opacity: 0.5, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.75,
            delay: index / 10,
          }}
          key={`${currentType}-${index}`}
          className='relative aspect-[600/446] min-w-[320px] select-none md:min-w-[400px] lg:min-w-[600px]'
        >
          <Image
            src={image.image}
            alt={image.alt}
            title={image.alt}
            className='h-full w-full object-cover'
            placeholder='blur'
            width={446}
            height={600}
          />
        </motion.div>
      ))}
    </EmblaCarousel>
  );
};

export default Gallery;
