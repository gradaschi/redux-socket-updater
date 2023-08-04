// store.js
import { createStore } from "redux";
import rootReducer from "./reducers"; // Você precisará criar os redutores no próximo passo

const store = createStore(rootReducer);

export default store;
