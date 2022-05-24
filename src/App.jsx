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
import Home from "./views/Home";
import Header from "./components/Header";

export default function App() {
  return (

    <>
      <UserProvider>
        <BucketListProvider>

          <Router>
            <Header />
          <Switch>
              <Route path='/login'>
                
            <Auth />
            </Route>
              <Route path='/register'>
                
          <Auth isSigningUp />
          </Route>
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
            <Route path='/'>
              <Home />
            </Route>
          </Switch>


        </Router>
        </BucketListProvider>
    </UserProvider>
    </>
  )
}
