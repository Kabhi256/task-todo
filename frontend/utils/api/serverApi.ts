import axios from "axios";

const base_url = "http://127.0.0.1:8000/api/"

export const api = axios.create({
    baseURL: base_url
})