import { Friend } from "../utils/types"
import FriendAvatar from './FriendAvatar'
interface Props {
  friend: Friend
  small?: boolean
}

const FriendName = ({ friend, small }: Props) => {
  
    return (
      <div
        className={`flex items-center ${small ? 'gap-1' : 'w-full gap-3'}`}
        style={small ? { maxWidth: '40%' } : {}}
      >
        <FriendAvatar small={small} id={friend.id} />
        <span
          className={`flex-1 overflow-hidden text-ellipsis whitespace-nowrap ${
            small ? 'text-md' : 'text-xl font-semibold'
          }`}
        >
          {friend.name}
        </span>
      </div>
    );
}

export default FriendName