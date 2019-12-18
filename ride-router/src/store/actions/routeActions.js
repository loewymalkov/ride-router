export const newRoute = (route) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('routes').add({
      ...route,
      userFirstName: 'Mav',
      userLastName: 'Malkin',
      authorId: 123,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'UPLOAD_ROUTE_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'UPLOAD_ROUTE_ERROR' }, err);
    });
  };
};