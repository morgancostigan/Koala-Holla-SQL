const inputView = (state = [], action) => {
    switch (action.type) {
    case 'SET_INPUT':
        return action.payload;
    case 'SET_LIST':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default inputView;