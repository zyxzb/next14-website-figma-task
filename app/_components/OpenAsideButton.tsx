'use client';

import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';

import useAsideStore from '../hooks/useAside';

const OpenAsideButton = () => {
  const { openAside } = useAsideStore();

  return (
    <button
      className='flex items-center'
      aria-label='otwórz menu'
      onClick={openAside}
    >
      <HiOutlineBars3CenterLeft size={30} />
    </button>
  );
};

export default OpenAsideButton;
