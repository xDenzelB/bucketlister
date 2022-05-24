import { useState } from 'react';
import { useForm } from '../hooks/useForm';

export default function ProfileForm({
  name = '',
  email,
  dob = '',
  bio = '',
  onSubmit,
}) {
  const { formState, handleChange } = useForm({ name, email, bio, dob });
  const [saved, setSaved] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setSaved(true);
      await onSubmit(formState);
    } catch (error) {
      setSaved(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          value={formState.name}
          onChange={handleChange}
        />
      </section>
      <section>
        <label htmlFor='email'>Email</label>
        <p>{email}</p>
      </section>
      <section>
        <label htmlFor='name'>DOB (Date of Birth)</label>
        <input
          id='dob'
          name='dob'
          type='date'
          value={formState.dob}
          onChange={handleChange}
        />
      </section>
      <section>
        <label htmlFor='bio'>Bio</label>
        <textarea
          id='bio'
          name='bio'
          value={formState.bio}
          rows={4}
          onChange={handleChange}
        />
      </section>
      <button type='submit' disabled={saved}>
        {saved ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
}