import {
  createStore
} from 'redux';

let initStore = {
  employees: [],
  open: false,
  searchQuery: ''
};
let reducer = (state, action) => {
  if (action.type === 'get-employees') {
    return {
      ...state,
      employees: action.employees
    };
  }
  if (action.type === 'add-employees') {
    return {
      ...state,
      employees: action.employees,
      open: false
    };
  }
  if (action.type === 'open-modal') {
    return {
      ...state,
      open: true
    };
  }
  if (action.type === 'query') {
    return {
      ...state,
      searchQuery: action.search
    };
  }
  return state; //always return a state
};

const store = createStore(
  reducer,
  initStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //lets you use redux developer tools
);
export default store;