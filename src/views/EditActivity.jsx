import { Link, useParams, useHistory } from "react-router-dom";
import { useBucketList } from "../hooks/bucketlist";
import { useAuth } from "../hooks/user";
import BucketListForm from "../components/BucketListForm";

export default function EditActivity() {
  const history = useHistory();
  const { id } = useParams();
  const { activities, update } = useBucketList();
  const { user } = useAuth();

  if (!activities) return null;

  const isOwner = user.id === activities.profileId;
  const detail = `/bucketList/${id}`;

  if (!isOwner) {
    history.replace(detail);
    return null;
  }

  async function handleSubmit(edit) {
    await update(edit);
    history.push('/bucketList');
  };

  return (
    <div>
      <div>
        <Link to='/bucketList'>
          Bucket Lists
        </Link>
        {' / '}
        <Link to={detail}>
          {activities.title}
        </Link>
      </div>

      <BucketListForm
        activities={activities}
        onSubmit={handleSubmit}
      />
    </div>
  )
}