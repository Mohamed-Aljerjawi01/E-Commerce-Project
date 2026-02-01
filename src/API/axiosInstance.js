import axios from "axios";
import i18n from "../LanguageSettings/i18n";

const axiosInstance = axios.create({
  baseURL: "https://knowledgeshop.runasp.net/api",
});

axiosInstance.interceptors.request.use((config)=>{
  config.headers["Accept-Language"]=i18n.language
  // console.log(config);
  
  return config;
});

export default axiosInstance;

// هنا قمنا باستخدام طريقة axiosInstance
// مع استخدام interceptors
// لاضافة هيدر لكل الريكوستات بدل من اضافتها في كل ريكوست لوحده
// ف ال API
// الموجود في الأعلى كقيمة لل baseURL
// يقوم بعرض بياناته باللغتين الانجليزية او العربية
// لذلك تم تصميمه ليأخذ هيدر باسم Accept-Language
// لتحديد اللغة التي يريدها المستخدم
// فقمنا بإضافة هذا الهيدر لذلك ال API
// ليتم إرساله في كل ريكوست
// يتم تنفيذه على هذا ال API
// ويمكن تغيير قيمة ذلك الهيدر للقيمة ar
// ليتم عرض البيانات باللغة العربية

