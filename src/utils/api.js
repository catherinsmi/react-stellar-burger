import { checkResponse } from "./check-response";
import { URL } from "../constants/app.consts";

export const refreshToken = () => {
    return fetch(`${URL}/auth/token`, {
        method: 'POST',
        headers:  {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken')
        })
    }).then(checkResponse)
};

export const fetchWithRefresh = async (url, options) => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res)
    } catch(error) {
        if(error.message === "jwt expired"){
            const refreshData = await refreshToken();
            if(!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            localStorage.setItem("accessToken", refreshData.accessToken);
            options.headers.authorization = refreshData.accessToken
            const res = await fetch(url, options);
            return await checkResponse(res)
        } else {
            return Promise.reject(error);
        }
    }
}