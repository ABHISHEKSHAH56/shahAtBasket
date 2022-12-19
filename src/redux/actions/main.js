import axios from "axios";
import { apiPost, getItem, setItem } from "../../API/APIhelper";
import {  callTranslationAPI, getTheCampaignList, LANGUAGE, LAN_API_URL } from "../../API/urls"
import store from "../store"
import types from "../types"

const {dispatch} = store;

export async function getLan (data) {
    let trans={}
    console.log("Fetch the API & map ")
    await callTranslationAPI({ client: "Campaigns-App",locale:data}).then(
        (res)=>{
            const {data}=res
            console.log("Fetch the API & map ",res)
            data.map((item)=> trans[item.string_code]=item.string_value  )
            const item=JSON.stringify(trans)
            setItem('LangData',item)
            dispatch({
                type: types.LANGUAGE_UPDATE,
                payload: trans
            })
            console.log("Fetch the API & map ",trans)
            
            
        }      
        
    ).catch((err)=>{
        console.log(err.statusCode,err.msg)
        dispatch({ 
            type: types.LANGUAGE_ERROR,
            payload: err.msg || err.statusCode
        })

    })
    
}

export async function getTheTranslatedPage (initialRoute) {
    const data=await getItem('LangData')
    const result=JSON.parse(data)
    dispatch({
            type: types.LANGUAGE_UPDATE,
            payload: result
    }) 
    initialRoute()
    console.log("every time app open tranlated code extracted from local ",result)
    
}


export async function addTheUserKey (key,value) {
    const data=await getItem('UserDetails')
    if(data)
    {
        const result=JSON.parse(data)
        result[key]=value
        await setItem("UserDetails",JSON.stringify(result))
        dispatch({
            type:"UserData",
            payload:result
        })
        return true;

    }
    const result={}
    result[key]=value
    await setItem("UserDetails",JSON.stringify(result))
    dispatch({
        type:"UserData",
        payload:result
    })
    return true;
    
    
}

export async function getTheUserDetails () {
    const data=await getItem('UserDetails')
    const result=JSON.parse(data)
    dispatch({
            type: types.LANGUAGE_UPDATE,
            payload: result
    })
    console.log("every time app open fetch the all user details  from local ",result)
    
    
    
    
}

export const  CompaignList=async()=>{
    dispatch({
        type:types.CAMPAIGN_LOADING
    })
    const data=await getItem('selectedlng')
    await getTheCampaignList(data).then((res)=>{
        dispatch(
            {
                type:types.CAMPAIGN_DATA,
                payload:res.data[0].strapi.data
        })

    }).catch((err)=>{
        dispatch({
            type:types.CAMPAIGN_ERROR,
            payload:err

        })
        
    })

}


export const delay = ms => new Promise(res => setTimeout(res, ms));