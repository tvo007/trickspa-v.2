import React from 'react';

import {Switch, Redirect} from 'react-router-dom';
import {RouteWithLayout} from './components';
import {Main, LandingLayout} from './layouts';

import {
  Dashboard,
  Error404,
  Forums,
  ForumSection,
  Post,
  Profile,
  MyProfile,
  CreatePost,
  Settings,
  Login,
  Register,
} from './views';

const Routes = props => {
  return (
    <Switch>
      <Redirect exact from="/" to="/Forums" />
      <RouteWithLayout
        component={Login}
        exact
        layout={LandingLayout}
        path="/login"
      />

      <RouteWithLayout
        component={Register}
        exact
        layout={LandingLayout}
        path="/register"
      />

      <RouteWithLayout
        component={Dashboard}
        exact
        layout={Main}
        path="/dashboard"
      />

      <RouteWithLayout
        component={Settings}
        exact
        layout={Main}
        path="/settings"
      />
      <RouteWithLayout
        component={MyProfile}
        exact
        layout={Main}
        path="/profile/me"
      />
      <RouteWithLayout
        component={Profile}
        exact
        layout={Main}
        path="/profile/:profileSlug"
      />

      {/* <RouteWithLayout
        component={Landing}
        exact
        layout={LandingLayout}
        path="/landing"
      /> */}

      <RouteWithLayout component={Forums} exact layout={Main} path="/Forums" />
      <RouteWithLayout
        component={ForumSection}
        exact
        layout={Main}
        path="/forums/:forumSlug"
      />
      <RouteWithLayout
        component={CreatePost}
        exact
        layout={Main}
        path="/forums/:forumSlug/createpost"
      />

      <RouteWithLayout
        component={Post}
        exact
        layout={Main}
        path="/forums/:forumSlug/:postSlug"
      />

      <RouteWithLayout component={Error404} exact layout={Main} path="/404" />

    </Switch>
  );
};

Routes.propTypes = {};

export default Routes;
