'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const HeadersBlockButtons = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (name && value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const value = searchParams.get('samochody');

  return (
    <div className='flex flex-wrap gap-4 font-semibold leading-[22.5px] tracking-[-0.02em] md:gap-12'>
      <button
        onClick={() => createQueryString('samochody', 'osobowe')}
        className={
          value !== 'dostawcze' ? 'border-b-[1px] border-blue text-blue' : ''
        }
      >
        Samochody osobowe
      </button>
      <button
        onClick={() => createQueryString('samochody', 'dostawcze')}
        className={
          value === 'dostawcze' ? 'border-b-[1px] border-blue text-blue' : ''
        }
      >
        Samochody dostawcze
      </button>
    </div>
  );
};

export default HeadersBlockButtons;
