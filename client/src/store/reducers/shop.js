import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  shop: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SHOPS_START:
      return {
        ...state,
        location: {
          ...state.location,
          coordinates: {
            ...state.location.coordinates
          }
        },
        loading: true
      };
    case actionTypes.FETCH_SHOPS_SUCCESS:
      return {
        ...state,
        location: {
          ...state.location,
          coordinates: {
            ...state.location.coordinates
          }
        },
        loading: false
      };
    case actionTypes.FETCH_SHOPS_FAIL:
      return {
        ...state,
        location: {
          ...state.location,
          coordinates: {
            ...state.location.coordinates
          }
        },
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
