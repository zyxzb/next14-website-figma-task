import { cn } from '../utils/cn';

type ButtonVariant = 'blue' | 'transparent';

type ButtonProps = {
  children: string;
  variant: ButtonVariant;
};

const Button = ({ children, variant }: ButtonProps) => {
  return (
    <button
      className={cn(
        {
          'bg-blue text-grayLight': variant === 'blue',
          'border-[1px] border-blue bg-transparent text-blue':
            variant === 'transparent',
        },
        'inline-block cursor-pointer rounded-button px-buttons-lr py-buttons-tb text-[15px] font-semibold leading-[22.5px] tracking-[-0.02em] transition-transform hover:scale-105',
      )}
    >
      {children}
    </button>
  );
};

export default Button;
