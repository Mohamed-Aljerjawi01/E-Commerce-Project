import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import en from "./en.json";
import ar from "./ar.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: localStorage.getItem('language'), // تمثل اللغة التي سيتم اعتمادها في ترجمة تلك البيانات والكلمات التي تمت كتابتها بداخل الدالة t
               // والتي تم استخدامها بداخل مكونات معينة وتتم الترجمة وفقا لملف الترجمة المكتوب بصيغة json
    fallbackLng: "en", // تمثل اللغة الاحتياطية التي سيتم تمثل اللغة الاحتياطية التي سيتم الرجوع إليها تلقائيًا في حال فشل تحميل اللغة الحالية أو عدم وجود ترجمة لها 
  });

export default i18n;

// ال key=>translation
// تكون قيمته عبارة عن بيانات على شكل صيغة json
// فيمكن كتابة هذه البيانات مباشرة كقيمة لذلك ال key
// أو يمكن كتابتها في ملف خاص بامتداد .json
// وذلك يعني أن الملف سيكون بصيغة json
// فكلا الطريقتين صحيحتيتن