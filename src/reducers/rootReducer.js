import { combineReducers } from "redux";
import articlesReducer from './articlesReducer'
import errorReducer from "./errorReducer";
import commentsReducer from "./commentsReducer";
import requestingReducer from "./requestingReducer";
import searchReducer from "./searchReducer";
import userReducer from './userReducer'
 
const rootReducer = combineReducers({
  articles: articlesReducer,
  user: userReducer,
  search: searchReducer,
  error: errorReducer,
  requesting: requestingReducer,
  comments: commentsReducer
});
 
export default rootReducer;
