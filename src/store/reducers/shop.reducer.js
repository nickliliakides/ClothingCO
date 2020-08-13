import { UPDATE_COLLECTIONS } from '../actions/types';

const initialState = {
  collections: null,
};

const shopReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
