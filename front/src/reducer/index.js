import { combineReducers} from 'redux' ;
import authReducer from "./authReducer";
import addReducer from "./addReducer";
import getReducer from "./getReducer";

export default combineReducers({authReducer,addReducer,getReducer})