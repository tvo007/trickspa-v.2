/* eslint-disable linebreak-style */
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import rootReducer from './reducers';
import {
  postListReducer,
  postDetailsReducer,
  postCreateReducer,
} from './reducers/postReducers';
import {sectionListReducer, sectionReducer} from './reducers/sectionReducer';
import {
  commentsByPostReducer,
  commentCreateReducer,
} from './reducers/commentReducers';
import {
  userLoginReducer,
  userLogoutReducer,
  userRegisterReducer
} from './reducers/userReducers'
import {
  alertReducer
} from './reducers/alertReducers'
import {
  userProfileReducer,
  updateProfileReducer,
} from './reducers/profileReducers'
import {
  defaultAvatarsReducer
} from './reducers/defaultAvatarReducers'
//import setAuthToken from './utils/setAuthToken';

const reducer = combineReducers ({
  posts: postListReducer,
  postDetails: postDetailsReducer,
  postCreate: postCreateReducer,
  sectionList: sectionListReducer,
  sectionDetails: sectionReducer,
  commentsByPost: commentsByPostReducer,
  commentCreate: commentCreateReducer,
  userLogin: userLoginReducer,
  logout: userLogoutReducer,
  userRegister: userRegisterReducer,
  alert: alertReducer,
  userProfile: userProfileReducer,
  updateProfile: updateProfileReducer,
  defaultAvatars: defaultAvatarsReducer,
});

const sectionsFromLocalStorage = localStorage.getItem ('sections')
  ? JSON.parse (localStorage.getItem ('sections'))
  : []; //gets sections from LS, thunks update LS on dispatch

const sectionFromLocalStorage = localStorage.getItem ('section')
  ? JSON.parse (localStorage.getItem ('section'))
  : {}; //gets sections from LS, thunks update LS on dispatch

const initialState = {
  sectionList: {sections: sectionsFromLocalStorage},
  // userLogin: { userInfo: userInfoFromStorage },
  sectionDetails: {
    section: {sectionFromLocalStorage},
  },
};

const middleware = [thunk];

const store = createStore (
  // rootReducer,

  reducer,
  // persistedState,
  initialState,
  composeWithDevTools (applyMiddleware (...middleware))
);

export default store;