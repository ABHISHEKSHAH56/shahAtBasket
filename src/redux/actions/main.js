import axios from "axios";
import { apiPost, getItem, setItem } from "../../API/APIhelper";
import {  callTranslationAPI, getTheCampaignList, LANGUAGE, LAN_API_URL } from "../../API/urls"
import store from "../store"
import types from "../types"

const {dispatch} = store;

export async function getLan (data) {
    let trans={}
    console.log("Fetch the API & map ")
    await callTranslationAPI(data).then(
        (res)=>{
            const {data}=res
            console.log("Fetch the API & map ",res)
            data.map((item)=> trans[item.attributes.string_code]=item.attributes.string_value  )
            // const item=JSON.stringify(trans)
            setItem('LangData',trans)
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
    dispatch({
            type: types.LANGUAGE_UPDATE,
            payload: data
    }) 
    initialRoute()
    console.log("every time app open tranlated code extracted from local ",data)
    
}




export async function getTheUserDetails () {
    const data=await getItem('UserDetails')
    dispatch({
            type: types.USER_DATA,
            payload: data
    })
    console.log("every time app open fetch the all user details  from local ",data)
    
    
    
    
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