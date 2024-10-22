import { apiClient } from "./config"

export const apiSignUp = async(payload) =>{
    return await  apiClient.post('/users/register',payload)
}