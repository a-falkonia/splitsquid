import { getEmojiById } from '../utils/utils';

interface Props {
  id: number;
  small?: boolean
}
const FriendAvatar = ({ id, small }: Props) => {
  const emoji = getEmojiById(id);
  return <div className={`${small ? `text-md` : `text-2xl`}`}>{emoji}</div>;
};

export default FriendAvatar;
