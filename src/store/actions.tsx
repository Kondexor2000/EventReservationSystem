export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SELECT_CITY = 'SELECT_CITY';
export const SELECT_EVENT = 'SELECT_EVENT';
export const SELECT_DATE = 'SELECT_DATE';

export const login = (user: string) => ({ type: LOGIN, user });
export const logout = () => ({ type: LOGOUT });
export const selectCategory = (category: string) => ({ type: SELECT_CATEGORY, category });
export const selectCity = (city: string) => ({ type: SELECT_CITY, city });
export const selectEvent = (event: string) => ({ type: SELECT_EVENT, event });
export const selectDate = (date: Date) => ({ type: SELECT_DATE, date });