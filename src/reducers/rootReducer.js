import { combineReducers } from "redux";
import articlesReducer from './articlesReducer'
import errorReducer from "./errorReducer";
import searchReducer from "./searchReducer";
import userReducer from './userReducer'
 
const rootReducer = combineReducers({
  articles: articlesReducer,
  user: userReducer,
  search: searchReducer,
  error: errorReducer
});
 
export default rootReducer;
