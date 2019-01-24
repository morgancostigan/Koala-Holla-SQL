const koalaList = (state = [], action) => {
    switch (action.type) {
      case 'SET_KOALA_LIST':
        return action.payload;
      default:
        return state;
    }
  };
  

  export default koalaList;