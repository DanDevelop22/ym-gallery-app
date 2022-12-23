import axios from "axios";
import { serverApi } from '../constants/constants'
import PropTypes from 'prop-types';

axios.defaults.baseURL = serverApi

export const login = async (body) => {
    await axios.post('/auth/login/', body)
}

export const register = async (body) => {
    await axios.post('/auth/register/', body)
}