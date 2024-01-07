import {combineReducers, legacy_createStore as createStore} from "redux"; 
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import siteBarReducer from "./siteBar-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage:dialogsReducer,
    siteBar:siteBarReducer
})

let store = createStore(reducers);


export default store;