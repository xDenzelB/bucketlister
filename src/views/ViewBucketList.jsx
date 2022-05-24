import { Link, useParams, useHistory } from "react-router-dom";
import { useBucketList } from "../hooks/bucketlist";
import { useAuth } from "../hooks/user";
import BucketListDetail from "../components/BucketListDetail";

export default function ViewBucketList() {
  const history = useHistory();
  const { id } = useParams();
  const { activities, remove } = useBucketList(id);
  const { user } = useAuth();

  if (!activities) return null;

  const isOwner = user.id === activities.profileId;

  async function handleDelete() {
    if (!confirm('Would you like to delete?')) return;
    await remove();
    history.replace('/bucketList');
  };

  return (
    <div>
      <Link to='/bucketList'>
        View List
      </Link>

      <BucketListDetail
        activities={activities}
        isOwner={isOwner}
      />

      <div>
        {isOwner && <Link to={`/bucketList/${id}/edit`}>
        <button>Edit Activities</button>
        </Link>}
        {isOwner &&
          <p>
            <button onClick={handleDelete}>
              Delete Activity
          </button>
          </p>
        }
        {isOwner || <Link to={`/bucketList/${id}/copy`}>
          <p>
            <button>Copy</button>
        </p>
        </Link>}
      </div>
    </div>
  )
}