import {
  SECTIONS_GET_REQUEST,
  SECTIONS_GET_SUCCESS,
  SECTIONS_GET_FAIL,
  SECTION_GET_REQUEST,
  SECTION_GET_SUCCESS,
  SECTION_GET_FAIL,
  // SECTION_GET_RESET,
  SECTION_GET_LOCAL_STORAGE
} from '../constants/sectionConstants';

export const sectionListReducer = (state = {sections: []}, action) => {
  switch (action.type) {
    case SECTIONS_GET_REQUEST:
      return {loading: true, sections: []};
    case SECTIONS_GET_SUCCESS:
      return {loading: false, sections: action.payload};
    case SECTIONS_GET_FAIL:
      return {loading: false, sections: action.payload};
    default:
      return state;
  }
};

export const sectionReducer = (state = {section: {}}, action) => {
  switch (action.type) {
    case SECTION_GET_REQUEST:
      return {...state, loading: true};
    case SECTION_GET_SUCCESS:
      return {loading: false, section: action.payload};
    case SECTION_GET_FAIL:
      return {loading: false, error: action.payload};
    case SECTION_GET_LOCAL_STORAGE:
      return {loading: false, section: action.payload}
    default:
      return state;
  }
};
