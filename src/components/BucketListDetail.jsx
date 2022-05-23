import { act } from "react-dom/test-utils";

export default function BucketListDetail({ activity, isOwner }) {
  const { title, activity, name, created } = activity;

  const date = new Date(created).toLocaleDateString();

  return (
    <div>
      <h2>{title}</h2>
      <p>Created by: {isOwner ? 'you' : name} on {date}</p>
      <p>{activity}</p>
    </div>
  )
}