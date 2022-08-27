import { forwardRef } from 'react';
import Input from './Input';

interface Props {
  className?: string;
  placeholder?: string;
  value: string | undefined;
  onEnter?: (value: string) => any;
  onChange?: (value: string) => any;
  onKey?: (key: string) => any;
}

const InputAmount = forwardRef<HTMLInputElement, Props>(
  ({ onChange, value, ...rest }, ref) => {
    return (
      <Input
        ref={ref}
        onChange={(val) => onChange && onChange(val)}
        value={value}
        type='number'
        {...rest}
      />
    );
  }
);

export default InputAmount;
