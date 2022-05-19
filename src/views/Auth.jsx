import { Redirect, useHistory, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import UserForm from "../components/UserForm";
import { useAuth } from '../hooks/user';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const location = useLocation();
  const { isLoggedIn, signUp, signIn } = useAuth();

  const signUpOptions = {
    action: signUp,
    header: 'Welcome!!',
    label: 'Sign Up',
    message: <>Already have an account? <Link to='/login'>Sign In</Link></>
  };

  const signInOptions = {
    action: signIn,
    redirectedTo: location.state?.from?.pathname,
    header: 'Welcome Back!!',
    label: 'Sign In',
    message: <>Need an Account? <Link to='/register'>Sign Up</Link></>
  };

  const options = isSigningUp ? signUpOptions : signInOptions;

  async function handleSubmit(email, password) {
    await options.action(email, password);
    history.replace(options.redirectedTo);
  };

  if (isLoggedIn) return <Redirect to='/profile' />

  return (
    <section>
      <h2>{options.header}</h2>

      <UserForm 
        onSubmit={handleSubmit}
        label={options.label}
      />

      <p>
        {options.message}
      </p>
    </section>

  )
}