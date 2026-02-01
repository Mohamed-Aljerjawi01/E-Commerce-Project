import axios from "axios";
import { useAuthStore } from './../Store/MyStore';
import i18n from "../LanguageSettings/i18n";

const axiosAuthInstance = axios.create({
  baseURL: "https://knowledgeshop.runasp.net/api",
});

axiosAuthInstance.interceptors.request.use((config)=>{
  const accsessToken = useAuthStore.getState().accessToken;
  // console.log(accsessToken);
  
  config.headers["Accept-Language"]=i18n.language;
  if(accsessToken != null){
    config.headers["Authorization"]=`Bearer ${accsessToken}`;
  }
  
  return config;
});

export default axiosAuthInstance;