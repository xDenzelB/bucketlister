import { useState } from 'react';
import { useForm } from '../hooks/useForm';

export default function UserForm({ className= '', label, onSubmit }) {
  const { formState, handleChange } = useForm({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = formState;
    
    try {
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      setLoading(false);
      
    }
  }
  return (
    <form className={className} onSubmit={handleSubmit}>
      <section>
        <input
          id='email'
          type='email'
          name='email'
          required
          value={formState.email}
          onChange={handleChange}
        />
      </section>
      <section>
        <input
          id='password'
          type='password'
          name='password'
          required
          value={formState.password}
          onChange={handleChange}
        />
      </section>
      <button type='submit' disabled={loading}>
        {loading ? 'Loading...' : label}
      </button>

    </form>
  );
}
