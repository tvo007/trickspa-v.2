import React from 'react';

import {Switch, Redirect} from 'react-router-dom';
import {RouteWithLayout} from './components';
import {Main, LandingLayout} from './layouts';

import {
  Dashboard,
  Error404,
  Landing,
  Forums,
  ForumSection,
  Post,
  Profile,
  MyProfile,
  // // Dummy,
  CreatePost,
  Settings,
} from './views';

const Routes = props => {
  return (
    <Switch>
      <Redirect exact from="/" to="/Forums" />
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
      {/* 
         */}

      {/* <RouteWithLayout component={Auth} exact layout={Main} path="/auth" /> */}
      <RouteWithLayout
        component={Landing}
        exact
        layout={LandingLayout}
        path="/landing"
      />
      {/**PRIVATE ROUTE IN PROGRESS */}
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
      {/**create post page */}
      <RouteWithLayout
        component={Post}
        exact
        layout={Main}
        path="/forums/:forumSlug/:postSlug"
      />

      <RouteWithLayout component={Error404} exact layout={Main} path="/404" />
      {/* <RouteWithLayout
          component={Dummy}
          exact
          layout={Main}
          path="/Dummy"
        /> */}
    </Switch>
  );
};

Routes.propTypes = {};

export default Routes;
