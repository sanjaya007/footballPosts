const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POSTS":
      return [...state, action.payload];

    case "GET_POSTS":
      return action.payload;

    default:
      return state;
  }
};

export default postsReducer;
