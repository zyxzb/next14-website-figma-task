'use client';

import Link from 'next/link';

import useAside from '../hooks/useAside';
import { cn } from '../utils/cn';

type NavLinksProps = {
  direction: 'horizontal' | 'vertical';
  mobile?: boolean;
};

const NavLinks = ({ direction, mobile }: NavLinksProps) => {
  const { closeAside } = useAside();

  const handleClick = () => {
    if (mobile) {
      closeAside();
    }
  };

  return (
    <ul
      className={cn('flex gap-6', {
        'flex-row': direction === 'horizontal',
        'flex-col': direction === 'vertical',
      })}
    >
      <li>
        <Link
          href='#'
          className='underline-offset-2 hover:underline'
          onClick={handleClick}
        >
          Galeria zdjęć
        </Link>
      </li>
      <li>
        <Link
          href='#'
          className='underline-offset-2 hover:underline'
          onClick={handleClick}
        >
          FaQ
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
