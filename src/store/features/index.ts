import { combineReducers } from "redux";
import userSlice from "./userSlice";
import homeSlice from "./homeSlice";
import hospitalSlice from "./hospitalInfoSlice";

const rootReducer = combineReducers({
  user: userSlice,
  home: homeSlice,
  hospital: hospitalSlice,
});
export default rootReducer;
