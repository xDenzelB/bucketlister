import { Link } from 'react-router-dom';
import { useUser, useAuth } from '../hooks/user';
import { useBucketListCount } from '../hooks/bucketlist';
import AuthButton from './AuthButton';


export default function Header() {
  const { user, profile, isLoading } = useUser();
  const { isLoggedIn } = useAuth();
  const count = useBucketListCount();

  if (isLoggedIn && !isLoading) return null;

  return (
    <>
    <Link to='/'>
      Home
    </Link>
      <Link to='/bucketList'>
     {count} Activity{count !==1 && 's'}
      </Link>
      
      {isLoggedIn ? (
        <div>
          <span>{profile?.name || user.email}</span>
        </div>
      ) : (
          <span>Not signed in ):</span>
      )}
      <AuthButton />
    </>

  )
}