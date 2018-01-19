import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  postcode: '',
  lat: '',
  lng: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_FORM_INPUT_POSTCODE_CHANGE:
      return {
        ...state,
        postcode: action.value
      };
    case actionTypes.LOOKUP_POSTCODE_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.LOOKUP_POSTCODE_SUCCESS:
      return {
        ...state,
        lat: action.latitude,
        lng: action.longitude,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
