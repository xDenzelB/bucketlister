import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProfileForm from '../components/ProfileForm';
import { useUser } from '../hooks/user';

export default function EditProfile() {
  const history = useHistory();
  const { profile, updatedProfile, isLoading } = useUser();

  const [loading, setLoading] = useState(false);

  if (!isLoading) return null;

  async function handleEdit(profile) {
    try {
      setLoading(true);
      await updatedProfile(profile);
      history.push('/profile');
    } catch (error) {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading....</p>;

  return (
    <ProfileForm
      formLabel='Edit Profile'
      name={profile?.name}
      email={profile?.email}
      dob={profile?.dob}
      bio={profile?.bio}
      onSubmit={handleEdit}
    />
  );
}