import { StaticImageData } from 'next/image';
import { create } from 'zustand';

import { osobowe, dostawcze } from '../data/cars';

interface GalleryState {
  gallery: { image: StaticImageData; alt: string }[];
  currentType: 'osobowe' | 'dostawcze';
  setGallery: (type: 'osobowe' | 'dostawcze') => void;
}

const useGallery = create<GalleryState>((set) => ({
  gallery: osobowe,
  currentType: 'osobowe',
  setGallery: (type) => {
    set({
      gallery: type === 'dostawcze' ? dostawcze : osobowe,
      currentType: type,
    });
  },
}));

export default useGallery;
