import { getEmojiById } from '../utils/utils';

interface Props {
  id: number;
}
const FriendAvatar = ({ id }: Props) => {
  const emoji = getEmojiById(id);
  return <div className='h-8 w-8 text-2xl'>{emoji}</div>;
};

export default FriendAvatar;
