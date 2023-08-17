import { combineReducers } from "redux";
import homeReducer from "./containers/Home/reducer";
import userReducer from "./containers/User/reducer";

const rootReducer = combineReducers({
  home: homeReducer,
  user: userReducer,
});

export default rootReducer;
