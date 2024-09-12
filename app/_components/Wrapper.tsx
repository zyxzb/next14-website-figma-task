import { cn } from '@/app/utils/cn';

type WrapperProps = {
  children: React.ReactNode;
  maxWidth: 'max-w-container' | 'max-w-container-md';
  extraStyles?: string;
};

const Wrapper = ({ children, maxWidth, extraStyles }: WrapperProps) => {
  return (
    <div
      className={cn(
        `mx-auto px-layout-padding xl:px-0 ${maxWidth} ${extraStyles ?? ''}`,
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
