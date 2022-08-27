import { Friend } from '../utils/types';

import trash from '../assets/trash.svg';
import check from '../assets/check.svg';

import Card from './Card';
import FriendName from './FriendName';
import Input from './Input';
import InputAmount from './InputAmount';
import Divider from './Divider';
import Button from './Button';
import { useRef, useState } from 'react';

interface Props {
  friend: Friend;
  isOpen: boolean;
  onUpdate: (id: number, name: string, contribution: number) => void;
  onRemove: (id: number) => void;
  onClick: (id: number) => void;
}

const FriendCard = ({ friend, isOpen, onUpdate, onRemove, onClick }: Props) => {
  const handleRemove = () => {
    onRemove(friend.id);
  };

  const handleUpdate = () => {
    const name = nameRef.current?.value ?? '';
    const contribution = Number(amountRef.current?.value);
    onUpdate(friend.id, name, contribution);
  };

  const handleClick = () => {
    onClick(friend.id);
  }

  const nameRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState<string>(friend.name);
  const [contribution, setContribution] = useState<number>(friend.contribution);

  const changeName = (value: string) => {
    setName(value);
  };

  const changeContribution = (amount: string) => {
    setContribution(Number(amount));
  };

  return (
    <li>
      <Card hoverable={!isOpen} onClick={handleClick}>
        {isOpen ? (
          <div className='flex flex-col items-stretch gap-3'>
            <div className='flex w-full items-center gap-3'>
              <Input
                ref={nameRef}
                className='flex-1'
                value={name}
                onChange={changeName}
                placeholder={friend.name}
                maxLength={24}
              />
              <InputAmount
                ref={amountRef}
                placeholder='0.00'
                className='w-1/3'
                onChange={changeContribution}
                value={contribution?.toString()}
              />
            </div>
            <Divider />
            <div className='flex w-full items-center gap-3'>
              <Button onClick={handleRemove}>
                <img src={trash} alt='trash' className='h-5 w-5' />
              </Button>
              <Button onClick={handleUpdate}>
                <img src={check} alt='check' className='h-5 w-5' />
              </Button>
            </div>
          </div>
        ) : (
          <div className='flex w-full items-center gap-3'>
            <FriendName friend={friend} />
            <span className='text-xl font-light'>{friend.contribution}</span>
          </div>
        )}
      </Card>
    </li>
  );
};
export default FriendCard;
