import { Friend } from "../utils/types"
import FriendAvatar from './FriendAvatar'
interface Props {
    friend: Friend
}

const FriendName = ({friend}: Props) => {
    return (
      <div
        className='flex items-center w-full gap-3'
      >
        <FriendAvatar id={friend.id}/>
        <span
          className='flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold'
        >
          {friend.name}
        </span>
      </div>
    );
}

export default FriendName