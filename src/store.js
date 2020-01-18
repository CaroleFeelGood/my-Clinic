import {
  createStore
} from 'redux';

let initStore = {
  employees: [],
  open: false,
  searchQuery: ''
};
let reducer = (state, action) => {
  switch (action.type) {
    case 'set-employees':
      return {
        ...state,
        employees: action.employees
      };
    case 'add-employe':
      return {
        ...state,
        open: false,
          employees: [...state.employees, action.employe]

      };
    case 'open-modal':
      return {
        ...state,
        open: true
      };
    case 'query':
      return {
        ...state,
        searchQuery: action.search
      };
    default:
      return state; //always return a state
  }
};

const store = createStore(
  reducer,
  initStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //lets you use redux developer tools
);
export default store;