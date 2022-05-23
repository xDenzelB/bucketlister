import BucketListItem from "./BucketListItem";

export default function BucketListing({ activities }) {
  if (!activities) return null;

  return (
    <ul>
      <li>
        <span>Date</span>
        <span>Title</span>
        <span>Owner</span>
        <span></span>
      </li>

      {activities.map(activity => {
        return (
          <BucketListItem
          key = { activity.id }
            activity={activity}
          />
        )
      })}
    </ul>
  )
}