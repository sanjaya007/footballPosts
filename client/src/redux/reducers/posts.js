const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POSTS":
      return [action.payload, ...state];

    case "GET_POSTS":
      return action.payload;

    case "UPDATE_POSTS":
      return state.map((data) =>
        data._id === action.payload._id ? action.payload : data
      );

    case "DELETE_POSTS":
      return state.filter((post) => post._id !== action.payload);

    default:
      return state;
  }
};

export default postsReducer;
