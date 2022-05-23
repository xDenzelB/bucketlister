import { act } from "react-dom/test-utils";

export default function BucketListDetail({ activities, isOwner }) {
  const { title, activity, name, created } = activities;

  const date = new Date(created).toLocaleDateString();

  return (
    <div>
      <h2>{title}</h2>
      <p>Created by: {isOwner ? 'you' : name} on {date}</p>
      <p>{activity}</p>
    </div>
  )
}