import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../API/axiosInstance";

export function useAxiosQuery(queryKey, url, params={}, instance = axiosInstance) {
    const getData = async () => {
        const response = await instance.get(url,{params});
        console.log(response);
        return response.data;
    }

    const query = useQuery({
        queryKey: queryKey,
        queryFn: getData,
        staleTime: 1 * 60 * 1000
    })

    return query;
}

// تم إعطاء الهوك useAxiosQuery
// باراميتر ثالث باسم instance
// ويمثل ال instance
// المستخدم لذلك الطلب وذلك لأن الطلب الذي قمنا به في الملف useQuery.js
// وبالتحديد في useCartQuery
// يتطلب instance
// محتلف عن الطلبات التي تمت على useProductDetailsQuery, useProductsQuery, useCategoriesQuery
// وتم إعطاؤه قيمة أفتراضية وهي axiosInstance
// فلا داعي عند استخدمامنا لل axiosInstance
// لكتابة الباراميتر الثالث في تلك الطلبات 
//  أما في حالة كان ال instance
// المراد استخدامه مختلف أي ك axiosAuthInstance
// فعندها يجب كتابة الباراميتر الثالث لتلك الطلبات
// وكما فإنه عندما أريد أن أعطي أي باراميتر في أي فنكشن قيمة افتراضية بأقوم بوضعه في اخر الباراميترز
// كما فعلنا في الباراميتر instance 
// وقيمة الافتراضية axiosInstance