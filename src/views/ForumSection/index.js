import React, { useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {getSection} from '../../actions/sectionActions';
import {getPostsBySection} from '../../actions/postActions';
import {useDispatch, useSelector} from 'react-redux';
// import PropTypes from 'prop-types';
import ForumSectionView from './ForumSectionView';
import {POST_CREATE_RESET} from '../../constants/postConstants';

const ForumSection = props => {
  // const {section: localSection} = JSON.parse (localStorage.getItem ('state')); //testing purposes

  const {forumSlug} = useParams ();
  const history = useHistory ();
  const dispatch = useDispatch ();

  // const [isEmpty, setIsEmpty] = useState (false);
  // const [isLoaded, setIsLoaded] = useState (false);

  //useEffect to get single section data here
  const {section, loading: isSectionLoading, error} = useSelector (
    state => state.sectionDetails
  );

  // const {posts, loading: isPostsLoading, error: postsError} = useSelector (
  //   state => state.posts
  // );

  const postCreateReducer = useSelector (state => state.postCreate);
  const {
    loading: createLoading,
    error: errorCreate,
    success: successCreate,
  } = postCreateReducer;

  // useEffect (
  //   () => {
  //     if (localSection.section.length !== 0) {
  //       setIsEmpty (false);
  //       console.log (localSection);
  //     } else if (localSection.section.length === 0) {
  //       setIsEmpty (true);
  //       console.log (localSection);
  //     }
  //   },
  //   [localSection]
  // );

  useEffect (
    () => {
      // if (isEmpty) {
      // setIsEmpty (false);
      dispatch (getSection (forumSlug));
      dispatch (getPostsBySection (forumSlug));
      // }
    },
    [dispatch, forumSlug]
  );

  useEffect (
    () => {
      if (successCreate) {
        dispatch ({type: POST_CREATE_RESET});
        dispatch (getSection (forumSlug));
        // setIsEmpty (false);
      }
    },
    [successCreate, dispatch, forumSlug]
  );
  //trigger rerender when post is successfully created

  //add post here
  //get section id pass off to createPost dispatch
  //add a form/seperate route to create a post

  return (
    <ForumSectionView
      section={section}
      isSectionLoading={isSectionLoading}
      error={error}
      history={history}
      createLoading={createLoading}
      errorCreate={errorCreate}
      successCreate={successCreate}
      forumSlug={forumSlug}
    />
  );
};

// ForumSection.propTypes = {};

export default ForumSection;
