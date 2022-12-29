import axios from "axios";
import { serverApi } from '../constants/constants'

axios.defaults.baseURL = serverApi
const headers =
{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

export const login = async (body) => {
   return await axios.post('auth/login/', body)
}

export const register = async (body) => {
   return await axios.post('auth/register/', body)
}