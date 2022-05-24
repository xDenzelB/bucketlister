import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/user';

export default function AuthButton() {
  const { isLoggedIn, signOut } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <button onClick={signOut}>
          Sign Out
        </button>
      ) : (
          <Link to='/login'>
            <button>Sign In </button>
          </Link>
    )}
    </>
  )
}