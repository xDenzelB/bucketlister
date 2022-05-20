import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ViewProfile from "./views/ViewProfile";
import EditProfile from "./views/EditProfile";
import Auth from "./views/Auth";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return (

    <>
      <UserProvider>
        <Router>
          <Switch>
            <Route path='/login'></Route>
            <Auth />
          </Switch>
          <Route path='/register'></Route>
          <Auth isSigningUp />
          <PrivateRoute path='/profile/edit'>
            <EditProfile />
          </PrivateRoute>
          <PrivateRoute path='/profile'>
            <ViewProfile />
          </PrivateRoute>


        </Router>
    </UserProvider>
    </>
  )
}
