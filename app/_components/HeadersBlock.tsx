import HeadersBlockButtons from './HeadersBlockButtons';
import Wrapper from './Wrapper';

const HeadersBlock = () => {
  return (
    <section>
      <Wrapper
        maxWidth='max-w-container-md'
        extraStyles='pt-10 md:pt-20 ml-0 xl:mx-auto'
      >
        <div className='flex flex-col gap-6'>
          <div>
            <p className='font-robotoCondensed text-[21.5px] leading-[32.5px] text-blue'>
              Prezentacja firmy
            </p>
            <h2 className='font-bebas text-[40px] uppercase leading-[48px]'>
              Zobacz naszą galerie zdjęć
            </h2>
          </div>
          <HeadersBlockButtons />
        </div>
      </Wrapper>
    </section>
  );
};

export default HeadersBlock;
