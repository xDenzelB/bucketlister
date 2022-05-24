import { useHistory } from "react-router-dom";
import { useBucketList } from "../hooks/bucketlist";
import BucketListForm from "../components/BucketListForm";

export default function AddActivity() {
  const { add } = useBucketList();
  const history = useHistory();

  async function handleSubmit(activity) {
    await add(activity);
    history.replace('/bucketList');
  };

  return (

    <div>
      <h1>Add An Activity!</h1>

      <BucketListForm onSubmit={handleSubmit} />
    </div>
  )
}