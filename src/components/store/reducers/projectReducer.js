const initState = {};

const routeReducer = (state = initState, action) => {
  switch (action.type) {
  case 'CREATE_ROUTE_SUCCESS':
    console.log('create project success');
    return state;
  case 'CREATE_ROUTE_ERROR':
    console.log('create project error');
    return state;
  default:
    return state;
  }
};

export default routeReducer;