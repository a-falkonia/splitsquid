import { forwardRef, useState } from 'react';
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
    const [hangingDot, setHangingDot] = useState<boolean>(false);

    const handleOnChange = (value: string) => {
      const endsWithADot = value.match(/.*\.$/) ? true : false;
      setHangingDot(endsWithADot);

      const number = Number.isNaN(parseFloat(value)) ? 0 : parseFloat(value);
      onChange && onChange(number.toString());
    };

    return (
      <Input
        ref={ref}
        onChange={handleOnChange}
        value={hangingDot ? value + '.' : value}
        {...rest}
      />
    );
  }
);

export default InputAmount;
