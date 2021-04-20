import React, { useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import PropTypes from 'prop-types';
import CreatePostView from './CreatePostView';
import {getSection} from '../../actions/sectionActions';

const CreatePost = (props) => {
  const {forumSlug} = useParams ();
  const history = useHistory ();
  const dispatch = useDispatch ();

  const postCreateReducer = useSelector (state => state.postCreate);
  const {
    loading: createLoading,
    error: errorCreate,
    success: successCreate,
  } = postCreateReducer;

  const {section, loading: isSectionLoading} = useSelector (
    state => state.sectionDetails
  );

  useEffect (
    () => {
      // if (isEmpty) {
      // setIsEmpty (false);
      dispatch (getSection (forumSlug));
      // }
    },
    [dispatch, forumSlug]
  );

  useEffect (
    () => {
      if (successCreate) {
        history.push (`/forums/${forumSlug}`);
      }
    },
    [successCreate, forumSlug, dispatch, history]
  );

  return (
    <CreatePostView
      section={section}
      isSectionLoading={isSectionLoading}
      forumSlug={forumSlug}
      createLoading={createLoading}
      errorCreate={errorCreate}
      success={successCreate}
      history={history}
    />
  );
};

// CreatePost.propTypes = {};

export default CreatePost;
