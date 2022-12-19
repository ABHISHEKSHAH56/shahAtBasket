import types from "../types"
let init_state = {
    LangData:{},
    LangError:null,
    UserData:{},
}
export default function (state = init_state, action) {
    switch (action.type) {
        case types.LANGUAGE_UPDATE: return { ...state, LangData:action.payload }
        case types.LANGUAGE_ERROR: return { ...state, LangError:action.payload }
        case "UserData": return { ...state, UserData:action.payload }
        default:
            return {...state}
    }
}