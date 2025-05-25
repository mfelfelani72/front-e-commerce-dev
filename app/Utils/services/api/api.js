import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api",

  headers: {
    "Accept-Version": 1,
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json; charset=utf-8",
  },

  withCredentials: true,
  withXSRFToken: true,
});
