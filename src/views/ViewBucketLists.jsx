import { Link } from "react-router-dom";
import { useBucketList } from "../hooks/bucketlist";
import BucketListing from "../components/BucketListing";

export default function ViewBucketLists() {
  const { activities } = useBucketList();

  return (
    <div>
      <h1>Bucket List Page</h1>

      <Link to='/BucketList/add'>
        <button>Add a New Activity</button>
      </Link>

      <BucketListing activities={activities} />

    </div>
  )
}