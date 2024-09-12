'use client';

import useGallery from '../hooks/useGallery';
import { cn } from '../utils/cn';

type GalleryButtonProps = {
  children: React.ReactNode;
  type: 'osobowe' | 'dostawcze';
};

const GalleryButton = ({ children, type }: GalleryButtonProps) => {
  const { setGallery, currentType } = useGallery();

  return (
    <button
      onClick={() => setGallery(type)}
      className={cn({
        'border-b-[1px] border-blue text-blue': currentType === type,
      })}
    >
      {children}
    </button>
  );
};

export default GalleryButton;
