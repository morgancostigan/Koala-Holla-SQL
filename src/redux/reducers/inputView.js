const inputView = (state = false , action) => {
    switch (action.type) {
    case 'SET_INPUT':
        return true;
    case 'SET_LIST':
        return false;
      default:
        return state;
    }
  };
  
  export default inputView;