import axios from "axios";

// Test Dev Base Url
axios.defaults.baseURL =
  "https://8000-aspen92-blissfeeddrfapi-we62ggt0lvy.ws-eu88.gitpod.io";

// This code sets default configurations for the Axios library used for making HTTP requests
// axios.defaults.baseURL = "https://blissfeed-drf.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
