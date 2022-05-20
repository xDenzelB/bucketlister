
export default function ProfileItem({ profile: { name, email, bio, dob } }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>DOB : {dob}</p>
      <blockquote>{bio}</blockquote>
    </div>
  );
}