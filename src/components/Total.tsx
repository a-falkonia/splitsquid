import Card from './Card';
import Title from './Title';
import LightText from './LightText';
import Divider from './Divider';
import { getFormattedAmount } from '../utils/utils';
import { Expense } from '../utils/types';
import { Step } from './Step';

interface Props {
  expenses: Expense;
}

const Total = ({ expenses }: Props) => {
  return (
    <Card className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <Title>Total</Title>
          <span className='text-xl font-light'>
            {getFormattedAmount(expenses.amount)}
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <LightText>Each one pays</LightText>
          <LightText>{getFormattedAmount(expenses.average)}</LightText>
        </div>
      </div>
      <Divider />
        <LightText>Steps for distribution</LightText>
        {expenses.steps.map((step) => (
          <Step step={step} key={step.index} />
        ))}
    </Card>
  );
};

export default Total;
