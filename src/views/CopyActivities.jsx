import { Link, useParams, useHistory } from 'react-router-dom';
import { useBucketList, useActivity } from '../hooks/bucketlist';
import BucketListForm from '../components/BucketListForm';

export default function CopyActivities() {
  const history = useHistory();
  const { id } = useParams();
  const { activities } = useActivity(id);
  const { add } = useBucketList();

  if (!activities) return null;

  async function handleSubmit(edit) {
    await add(edit);
    history.replace('/bucketList');
  };

  return (
    <div>
      <Link to='/bucketList'>
        View Activities!!
      </Link>

      <BucketListForm activities={activities} onSubmit={handleSubmit} />
    </div>
  )
}