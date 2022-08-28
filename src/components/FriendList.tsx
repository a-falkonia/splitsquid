import { Friend } from '../utils/types';
import FriendCard from './FriendCard';
import Card from './Card';
import { useFriendsState } from '../hooks/useFriendsState';
import Total from './Total';
import { getUniqueId } from '../utils/utils';

const initfriends: Friend[] = [{ id: getUniqueId([]), name: 'Anna', contribution: 100 }];

const FriendList = () => {
  const {
    friends,
    friendCardOpen,
    toggleFriendCardOpen,
    addFriend,
    updateFriend,
    removeFriend,
    expenses
  } = useFriendsState(initfriends);

  return (
    <>
      <section className='flex flex-col gap-6'>
        <ul className='flex flex-col gap-6'>
          {friends.map((person) => (
            <FriendCard
              key={person.id}
              friend={person}
              isOpen={person.id === friendCardOpen}
              onUpdate={updateFriend}
              onRemove={removeFriend}
              onClick={toggleFriendCardOpen}
            />
          ))}
        </ul>

        <button
          className='flex w-32 justify-center self-center'
          onClick={addFriend}
        >
          {!friendCardOpen && (
            <Card className='flex justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
              </svg>
            </Card>
          )}
        </button>
      </section>
      <section>
        {!friendCardOpen && expenses && <Total expenses={expenses} />}
      </section>
    </>
  );
};

export default FriendList;
