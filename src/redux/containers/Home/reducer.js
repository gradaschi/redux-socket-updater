const initialState = {
  data: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HOME_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
