import axios from "axios";
const baseAPI = process.env.VUE_APP_API_URL;

export function get(url, params = null) {
  return axios({ method: "GET", url: baseAPI + url, params }).catch(function (error) {
    return Promise.reject(error);
  });
}
