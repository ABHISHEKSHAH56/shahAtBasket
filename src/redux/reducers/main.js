import types from "../types"
let init_state = {
    CampaignData:null,
    CampaignError:null,
    CampaignLoader:true
}
export default function (state = init_state, action) {
    switch (action.type) {
        case types.CAMPAIGN_LOADING: return {...state,CampaignLoader:true}
        case types.CAMPAIGN_DATA: return { 
                                    ...state, 
                                    CampaignData:action.payload,
                                    CampaignLoader:false
                                }
        case types.CAMPAIGN_ERROR: return { 
                                    ...state,
                                    CampaignError:action.payload,
                                    CAMPAIGN_LOADING:false 
                                }
        
        default:
            return {...state}
    }
}