import { combineReducers } from "redux";
import authReducer from "./authReducer";
import surveryReducer from "./surveyReducer";

export default combineReducers({
  auth: authReducer,
  survey: surveryReducer,
});
