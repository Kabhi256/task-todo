import axios from "axios";

const base_url = "http://127.0.0.1:8000/api/"

export const api = axios.create({
    baseURL: base_url,
    headers:{
        "Content-Type": "application/json",
    },
    validateStatus: function (status) {
    return status >= 200 && status < 300 || status === 204; // Accept 204 as valid
  },
    // validateStatus: ()=>true,
});

// api.interceptors.response.use(
//     (response) => {
//         if (response.status === 204) {
//             console.log("API Response:", response);
//             return response;
//         }
//         return response;
//     },
//     (error: any) => {
//         console.error("API Error:", error.response?.data);
//         return Promise.reject(error);
//     }
// );