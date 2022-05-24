import { Link } from "react-router-dom";
import ProfileItem from "../components/ProfileItem";
import ProfileForm from "../components/ProfileForm";
import { useUser } from "../hooks/user";

export default function ViewProfile() {
  const { user, profile, isLoading, newProfile } = useUser();

  if (!isLoading) return null;

  const hasProfile = user && profile;

  async function handleCreate(profile) {
    await newProfile(profile);
  };

  return hasProfile
    ? <ShowProfile profile={profile} />
    : <CreateProfile email={user.email} onCreate={handleCreate}
    />
}

function CreateProfile({ email, onCreate }) {
  return (
    <div>
      <p>You need to create a profile to get started!</p>

      <ProfileForm
        formLabel="Create Profile"
        onSubmit={onCreate}
        email={email}
      />
    </div>
  );
}

function ShowProfile({ profile }) {
  return (
    <div>
      <Link to='/profile/edit'>
        <button>Edit Profile!</button>
      </Link>
      <ProfileItem profile={profile} />
    </div>
  )
}