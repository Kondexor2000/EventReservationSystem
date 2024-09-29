import { LOGIN, LOGOUT, SELECT_CATEGORY, SELECT_CITY, SELECT_EVENT, SELECT_DATE } from './actions';

const initialState = {
  user: null,
  category: null,
  city: null,
  event: null,
  date: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.user };
    case LOGOUT:
      return { ...state, user: null, category: null, city: null, event: null, date: null };
    case SELECT_CATEGORY:
      return { ...state, category: action.category };
    case SELECT_CITY:
      return { ...state, city: action.city };
    case SELECT_EVENT:
      return { ...state, event: action.event };
    case SELECT_DATE:
      return { ...state, date: action.date };
    default:
      return state;
  }
};

export default reducer;