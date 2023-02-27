import axios from "axios";

axios.defaults.baseURL = "https://blissfeed-drf.herokuapp.com/";
// axios.defaults.baseURL =
//   "https://8000-aspen92-blissfeeddrfapi-we62ggt0lvy.ws-eu88.gitpod.io";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
