import { Link } from "react-router-dom";
import { useAuth } from "../hooks/user";

export default function BucketListItem({ activities }) {
  const { user } = useAuth();
  const { id, title, name, profileId, created } = activities;
  const isOwner = user.id === profileId;
  const date = new Date(created);
  const action = isOwner ? 'edit' : 'copy';

  return (
    <div>
      <span>{date.toLocaleDateString()}</span>
      <Link to={`/bucketLists/${id}`}>
        {title}
      </Link>

      <span>{isOwner ? 'you' : name}</span>

      <span>
        <Link to={`/bucketLists/${id}/${action}`}>
          {action}
        </Link>
      </span>
    </div>
  )
}