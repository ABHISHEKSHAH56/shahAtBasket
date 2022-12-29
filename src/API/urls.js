import { apiGet, apiPost, apiPut } from "./APIhelper";
import { getALLproductwithcategoreyQuery } from "./query";
export const Generateotp = async(data)=> await apiPost('/apis/v1/otps/generate_otp',data);
export const getTheCampaignList=async(data)=> await apiGet(`/apis/v1/campaigns/list?locale=${data=="ka"? "kn-IN":"en"}`)
export const callTranslationAPI=async(data)=>await apiGet(`/api/translations?locale=${data=="hi"? "hi":"en"}`)
export const findtheUser=async(data)=>await  apiGet(`/api/user-details/${data}`)
export const updatetheUSer=async(data,id)=>await apiPut(`/api/user-details/${id}`,data)
export const createtheuser=async(data)=>await apiPost(`/api/user-details`,data)

export const getTheProduct=async()=>await apiPost('/graphql',getALLproductwithcategoreyQuery)

