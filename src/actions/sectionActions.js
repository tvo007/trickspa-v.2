import axios from 'axios';
import {
  SECTIONS_GET_REQUEST,
  SECTIONS_GET_SUCCESS,
  SECTIONS_GET_FAIL,
  SECTION_GET_REQUEST,
  SECTION_GET_SUCCESS,
  SECTION_GET_FAIL,
} from '../constants/sectionConstants';
import api from '../utils/api';

export const getSections = () => async (dispatch, getState) => {
  let currentState = getState ();

  let previousState = currentState;

  if (
    //else if same then grab from local
    previousState.sectionList.sections !== currentState.sectionList.sections ||
    currentState.sectionList.sections.length === 0
  ) {
    try {
      dispatch ({
        type: SECTIONS_GET_REQUEST,
      });

      const {data} = await axios.get (`${api}/sections`);

      dispatch ({
        type: SECTIONS_GET_SUCCESS,
        payload: data,
      });

      localStorage.setItem (
        'sectionList',
        JSON.stringify (getState ().sectionList.sections) //LS model 3
      );
    } catch (error) {
      const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
      dispatch ({
        type: SECTIONS_GET_FAIL,
        payload: message,
      });
    }
  }
};

export const getSection = forumSlug => async (dispatch, getState) => {
  
    try {
      //if not the same reset state and then.....
      dispatch ({
        type: SECTION_GET_REQUEST,
      });

      const {data} = await axios.get (`${api}/sections/slug/${forumSlug}`);

      dispatch ({
        type: SECTION_GET_SUCCESS,
        payload: data,
      });

      localStorage.setItem (
        'sectionDetails',
        JSON.stringify (getState ().sectionDetails.section) //LS model 3
      );
    } catch (error) {
      const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
      dispatch ({
        type: SECTION_GET_FAIL,
        payload: message,
      });
    }
  
};
