import GalleryButton from './GalleryButton';

const HeadersBlockButtons = () => {
  return (
    <div className='flex flex-wrap gap-4 font-semibold leading-[22.5px] tracking-[-0.02em] md:gap-12'>
      <GalleryButton type='osobowe'>Samochody Osobowe</GalleryButton>
      <GalleryButton type='dostawcze'>Samochody Dostawcze</GalleryButton>
    </div>
  );
};

export default HeadersBlockButtons;
