import { Step as StepType} from '../utils/types'
import FriendName from './FriendName'
import { getFormattedAmount } from '../utils/utils';
import arrowRight from '../assets/arrow-right.svg'

interface Props {
  step: StepType;
}

export const Step = ({ step }: Props) => {
  const { index, from, to, amount } = step;

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center gap-2 md:gap-4'>
        <span
          className='text-md font-light text-slate-500'
          style={{ minWidth: 14 }}
        >
          {index}.
        </span>
        <FriendName small friend={from} />
        <img src={arrowRight} alt='right arrow' className='h-4 w-4' />
        <FriendName small friend={to} />
      </div>
      <span className='text-md font-light'>{getFormattedAmount(amount)}</span>
    </div>
  );
};
