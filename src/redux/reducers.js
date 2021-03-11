import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../utils/history";
import appReducer from "../Containers/App/redux/reducer"
// add reducers here
export default combineReducers({
  router: connectRouter(history),
  appState: appReducer,
});
