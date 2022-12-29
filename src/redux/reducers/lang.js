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
        case types.USER_DATA   : 
                    console.log("call toh hua hai from reducer **********\n ! ",action.payload,state.UserData)
                    return { ...state, UserData:action.payload }
        default:
            return {...state}
    }
}