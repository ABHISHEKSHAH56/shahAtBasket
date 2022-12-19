import { apiGet, apiPost } from "./APIhelper";
export const Generateotp = async(data)=> await apiPost('/apis/v1/otps/generate_otp',data);
export const getTheCampaignList=async(data)=> await apiGet(`/apis/v1/campaigns/list?locale=${data=="ka"? "kn-IN":"en"}`)
export const callTranslationAPI=async(data)=>await apiPost("/apis/v1/strapi/language",data)