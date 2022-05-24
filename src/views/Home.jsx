import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/user';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <h1>Welcome to BucketLister! Where you get to see other ideas for activities!!</h1>
      <p>
        If you want to add an activity, 
        <Link to='/bucketList'>Click Here!</Link>

      </p>

      {isLoggedIn ? (
        <Link to='/profile'>View Profile</Link>
      ) : (
          <div>
            <Link to='/register'>Create an Account!</Link> 
            <Link to='/login'>Sign In!</Link>
          </div>
    )}
    </>
  )
}