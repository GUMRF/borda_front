import { useSelector } from "react-redux";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_BASE_URL = `${BACKEND_URL}/api/v1/`;

export default API_BASE_URL;



export const prepareHeaders = () => {
    var headers = new Headers();
    
    const token = localStorage.getItem('token')
    headers.set("Authorization", `Bearer ${token}`);
    return headers;
};

