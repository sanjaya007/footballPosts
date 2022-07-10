const errorReducer = (state = { message: null }, action) => {
  switch (action.type) {
    case "ERROR":
      return { ...state, message: action?.payload };
    case "CLEAR":
      return { ...state, message: null };
    default:
      return state;
  }
};

export default errorReducer;
