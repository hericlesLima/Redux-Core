const reducer = (state = 0, action) => {
  switch (action.type) {
    case "DEPOSIT":
      console.log(action.payload)
      return state + action.payload;

    case "WITHDRAW":
      console.log(action.payload)
      return state - action.payload;
      
    default:
      return state;
  }
};

export default reducer;
