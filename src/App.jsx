import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ViewProfile from "./views/ViewProfile";
import EditProfile from "./views/EditProfile";
import Auth from "./views/Auth";
import { UserProvider } from "./context/UserContext";
import { BucketListProvider } from "./context/BucketListContext";
import ViewBucketLists from "./views/ViewBucketLists";
import AddActivity from "./views/AddActivity";
import ViewBucketList from "./views/ViewBucketList";
import EditActivity from "./views/EditActivity";
import CopyActivities from "./views/CopyActivities";

export default function App() {
  return (

    <>
      <UserProvider>
        <BucketListProvider>

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
            <PrivateRoute exact={true} path='/bucketList'>
              <ViewBucketLists />
            </PrivateRoute>
            <PrivateRoute exact={true} path='/bucketList/add'>
              <AddActivity />
            </PrivateRoute>
            <PrivateRoute exact={true} path='/bucketList/:id'>
              <ViewBucketList />
            </PrivateRoute>
            <PrivateRoute exact={true} path='/bucketList/:id/edit'>
              <EditActivity />
            </PrivateRoute>
            <PrivateRoute exact={true} path='/bucketList/:id/copy'>
              <CopyActivities />
            </PrivateRoute>


        </Router>
        </BucketListProvider>
    </UserProvider>
    </>
  )
}
