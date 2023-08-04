// reducer.js
const initialState = {
  message: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default reducer;
