import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../redux/store';
import types from '../redux/types';
import { API_BASE, OBAdvisorToken } from '../credentianal';


const { dispatch, getState } = store;
console.log(dispatch,getState,"testing")
const API = axios.create({ baseURL: API_BASE})


export async function getHeaders() {
    let userData = await AsyncStorage.getItem('userData');
        return {
            'Accept': 'application/json',
            'token': OBAdvisorToken,
            'Content-Type': 'application/json'
        };
    // }
    // return {};
}


export async function apiReq(   endPoint,    data,    method,    headers,    requestOptions = {}) {

    return new Promise(async (res, rej) => {
        const getTokenHeader = await getHeaders();
        headers = {
            ...getTokenHeader,
            // ...headers
        };

        if (method === 'get' || method === 'delete') {
            data = {
                ...requestOptions,
                ...data,
                headers
            };
        }
        console.log(getTokenHeader,"=================",method)
        console.log(endPoint,"========end=========",data)
        API[method](endPoint, data, { getTokenHeader })
            .then(result => {
                const { data } = result;
                if (data.status === false) {
                    return rej(data);
                }
                
                return res(data);
            })
            .catch(error => {
                console.log(error,"error here")
                // console.log(error.response.status, 'the error respne')
                // if (error.response && error.response.status === 401) {
                    
                //     dispatch({
                //         type: types.CLEAR_REDUX_STATE,
                //         payload: {}
                //     });
                //     dispatch({
                //         type: types.NO_INTERNET,
                //         payload: { internetConnection: true },
                //     });


                // }
                //console.log({ statusCode: error.response.status || 100,msg: error.response.data.message || "Network Error"})
                
                return rej({ statusCode: error.response?.status ?? 503,msg: error.response?.data?.error ?? "Service Temporarily Unavailable",error:error.response})
            });
    });
}

export function apiPost(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
    return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'put', headers);
}

export function setItem(key, data) {
    data = JSON.stringify(data);
    return AsyncStorage.setItem(key, data);
}

export function getItem(key) {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key).then(data => {
            resolve(JSON.parse(data));
        });
    });
}
export function removeItem(key) {
    return AsyncStorage.removeItem(key);
}

