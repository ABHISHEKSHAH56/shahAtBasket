import { combineReducers } from "redux";
import lang from "./lang";
import main from "./main";

const appReducer = combineReducers({
   
    lang,
    main
})

export default appReducer