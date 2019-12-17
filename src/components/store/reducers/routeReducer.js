const initState = {};

const routeReducer = (state = initState, action) => {
  switch (action.type) {
  case 'UPLOAD_ROUTE_SUCCESS':
    console.log('upload route success');
    return state;
  case 'UPLOAD_ROUTE_ERROR':
    console.log('uplad route error');
    return state;
  default:
    return state;
  }
};

export default routeReducer;