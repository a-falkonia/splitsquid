import { forwardRef, HTMLInputTypeAttribute } from 'react';

interface Props {
  type?: HTMLInputTypeAttribute;
  className?: string;
  placeholder?: string;
  value: string | number | undefined;
  min?: string;
  max?: string;
  maxLength?: number;
  pattern?: string;
  step?: string;

  onChange?: (value: string) => any;

}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ value, className, onChange, ...rest }, ref) => {
    return (
      <div
        className={`relative flex h-10 items-center gap-2 rounded bg-gray-200 ${className}`}
      >
        <input
          ref={ref}
          autoComplete='off'
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          className={`
            h-full w-full
            px-3
            rounded
            border-2
            border-gray-200
            bg-transparent
            outline-none
            focus:border-slate-300
          `}
          {...rest}
        />
      </div>
    );
  }
);

export default Input;
