'use client';

import Image from 'next/image';
import React from 'react';
import { HiXMark } from 'react-icons/hi2';

import NavLinks from './NavLinks';
import logo from '../../public/logo.png';
import useAside from '../hooks/useAside';

const Aside = () => {
  const { closeAside, open } = useAside();

  return (
    <div
      className={`fixed inset-0 z-20 bg-black/50 p-4 ${open ? 'translate-x-0' : '-translate-x-full delay-300'} transition-transform duration-150`}
      onClick={closeAside}
    >
      <aside
        className={`fixed left-0 top-0 z-30 min-h-screen w-[320px] bg-white p-4 ${open ? 'translate-x-0 delay-300' : '-translate-x-full'} transition-transform`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='mb-8 flex h-[47px] items-center justify-between'>
          <Image src={logo} alt='logo' />
          <button onClick={closeAside} aria-label='zamknij menu'>
            <HiXMark size={30} />
          </button>
        </div>
        <nav>
          <NavLinks direction='vertical' mobile={true} />
        </nav>
      </aside>
    </div>
  );
};

export default Aside;
