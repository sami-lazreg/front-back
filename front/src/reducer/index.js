import { combineReducers} from 'redux' ;
import authReducer from "./authReducer";
import addReducer from "./addReducer"

export default combineReducers({authReducer,addReducer})